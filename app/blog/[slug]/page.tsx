import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { getLocale } from "@/lib/i18n/get-locale";
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import rehypeHighlight from 'rehype-highlight';
import rehypeStringify from 'rehype-stringify';
import 'highlight.js/styles/github-dark.css';

export const revalidate = 3600;

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(remarkGfm) // GitHub Flavored Markdown support
    .use(remarkRehype, { allowDangerousHtml: true }) // Allow HTML in markdown
    .use(rehypeRaw) // Parse raw HTML
    .use(rehypeHighlight) // Code syntax highlighting
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
  const locale = await getLocale();
  // Only get post in the current language
  const post = getPostBySlug(slug, locale);

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

        <div className="flex gap-2 flex-wrap mb-8">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-1.5 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Cover Image */}
        {post.image && (
          <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-2xl mb-8">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}
      </header>

      {/* Content */}
      <div
        className="prose prose-lg dark:prose-invert max-w-none
          prose-headings:font-extrabold
          prose-h1:text-4xl prose-h1:mb-8 prose-h1:mt-12 prose-h1:font-extrabold prose-h1:text-gray-900 dark:prose-h1:text-white
          prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-6 prose-h2:font-extrabold prose-h2:text-gray-900 dark:prose-h2:text-white
          prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-4 prose-h3:font-bold prose-h3:text-gray-900 dark:prose-h3:text-white
          prose-h4:text-xl prose-h4:mt-8 prose-h4:mb-3 prose-h4:font-bold prose-h4:text-gray-900 dark:prose-h4:text-white
          prose-p:text-gray-800 dark:prose-p:text-gray-200
          prose-p:leading-loose prose-p:mb-6 prose-p:text-lg
          prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
          prose-strong:text-gray-900 dark:prose-strong:text-white prose-strong:font-bold
          prose-code:text-pink-600 dark:prose-code:text-pink-400
          prose-code:bg-gray-100 dark:prose-code:bg-gray-800
          prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
          prose-code:before:content-[''] prose-code:after:content-['']
          prose-pre:bg-[#1e1e1e] dark:prose-pre:bg-[#0d1117]
          prose-pre:text-gray-100 prose-pre:p-6 prose-pre:rounded-xl
          prose-pre:overflow-x-auto prose-pre:my-8 prose-pre:shadow-xl
          prose-pre:border prose-pre:border-gray-700 dark:prose-pre:border-gray-800
          [&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_pre_code]:text-sm [&_pre_code]:leading-relaxed
          [&_pre_code]:text-gray-100 dark:[&_pre_code]:text-gray-100
          prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
          prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6
          prose-li:my-5 prose-li:leading-relaxed prose-li:text-gray-800 dark:prose-li:text-gray-200
          prose-blockquote:border-l-4 prose-blockquote:border-yellow-500
          prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:my-8
          prose-blockquote:py-4 prose-blockquote:bg-yellow-50 dark:prose-blockquote:bg-yellow-900/10
          prose-blockquote:rounded-r-lg prose-blockquote:text-gray-800 dark:prose-blockquote:text-gray-200
          prose-hr:my-12 prose-hr:border-gray-300 dark:prose-hr:border-gray-700 prose-hr:border-t-2
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
