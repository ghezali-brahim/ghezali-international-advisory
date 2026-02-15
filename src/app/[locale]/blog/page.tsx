import type { Metadata } from 'next';
import { getSEOConfig, getAlternates } from '@/config/seo';
import type { Locale } from '@/i18n/config';
import { resolveParams } from '@/lib/params';
import { getAllPosts } from '@/lib/blog';
import Blog from '@/views/Blog';
import type { BlogArticleItem } from '@/views/Blog';

export const revalidate = 3600;

export async function generateMetadata({ params }: { params: { locale: string } | Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await resolveParams(params);
  const seo = getSEOConfig('blog', locale);
  const { canonical, languages } = getAlternates('/blog');
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: { canonical: seo.canonical ?? canonical, languages },
    openGraph: { url: seo.canonical, title: seo.title, description: seo.description, images: seo.ogImage ? [{ url: seo.ogImage }] : undefined },
    twitter: { title: seo.title, description: seo.description },
  };
}

function mapPostToArticleItem(post: ReturnType<typeof getAllPosts>[number]): BlogArticleItem {
  return {
    slug: post.slug,
    title: post.title,
    excerpt: post.description,
    author: post.author,
    date: post.date,
    readTime: post.readTime ?? '',
    category: post.category,
    tags: post.tags ?? [],
    image: post.image,
    featured: post.featured ?? false,
  };
}

export default function Page() {
  const posts = getAllPosts();
  const articles = posts.map(mapPostToArticleItem);
  return <Blog articles={articles} />;
}
