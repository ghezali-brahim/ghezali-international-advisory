'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { AppProvider } from '../context/AppContext';
import { AnalyticsProvider, PageViewTracker, ScrollDepthTracker, TimeOnPageTracker } from './Analytics';
import { PerformanceMonitor, ResourceHints, ServiceWorkerManager, CriticalCSSLoader } from './PerformanceOptimizer';
import Header from './Header';
import ScrollToTop from './ScrollToTop';
import Footer from './Footer';
import NewsletterPopup from './NewsletterPopup';

const pathnameToPageName: Record<string, string> = {
  '/': 'Home',
  '/services': 'Services',
  '/cercle-prive': 'Private Circle',
  '/references': 'References',
  '/team': 'Team',
  '/medias': 'Media',
  '/contact': 'Contact',
  '/blog': 'Blog',
  '/privacy': 'Privacy',
  '/legal': 'Legal',
};

function getPageName(pathname: string): string {
  if (pathnameToPageName[pathname]) return pathnameToPageName[pathname];
  if (pathname.startsWith('/blog/')) return 'Blog Article';
  return 'Page';
}

export default function ClientRoot({ children }: { children: React.ReactNode }) {
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
