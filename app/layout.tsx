import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getLocale } from "@/lib/i18n/get-locale";
import { useTranslations } from "@/lib/i18n/use-translations";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "Robson Alves - DevOps Engineer | SRE | Cloud Architect",
  description: "Personal website and blog of Robson Alves - DevOps Engineer specializing in cloud infrastructure and automation",
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const t = useTranslations(locale);

  return (
    <html lang={locale}>
      <body className="min-h-screen flex flex-col">
        <Header locale={locale} translations={t.nav} />
        <main className="flex-1 max-w-5xl mx-auto px-4 py-8 w-full">
          {children}
        </main>
        <Footer locale={locale} />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
