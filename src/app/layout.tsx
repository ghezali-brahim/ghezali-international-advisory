import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { defaultSEO, structuredData } from '../config/seo';
import ClientRoot from '../components/ClientRoot';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ghezali-business.com'),
  title: defaultSEO.title,
  description: defaultSEO.description,
  keywords: defaultSEO.keywords,
  authors: [{ name: 'Ghezali International Advisory' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: defaultSEO.canonical,
    title: 'Ghezali International Advisory - Strategic Advisory for PE, Family Offices & Institutional Investors',
    description: 'Strategic advisory for private equity, family offices and institutional investors. Portfolio transformation, board-level execution, measurable value creation.',
    images: [{ url: defaultSEO.ogImage ?? '/og-image.jpg', width: 1200, height: 630 }],
    locale: 'fr_FR',
    siteName: 'Ghezali International Advisory',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ghezali International Advisory - Strategic Advisory for PE, Family Offices & Institutional Investors',
    description: 'Strategic advisory for private equity, family offices and institutional investors. Portfolio transformation, board-level execution.',
    images: ['/twitter-image.jpg'],
  },
  alternates: { canonical: defaultSEO.canonical },
  other: {
    'geo.region': 'FR-IDF',
    'geo.placename': 'Paris La Défense',
    'geo.position': '48.8566;2.3522',
    'ICBM': '48.8566, 2.3522',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-title': 'Ghezali International Advisory',
    'mobile-web-app-capable': 'yes',
  },
  icons: {
    icon: '/favicon.ico',
  },
  manifest: '/manifest.json',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FBBF24',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  if (process.env.NODE_ENV === 'development') {
    console.log('[root layout] render');
  }
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.pexels.com" />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.organization) }}
        />
        <ClientRoot>{children}</ClientRoot>
      </body>
    </html>
  );
}
