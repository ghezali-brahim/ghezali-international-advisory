import type { Metadata } from 'next';
import { defaultSEO } from '../../config/seo';
import Privacy from '../../pages/Privacy';

export const metadata: Metadata = {
  title: `Politique de confidentialité | ${defaultSEO.title}`,
  description: 'Politique de confidentialité et protection des données - GHEZALI BUSINESS MASTERY.',
  alternates: { canonical: 'https://www.ghezali-business.com/privacy' },
};

export default function Page() {
  return <Privacy />;
}
