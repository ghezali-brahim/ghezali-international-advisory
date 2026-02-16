// Configuration i18n : locales et défauts

export const locales = ['fr', 'en', 'de', 'nl', 'es', 'it', 'ar', 'he', 'zh'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'fr';

export const localeLabels: Record<Locale, string> = {
  fr: 'Français',
  en: 'English',
  de: 'Deutsch',
  nl: 'Nederlands',
  es: 'Español',
  it: 'Italiano',
  ar: 'العربية',
  he: 'עברית',
  zh: '中文',
};

export const localeFlags: Record<Locale, string> = {
  fr: '🇫🇷',
  en: '🇬🇧 🇺🇸',
  de: '🇩🇪',
  nl: '🇳🇱',
  es: '🇪🇸',
  it: '🇮🇹',
  ar: '🇸🇦',
  he: '🇮🇱',
  zh: '🇨🇳',
};

export function isValidLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

/** Retire au plus le premier segment s'il est une locale valide. Évite l'empilement des locales dans l'URL. */
export function getPathWithoutLocale(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length > 0 && locales.includes(segments[0] as Locale)) {
    const rest = segments.slice(1).join('/');
    return rest ? `/${rest}` : '/';
  }
  return pathname;
}
