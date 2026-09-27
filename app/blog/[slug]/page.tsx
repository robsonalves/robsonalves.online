import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Clock, PenLine } from "lucide-react";
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
        className="inline-flex items-center gap-2 text-[var(--accent)] hover:opacity-80 mb-8 font-mono-ui text-sm"
      >
        <ArrowLeft size={16} /> Back to Blog
      </Link>

      {/* Header */}
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">{post.title}</h1>

        <div className="flex flex-wrap items-center gap-4 text-[var(--muted)] mb-6 font-mono-ui text-sm">
          <span className="inline-flex items-center gap-1.5"><Calendar size={14} /> {post.date}</span>
          <span className="inline-flex items-center gap-1.5"><Clock size={14} /> {post.readTime} read</span>
          {post.author && <span className="inline-flex items-center gap-1.5"><PenLine size={14} /> {post.author}</span>}
        </div>

        <div className="flex gap-2 flex-wrap mb-8">
          {post.tags.map((tag) => (
            <span key={tag} className="tag-pill">
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
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />

      {/* Footer */}
      <footer className="mt-12 pt-8 border-t border-[var(--border)]">
        <div className="flex justify-between items-center flex-wrap gap-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[var(--accent)] font-mono-ui text-sm"
          >
            <ArrowLeft size={16} /> Back to all posts
          </Link>

          <div className="flex gap-4 text-sm text-[var(--muted)] font-mono-ui">
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://robsonalves.online/blog/${slug}`)}&via=robdevops`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--accent)]"
            >
              Share on X
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://robsonalves.online/blog/${slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--accent)]"
            >
              Share on LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </article>
  );
}
