import type { Metadata } from 'next';
import { getSEOConfig } from '../../config/seo';
import Contact from '../../pages/Contact';

const seo = getSEOConfig('contact');

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: seo.canonical },
  openGraph: { url: seo.canonical, title: seo.title, description: seo.description, images: seo.ogImage ? [{ url: seo.ogImage }] : undefined },
  twitter: { title: seo.title, description: seo.description },
};

export default function Page() {
  return <Contact />;
}
