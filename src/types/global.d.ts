// Déclarations globales TypeScript pour Ghezali International Advisory

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    fbq: (...args: any[]) => void;
    lintrk: (...args: any[]) => void;
    dataLayer: any[];
    _linkedin_partner_id: string;
    _linkedin_data_partner_ids: string[];
  }

  interface Performance {
    memory?: {
      usedJSHeapSize: number;
      totalJSHeapSize: number;
      jsHeapSizeLimit: number;
    };
  }

  interface Notification {
    id: string;
    type: 'success' | 'error' | 'warning' | 'info';
    title: string;
    message: string;
    duration?: number;
  }

  interface Navigator {
    connection?: {
      effectiveType: string;
    };
  }
}

export {};
