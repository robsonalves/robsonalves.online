import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { getLocale } from "@/lib/i18n/get-locale";
import { useTranslations } from "@/lib/i18n/use-translations";

export default async function Blog() {
  const locale = await getLocale();
  const t = useTranslations(locale);
  // Only show posts in the current language
  const posts = getAllPosts(locale);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {t.blog.title}
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-300">
          {t.blog.subtitle}
        </p>
      </div>

      <div className="space-y-6">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="group p-8 border-2 border-gray-200 dark:border-gray-700 rounded-2xl hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-xl transition-all"
          >
            <Link href={`/blog/${post.slug}`}>
              <div className="space-y-3">
                <div className="flex justify-between items-start gap-4">
                  <h2 className="text-2xl font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h2>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                  <span>📅 {post.date}</span>
                  <span>⏱️ {post.readTime} {t.blog.readTime}</span>
                  {post.author && <span>✍️ {post.author}</span>}
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  {post.description}
                </p>
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
              </div>
            </Link>
          </article>
        ))}
      </div>

      {posts.length === 0 && (
        <div className="text-center py-20">
          <div className="text-6xl mb-4">📝</div>
          <p className="text-xl text-gray-500">
            {t.blog.noPostsYet}
          </p>
        </div>
      )}

      <div className="mt-12 p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl text-center">
        <h3 className="text-2xl font-bold mb-3">📚 {t.blog.regularUpdates}</h3>
        <p className="text-gray-700 dark:text-gray-300">
          {t.blog.regularUpdatesDesc}
        </p>
      </div>
    </div>
  );
}
