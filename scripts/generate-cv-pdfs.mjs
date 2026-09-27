#!/usr/bin/env node
// Regenerates public/cv.pdf and public/cv-pt.pdf straight from the live
// /cv and /cv/pt pages, so the PDF is always a byproduct of one page
// component instead of a hand-edited binary that drifts from the site.
//
// The pages render two variants of the same content:
//   - normal view: short "city, state" address (what's publicly indexed)
//   - `?src=pdf`:   full street address (what actually goes on a resume
//                   handed to a recruiter)
// and a dedicated `@media print` stylesheet (see the ".cv-content" rules
// in app/globals.css) turns the card-based web layout into the compact,
// boxed-header, justified-text format of a traditional printed resume.
//
// Usage: npm run cv:pdf

import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import { setTimeout as sleep } from 'node:timers/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');
const port = process.env.CV_PDF_PORT || '4321';
const baseUrl = `http://127.0.0.1:${port}`;

const targets = [
  { path: '/cv?src=pdf', out: 'public/cv.pdf' },
  { path: '/cv/pt?src=pdf', out: 'public/cv-pt.pdf' },
];

async function waitForServer(url, timeoutMs = 30_000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(url);
      if (res.ok) return;
    } catch {
      // server not up yet, keep polling
    }
    await sleep(500);
  }
  throw new Error(`Timed out waiting for ${url}`);
}

async function main() {
  console.log(`Starting Next.js dev server on port ${port}...`);
  const server = spawn(
    'node_modules/.bin/next',
    ['dev', '-p', port],
    { cwd: rootDir, stdio: 'ignore' }
  );

  const cleanup = () => {
    server.kill('SIGTERM');
  };
  process.on('exit', cleanup);

  try {
    await waitForServer(`${baseUrl}/cv`);
    console.log('Server ready. Generating PDFs...');

    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.emulateMedia({ media: 'print' });

    for (const target of targets) {
      const url = `${baseUrl}${target.path}`;
      const outPath = path.join(rootDir, target.out);
      await page.goto(url, { waitUntil: 'networkidle' });
      await page.pdf({
        path: outPath,
        format: 'A4',
        printBackground: true,
        margin: { top: '20px', bottom: '20px', left: '20px', right: '20px' },
      });
      console.log(`  wrote ${target.out}`);
    }

    await browser.close();
    console.log('Done.');
  } finally {
    cleanup();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
