import type { Metadata } from 'next';
import { getSEOConfig, getAlternates } from '@/config/seo';
import type { Locale } from '@/i18n/config';
import { resolveParams } from '@/lib/params';
import FamilyOfficePage from '@/views/FamilyOffice';

export async function generateMetadata({ params }: { params: { locale: string } | Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await resolveParams(params);
  const seo = getSEOConfig('familyOffice', locale);
  const { canonical, languages } = getAlternates('/family-office');
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: { canonical: seo.canonical ?? canonical, languages },
    openGraph: { url: seo.canonical, title: seo.title, description: seo.description, images: seo.ogImage ? [{ url: seo.ogImage }] : undefined },
    twitter: { title: seo.title, description: seo.description },
  };
}

export default function Page() {
  return <FamilyOfficePage />;
}
