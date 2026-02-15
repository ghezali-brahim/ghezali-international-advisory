import type { Metadata } from 'next';
import { getSEOConfig, getAlternates } from '../../../config/seo';
import type { Locale } from '../../../i18n/config';
import { resolveParams } from '../../../lib/params';
import { getAllCaseStudies } from '../../../lib/caseStudies';
import CaseStudiesListPage from '../../../pages/CaseStudiesList';

export async function generateMetadata({ params }: { params: { locale: string } | Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await resolveParams(params);
  const seo = getSEOConfig('caseStudies', locale);
  const { canonical, languages } = getAlternates('/case-studies');
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: { canonical: seo.canonical ?? canonical, languages },
    openGraph: { url: seo.canonical, title: seo.title, description: seo.description },
    twitter: { title: seo.title, description: seo.description },
  };
}

export default async function Page() {
  const studies = getAllCaseStudies();
  return <CaseStudiesListPage studies={studies} />;
}
