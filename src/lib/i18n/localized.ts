import type { Locale } from "./translations";

export type LocalizedText = { es: string; en: string };

export function pickLocale(text: LocalizedText, locale: Locale): string {
  return text[locale];
}
