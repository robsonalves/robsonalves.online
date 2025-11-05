import { useTranslations } from "@/lib/i18n/use-translations";
import type { Locale } from "@/lib/i18n/translations";

export default function Footer({ locale }: { locale: Locale }) {
  const currentYear = new Date().getFullYear();
  const t = useTranslations(locale);

  // Get build time from environment variable or use current time as fallback
  const buildTime = process.env.NEXT_PUBLIC_BUILD_TIME || new Date().toISOString();
  const deployDate = new Date(buildTime);
  const formattedDate = deployDate.toLocaleDateString(locale === 'pt' ? 'pt-BR' : 'en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  return (
    <footer className="border-t mt-12">
      <div className="max-w-5xl mx-auto px-4 py-6 text-center text-gray-600 dark:text-gray-400">
        <p className="mb-3">
          © {currentYear} Robson Alves. {t.footer.rights}
        </p>
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border border-blue-200 dark:border-blue-800 text-xs font-medium text-blue-700 dark:text-blue-300 shadow-sm">
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 12h14M12 5l7 7-7 7"
              />
            </svg>
            <span>Last deploy: {formattedDate}</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
