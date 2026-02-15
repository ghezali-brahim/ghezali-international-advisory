import React from 'react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import CompetitiveAdvantage from '../components/CompetitiveAdvantage';
import InternationalInstitutions from '../components/InternationalInstitutions';
import LeadMagnet from '../components/LeadMagnet';
import { ContextualLinks } from '../components/InternalLinks';
import { getSEOConfig, structuredData } from '../config/seo';

const Home = () => {
  const seoConfig = getSEOConfig('home');
  
  return (
    <div>
      <SEO
        title={seoConfig.title}
        description={seoConfig.description}
        keywords={seoConfig.keywords}
        canonical={seoConfig.canonical}
        structuredData={structuredData.organization}
      />
      <Hero />
      <About />
      <CompetitiveAdvantage />
      <Services />
      <LeadMagnet />
      <InternationalInstitutions />
      <Testimonials />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ContextualLinks context="home" />
      </div>
    </div>
  );
};

export default Home;