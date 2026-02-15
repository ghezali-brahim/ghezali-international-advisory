import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppProvider } from './context/AppContext';
import { AnalyticsProvider, PageViewTracker, ScrollDepthTracker, TimeOnPageTracker } from './components/Analytics';
import { PerformanceMonitor, ResourceHints, ServiceWorkerManager, CriticalCSSLoader } from './components/PerformanceOptimizer';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import PrivateCircle from './pages/PrivateCircle';
import References from './pages/References';
import Team from './pages/Team';
import Media from './pages/Media';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogArticle from './pages/BlogArticle';
import Privacy from './pages/Privacy';
import Legal from './pages/Legal';
import NewsletterPopup from './components/NewsletterPopup';

function Layout() {
  return (
    <div className="min-h-screen bg-white">
      <ResourceHints />
      <CriticalCSSLoader />
      <PerformanceMonitor />
      <ServiceWorkerManager />
      <ScrollToTop />
      <PageViewTracker pageName="Home" />
      <ScrollDepthTracker />
      <TimeOnPageTracker pageName="Home" />
      <Header />
      <Outlet />
      <Footer />
      <NewsletterPopup />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'services', element: <Services /> },
      { path: 'cercle-prive', element: <PrivateCircle /> },
      { path: 'references', element: <References /> },
      { path: 'team', element: <Team /> },
      { path: 'medias', element: <Media /> },
      { path: 'contact', element: <Contact /> },
      { path: 'blog', element: <Blog /> },
      { path: 'blog/:articleId', element: <BlogArticle articleId="1" /> },
      { path: 'privacy', element: <Privacy /> },
      { path: 'legal', element: <Legal /> },
    ],
  },
]);

function App() {
  return (
    <HelmetProvider>
      <AppProvider>
        <AnalyticsProvider>
          <RouterProvider router={router} />
        </AnalyticsProvider>
      </AppProvider>
    </HelmetProvider>
  );
}

export default App;