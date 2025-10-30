import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { remark } from 'remark';
import remarkRehype from 'remark-rehype';
import rehypeHighlight from 'rehype-highlight';
import rehypeStringify from 'rehype-stringify';
import 'highlight.js/styles/github-dark.css';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(remarkRehype)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(markdown);
  return result.toString();
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const contentHtml = await markdownToHtml(post.content);

  return (
    <article className="max-w-4xl mx-auto">
      {/* Back button */}
      <Link
        href="/blog"
        className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8"
      >
        ← Back to Blog
      </Link>

      {/* Header */}
      <header className="mb-12">
        <h1 className="text-5xl font-bold mb-4">{post.title}</h1>

        <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400 mb-6">
          <span>📅 {post.date}</span>
          <span>⏱️ {post.readTime} read</span>
          {post.author && <span>✍️ {post.author}</span>}
        </div>

        <div className="flex gap-2 flex-wrap">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-1.5 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
            >
              #{tag}
            </span>
          ))}
        </div>
      </header>

      {/* Content */}
      <div
        className="prose prose-lg dark:prose-invert max-w-none
          prose-headings:font-bold
          prose-h1:text-4xl prose-h1:mb-8
          prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-6
          prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-4
          prose-p:text-gray-700 dark:prose-p:text-gray-300
          prose-p:leading-loose prose-p:mb-8 prose-p:text-lg
          prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
          prose-strong:text-gray-900 dark:prose-strong:text-gray-100
          prose-code:text-pink-600 dark:prose-code:text-pink-400
          prose-code:bg-gray-100 dark:prose-code:bg-gray-800
          prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
          prose-pre:bg-gray-900 dark:prose-pre:bg-gray-950
          prose-pre:text-gray-100 prose-pre:p-6 prose-pre:rounded-xl
          prose-pre:overflow-x-auto prose-pre:my-8
          prose-ul:my-8 prose-ul:list-disc prose-ul:space-y-2
          prose-ol:my-8 prose-ol:list-decimal prose-ol:space-y-2
          prose-li:my-3 prose-li:leading-relaxed
          prose-blockquote:border-l-4 prose-blockquote:border-blue-500
          prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:my-8
          prose-blockquote:py-4 prose-blockquote:bg-blue-50 dark:prose-blockquote:bg-blue-900/20
          prose-img:rounded-lg prose-img:shadow-lg prose-img:my-8"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />

      {/* Footer */}
      <footer className="mt-12 pt-8 border-t">
        <div className="flex justify-between items-center">
          <Link
            href="/blog"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            ← Back to all posts
          </Link>

          <div className="flex gap-4">
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://robsonalves.online/blog/${slug}`)}&via=robdevops`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-500"
            >
              Share on X
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://robsonalves.online/blog/${slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-700"
            >
              Share on LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </article>
  );
}
