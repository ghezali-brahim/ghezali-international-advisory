'use client';

import { createContext, useContext, useReducer, type FC, type ReactNode } from 'react';

// Types
interface User {
  name: string;
  email: string;
  company: string;
  role: string;
  phone?: string;
}

interface NewsletterState {
  isSubscribed: boolean;
  email: string;
  preferences: {
    monthlyInsights: boolean;
    caseStudies: boolean;
    marketUpdates: boolean;
  };
}

interface LeadMagnetState {
  downloadedGuides: string[];
  formData: {
    name: string;
    email: string;
    company: string;
    role: string;
  };
}

interface AppState {
  user: User | null;
  newsletter: NewsletterState;
  leadMagnet: LeadMagnetState;
  analytics: {
    pageViews: number;
    formSubmissions: number;
    downloads: number;
  };
  ui: {
    theme: 'light' | 'dark';
    language: 'fr' | 'en';
    isLoading: boolean;
    notifications: Notification[];
  };
}

// Actions
type AppAction =
  | { type: 'SET_USER'; payload: User }
  | { type: 'UPDATE_NEWSLETTER'; payload: Partial<NewsletterState> }
  | { type: 'UPDATE_LEAD_MAGNET'; payload: Partial<LeadMagnetState> }
  | { type: 'INCREMENT_ANALYTICS'; payload: keyof AppState['analytics'] }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'ADD_NOTIFICATION'; payload: Notification }
  | { type: 'REMOVE_NOTIFICATION'; payload: string }
  | { type: 'SET_THEME'; payload: 'light' | 'dark' }
  | { type: 'SET_LANGUAGE'; payload: 'fr' | 'en' };

// Initial State
const initialState: AppState = {
  user: null,
  newsletter: {
    isSubscribed: false,
    email: '',
    preferences: {
      monthlyInsights: true,
      caseStudies: true,
      marketUpdates: true,
    },
  },
  leadMagnet: {
    downloadedGuides: [],
    formData: {
      name: '',
      email: '',
      company: '',
      role: '',
    },
  },
  analytics: {
    pageViews: 0,
    formSubmissions: 0,
    downloads: 0,
  },
  ui: {
    theme: 'light',
    language: 'fr',
    isLoading: false,
    notifications: [],
  },
};

// Reducer
const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    
    case 'UPDATE_NEWSLETTER':
      return {
        ...state,
        newsletter: { ...state.newsletter, ...action.payload },
      };
    
    case 'UPDATE_LEAD_MAGNET':
      return {
        ...state,
        leadMagnet: { ...state.leadMagnet, ...action.payload },
      };
    
    case 'INCREMENT_ANALYTICS':
      return {
        ...state,
        analytics: {
          ...state.analytics,
          [action.payload]: state.analytics[action.payload] + 1,
        },
      };
    
    case 'SET_LOADING':
      return {
        ...state,
        ui: { ...state.ui, isLoading: action.payload },
      };
    
    case 'ADD_NOTIFICATION':
      return {
        ...state,
        ui: {
          ...state.ui,
          notifications: [...state.ui.notifications, action.payload],
        },
      };
    
    case 'REMOVE_NOTIFICATION':
      return {
        ...state,
        ui: {
          ...state.ui,
          notifications: state.ui.notifications.filter(n => n.id !== action.payload),
        },
      };
    
    case 'SET_THEME':
      return {
        ...state,
        ui: { ...state.ui, theme: action.payload },
      };
    
    case 'SET_LANGUAGE':
      return {
        ...state,
        ui: { ...state.ui, language: action.payload },
      };
    
    default:
      return state;
  }
};

// Context
const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
} | null>(null);

// Provider
export const AppProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

// Hook
export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

// Custom Hooks
export const useUser = () => {
  const { state, dispatch } = useApp();
  return {
    user: state.user,
    setUser: (user: User) => dispatch({ type: 'SET_USER', payload: user }),
  };
};

export const useNewsletter = () => {
  const { state, dispatch } = useApp();
  return {
    newsletter: state.newsletter,
    updateNewsletter: (updates: Partial<NewsletterState>) =>
      dispatch({ type: 'UPDATE_NEWSLETTER', payload: updates }),
  };
};

export const useLeadMagnet = () => {
  const { state, dispatch } = useApp();
  return {
    leadMagnet: state.leadMagnet,
    updateLeadMagnet: (updates: Partial<LeadMagnetState>) =>
      dispatch({ type: 'UPDATE_LEAD_MAGNET', payload: updates }),
  };
};

export const useAnalytics = () => {
  const { state, dispatch } = useApp();
  return {
    analytics: state.analytics,
    track: (event: keyof AppState['analytics']) =>
      dispatch({ type: 'INCREMENT_ANALYTICS', payload: event }),
  };
};

export const useUI = () => {
  const { state, dispatch } = useApp();
  return {
    ui: state.ui,
    setLoading: (loading: boolean) => dispatch({ type: 'SET_LOADING', payload: loading }),
    addNotification: (notification: Notification) =>
      dispatch({ type: 'ADD_NOTIFICATION', payload: notification }),
    removeNotification: (id: string) =>
      dispatch({ type: 'REMOVE_NOTIFICATION', payload: id }),
    setTheme: (theme: 'light' | 'dark') => dispatch({ type: 'SET_THEME', payload: theme }),
    setLanguage: (language: 'fr' | 'en') => dispatch({ type: 'SET_LANGUAGE', payload: language }),
  };
};

export default AppContext;
