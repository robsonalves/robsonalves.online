---
title: "How I set up my website with Next.js"
date: "2025-10-30"
description: "Learn how to create a personal website using Next.js, TypeScript and Tailwind CSS."
tags: ["nextjs", "typescript", "tailwind"]
publishDate: "2025-10-30T00:00:00.000Z"
---

# How I set up my website with Next.js

This is an example post in English. You can edit this file directly on GitHub or locally.

## Why Next.js?

Next.js is an excellent choice for personal websites because:

- **Performance**: SSG (Static Site Generation) for super fast pages
- **SEO-friendly**: Server-side rendering when needed
- **Developer Experience**: Hot reload, TypeScript, etc.
- **Easy deploy**: Vercel, Netlify, Cloudflare Pages

## Project structure

```
robsonalves.online/
├── app/              # Pages using App Router
├── components/       # Reusable React components
├── content/          # Markdown content (blog, CV)
│   ├── blog/
│   │   ├── pt/      # Portuguese posts
│   │   └── en/      # English posts
└── public/           # Static files
```

## GitOps workflow

To publish a new post:

1. Create a `.md` file in `content/blog/en/`
2. Commit and push to GitHub
3. Automatic deploy via GitHub Actions
4. Website updated in ~2 minutes

That's it!

## Next steps

- [ ] Add RSS feed
- [ ] Implement post search
- [ ] Analytics (Plausible or similar)
- [ ] Newsletter (optional)

---

**Written on:** October 30th, 2025
**Updated on:** October 30th, 2025
