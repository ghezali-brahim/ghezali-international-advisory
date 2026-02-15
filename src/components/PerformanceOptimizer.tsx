'use client';

import { Suspense, lazy, useEffect, useState, useRef, type FC, type ReactNode } from 'react';
import { LoadingSpinner } from './Animations';

// Lazy loading des composants lourds
const CaseStudies = lazy(() => import('./CaseStudies'));
const IndustryExpertise = lazy(() => import('./IndustryExpertise'));
const ProcessTimeline = lazy(() => import('./ProcessTimeline'));
const Team = lazy(() => import('./Team'));

// Image lazy loading component
export const LazyImage: FC<{
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  placeholder?: string;
}> = ({ src, alt, className = '', loading = 'lazy', placeholder = '' }) => {
  const [imageSrc, setImageSrc] = useState(placeholder || 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PC9zdmc+');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageSrc(src);
      setIsLoaded(true);
    };
    img.src = src;
  }, [src]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={imageSrc}
        alt={alt}
        loading={loading}
        className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-50'}`}
      />
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <LoadingSpinner size="md" color="gray" />
        </div>
      )}
    </div>
  );
};

// Preloader component
export const Preloader: FC = () => {
  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="text-center">
        <div className="mb-4">
          <LoadingSpinner size="lg" color="yellow" />
        </div>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Ghezali International Advisory
        </h2>
        <p className="text-gray-600">Chargement en cours...</p>
      </div>
    </div>
  );
};

// Suspense wrapper avec fallback
export const SuspenseWrapper: FC<{
  children: ReactNode;
  fallback?: ReactNode;
}> = ({ children, fallback = <LoadingSpinner size="md" /> }) => {
  return <Suspense fallback={fallback}>{children}</Suspense>;
};

// Intersection Observer pour le lazy loading
export const useIntersectionObserver = (
  callback: () => void,
  options: IntersectionObserverInit = {}
) => {
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const target = targetRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        callback();
        observer.unobserve(target);
      }
    }, options);

    observer.observe(target);

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, [callback, options]);

  return targetRef;
};

// Performance monitoring
export const PerformanceMonitor: FC = () => {
  useEffect(() => {
    // Core Web Vitals monitoring (simplified)
    if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
      console.log('Performance monitoring active');
    }

    // Performance API monitoring
    if ('performance' in window) {
      window.addEventListener('load', () => {
        setTimeout(() => {
          const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          
          console.log('Performance Metrics:', {
            domContentLoaded: perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart,
            loadComplete: perfData.loadEventEnd - perfData.loadEventStart,
            firstByte: perfData.responseStart - perfData.requestStart,
            domInteractive: perfData.domInteractive - perfData.startTime,
          });
        }, 0);
      });
    }
  }, []);

  return null;
};

// Resource hints
export const ResourceHints: FC = () => {
  useEffect(() => {
    // Preconnect to external domains
    const domains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      'https://images.pexels.com',
      'https://www.google-analytics.com',
    ];

    domains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      document.head.appendChild(link);
    });

    // Preload critical resources
    const criticalResources = [
      { href: '/src/components/Hero.tsx', as: 'script' },
      { href: '/src/components/Header.tsx', as: 'script' },
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource.href;
      link.as = resource.as;
      document.head.appendChild(link);
    });
  }, []);

  return null;
};

// Bundle analyzer (dev only)
export const BundleAnalyzer: FC = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
      // Log bundle size information
      console.log('Bundle Analysis:', {
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        connection: (navigator as any).connection?.effectiveType || 'unknown',
      });
    }
  }, []);

  return null;
};

// Service Worker registration
export const ServiceWorkerManager: FC = () => {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then(registration => {
            console.log('SW registered: ', registration);
          })
          .catch(registrationError => {
            console.log('SW registration failed: ', registrationError);
          });
      });
    }
  }, []);

  return null;
};

// Memory usage monitor
export const MemoryMonitor: FC = () => {
  useEffect(() => {
    if ('memory' in performance) {
      const logMemory = () => {
        const memory = (performance as any).memory;
        console.log('Memory Usage:', {
          used: Math.round(memory.usedJSHeapSize / 1048576) + ' MB',
          total: Math.round(memory.totalJSHeapSize / 1048576) + ' MB',
          limit: Math.round(memory.jsHeapSizeLimit / 1048576) + ' MB',
        });
      };

      // Log memory usage every 30 seconds
      const interval = setInterval(logMemory, 30000);
      return () => clearInterval(interval);
    }
  }, []);

  return null;
};

// Critical CSS loader
export const CriticalCSSLoader: FC = () => {
  useEffect(() => {
    // Load critical CSS inline for above-the-fold content
    const criticalCSS = `
      /* Critical CSS for above-the-fold content */
      .hero-section { min-height: 100vh; }
      .header { position: fixed; top: 0; width: 100%; z-index: 50; }
      .loading-spinner { animation: spin 1s linear infinite; }
      @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
    `;

    const style = document.createElement('style');
    style.textContent = criticalCSS;
    document.head.appendChild(style);
  }, []);

  return null;
};

const performanceOptimizerExport = {
  LazyImage,
  Preloader,
  SuspenseWrapper,
  useIntersectionObserver,
  PerformanceMonitor,
  ResourceHints,
  BundleAnalyzer,
  ServiceWorkerManager,
  MemoryMonitor,
  CriticalCSSLoader,
};
export default performanceOptimizerExport;
