"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

export default function LanguageSwitcher({ currentLocale }: { currentLocale: string }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [locale, setLocale] = useState(currentLocale);

  const switchLanguage = () => {
    const newLocale = locale === "pt" ? "en" : "pt";

    startTransition(async () => {
      // Set cookie
      await fetch("/api/locale", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ locale: newLocale }),
      });

      setLocale(newLocale);
      router.refresh();
    });
  };

  return (
    <button
      onClick={switchLanguage}
      disabled={isPending}
      className="px-3 py-1 border rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors disabled:opacity-50"
      aria-label="Switch language"
    >
      {locale === "pt" ? "🇺🇸 EN" : "🇧🇷 PT"}
    </button>
  );
}
