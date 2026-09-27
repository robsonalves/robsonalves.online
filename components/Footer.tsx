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
    <footer className="border-t border-[var(--border)] mt-12">
      <div className="max-w-5xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm">
        <p className="text-[var(--muted)] font-mono-ui">
          © {currentYear} Robson Alves. {t.footer.rights}
        </p>
        <span className="inline-flex items-center gap-2 font-mono-ui text-xs text-[var(--muted)]">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--signal-green)] opacity-60 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--signal-green)]" />
          </span>
          deploy: {formattedDate}
        </span>
      </div>
    </footer>
  );
}
