import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  readTime: string;
  author?: string;
  content: string;
  language: 'en' | 'pt';
  image?: string; // Cover image URL
}

export function getAllPosts(language?: 'en' | 'pt'): BlogPost[] {
  // Check if directory exists
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }

  const languages = language ? [language] : ['en', 'pt'];
  const allPostsData: BlogPost[] = [];

  for (const lang of languages) {
    const langDirectory = path.join(contentDirectory, lang);

    if (!fs.existsSync(langDirectory)) {
      continue;
    }

    const fileNames = fs.readdirSync(langDirectory);

    const postsData = fileNames
      .filter((fileName) => fileName.endsWith('.md'))
      .map((fileName) => {
        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(langDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        return {
          slug,
          title: data.title || slug,
          date: data.date || new Date().toISOString().split('T')[0],
          description: data.description || '',
          tags: data.tags || [],
          readTime: data.readTime || '5 min',
          author: data.author || 'Robson Alves',
          content,
          language: lang as 'en' | 'pt',
          image: data.image,
        };
      });

    allPostsData.push(...postsData);
  }

  // Sort posts by date (newest first)
  return allPostsData.sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return dateB - dateA; // Descending order (newest first)
  });
}

export function getPostBySlug(slug: string, language: 'en' | 'pt' = 'en'): BlogPost | null {
  try {
    const langDirectory = path.join(contentDirectory, language);
    const fullPath = path.join(langDirectory, `${slug}.md`);

    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const post: BlogPost = {
      slug,
      title: data.title || slug,
      date: data.date || new Date().toISOString().split('T')[0],
      description: data.description || '',
      tags: data.tags || [],
      readTime: data.readTime || '5 min',
      author: data.author || 'Robson Alves',
      content,
      language: language,
      image: data.image,
    };

    return post;
  } catch (error) {
    return null;
  }
}
