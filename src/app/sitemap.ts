import type { MetadataRoute } from 'next';
import { BASE_URL } from '@/config/seo';
import { locales } from '@/i18n/config';
import { getMarketStaticParams } from '@/config/markets';
import { getAllPosts } from '@/lib/blog';

const staticPaths = [
  '',
  '/services',
  '/reseau',
  '/expertise',
  '/team',
  '/medias',
  '/contact',
  '/blog',
  '/legal',
  '/privacy',
  '/private-equity',
  '/institutional',
  '/family-office',
  '/group-holding',
  '/positioning',
  '/capital-partnerships',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastMod = new Date();
  const entries: MetadataRoute.Sitemap = [];
  const posts = getAllPosts();

  for (const locale of locales) {
    for (const path of staticPaths) {
      const url = `${BASE_URL}/${locale}${path}`;
      entries.push({
        url,
        lastModified: lastMod,
        changeFrequency: path === '' || path === '/blog' ? 'weekly' : 'monthly',
        priority: path === '' ? 1 : path === '/services' || path === '/contact' ? 0.9 : path === '/blog' ? 0.8 : 0.7,
      });
    }
    for (const post of posts) {
      entries.push({
        url: `${BASE_URL}/${locale}/blog/${post.slug}`,
        lastModified: post.date ? new Date(post.date) : lastMod,
        changeFrequency: 'weekly',
        priority: 0.7,
      });
    }
  }

  const marketParams = getMarketStaticParams();
  for (const { locale, countrySlug } of marketParams) {
    entries.push({
      url: `${BASE_URL}/${locale}/markets/${countrySlug}`,
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.6,
    });
  }

  return entries;
}
