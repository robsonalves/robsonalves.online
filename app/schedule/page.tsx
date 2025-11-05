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
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {locale === 'pt' ? 'Agende uma Conversa' : 'Schedule a Call'}
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-2">
          {locale === 'pt' 
            ? 'Vamos conversar sobre DevOps, SRE, Cloud, ou oportunidades de colaboração.'
            : 'Let\'s talk about DevOps, SRE, Cloud, or collaboration opportunities.'}
        </p>
        <div className="flex flex-wrap gap-4 justify-center text-sm text-gray-600 dark:text-gray-400">
          <span>⏱️ {locale === 'pt' ? '30 minutos' : '30 minutes'}</span>
          <span>🌎 UTC-3 (Brasília)</span>
          <span>📹 {locale === 'pt' ? 'Vídeo' : 'Video'}</span>
        </div>
      </div>

      {/* Calendar embed - Full width */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border-2 border-gray-200 dark:border-gray-700 overflow-hidden mb-8">
        <CalEmbed calLink="robsonalves/30min" />
      </div>
    </div>
  );
}
