import React from 'react';
import SEO from '../components/SEO';
import Team from '../components/Team';
import { getSEOConfig, structuredData } from '../config/seo';

const TeamPage = () => {
  const seoConfig = getSEOConfig('team');
  
  const breadcrumbData = structuredData.breadcrumb([
    { name: 'Accueil', url: 'https://www.ghezali-business.com/' },
    { name: 'Équipe', url: 'https://www.ghezali-business.com/team' }
  ]);

  return (
    <div className="pt-16">
      <SEO
        title={seoConfig.title}
        description={seoConfig.description}
        keywords={seoConfig.keywords}
        canonical={seoConfig.canonical}
        structuredData={breadcrumbData}
      />
      <Team />
    </div>
  );
};

export default TeamPage;