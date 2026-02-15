'use client';

import React, { useEffect, useRef } from 'react';
import { useAnalytics } from '../context/AppContext';

// Google Analytics Events
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

// Custom Analytics Hook
export const useAnalyticsTracking = () => {
  const { track } = useAnalytics();

  const trackPageView = (pageName: string) => {
    track('pageViews');
    trackEvent('page_view', {
      page_title: pageName,
      page_location: window.location.href,
    });
  };

  const trackFormSubmission = (formName: string, formData?: Record<string, any>) => {
    track('formSubmissions');
    trackEvent('form_submit', {
      form_name: formName,
      form_data: formData,
    });
  };

  const trackDownload = (fileName: string, fileType: string) => {
    track('downloads');
    trackEvent('file_download', {
      file_name: fileName,
      file_type: fileType,
    });
  };

  const trackClick = (elementName: string, elementType: string) => {
    trackEvent('click', {
      element_name: elementName,
      element_type: elementType,
    });
  };

  const trackScroll = (scrollDepth: number) => {
    trackEvent('scroll', {
      scroll_depth: scrollDepth,
    });
  };

  const trackTimeOnPage = (timeSpent: number, pageName: string) => {
    trackEvent('time_on_page', {
      time_spent: timeSpent,
      page_name: pageName,
    });
  };

  return {
    trackPageView,
    trackFormSubmission,
    trackDownload,
    trackClick,
    trackScroll,
    trackTimeOnPage,
  };
};

// Analytics Provider Component
export const AnalyticsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    // Only initialize analytics in production or if explicitly enabled
    if (typeof window !== 'undefined' && window.location.hostname !== 'localhost') {
      try {
        // Initialize Google Analytics (placeholder ID)
        const gaId = 'G-XXXXXXXXXX'; // Replace with your actual GA ID
        const script = document.createElement('script');
        script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
        script.async = true;
        document.head.appendChild(script);

        window.dataLayer = window.dataLayer || [];
        function gtag(...args: any[]) {
          window.dataLayer.push(args);
        }
        window.gtag = gtag;
        gtag('js', new Date());
        gtag('config', gaId);

        // Initialize Facebook Pixel (placeholder ID)
        const fbScript = document.createElement('script');
        fbScript.innerHTML = `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', 'XXXXXXXXXX');
          fbq('track', 'PageView');
        `;
        document.head.appendChild(fbScript);

        // Initialize LinkedIn Insight Tag (placeholder ID)
        const liScript = document.createElement('script');
        liScript.innerHTML = `
          _linkedin_partner_id = "XXXXXXXXXX";
          window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
          window._linkedin_data_partner_ids.push(_linkedin_partner_id);
        `;
        document.head.appendChild(liScript);

        const liScript2 = document.createElement('script');
        liScript2.src = 'https://snap.licdn.com/li.lms.js';
        liScript2.async = true;
        document.head.appendChild(liScript2);
      } catch (error) {
        console.log('Analytics initialization skipped:', error);
      }
    }
  }, []);

  return <>{children}</>;
};

// Page View Tracker (n'utilise pas le contexte pour éviter la boucle de re-render)
export const PageViewTracker: React.FC<{ pageName: string }> = ({ pageName }) => {
  const lastTrackedRef = useRef<string | null>(null);

  useEffect(() => {
    if (lastTrackedRef.current === pageName) return;
    lastTrackedRef.current = pageName;
    trackEvent('page_view', {
      page_title: pageName,
      page_location: typeof window !== 'undefined' ? window.location.href : '',
    });
  }, [pageName]);

  return null;
};

// Scroll Depth Tracker
export const ScrollDepthTracker: React.FC = () => {
  const { trackScroll } = useAnalyticsTracking();

  useEffect(() => {
    let maxScrollDepth = 0;

    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);

      if (scrollPercent > maxScrollDepth) {
        maxScrollDepth = scrollPercent;
        if ([25, 50, 75, 100].includes(scrollPercent)) {
          trackScroll(scrollPercent);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};

// Time on Page Tracker
export const TimeOnPageTracker: React.FC<{ pageName: string }> = ({ pageName }) => {
  const { trackTimeOnPage } = useAnalyticsTracking();

  useEffect(() => {
    const startTime = Date.now();

    const handleBeforeUnload = () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      trackTimeOnPage(timeSpent, pageName);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageName]);

  return null;
};

// Conversion Tracking
export const trackConversion = (conversionType: string, value?: number, currency?: string) => {
  // Google Analytics Enhanced Ecommerce
  if (window.gtag) {
    window.gtag('event', 'purchase', {
      transaction_id: Date.now().toString(),
      value: value || 0,
      currency: currency || 'EUR',
      items: [{
        item_id: conversionType,
        item_name: conversionType,
        category: 'Business Service',
        quantity: 1,
        price: value || 0,
      }],
    });
  }

  // Facebook Pixel
  if (window.fbq) {
    window.fbq('track', 'Purchase', {
      value: value || 0,
      currency: currency || 'EUR',
    });
  }

  // LinkedIn Insight Tag
  if (window.lintrk) {
    window.lintrk('track', { conversion_id: conversionType });
  }
};

// Lead Tracking
export const trackLead = (leadType: string, leadValue?: number) => {
  trackEvent('lead_generation', {
    lead_type: leadType,
    lead_value: leadValue || 0,
  });

  // Facebook Pixel Lead Event
  if (window.fbq) {
    window.fbq('track', 'Lead', {
      value: leadValue || 0,
      currency: 'EUR',
    });
  }
};

// Custom Event Tracking
export const trackCustomEvent = (eventName: string, parameters?: Record<string, any>) => {
  trackEvent(eventName, parameters);
  
  // Send to custom analytics endpoint
  fetch('/api/analytics', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      event: eventName,
      parameters,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
    }),
  }).catch(error => {
    console.error('Analytics tracking error:', error);
  });
};

export default {
  useAnalyticsTracking,
  AnalyticsProvider,
  PageViewTracker,
  ScrollDepthTracker,
  TimeOnPageTracker,
  trackConversion,
  trackLead,
  trackCustomEvent,
};
