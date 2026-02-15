import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getMarketSEOConfig, getMarketAlternates } from '../../../../config/seo';
import { getMarketBySlug, getMarketStaticParams } from '../../../../config/markets';
import type { Locale } from '../../../../i18n/config';
import { isValidLocale } from '../../../../i18n/config';
import { resolveParams } from '../../../../lib/params';
import MarketPage from '../../../../pages/MarketPage';

export const revalidate = 3600;

type Params = { locale: string; countrySlug: string };

export async function generateStaticParams() {
  return getMarketStaticParams();
}

export async function generateMetadata({ params }: { params: Params | Promise<Params> }): Promise<Metadata> {
  const { locale, countrySlug } = await resolveParams(params);
  if (!isValidLocale(locale)) return { title: 'Ghezali International Advisory' };
  const seo = getMarketSEOConfig(countrySlug, locale);
  const alternates = getMarketAlternates(countrySlug);
  if (!seo || !alternates) return { title: 'Ghezali International Advisory' };
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: { canonical: seo.canonical, languages: alternates.languages },
    openGraph: { url: seo.canonical, title: seo.title, description: seo.description },
    twitter: { title: seo.title, description: seo.description },
  };
}

export default async function Page({ params }: { params: Params | Promise<Params> }) {
  const { locale, countrySlug } = await resolveParams(params);
  const market = getMarketBySlug(countrySlug);
  if (!market || !isValidLocale(locale) || !market.locales.includes(locale as Locale)) notFound();
  return <MarketPage market={market} locale={locale} />;
}
