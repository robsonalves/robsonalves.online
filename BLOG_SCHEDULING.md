# Blog Post Scheduling System

## Overview

The blog now supports scheduled publishing! You can create posts in advance and they will only appear on the website after their scheduled publish date.

## How It Works

### Publishing Behavior

- **Without `publishDate`**: Posts appear immediately on the site
- **With `publishDate`**: Posts only appear when the current date/time is >= the `publishDate`

### Example Post Frontmatter

```markdown
---
title: "My Scheduled Post"
date: "2025-11-15"
description: "This post will only appear after November 15, 2025"
tags: ["devops", "aws"]
readTime: "5 min"
author: "Robson Alves"
publishDate: "2025-11-15T10:00:00.000Z"
---
```

## Date Format

The `publishDate` field should be in ISO 8601 format:

```
YYYY-MM-DDTHH:mm:ss.sssZ
```

**Examples:**
- `2025-11-15T10:00:00.000Z` - November 15, 2025 at 10:00 AM UTC
- `2025-12-25T00:00:00.000Z` - December 25, 2025 at midnight UTC
- `2026-01-01T12:30:00.000Z` - January 1, 2026 at 12:30 PM UTC

## Creating Scheduled Posts

### Option 1: Manual Creation

1. Create your markdown file in `content/blog/en/` or `content/blog/pt/`
2. Add the `publishDate` field to the frontmatter
3. Set the date/time when you want the post to go live
4. Commit and push to GitHub

### Option 2: Using blog-agent

The blog-agent tool can automatically generate posts with proper scheduling:

```bash
# Example: Create a post scheduled for next week
blog-agent create --title "My Post" --publishDate "2025-11-15T10:00:00.000Z"
```

## How the Filtering Works

### In the Blog List Page (`/blog`)

The `getAllPosts()` function filters posts based on their `publishDate`:

```typescript
.filter((post) => {
  // If no publishDate is set, show the post immediately
  if (!post.publishDate) {
    return true;
  }
  // Only show posts where publishDate is in the past or today
  const publishDate = new Date(post.publishDate);
  const now = new Date();
  return publishDate <= now;
});
```

### In Individual Post Pages (`/blog/[slug]`)

The `getPostBySlug()` function also checks the `publishDate`:

```typescript
// Check if post should be published
if (post.publishDate) {
  const publishDate = new Date(post.publishDate);
  const now = new Date();

  // If publish date is in the future, don't show the post
  if (publishDate > now) {
    return null; // Returns 404
  }
}
```

## Use Cases

### Scenario 1: Batch Content Creation

Create multiple posts in one session and schedule them to appear over time:

```markdown
# Post 1
publishDate: "2025-11-01T10:00:00.000Z"

# Post 2
publishDate: "2025-11-08T10:00:00.000Z"

# Post 3
publishDate: "2025-11-15T10:00:00.000Z"
```

### Scenario 2: Launch Coordination

Schedule a post to go live at the same time as a product launch or announcement.

### Scenario 3: Time Zone Optimization

Schedule posts to go live at optimal times for your audience:

```markdown
# US Morning (9 AM EST = 2 PM UTC)
publishDate: "2025-11-15T14:00:00.000Z"
```

## Important Notes

⚠️ **Static Site Generation (SSG)**:
- Next.js builds static pages at build time
- The site needs to be rebuilt for scheduled posts to appear
- With Vercel, you have multiple options for automatic rebuilds

## Automatic Rebuilds with Vercel

### Option 1: Vercel Cron Jobs (Recommended)

Create a cron job API route that triggers a rebuild:

1. Create `app/api/cron/rebuild/route.ts`:

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function GET(request: NextRequest) {
  // Verify the request is from Vercel Cron
  const authHeader = request.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    // Revalidate the blog pages
    revalidatePath('/blog');
    revalidatePath('/blog/[slug]', 'page');

    return NextResponse.json({
      revalidated: true,
      now: Date.now()
    });
  } catch (err) {
    return NextResponse.json({
      error: 'Error revalidating'
    }, { status: 500 });
  }
}
```

2. Add to `vercel.json`:

```json
{
  "crons": [{
    "path": "/api/cron/rebuild",
    "schedule": "0 10 * * *"
  }]
}
```

3. Add `CRON_SECRET` to your Vercel environment variables

### Option 2: Deploy Hooks

1. Go to Vercel Dashboard → Settings → Git → Deploy Hooks
2. Create a new deploy hook (e.g., "Daily Rebuild")
3. Copy the webhook URL

Then use GitHub Actions to trigger it:

```yaml
# .github/workflows/daily-rebuild.yml
name: Daily Rebuild
on:
  schedule:
    - cron: '0 10 * * *'  # Run at 10 AM UTC daily
  workflow_dispatch:

jobs:
  rebuild:
    runs-on: ubuntu-latest
    steps:
      - name: Trigger Vercel Deploy
        run: curl -X POST ${{ secrets.VERCEL_DEPLOY_HOOK }}
```

### Option 3: ISR (Incremental Static Regeneration)

For immediate updates without full rebuilds, enable ISR in your blog pages:

```typescript
// app/blog/page.tsx
export const revalidate = 3600; // Revalidate every hour

// app/blog/[slug]/page.tsx
export const revalidate = 3600; // Revalidate every hour
```

This way, Vercel will automatically regenerate pages every hour, making scheduled posts appear without manual rebuilds.

## Testing

To test scheduled posts locally:

1. Create a post with a future `publishDate`
2. Verify it doesn't appear in the blog list
3. Try to access it directly - should get 404
4. Change the `publishDate` to the past
5. Restart the dev server
6. Verify the post now appears

## Migration

Existing posts without `publishDate` will continue to work normally and appear immediately on the site.
