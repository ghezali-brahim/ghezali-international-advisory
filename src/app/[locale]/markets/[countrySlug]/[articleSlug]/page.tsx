import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BASE_URL } from '@/config/seo';
import { getMarketArticleAlternates } from '@/config/seo';
import { getMarketBySlug } from '@/config/markets';
import { isValidMarketArticleSlug } from '@/config/marketArticles';
import { getArticleBySlug, getAllMarketArticlePaths } from '@/lib/marketArticles';
import { resolveParams } from '@/lib/params';
import type { Locale } from '@/i18n/config';
import { isValidLocale } from '@/i18n/config';
import MarketArticlePage from '@/views/MarketArticlePage';

export const revalidate = 3600;

type Params = { locale: string; countrySlug: string; articleSlug: string };

export async function generateStaticParams() {
  return getAllMarketArticlePaths();
}

export async function generateMetadata({
  params,
}: {
  params: Params | Promise<Params>;
}): Promise<Metadata> {
  const { locale, countrySlug, articleSlug } = await resolveParams(params);
  if (!isValidLocale(locale) || !isValidMarketArticleSlug(articleSlug)) {
    return { title: 'Ghezali International Advisory' };
  }
  const market = getMarketBySlug(countrySlug);
  if (!market || !market.locales.includes(locale as Locale)) {
    return { title: 'Ghezali International Advisory' };
  }
  const article = getArticleBySlug(countrySlug, articleSlug, locale as Locale);
  if (!article) return { title: 'Ghezali International Advisory' };

  const baseTitle = 'Ghezali International Advisory';
  const title = article.title ? `${article.title} | ${baseTitle}` : baseTitle;
  const alternates = getMarketArticleAlternates(countrySlug, articleSlug, locale as Locale);

  return {
    title,
    description: article.description,
    keywords: article.keywords,
    alternates: alternates
      ? { canonical: alternates.canonical, languages: alternates.languages }
      : undefined,
    openGraph: {
      url: alternates?.canonical ?? `${BASE_URL}/${locale}/markets/${countrySlug}/${articleSlug}`,
      title,
      description: article.description,
    },
    twitter: { title, description: article.description },
  };
}

export default async function Page({ params }: { params: Params | Promise<Params> }) {
  const { locale, countrySlug, articleSlug } = await resolveParams(params);

  if (!isValidLocale(locale) || !isValidMarketArticleSlug(articleSlug)) {
    notFound();
  }

  const market = getMarketBySlug(countrySlug);
  if (!market || !market.locales.includes(locale as Locale)) {
    notFound();
  }

  const article = getArticleBySlug(countrySlug, articleSlug, locale as Locale);
  if (!article) notFound();

  return (
    <MarketArticlePage article={article} market={market} locale={locale} />
  );
}
