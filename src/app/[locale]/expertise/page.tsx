import type { Metadata } from 'next';
import { getSEOConfig, getAlternates } from '@/config/seo';
import { resolveParams } from '@/lib/params';
import Expertise from '@/views/Expertise';

export async function generateMetadata({ params }: { params: { locale: string } | Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await resolveParams(params);
  const seo = getSEOConfig('expertise', locale);
  const { canonical, languages } = getAlternates('/expertise');
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
  return <Expertise />;
}
