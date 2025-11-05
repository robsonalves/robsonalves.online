import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import fs from 'fs';
import path from 'path';
import { getAllPosts, getPostBySlug } from './blog';

// Mock fs module
vi.mock('fs');
const mockedFs = vi.mocked(fs);

describe('blog', () => {
  const mockContentDirectory = path.join(process.cwd(), 'content/blog');

  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('getAllPosts', () => {
    it('should return all posts when no publishDate is set', () => {
      const now = new Date('2024-01-15T12:00:00Z');
      vi.setSystemTime(now);

      mockedFs.existsSync.mockImplementation((path) => {
        if (path === mockContentDirectory) return true;
        if (path === path.join(mockContentDirectory, 'en')) return true;
        if (path === path.join(mockContentDirectory, 'pt')) return true;
        return false;
      });

      mockedFs.readdirSync.mockImplementation((path) => {
        if (path === path.join(mockContentDirectory, 'en')) {
          return ['post1.md', 'post2.md'] as any;
        }
        return [] as any;
      });

      mockedFs.readFileSync.mockImplementation((path) => {
        if (path.toString().includes('post1.md')) {
          return `---
title: Post 1
date: 2024-01-01
description: First post
tags: [test]
---
Content 1`;
        }
        if (path.toString().includes('post2.md')) {
          return `---
title: Post 2
date: 2024-01-02
description: Second post
tags: [test]
---
Content 2`;
        }
        return '';
      });

      const posts = getAllPosts('en');

      expect(posts).toHaveLength(2);
      expect(posts[0].slug).toBe('post2');
      expect(posts[1].slug).toBe('post1');
    });

    it('should filter out posts with a future publishDate', () => {
      const now = new Date('2024-01-15T12:00:00Z');
      vi.setSystemTime(now);

      mockedFs.existsSync.mockImplementation((path) => {
        if (path === mockContentDirectory) return true;
        if (path === path.join(mockContentDirectory, 'en')) return true;
        if (path === path.join(mockContentDirectory, 'pt')) return true;
        return false;
      });

      mockedFs.readdirSync.mockImplementation((path) => {
        if (path === path.join(mockContentDirectory, 'en')) {
          return ['post1.md', 'post2.md', 'post3.md'] as any;
        }
        return [] as any;
      });

      mockedFs.readFileSync.mockImplementation((path) => {
        if (path.toString().includes('post1.md')) {
          return `---
title: Post 1
date: 2024-01-01
description: Published post
tags: [test]
publishDate: 2024-01-10T00:00:00Z
---
Content 1`;
        }
        if (path.toString().includes('post2.md')) {
          return `---
title: Post 2
date: 2024-01-02
description: Future post
tags: [test]
publishDate: 2024-01-20T00:00:00Z
---
Content 2`;
        }
        if (path.toString().includes('post3.md')) {
          return `---
title: Post 3
date: 2024-01-03
description: Another future post
tags: [test]
publishDate: 2024-02-01T00:00:00Z
---
Content 3`;
        }
        return '';
      });

      const posts = getAllPosts('en');

      expect(posts).toHaveLength(1);
      expect(posts[0].slug).toBe('post1');
    });

    it('should include posts with a publishDate in the past or present', () => {
      const now = new Date('2024-01-15T12:00:00Z');
      vi.setSystemTime(now);

      mockedFs.existsSync.mockImplementation((path) => {
        if (path === mockContentDirectory) return true;
        if (path === path.join(mockContentDirectory, 'en')) return true;
        if (path === path.join(mockContentDirectory, 'pt')) return true;
        return false;
      });

      mockedFs.readdirSync.mockImplementation((path) => {
        if (path === path.join(mockContentDirectory, 'en')) {
          return ['post1.md', 'post2.md', 'post3.md', 'post4.md'] as any;
        }
        return [] as any;
      });

      mockedFs.readFileSync.mockImplementation((path) => {
        if (path.toString().includes('post1.md')) {
          return `---
title: Post 1
date: 2024-01-01
description: Past post
tags: [test]
publishDate: 2024-01-05T00:00:00Z
---
Content 1`;
        }
        if (path.toString().includes('post2.md')) {
          return `---
title: Post 2
date: 2024-01-02
description: Present post
tags: [test]
publishDate: 2024-01-15T12:00:00Z
---
Content 2`;
        }
        if (path.toString().includes('post3.md')) {
          return `---
title: Post 3
date: 2024-01-03
description: Future post
tags: [test]
publishDate: 2024-01-20T00:00:00Z
---
Content 3`;
        }
        if (path.toString().includes('post4.md')) {
          return `---
title: Post 4
date: 2024-01-04
description: No publish date
tags: [test]
---
Content 4`;
        }
        return '';
      });

      const posts = getAllPosts('en');

      expect(posts).toHaveLength(3);
      expect(posts.map(p => p.slug).sort()).toEqual(['post1', 'post2', 'post4']);
    });
  });

  describe('getPostBySlug', () => {
    it('should return a post if its publishDate is in the past or not set', () => {
      const now = new Date('2024-01-15T12:00:00Z');
      vi.setSystemTime(now);

      mockedFs.existsSync.mockReturnValue(true);
      mockedFs.readFileSync.mockReturnValue(`---
title: Past Post
date: 2024-01-01
description: A post from the past
tags: [test]
publishDate: 2024-01-10T00:00:00Z
---
Content`);

      const post = getPostBySlug('past-post', 'en');

      expect(post).not.toBeNull();
      expect(post?.slug).toBe('past-post');
      expect(post?.title).toBe('Past Post');

      // Test post without publishDate
      mockedFs.readFileSync.mockReturnValue(`---
title: No Publish Date
date: 2024-01-01
description: A post without publish date
tags: [test]
---
Content`);

      const postNoDate = getPostBySlug('no-date-post', 'en');

      expect(postNoDate).not.toBeNull();
      expect(postNoDate?.slug).toBe('no-date-post');
    });

    it('should return null for a post with a future publishDate', () => {
      const now = new Date('2024-01-15T12:00:00Z');
      vi.setSystemTime(now);

      mockedFs.existsSync.mockReturnValue(true);
      mockedFs.readFileSync.mockReturnValue(`---
title: Future Post
date: 2024-01-20
description: A post from the future
tags: [test]
publishDate: 2024-01-20T00:00:00Z
---
Content`);

      const post = getPostBySlug('future-post', 'en');

      expect(post).toBeNull();
    });
  });
});
