import { useTranslations } from "@/lib/i18n/use-translations";
import type { Locale } from "@/lib/i18n/translations";

export default function Footer({ locale }: { locale: Locale }) {
  const currentYear = new Date().getFullYear();
  const t = useTranslations(locale);

  return (
    <footer className="border-t mt-12">
      <div className="max-w-5xl mx-auto px-4 py-6 text-center text-gray-600 dark:text-gray-400">
        <p>
          © {currentYear} Robson Alves. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
