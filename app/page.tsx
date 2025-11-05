import Link from "next/link";
import { getLocale } from "@/lib/i18n/get-locale";
import { useTranslations } from "@/lib/i18n/use-translations";

export default async function Home() {
  const locale = await getLocale();
  const t = useTranslations(locale);

  return (
    <div className="space-y-16 py-8">
      {/* Hero Section */}
      <section className="text-center space-y-6 py-20">
        <div className="inline-block">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {t.home.title}
          </h1>
        </div>
        <p className="text-3xl font-semibold text-gray-700 dark:text-gray-300">
          {t.home.subtitle}
        </p>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
          {t.home.description}
        </p>
        <div className="flex flex-wrap gap-4 justify-center pt-4">
          <a
            href="https://github.com/robsonalves"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-lg font-semibold hover:scale-105 transition-transform"
          >
            {t.home.github}
          </a>
          <a
            href="https://linkedin.com/in/robsonalves"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:scale-105 transition-transform"
          >
            {t.home.linkedin}
          </a>
          <Link
            href="/schedule"
            className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-semibold hover:scale-105 transition-transform shadow-lg hover:shadow-xl flex items-center gap-2"
          >
            📅 {locale === 'pt' ? 'Agende uma Conversa' : 'Schedule a Call'}
          </Link>
        </div>
      </section>

      {/* Quick Links */}
      <section className="grid md:grid-cols-3 gap-8">
        <Link
          href="/cv"
          className="group p-8 border-2 border-gray-200 dark:border-gray-700 rounded-2xl hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-xl transition-all"
        >
          <div className="text-4xl mb-4">📋</div>
          <h2 className="text-2xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {t.home.cvCard.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            {t.home.cvCard.description}
          </p>
        </Link>

        <Link
          href="/blog"
          className="group p-8 border-2 border-gray-200 dark:border-gray-700 rounded-2xl hover:border-purple-500 dark:hover:border-purple-400 hover:shadow-xl transition-all"
        >
          <div className="text-4xl mb-4">📝</div>
          <h2 className="text-2xl font-bold mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
            {t.home.blogCard.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            {t.home.blogCard.description}
          </p>
        </Link>

        <Link
          href="/contact"
          className="group p-8 border-2 border-gray-200 dark:border-gray-700 rounded-2xl hover:border-green-500 dark:hover:border-green-400 hover:shadow-xl transition-all"
        >
          <div className="text-4xl mb-4">📧</div>
          <h2 className="text-2xl font-bold mb-3 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
            {t.home.contactCard.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            {t.home.contactCard.description}
          </p>
        </Link>
      </section>

      {/* Highlights */}
      <section className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 md:p-12">
        <h2 className="text-3xl font-bold text-center mb-8">{t.home.expertise}</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl mb-3">☁️</div>
            <h3 className="text-xl font-semibold mb-2">{t.home.expertiseCards.cloud.title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{t.home.expertiseCards.cloud.description}</p>
          </div>
          <div>
            <div className="text-4xl mb-3">🚀</div>
            <h3 className="text-xl font-semibold mb-2">{t.home.expertiseCards.devops.title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{t.home.expertiseCards.devops.description}</p>
          </div>
          <div>
            <div className="text-4xl mb-3">🔒</div>
            <h3 className="text-xl font-semibold mb-2">{t.home.expertiseCards.security.title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{t.home.expertiseCards.security.description}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
