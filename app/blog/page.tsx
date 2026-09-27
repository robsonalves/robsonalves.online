import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, PenLine, Newspaper } from "lucide-react";
import { getAllPosts } from "@/lib/blog";
import { getLocale } from "@/lib/i18n/get-locale";
import { useTranslations } from "@/lib/i18n/use-translations";

export const revalidate = 3600;

export default async function Blog() {
  const locale = await getLocale();
  const t = useTranslations(locale);
  // Only show posts in the current language
  const posts = getAllPosts(locale);

  return (
    <div className="max-w-4xl mx-auto space-y-10">
      <div className="text-center space-y-3">
        <p className="section-label">blog</p>
        <h1 className="text-4xl font-bold tracking-tight">{t.blog.title}</h1>
        <p className="text-lg text-[var(--muted)]">{t.blog.subtitle}</p>
      </div>

      <div className="space-y-5">
        {posts.map((post) => (
          <article key={post.slug} className="group surface-card overflow-hidden">
            <Link href={`/blog/${post.slug}`}>
              <div className="flex flex-col md:flex-row">
                {/* Image */}
                {post.image && (
                  <div className="relative w-full md:w-80 h-48 md:h-auto flex-shrink-0">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}

                {/* Content */}
                <div className="p-8 flex-1 space-y-3">
                  <h2 className="text-2xl font-bold group-hover:text-[var(--accent)] transition-colors">
                    {post.title}
                  </h2>
                  <div className="flex items-center gap-4 text-sm text-[var(--muted)] font-mono-ui">
                    <span className="inline-flex items-center gap-1.5"><Calendar size={14} /> {post.date}</span>
                    <span className="inline-flex items-center gap-1.5"><Clock size={14} /> {post.readTime} {t.blog.readTime}</span>
                    {post.author && <span className="inline-flex items-center gap-1.5"><PenLine size={14} /> {post.author}</span>}
                  </div>
                  <p className="text-[var(--muted)]">
                    {post.description}
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {post.tags.map((tag) => (
                      <span key={tag} className="tag-pill">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>

      {posts.length === 0 && (
        <div className="text-center py-20 space-y-4">
          <Newspaper className="mx-auto text-[var(--muted)]" size={40} />
          <p className="text-lg text-[var(--muted)]">
            {t.blog.noPostsYet}
          </p>
        </div>
      )}

      <div className="surface-card p-8 text-center">
        <h3 className="text-xl font-semibold mb-3">{t.blog.regularUpdates}</h3>
        <p className="text-[var(--muted)]">
          {t.blog.regularUpdatesDesc}
        </p>
      </div>
    </div>
  );
}
