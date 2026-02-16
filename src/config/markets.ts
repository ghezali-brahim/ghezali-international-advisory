import type { Locale } from '@/i18n/config';

export type MarketId =
  | 'us'
  | 'ca'
  | 'gb'
  | 'ma'
  | 'ae'
  | 'au'
  | 'be'
  | 'se'
  | 'in'
  | 'africa-west'
  | 'africa-east'
  | 'africa-south'
  | 'africa-north'
  | 'fr'
  | 'ch'
  | 'de'
  | 'lu'
  | 'nl'
  | 'es'
  | 'it'
  | 'sa'
  | 'qa'
  | 'il'
  | 'sg'
  | 'hk';

export interface MarketConfig {
  id: MarketId;
  slug: string;
  name: string;
  nameEn: string;
  region: string;
  locales: Locale[];
  defaultLocale: Locale;
}

export const markets: MarketConfig[] = [
  {
    id: 'us',
    slug: 'usa',
    name: 'États-Unis',
    nameEn: 'United States',
    region: 'americas',
    locales: ['en'],
    defaultLocale: 'en',
  },
  {
    id: 'ca',
    slug: 'canada',
    name: 'Canada',
    nameEn: 'Canada',
    region: 'americas',
    locales: ['en', 'fr'],
    defaultLocale: 'en',
  },
  {
    id: 'gb',
    slug: 'uk',
    name: 'Royaume-Uni',
    nameEn: 'United Kingdom',
    region: 'europe',
    locales: ['en'],
    defaultLocale: 'en',
  },
  {
    id: 'ma',
    slug: 'maroc',
    name: 'Maroc',
    nameEn: 'Morocco',
    region: 'africa',
    locales: ['fr', 'en'],
    defaultLocale: 'fr',
  },
  {
    id: 'ae',
    slug: 'uae',
    name: 'Émirats arabes unis',
    nameEn: 'UAE / Dubai',
    region: 'mena',
    locales: ['ar', 'en'],
    defaultLocale: 'ar',
  },
  {
    id: 'au',
    slug: 'australie',
    name: 'Australie',
    nameEn: 'Australia',
    region: 'apac',
    locales: ['en'],
    defaultLocale: 'en',
  },
  {
    id: 'be',
    slug: 'belgique',
    name: 'Belgique',
    nameEn: 'Belgium',
    region: 'europe',
    locales: ['fr', 'en'],
    defaultLocale: 'fr',
  },
  {
    id: 'se',
    slug: 'suede',
    name: 'Suède',
    nameEn: 'Sweden',
    region: 'europe',
    locales: ['en'],
    defaultLocale: 'en',
  },
  {
    id: 'in',
    slug: 'inde',
    name: 'Inde',
    nameEn: 'India',
    region: 'apac',
    locales: ['en'],
    defaultLocale: 'en',
  },
  {
    id: 'africa-west',
    slug: 'africa-west',
    name: 'Afrique de l\'Ouest',
    nameEn: 'West Africa',
    region: 'africa',
    locales: ['en', 'fr'],
    defaultLocale: 'fr',
  },
  {
    id: 'africa-east',
    slug: 'africa-east',
    name: 'Afrique de l\'Est',
    nameEn: 'East Africa',
    region: 'africa',
    locales: ['en'],
    defaultLocale: 'en',
  },
  {
    id: 'africa-south',
    slug: 'africa-south',
    name: 'Afrique australe',
    nameEn: 'Southern Africa',
    region: 'africa',
    locales: ['en'],
    defaultLocale: 'en',
  },
  {
    id: 'africa-north',
    slug: 'africa-north',
    name: 'Afrique du Nord',
    nameEn: 'North Africa',
    region: 'africa',
    locales: ['fr', 'en'],
    defaultLocale: 'fr',
  },
  {
    id: 'fr',
    slug: 'france',
    name: 'France',
    nameEn: 'France',
    region: 'europe',
    locales: ['fr'],
    defaultLocale: 'fr',
  },
  {
    id: 'ch',
    slug: 'suisse',
    name: 'Suisse',
    nameEn: 'Switzerland',
    region: 'europe',
    locales: ['fr', 'en'],
    defaultLocale: 'fr',
  },
  {
    id: 'de',
    slug: 'allemagne',
    name: 'Allemagne',
    nameEn: 'Germany',
    region: 'europe',
    locales: ['de', 'en'],
    defaultLocale: 'de',
  },
  {
    id: 'lu',
    slug: 'luxembourg',
    name: 'Luxembourg',
    nameEn: 'Luxembourg',
    region: 'europe',
    locales: ['fr', 'en'],
    defaultLocale: 'fr',
  },
  {
    id: 'nl',
    slug: 'pays-bas',
    name: 'Pays-Bas',
    nameEn: 'Netherlands',
    region: 'europe',
    locales: ['nl', 'en'],
    defaultLocale: 'nl',
  },
  {
    id: 'es',
    slug: 'espagne',
    name: 'Espagne',
    nameEn: 'Spain',
    region: 'europe',
    locales: ['es', 'en'],
    defaultLocale: 'es',
  },
  {
    id: 'it',
    slug: 'italie',
    name: 'Italie',
    nameEn: 'Italy',
    region: 'europe',
    locales: ['it', 'en'],
    defaultLocale: 'it',
  },
  {
    id: 'sa',
    slug: 'arabie-saoudite',
    name: 'Arabie saoudite',
    nameEn: 'Saudi Arabia',
    region: 'mena',
    locales: ['ar', 'en'],
    defaultLocale: 'ar',
  },
  {
    id: 'qa',
    slug: 'qatar',
    name: 'Qatar',
    nameEn: 'Qatar',
    region: 'mena',
    locales: ['ar', 'en'],
    defaultLocale: 'ar',
  },
  {
    id: 'il',
    slug: 'israel',
    name: 'Israël',
    nameEn: 'Israel',
    region: 'mena',
    locales: ['he', 'en'],
    defaultLocale: 'he',
  },
  {
    id: 'sg',
    slug: 'singapour',
    name: 'Singapour',
    nameEn: 'Singapore',
    region: 'apac',
    locales: ['en'],
    defaultLocale: 'en',
  },
  {
    id: 'hk',
    slug: 'hong-kong',
    name: 'Hong Kong',
    nameEn: 'Hong Kong',
    region: 'apac',
    locales: ['zh', 'en'],
    defaultLocale: 'zh',
  },
];

export function getMarketBySlug(slug: string): MarketConfig | undefined {
  return markets.find((m) => m.slug === slug);
}

export function getMarketsForLocale(locale: Locale): MarketConfig[] {
  return markets.filter((m) => m.locales.includes(locale));
}

export function getAllMarketSlugs(): string[] {
  return markets.map((m) => m.slug);
}

export function getMarketStaticParams(): { locale: string; countrySlug: string }[] {
  const params: { locale: string; countrySlug: string }[] = [];
  for (const market of markets) {
    for (const locale of market.locales) {
      params.push({ locale, countrySlug: market.slug });
    }
  }
  return params;
}

export function isValidMarketSlug(slug: string): boolean {
  return markets.some((m) => m.slug === slug);
}
