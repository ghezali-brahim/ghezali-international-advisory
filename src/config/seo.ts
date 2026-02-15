// Configuration SEO centralisée pour toutes les pages du site

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string;
  ogImage?: string;
  canonical?: string;
}

export const defaultSEO: SEOConfig = {
  title: "GHEZALI BUSINESS MASTERY - Partenaire Stratégique Fonds PE & Family Offices",
  description: "Partenaire stratégique des fonds PE, family offices et holdings. Transformation de portefeuille, mandats limités, sur invitation. +500M€ de valorisation créée.",
  keywords: "fonds private equity, family office, partenaire stratégique portefeuille, transformation portefeuille, M&A, ETI, valorisation",
  ogImage: "https://www.ghezali-business.com/og-image.jpg",
  canonical: "https://www.ghezali-business.com/"
};

export const pageSEO: Record<string, SEOConfig> = {
  home: {
    title: "GHEZALI BUSINESS MASTERY - Partenaire Stratégique Fonds PE & Family Offices | Accélération Portefeuille",
    description: "Partenaire stratégique des fonds PE, family offices et holdings. Transformation de portefeuille, mandats limités, sur invitation. +500M€ de valorisation créée, 15 pays. Un contrat, plusieurs sociétés transformées.",
    keywords: "fonds private equity, family office, holding entrepreneur, partenaire stratégique portefeuille, transformation portefeuille, M&A fonds, accélération stratégique, ETI, valorisation entreprise, executive advisory, Paris La Défense",
    canonical: "https://www.ghezali-business.com/"
  },
  
  services: {
    title: "Offres Fonds PE & Family Offices - Strategic Deals, Executive Advisory | GHEZALI",
    description: "Strategic Deals & Equity (100k-300k€/an par portefeuille, equity, success fee), Executive Advisory, Corporate Acceleration. Partenaire stratégique du portefeuille. Mandats limités.",
    keywords: "fonds private equity, family office, strategic deals, transformation portefeuille, executive advisory, corporate acceleration, M&A, valorisation",
    canonical: "https://www.ghezali-business.com/services"
  },
  
  privateCircle: {
    title: "Cercle Privé - Réseau Exclusif de Dirigeants d'Exception | GHEZALI",
    description: "Rejoignez notre cercle privé de 500+ dirigeants d'élite. Networking premium, masterminds exclusifs, deals privés et expertise partagée. Admission sur candidature.",
    keywords: "cercle privé, réseau dirigeants, networking premium, masterminds, deals privés, club affaires exclusif",
    canonical: "https://www.ghezali-business.com/cercle-prive"
  },
  
  references: {
    title: "Études de Cas et Références - 200+ ETI Transformées | GHEZALI",
    description: "Découvrez nos succès clients : +500M€ de valorisation créée, 200+ ETI accompagnées. Études de cas détaillées et témoignages de dirigeants. ROI mesurable et prouvé.",
    keywords: "études de cas, références clients, success stories, témoignages dirigeants, valorisation entreprise, transformation ETI",
    canonical: "https://www.ghezali-business.com/references"
  },
  
  team: {
    title: "Notre Équipe d'Experts - 20 Ans d'Excellence Business | GHEZALI",
    description: "Équipe d'experts seniors avec 20 ans d'expérience. Anciens dirigeants, experts M&A et stratégie. Intervention directe du fondateur sur chaque mission.",
    keywords: "équipe experts, consultants seniors, experts stratégie, experts M&A, dirigeants expérimentés",
    canonical: "https://www.ghezali-business.com/team"
  },
  
  media: {
    title: "Ressources Premium - Publications, Webinars et Insights | GHEZALI",
    description: "Accédez à nos ressources exclusives : guides stratégiques, webinars avec experts, études sectorielles. Contenu premium pour dirigeants d'exception.",
    keywords: "publications premium, webinars stratégie, guides entreprise, ressources dirigeants, insights business",
    canonical: "https://www.ghezali-business.com/medias"
  },
  
  contact: {
    title: "Contact - Demander une invitation | Fonds PE, Family Offices | GHEZALI",
    description: "Vérifiez votre éligibilité ou demandez une invitation. Fonds, family offices, holdings. Paris La Défense, Londres, New York. Réponse sous 24h.",
    keywords: "contact fonds PE, family office, demander invitation, éligibilité, Paris La Défense, cabinet conseil investisseurs",
    canonical: "https://www.ghezali-business.com/contact"
  },
  
  blog: {
    title: "Blog - Insights Stratégiques et Analyses Business | GHEZALI",
    description: "Découvrez nos analyses exclusives, stratégies éprouvées et retours d'expérience pour transformer votre entreprise. Articles par nos experts en conseil stratégique, M&A et transformation d'ETI.",
    keywords: "blog conseil stratégique, analyses business, insights ETI, articles M&A, transformation entreprise, stratégie corporate",
    canonical: "https://www.ghezali-business.com/blog"
  }
};

// Fonction helper pour obtenir la config SEO d'une page
export const getSEOConfig = (page: string): SEOConfig => {
  return pageSEO[page] || defaultSEO;
};

// Mots-clés principaux pour le site
export const primaryKeywords = [
  "conseil stratégique premium",
  "cabinet conseil ETI",
  "transformation entreprise",
  "valorisation entreprise",
  "M&A conseil",
  "executive advisory",
  "corporate acceleration",
  "levée de fonds",
  "cabinet conseil Paris",
  "consultant stratégie entreprise"
];

// Données structurées pour différents types de contenu
export const structuredData = {
  organization: {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "GHEZALI BUSINESS MASTERY",
    "alternateName": "GBM",
    "url": "https://www.ghezali-business.com",
    "logo": "https://www.ghezali-business.com/logo.png",
    "description": "Cabinet premium d'accélération stratégique pour dirigeants ambitieux",
    "telephone": "+33-1-XX-XX-XX-XX",
    "email": "contact@ghezali-business.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Tour Majunga, 6 Place de la Pyramide",
      "addressLocality": "Courbevoie",
      "postalCode": "92400",
      "addressRegion": "Île-de-France",
      "addressCountry": "FR"
    },
    "sameAs": [
      "https://www.linkedin.com/company/ghezali-business-mastery",
      "https://twitter.com/ghezali_business"
    ],
    "founder": {
      "@type": "Person",
      "name": "Ghezali"
    }
  },
  
  breadcrumb: (items: { name: string; url: string }[]) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  }),
  
  service: (name: string, description: string, price: string) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": name,
    "provider": {
      "@type": "ProfessionalService",
      "name": "GHEZALI BUSINESS MASTERY"
    },
    "description": description,
    "offers": {
      "@type": "Offer",
      "price": price,
      "priceCurrency": "EUR"
    }
  })
};

