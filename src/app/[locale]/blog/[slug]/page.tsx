import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BASE_URL } from '@/config/seo';
import { getAlternates } from '@/config/seo';
import type { Locale } from '@/i18n/config';
import { resolveParams } from '@/lib/params';
import { getPostBySlug, getAllSlugs } from '@/lib/blog';
import BlogArticle from '@/views/BlogArticle';

export const revalidate = 3600;

type Params = { locale: string; slug: string };

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  const locales: Locale[] = ['fr', 'en'];
  return locales.flatMap((locale) => slugs.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({ params }: { params: Params | Promise<Params> }): Promise<Metadata> {
  const { locale, slug } = await resolveParams(params);
  const post = getPostBySlug(slug);
  if (!post) return { title: 'Article | Ghezali International Advisory' };
  const canonical = `${BASE_URL}/${locale}/blog/${slug}`;
  const { languages } = getAlternates(`/blog/${slug}`);
  return {
    title: `${post.title} | Ghezali International Advisory`,
    description: post.description,
    alternates: { canonical, languages },
    openGraph: {
      url: canonical,
      title: post.title,
      description: post.description,
      images: post.image ? [{ url: post.image }] : undefined,
    },
    twitter: { title: post.title, description: post.description },
  };
}

export default async function Page({ params }: { params: Params | Promise<Params> }) {
  const { slug } = await resolveParams(params);
  const post = getPostBySlug(slug);
  if (!post) notFound();
  return <BlogArticle post={post} />;
}
