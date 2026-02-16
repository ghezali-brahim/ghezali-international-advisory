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
  /** Code ISO 3166-1 alpha-2 pour hreflang (ex. US, GB, AE). Marchés région : pays représentatif. */
  hreflangRegion: string;
  pilotPhase1?: boolean;
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
    hreflangRegion: 'US',
    pilotPhase1: true,
  },
  {
    id: 'ca',
    slug: 'canada',
    name: 'Canada',
    nameEn: 'Canada',
    region: 'americas',
    locales: ['en', 'fr'],
    defaultLocale: 'en',
    hreflangRegion: 'CA',
  },
  {
    id: 'gb',
    slug: 'uk',
    name: 'Royaume-Uni',
    nameEn: 'United Kingdom',
    region: 'europe',
    locales: ['en'],
    defaultLocale: 'en',
    hreflangRegion: 'GB',
    pilotPhase1: true,
  },
  {
    id: 'ma',
    slug: 'maroc',
    name: 'Maroc',
    nameEn: 'Morocco',
    region: 'africa',
    locales: ['fr', 'en'],
    defaultLocale: 'fr',
    hreflangRegion: 'MA',
  },
  {
    id: 'ae',
    slug: 'uae',
    name: 'Émirats arabes unis',
    nameEn: 'UAE / Dubai',
    region: 'mena',
    locales: ['ar', 'en'],
    defaultLocale: 'ar',
    hreflangRegion: 'AE',
    pilotPhase1: true,
  },
  {
    id: 'au',
    slug: 'australie',
    name: 'Australie',
    nameEn: 'Australia',
    region: 'apac',
    locales: ['en'],
    defaultLocale: 'en',
    hreflangRegion: 'AU',
  },
  {
    id: 'be',
    slug: 'belgique',
    name: 'Belgique',
    nameEn: 'Belgium',
    region: 'europe',
    locales: ['fr', 'en'],
    defaultLocale: 'fr',
    hreflangRegion: 'BE',
  },
  {
    id: 'se',
    slug: 'suede',
    name: 'Suède',
    nameEn: 'Sweden',
    region: 'europe',
    locales: ['en'],
    defaultLocale: 'en',
    hreflangRegion: 'SE',
  },
  {
    id: 'in',
    slug: 'inde',
    name: 'Inde',
    nameEn: 'India',
    region: 'apac',
    locales: ['en'],
    defaultLocale: 'en',
    hreflangRegion: 'IN',
  },
  {
    id: 'africa-west',
    slug: 'africa-west',
    name: 'Afrique de l\'Ouest',
    nameEn: 'West Africa',
    region: 'africa',
    locales: ['en', 'fr'],
    defaultLocale: 'fr',
    hreflangRegion: 'NG',
  },
  {
    id: 'africa-east',
    slug: 'africa-east',
    name: 'Afrique de l\'Est',
    nameEn: 'East Africa',
    region: 'africa',
    locales: ['en'],
    defaultLocale: 'en',
    hreflangRegion: 'KE',
  },
  {
    id: 'africa-south',
    slug: 'africa-south',
    name: 'Afrique australe',
    nameEn: 'Southern Africa',
    region: 'africa',
    locales: ['en'],
    defaultLocale: 'en',
    hreflangRegion: 'ZA',
  },
  {
    id: 'africa-north',
    slug: 'africa-north',
    name: 'Afrique du Nord',
    nameEn: 'North Africa',
    region: 'africa',
    locales: ['fr', 'en'],
    defaultLocale: 'fr',
    hreflangRegion: 'TN',
  },
  {
    id: 'fr',
    slug: 'france',
    name: 'France',
    nameEn: 'France',
    region: 'europe',
    locales: ['fr', 'en'],
    defaultLocale: 'fr',
    hreflangRegion: 'FR',
    pilotPhase1: true,
  },
  {
    id: 'ch',
    slug: 'suisse',
    name: 'Suisse',
    nameEn: 'Switzerland',
    region: 'europe',
    locales: ['fr', 'en'],
    defaultLocale: 'fr',
    hreflangRegion: 'CH',
  },
  {
    id: 'de',
    slug: 'allemagne',
    name: 'Allemagne',
    nameEn: 'Germany',
    region: 'europe',
    locales: ['de', 'en'],
    defaultLocale: 'de',
    hreflangRegion: 'DE',
  },
  {
    id: 'lu',
    slug: 'luxembourg',
    name: 'Luxembourg',
    nameEn: 'Luxembourg',
    region: 'europe',
    locales: ['fr', 'en'],
    defaultLocale: 'fr',
    hreflangRegion: 'LU',
  },
  {
    id: 'nl',
    slug: 'pays-bas',
    name: 'Pays-Bas',
    nameEn: 'Netherlands',
    region: 'europe',
    locales: ['nl', 'en'],
    defaultLocale: 'nl',
    hreflangRegion: 'NL',
  },
  {
    id: 'es',
    slug: 'espagne',
    name: 'Espagne',
    nameEn: 'Spain',
    region: 'europe',
    locales: ['es', 'en'],
    defaultLocale: 'es',
    hreflangRegion: 'ES',
  },
  {
    id: 'it',
    slug: 'italie',
    name: 'Italie',
    nameEn: 'Italy',
    region: 'europe',
    locales: ['it', 'en'],
    defaultLocale: 'it',
    hreflangRegion: 'IT',
  },
  {
    id: 'sa',
    slug: 'arabie-saoudite',
    name: 'Arabie saoudite',
    nameEn: 'Saudi Arabia',
    region: 'mena',
    locales: ['ar', 'en'],
    defaultLocale: 'ar',
    hreflangRegion: 'SA',
  },
  {
    id: 'qa',
    slug: 'qatar',
    name: 'Qatar',
    nameEn: 'Qatar',
    region: 'mena',
    locales: ['ar', 'en'],
    defaultLocale: 'ar',
    hreflangRegion: 'QA',
  },
  {
    id: 'il',
    slug: 'israel',
    name: 'Israël',
    nameEn: 'Israel',
    region: 'mena',
    locales: ['he', 'en'],
    defaultLocale: 'he',
    hreflangRegion: 'IL',
  },
  {
    id: 'sg',
    slug: 'singapour',
    name: 'Singapour',
    nameEn: 'Singapore',
    region: 'apac',
    locales: ['en'],
    defaultLocale: 'en',
    hreflangRegion: 'SG',
  },
  {
    id: 'hk',
    slug: 'hong-kong',
    name: 'Hong Kong',
    nameEn: 'Hong Kong',
    region: 'apac',
    locales: ['zh', 'en'],
    defaultLocale: 'zh',
    hreflangRegion: 'HK',
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

export function getPilotPhase1Markets(): MarketConfig[] {
  return markets.filter((m) => m.pilotPhase1 === true);
}
