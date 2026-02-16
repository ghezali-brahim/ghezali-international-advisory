'use client';

import type { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { AppProvider } from '@/context/AppContext';
import { AnalyticsProvider, PageViewTracker, ScrollDepthTracker, TimeOnPageTracker } from './Analytics';
import { PerformanceMonitor, ResourceHints, ServiceWorkerManager, CriticalCSSLoader } from './PerformanceOptimizer';
import { getPathWithoutLocale } from '@/i18n/config';
import Header from './Header';
import ScrollToTop from './ScrollToTop';
import Footer from './Footer';
import NewsletterPopup from './NewsletterPopup';

function getPageName(pathname: string): string {
  const withoutLocale = getPathWithoutLocale(pathname) || '/';
  const map: Record<string, string> = {
    '/': 'Home',
    '/services': 'Services',
    '/reseau': 'Réseau',
    '/expertise': 'Expertise',
    '/team': 'Team',
    '/medias': 'Media',
    '/contact': 'Contact',
    '/blog': 'Blog',
    '/privacy': 'Privacy',
    '/legal': 'Legal',
    '/private-equity': 'Private Equity',
    '/institutional': 'Institutional',
  };
  if (map[withoutLocale]) return map[withoutLocale];
  if (/^\/blog\//.test(withoutLocale)) return 'Blog Article';
  return 'Page';
}

export default function ClientRoot({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const pageName = getPageName(pathname ?? '/');

  return (
    <AppProvider>
      <AnalyticsProvider>
        <div className="min-h-screen bg-white">
          <ResourceHints />
          <CriticalCSSLoader />
          <PerformanceMonitor />
          <ServiceWorkerManager />
          <ScrollToTop />
          <PageViewTracker pageName={pageName} />
          <ScrollDepthTracker />
          <TimeOnPageTracker pageName={pageName} />
          <Header />
          {children}
          <Footer />
          <NewsletterPopup />
        </div>
      </AnalyticsProvider>
    </AppProvider>
  );
}
