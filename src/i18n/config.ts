// Configuration i18n : locales et défauts

export const locales = ['fr', 'en'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'fr';

export const localeLabels: Record<Locale, string> = {
  fr: 'Français',
  en: 'English',
};

export function isValidLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
