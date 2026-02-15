import type { Metadata } from 'next';
import { getSEOConfig, getAlternates } from '@/config/seo';
import type { Locale } from '@/i18n/config';
import { resolveParams } from '@/lib/params';
import Privacy from '@/views/Privacy';

export async function generateMetadata({ params }: { params: { locale: string } | Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await resolveParams(params);
  const seo = getSEOConfig('privacy', locale);
  const { canonical, languages } = getAlternates('/privacy');
  return {
    title: seo.title,
    description: seo.description,
    alternates: { canonical: seo.canonical ?? canonical, languages },
  };
}

export default function Page() {
  return <Privacy />;
}
