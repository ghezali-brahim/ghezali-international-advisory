import type { Locale } from '@/i18n/config';

export const MARKET_ARTICLE_SLUGS = [
  'international-growth-strategy',
  'private-equity-consulting',
  'enterprise-growth-strategy',
  'strategic-positioning',
] as const;

export type MarketArticleSlug = (typeof MARKET_ARTICLE_SLUGS)[number];

export interface MarketArticleMeta {
  titleKey: string;
  descriptionKey: string;
  keywords: string[];
}

export const marketArticleMeta: Record<MarketArticleSlug, Record<Locale, MarketArticleMeta>> = {
  'international-growth-strategy': {
    fr: {
      titleKey: 'marketArticles.internationalGrowth.title',
      descriptionKey: 'marketArticles.internationalGrowth.description',
      keywords: [
        'international growth strategy consulting',
        'global expansion strategy firm',
        'cross border expansion consulting',
        'international market entry strategy',
        'international expansion advisory',
        'global scaling strategy',
      ],
    },
    en: {
      titleKey: 'marketArticles.internationalGrowth.titleEn',
      descriptionKey: 'marketArticles.internationalGrowth.descriptionEn',
      keywords: [
        'international growth strategy consulting',
        'global expansion strategy firm',
        'cross border expansion consulting',
        'international market entry strategy',
        'international expansion advisory',
        'global scaling strategy',
      ],
    },
    de: {
      titleKey: 'marketArticles.internationalGrowth.titleEn',
      descriptionKey: 'marketArticles.internationalGrowth.descriptionEn',
      keywords: [
        'international growth strategy consulting',
        'global expansion strategy firm',
        'cross border expansion consulting',
      ],
    },
    nl: {
      titleKey: 'marketArticles.internationalGrowth.titleEn',
      descriptionKey: 'marketArticles.internationalGrowth.descriptionEn',
      keywords: [
        'international growth strategy consulting',
        'global expansion strategy firm',
      ],
    },
    es: {
      titleKey: 'marketArticles.internationalGrowth.titleEn',
      descriptionKey: 'marketArticles.internationalGrowth.descriptionEn',
      keywords: [
        'international growth strategy consulting',
        'global expansion strategy firm',
      ],
    },
    it: {
      titleKey: 'marketArticles.internationalGrowth.titleEn',
      descriptionKey: 'marketArticles.internationalGrowth.descriptionEn',
      keywords: [
        'international growth strategy consulting',
        'global expansion strategy firm',
      ],
    },
    ar: {
      titleKey: 'marketArticles.internationalGrowth.titleEn',
      descriptionKey: 'marketArticles.internationalGrowth.descriptionEn',
      keywords: [
        'international growth strategy consulting',
        'global expansion strategy firm',
      ],
    },
    he: {
      titleKey: 'marketArticles.internationalGrowth.titleEn',
      descriptionKey: 'marketArticles.internationalGrowth.descriptionEn',
      keywords: [
        'international growth strategy consulting',
        'global expansion strategy firm',
      ],
    },
    zh: {
      titleKey: 'marketArticles.internationalGrowth.titleEn',
      descriptionKey: 'marketArticles.internationalGrowth.descriptionEn',
      keywords: [
        'international growth strategy consulting',
        'global expansion strategy firm',
      ],
    },
  },
  'private-equity-consulting': {
    fr: {
      titleKey: 'marketArticles.privateEquity.title',
      descriptionKey: 'marketArticles.privateEquity.description',
      keywords: [
        'private equity operational consulting',
        'private equity value creation consulting',
        'portfolio company growth strategy',
        'buy and build strategy consulting',
        'post acquisition growth strategy',
      ],
    },
    en: {
      titleKey: 'marketArticles.privateEquity.titleEn',
      descriptionKey: 'marketArticles.privateEquity.descriptionEn',
      keywords: [
        'private equity operational consulting',
        'private equity value creation consulting',
        'portfolio company growth strategy',
        'buy and build strategy consulting',
        'post acquisition growth strategy',
      ],
    },
    de: { titleKey: 'marketArticles.privateEquity.titleEn', descriptionKey: 'marketArticles.privateEquity.descriptionEn', keywords: [] },
    nl: { titleKey: 'marketArticles.privateEquity.titleEn', descriptionKey: 'marketArticles.privateEquity.descriptionEn', keywords: [] },
    es: { titleKey: 'marketArticles.privateEquity.titleEn', descriptionKey: 'marketArticles.privateEquity.descriptionEn', keywords: [] },
    it: { titleKey: 'marketArticles.privateEquity.titleEn', descriptionKey: 'marketArticles.privateEquity.descriptionEn', keywords: [] },
    ar: { titleKey: 'marketArticles.privateEquity.titleEn', descriptionKey: 'marketArticles.privateEquity.descriptionEn', keywords: [] },
    he: { titleKey: 'marketArticles.privateEquity.titleEn', descriptionKey: 'marketArticles.privateEquity.descriptionEn', keywords: [] },
    zh: { titleKey: 'marketArticles.privateEquity.titleEn', descriptionKey: 'marketArticles.privateEquity.descriptionEn', keywords: [] },
  },
  'enterprise-growth-strategy': {
    fr: {
      titleKey: 'marketArticles.enterpriseGrowth.title',
      descriptionKey: 'marketArticles.enterpriseGrowth.description',
      keywords: [
        'enterprise growth strategy consulting',
        'revenue growth consulting firm',
        'strategic growth advisory firm',
        'corporate scaling strategy',
      ],
    },
    en: {
      titleKey: 'marketArticles.enterpriseGrowth.titleEn',
      descriptionKey: 'marketArticles.enterpriseGrowth.descriptionEn',
      keywords: [
        'enterprise growth strategy consulting',
        'revenue growth consulting firm',
        'strategic growth advisory firm',
        'corporate scaling strategy',
      ],
    },
    de: { titleKey: 'marketArticles.enterpriseGrowth.titleEn', descriptionKey: 'marketArticles.enterpriseGrowth.descriptionEn', keywords: [] },
    nl: { titleKey: 'marketArticles.enterpriseGrowth.titleEn', descriptionKey: 'marketArticles.enterpriseGrowth.descriptionEn', keywords: [] },
    es: { titleKey: 'marketArticles.enterpriseGrowth.titleEn', descriptionKey: 'marketArticles.enterpriseGrowth.descriptionEn', keywords: [] },
    it: { titleKey: 'marketArticles.enterpriseGrowth.titleEn', descriptionKey: 'marketArticles.enterpriseGrowth.descriptionEn', keywords: [] },
    ar: { titleKey: 'marketArticles.enterpriseGrowth.titleEn', descriptionKey: 'marketArticles.enterpriseGrowth.descriptionEn', keywords: [] },
    he: { titleKey: 'marketArticles.enterpriseGrowth.titleEn', descriptionKey: 'marketArticles.enterpriseGrowth.descriptionEn', keywords: [] },
    zh: { titleKey: 'marketArticles.enterpriseGrowth.titleEn', descriptionKey: 'marketArticles.enterpriseGrowth.descriptionEn', keywords: [] },
  },
  'strategic-positioning': {
    fr: {
      titleKey: 'marketArticles.strategicPositioning.title',
      descriptionKey: 'marketArticles.strategicPositioning.description',
      keywords: [
        'global strategy consulting firm',
        'international business advisory firm',
        'cross border strategy firm',
      ],
    },
    en: {
      titleKey: 'marketArticles.strategicPositioning.titleEn',
      descriptionKey: 'marketArticles.strategicPositioning.descriptionEn',
      keywords: [
        'global strategy consulting firm',
        'international business advisory firm',
        'cross border strategy firm',
      ],
    },
    de: { titleKey: 'marketArticles.strategicPositioning.titleEn', descriptionKey: 'marketArticles.strategicPositioning.descriptionEn', keywords: [] },
    nl: { titleKey: 'marketArticles.strategicPositioning.titleEn', descriptionKey: 'marketArticles.strategicPositioning.descriptionEn', keywords: [] },
    es: { titleKey: 'marketArticles.strategicPositioning.titleEn', descriptionKey: 'marketArticles.strategicPositioning.descriptionEn', keywords: [] },
    it: { titleKey: 'marketArticles.strategicPositioning.titleEn', descriptionKey: 'marketArticles.strategicPositioning.descriptionEn', keywords: [] },
    ar: { titleKey: 'marketArticles.strategicPositioning.titleEn', descriptionKey: 'marketArticles.strategicPositioning.descriptionEn', keywords: [] },
    he: { titleKey: 'marketArticles.strategicPositioning.titleEn', descriptionKey: 'marketArticles.strategicPositioning.descriptionEn', keywords: [] },
    zh: { titleKey: 'marketArticles.strategicPositioning.titleEn', descriptionKey: 'marketArticles.strategicPositioning.descriptionEn', keywords: [] },
  },
};

export function isValidMarketArticleSlug(slug: string): slug is MarketArticleSlug {
  return MARKET_ARTICLE_SLUGS.includes(slug as MarketArticleSlug);
}
