import type { Metadata } from 'next';
import { defaultSEO } from '../../../config/seo';
import BlogArticle from '../../../pages/BlogArticle';

interface PageProps {
  params: { articleId: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const base = 'https://www.ghezali-business.com';
  const url = `${base}/blog/${params.articleId}`;
  return {
    title: `Article | ${defaultSEO.title}`,
    description: defaultSEO.description,
    keywords: defaultSEO.keywords,
    alternates: { canonical: url },
    openGraph: { url, title: defaultSEO.title, description: defaultSEO.description },
    twitter: { title: defaultSEO.title, description: defaultSEO.description },
  };
}

export default function Page({ params }: PageProps) {
  return <BlogArticle articleId={params.articleId} />;
}
