import { translations, type Locale } from "./translations";

export function useTranslations(locale: Locale) {
  return translations[locale];
}
