import { Clock, Globe2, Video } from "lucide-react";
import { getLocale } from "@/lib/i18n/get-locale";
import { useTranslations } from "@/lib/i18n/use-translations";
import CalEmbed from "@/components/CalEmbed";

export const metadata = {
  title: "Schedule a Call - Robson Alves",
  description: "Schedule a call with Robson Alves to discuss DevOps, SRE, Cloud Architecture, or collaboration opportunities.",
};

export default async function SchedulePage() {
  const locale = await getLocale();
  const t = useTranslations(locale);

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div className="text-center space-y-3">
        <p className="section-label">schedule</p>
        <h1 className="text-4xl font-bold tracking-tight">
          {locale === 'pt' ? 'Agende uma Conversa' : 'Schedule a Call'}
        </h1>
        <p className="text-lg text-[var(--muted)]">
          {locale === 'pt'
            ? 'Vamos conversar sobre DevOps, SRE, Cloud, ou oportunidades de colaboração.'
            : 'Let\'s talk about DevOps, SRE, Cloud, or collaboration opportunities.'}
        </p>
        <div className="flex flex-wrap gap-5 justify-center text-sm text-[var(--muted)] font-mono-ui pt-2">
          <span className="inline-flex items-center gap-1.5"><Clock size={16} /> {locale === 'pt' ? '30 minutos' : '30 minutes'}</span>
          <span className="inline-flex items-center gap-1.5"><Globe2 size={16} /> UTC-3 (Brasília)</span>
          <span className="inline-flex items-center gap-1.5"><Video size={16} /> {locale === 'pt' ? 'Vídeo' : 'Video'}</span>
        </div>
      </div>

      {/* Calendar embed - Full width */}
      <div className="terminal-window">
        <CalEmbed calLink="robsonalves/30min" />
      </div>
    </div>
  );
}
