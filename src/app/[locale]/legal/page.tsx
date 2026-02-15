import type { Metadata } from 'next';
import { getSEOConfig, getAlternates } from '../../../config/seo';
import type { Locale } from '../../../i18n/config';
import { resolveParams } from '../../../lib/params';
import Legal from '../../../pages/Legal';

export async function generateMetadata({ params }: { params: { locale: string } | Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await resolveParams(params);
  const seo = getSEOConfig('legal', locale);
  const { canonical, languages } = getAlternates('/legal');
  return {
    title: seo.title,
    description: seo.description,
    alternates: { canonical: seo.canonical ?? canonical, languages },
  };
}

export default async function Page({ params }: { params: { locale: string } | Promise<{ locale: string }> }) {
  const { locale } = await resolveParams(params);
  return <Legal locale={locale} />;
}
