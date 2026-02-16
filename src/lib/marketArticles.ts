import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MARKET_ARTICLE_SLUGS, isValidMarketArticleSlug } from '@/config/marketArticles';
import type { MarketArticleSlug } from '@/config/marketArticles';
import { markets } from '@/config/markets';
import type { Locale } from '@/i18n/config';

const MARKETS_CONTENT_DIR = path.join(process.cwd(), 'content', 'markets');

export interface MarketArticle {
  countrySlug: string;
  articleSlug: MarketArticleSlug;
  locale: Locale;
  title: string;
  description: string;
  keywords: string;
  content: string;
}

function getArticlePath(countrySlug: string, articleSlug: string, locale: Locale): string | null {
  const dir = path.join(MARKETS_CONTENT_DIR, countrySlug);
  if (!fs.existsSync(dir)) return null;

  const primary = path.join(dir, `${articleSlug}.${locale}.md`);
  if (fs.existsSync(primary)) return primary;

  if (locale !== 'en') {
    const fallback = path.join(dir, `${articleSlug}.en.md`);
    if (fs.existsSync(fallback)) return fallback;
  }

  return null;
}

export function getArticleBySlug(
  countrySlug: string,
  articleSlug: string,
  locale: Locale
): MarketArticle | null {
  if (!isValidMarketArticleSlug(articleSlug)) return null;

  const filePath = getArticlePath(countrySlug, articleSlug, locale);
  if (!filePath) return null;

  try {
    const raw = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(raw);
    return {
      countrySlug,
      articleSlug: articleSlug as MarketArticleSlug,
      locale,
      title: (data.title as string) || '',
      description: (data.description as string) || '',
      keywords: (data.keywords as string) || '',
      content,
    };
  } catch {
    return null;
  }
}

/** Slugs d’articles pour lesquels un contenu existe pour ce pays et cette locale. */
export function getAvailableArticleSlugs(
  countrySlug: string,
  locale: Locale
): MarketArticleSlug[] {
  const slugs: MarketArticleSlug[] = [];
  for (const slug of MARKET_ARTICLE_SLUGS) {
    if (getArticleBySlug(countrySlug, slug, locale)) {
      slugs.push(slug);
    }
  }
  return slugs;
}

export function getAllMarketArticlePaths(): {
  locale: string;
  countrySlug: string;
  articleSlug: string;
}[] {
  const params: { locale: string; countrySlug: string; articleSlug: string }[] = [];

  for (const market of markets) {
    for (const locale of market.locales) {
      for (const articleSlug of MARKET_ARTICLE_SLUGS) {
        const article = getArticleBySlug(market.slug, articleSlug, locale as Locale);
        if (article) {
          params.push({
            locale,
            countrySlug: market.slug,
            articleSlug,
          });
        }
      }
    }
  }

  return params;
}
