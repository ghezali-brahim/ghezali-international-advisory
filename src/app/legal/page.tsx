import type { Metadata } from 'next';
import { defaultSEO } from '../../config/seo';
import Legal from '../../pages/Legal';

export const metadata: Metadata = {
  title: `Mentions légales | ${defaultSEO.title}`,
  description: 'Mentions légales - GHEZALI BUSINESS MASTERY.',
  alternates: { canonical: 'https://www.ghezali-business.com/legal' },
};

export default function Page() {
  return <Legal />;
}
