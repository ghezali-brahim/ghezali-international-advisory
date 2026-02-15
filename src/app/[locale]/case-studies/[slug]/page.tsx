import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BASE_URL } from '../../../../config/seo';
import { getAlternates } from '../../../../config/seo';
import type { Locale } from '../../../../i18n/config';
import { resolveParams } from '../../../../lib/params';
import { getCaseStudyBySlug, getAllCaseStudySlugs } from '../../../../lib/caseStudies';
import CaseStudyDetail from '../../../../pages/CaseStudyDetail';

export const revalidate = 3600;

type Params = { locale: string; slug: string };

export async function generateStaticParams() {
  const slugs = getAllCaseStudySlugs();
  const locales: Locale[] = ['fr', 'en'];
  return locales.flatMap((locale) => slugs.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({ params }: { params: Params | Promise<Params> }): Promise<Metadata> {
  const { locale, slug } = await resolveParams(params);
  const study = getCaseStudyBySlug(slug);
  if (!study) return { title: 'Étude de cas | Ghezali International Advisory' };
  const canonical = `${BASE_URL}/${locale}/case-studies/${slug}`;
  const { languages } = getAlternates(`/case-studies/${slug}`);
  return {
    title: `${study.title} | Ghezali International Advisory`,
    description: study.summary,
    alternates: { canonical, languages },
    openGraph: { url: canonical, title: study.title, description: study.summary },
    twitter: { title: study.title, description: study.summary },
  };
}

export default async function Page({ params }: { params: Params | Promise<Params> }) {
  const { slug } = await resolveParams(params);
  const study = getCaseStudyBySlug(slug);
  if (!study) notFound();
  return <CaseStudyDetail study={study} />;
}
