// Configuration SEO centralisée pour toutes les pages du site

import type { Locale } from '@/i18n/config';
import { locales, defaultLocale, isValidLocale } from '@/i18n/config';
import { getMarketBySlug } from '@/config/markets';

export const BASE_URL = 'https://www.ghezali-business.com';

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string;
  ogImage?: string;
  canonical?: string;
}

export const defaultSEO: SEOConfig = {
  title: "Ghezali International Advisory - Strategic Advisory for PE, Family Offices & Institutional Investors",
  description: "Strategic advisory for private equity, family offices and institutional investors. Portfolio transformation, board-level execution, measurable value creation. +500M€ de valorisation créée.",
  keywords: "fonds private equity, family office, strategic advisory, transformation portefeuille, M&A, ETI, valorisation, institutional investors",
  ogImage: `${BASE_URL}/og-image.jpg`,
  canonical: `${BASE_URL}/`
};

const pageSEOFr: Record<string, SEOConfig> = {
  home: {
    title: "Ghezali International Advisory - Strategic Advisory for PE, Family Offices & Institutional Investors",
    description: "Strategic advisory for private equity, family offices and institutional investors. Portfolio transformation, board-level execution, measurable value creation. +500M€ de valorisation créée, 15 pays. Un contrat, plusieurs sociétés transformées.",
    keywords: "fonds private equity, family office, holding, partenaire stratégique portefeuille, transformation portefeuille, M&A fonds, executive advisory, ETI, valorisation entreprise, Paris La Défense",
    canonical: `${BASE_URL}/fr`
  },
  services: {
    title: "Offres PE & Family Offices - Strategic Deals, Executive Advisory, Institutional | Ghezali International Advisory",
    description: "Strategic Deals & Equity (100k-300k€/an par portefeuille, equity, success fee), Executive Advisory, Corporate Acceleration, Institutional Advisory. Partenaire stratégique du portefeuille.",
    keywords: "fonds private equity, family office, strategic deals, transformation portefeuille, executive advisory, corporate acceleration, M&A, valorisation, institutional advisory",
    canonical: `${BASE_URL}/fr/services`
  },
  privateCircle: {
    title: "Réseau & Partenariats | Ghezali International Advisory",
    description: "Partenariats sélectifs avec fonds PE, family offices et institutions. Réseau d'investisseurs et de dirigeants, valeur advisory partagée.",
    keywords: "réseau investisseurs, partenariats fonds PE, family office, advisory, confidentialité",
    canonical: `${BASE_URL}/fr/reseau`
  },
  reseau: {
    title: "Réseau & Partenariats | Ghezali International Advisory",
    description: "Partenariats sélectifs avec fonds PE, family offices et institutions. Réseau d'investisseurs et de dirigeants, valeur advisory partagée, confidentialité absolue.",
    keywords: "réseau investisseurs, partenariats fonds PE, family office, advisory, confidentialité",
    canonical: `${BASE_URL}/fr/reseau`
  },
  references: {
    title: "Études de Cas et Références - 200+ ETI Transformées | Ghezali International Advisory",
    description: "Découvrez nos succès clients : +500M€ de valorisation créée, 200+ ETI accompagnées. Études de cas détaillées et témoignages de dirigeants. ROI mesurable et prouvé.",
    keywords: "études de cas, références clients, success stories, témoignages dirigeants, valorisation entreprise, transformation ETI",
    canonical: `${BASE_URL}/fr/references`
  },
  team: {
    title: "Notre Équipe d'Experts - 20 Ans d'Excellence | Ghezali International Advisory",
    description: "Équipe d'experts seniors avec 20 ans d'expérience. Anciens dirigeants, experts M&A et stratégie. Intervention directe du fondateur sur chaque mission.",
    keywords: "équipe experts, consultants seniors, experts stratégie, experts M&A, dirigeants expérimentés",
    canonical: `${BASE_URL}/fr/team`
  },
  media: {
    title: "Ressources - Publications, Webinars et Insights | Ghezali International Advisory",
    description: "Guides stratégiques, webinars avec experts, études sectorielles. Contenu pour fonds, family offices et dirigeants.",
    keywords: "publications, webinars stratégie, guides entreprise, ressources dirigeants, insights business",
    canonical: `${BASE_URL}/fr/medias`
  },
  contact: {
    title: "Contact - Fonds PE, Family Offices, Institutions | Ghezali International Advisory",
    description: "Échange sur votre mandat. Fonds, family offices, institutions. Paris La Défense, Londres, New York. Réponse sous 24h.",
    keywords: "contact fonds PE, family office, contact cabinet conseil investisseurs, Paris La Défense",
    canonical: `${BASE_URL}/fr/contact`
  },
  blog: {
    title: "Blog - Insights Stratégiques et Analyses Business | Ghezali International Advisory",
    description: "Analyses, stratégies éprouvées et retours d'expérience. Conseil stratégique, M&A et transformation d'ETI.",
    keywords: "blog conseil stratégique, analyses business, insights ETI, articles M&A, transformation entreprise, stratégie corporate",
    canonical: `${BASE_URL}/fr/blog`
  },
  legal: {
    title: `Mentions légales | ${defaultSEO.title}`,
    description: "Mentions légales - Ghezali International Advisory.",
    keywords: "mentions légales, legal, Ghezali International Advisory",
    canonical: `${BASE_URL}/fr/legal`
  },
  privacy: {
    title: `Politique de confidentialité | ${defaultSEO.title}`,
    description: "Politique de confidentialité et protection des données - Ghezali International Advisory.",
    keywords: "confidentialité, RGPD, données personnelles",
    canonical: `${BASE_URL}/fr/privacy`
  },
  privateEquity: {
    title: "Private Equity - Partenaire Stratégique Fonds | Ghezali International Advisory",
    description: "Accompagnement des fonds PE : transformation portefeuille, board-level execution, M&A et valorisation. Un contrat, plusieurs sociétés transformées.",
    keywords: "private equity, fonds PE, transformation portefeuille, M&A, valorisation, executive advisory",
    canonical: `${BASE_URL}/fr/private-equity`
  },
  institutional: {
    title: "Institutional Advisory - Conseil Institutions & Gouvernements | Ghezali International Advisory",
    description: "Conseil aux institutions et gouvernements. Références internationales, task forces, mandats stratégiques.",
    keywords: "institutional advisory, conseil institutions, gouvernements, références internationales",
    canonical: `${BASE_URL}/fr/institutional`
  },
  familyOffice: {
    title: "Family Office - Partenaire Stratégique Patrimoine & Investissements | Ghezali International Advisory",
    description: "Accompagnement des family offices : stratégie patrimoniale, diversification, M&A et valorisation. Discrétion, exécution au niveau board, création de valeur mesurable.",
    keywords: "family office, conseil patrimoine, diversification investissements, M&A family office, valorisation, strategic advisory",
    canonical: `${BASE_URL}/fr/family-office`
  },
  groupHolding: {
    title: "Group Holding - Conseil Stratégique Groupes & Holdings | Ghezali International Advisory",
    description: "Conseil aux groupes et holdings : structuration, M&A, transformation et valorisation. Un partenaire au niveau du board pour piloter la croissance.",
    keywords: "group holding, conseil holding, structuration groupe, M&A holding, transformation groupe, valorisation",
    canonical: `${BASE_URL}/fr/group-holding`
  },
  positioning: {
    title: "Notre Positionnement - Différenciation & Valeur | Ghezali International Advisory",
    description: "Positionnement unique : partenaire stratégique des fonds PE, family offices et institutions. Différenciation, cibles et preuves de valeur.",
    keywords: "positionnement stratégique, différenciation conseil, partenaire fonds PE, valeur advisory",
    canonical: `${BASE_URL}/fr/positioning`
  },
  caseStudies: {
    title: "Études de Cas Premium - Références Détaillées | Ghezali International Advisory",
    description: "Études de cas détaillées : transformation d'ETI, valorisation, M&A. Références premium et retours d'expérience clients.",
    keywords: "études de cas, case studies, références clients, transformation ETI, valorisation, M&A",
    canonical: `${BASE_URL}/fr/case-studies`
  }
};

const pageSEOEn: Record<string, SEOConfig> = {
  home: {
    title: "Ghezali International Advisory - Strategic Advisory for PE, Family Offices & Institutional Investors",
    description: "Strategic advisory for private equity, family offices and institutional investors. Portfolio transformation, board-level execution, measurable value creation. +500M€ value created, 15 countries.",
    keywords: "private equity, family office, strategic advisory, portfolio transformation, M&A, mid-market, value creation, institutional investors",
    canonical: `${BASE_URL}/en`
  },
  services: {
    title: "PE & Family Office Offerings - Strategic Deals, Executive Advisory, Institutional | Ghezali International Advisory",
    description: "Strategic Deals & Equity (100k-300k€/year per portfolio, equity, success fee), Executive Advisory, Corporate Acceleration, Institutional Advisory.",
    keywords: "private equity, family office, strategic deals, portfolio transformation, executive advisory, M&A, value creation, institutional advisory",
    canonical: `${BASE_URL}/en/services`
  },
  privateCircle: {
    title: "Network & Partnerships | Ghezali International Advisory",
    description: "Selective partnerships with PE funds, family offices and institutions. Network of investors and executives.",
    keywords: "investor network, PE partnerships, family office, advisory, confidentiality",
    canonical: `${BASE_URL}/en/reseau`
  },
  reseau: {
    title: "Network & Partnerships | Ghezali International Advisory",
    description: "Selective partnerships with PE funds, family offices and institutions. Network of investors and executives, absolute confidentiality.",
    keywords: "investor network, PE partnerships, family office, advisory, confidentiality",
    canonical: `${BASE_URL}/en/reseau`
  },
  references: {
    title: "Case Studies & References - 200+ Mid-Market Companies Transformed | Ghezali International Advisory",
    description: "Client success stories: +500M€ value created, 200+ companies supported. Case studies and executive testimonials.",
    keywords: "case studies, client references, success stories, testimonials, value creation",
    canonical: `${BASE_URL}/en/references`
  },
  team: {
    title: "Our Expert Team - 20 Years of Excellence | Ghezali International Advisory",
    description: "Senior expert team with 20 years of experience. Former executives, M&A and strategy experts.",
    keywords: "expert team, senior consultants, strategy experts, M&A experts",
    canonical: `${BASE_URL}/en/team`
  },
  media: {
    title: "Resources - Publications, Webinars & Insights | Ghezali International Advisory",
    description: "Strategic guides, expert webinars, sector studies. Content for funds, family offices and executives.",
    keywords: "publications, strategy webinars, guides, executive resources, business insights",
    canonical: `${BASE_URL}/en/medias`
  },
  contact: {
    title: "Contact - PE Funds, Family Offices, Institutions | Ghezali International Advisory",
    description: "Discuss your mandate. Funds, family offices, institutions. Paris La Défense, London, New York. Response within 24h.",
    keywords: "contact PE funds, family office, advisory contact, Paris La Défense",
    canonical: `${BASE_URL}/en/contact`
  },
  blog: {
    title: "Blog - Strategic Insights & Business Analysis | Ghezali International Advisory",
    description: "Analysis, proven strategies and experience. Strategic advisory, M&A and mid-market transformation.",
    keywords: "strategy blog, business analysis, M&A articles, corporate transformation",
    canonical: `${BASE_URL}/en/blog`
  },
  legal: {
    title: `Legal | ${defaultSEO.title}`,
    description: "Legal information - Ghezali International Advisory.",
    keywords: "legal, legal notice, Ghezali International Advisory",
    canonical: `${BASE_URL}/en/legal`
  },
  privacy: {
    title: `Privacy Policy | ${defaultSEO.title}`,
    description: "Privacy policy and data protection - Ghezali International Advisory.",
    keywords: "privacy, GDPR, personal data",
    canonical: `${BASE_URL}/en/privacy`
  },
  privateEquity: {
    title: "Private Equity - Strategic Partner for Funds | Ghezali International Advisory",
    description: "Support for PE funds: portfolio transformation, board-level execution, M&A and value creation.",
    keywords: "private equity, PE funds, portfolio transformation, M&A, value creation, executive advisory",
    canonical: `${BASE_URL}/en/private-equity`
  },
  institutional: {
    title: "Institutional Advisory - Institutions & Governments | Ghezali International Advisory",
    description: "Advisory for institutions and governments. International references, task forces, strategic mandates.",
    keywords: "institutional advisory, institutions, governments, international references",
    canonical: `${BASE_URL}/en/institutional`
  },
  familyOffice: {
    title: "Family Office - Strategic Partner for Wealth & Investments | Ghezali International Advisory",
    description: "Support for family offices: wealth strategy, diversification, M&A and value creation. Discretion, board-level execution, measurable results.",
    keywords: "family office, wealth advisory, investment diversification, M&A family office, value creation, strategic advisory",
    canonical: `${BASE_URL}/en/family-office`
  },
  groupHolding: {
    title: "Group Holding - Strategic Advisory for Groups & Holdings | Ghezali International Advisory",
    description: "Advisory for groups and holdings: structuring, M&A, transformation and value creation. Board-level partner for growth.",
    keywords: "group holding, holding advisory, group structuring, M&A holding, group transformation, value creation",
    canonical: `${BASE_URL}/en/group-holding`
  },
  positioning: {
    title: "Our Positioning - Differentiation & Value | Ghezali International Advisory",
    description: "Unique positioning: strategic partner for PE funds, family offices and institutions. Differentiation, targets and proof of value.",
    keywords: "strategic positioning, advisory differentiation, PE partner, advisory value",
    canonical: `${BASE_URL}/en/positioning`
  },
  caseStudies: {
    title: "Premium Case Studies - Detailed References | Ghezali International Advisory",
    description: "Detailed case studies: mid-market transformation, value creation, M&A. Premium references and client experience.",
    keywords: "case studies, client references, mid-market transformation, value creation, M&A",
    canonical: `${BASE_URL}/en/case-studies`
  }
};

export const pageSEO: Record<string, SEOConfig> = {
  ...pageSEOFr,
};

const pageSEOByLocale: Record<Locale, Record<string, SEOConfig>> = {
  fr: pageSEOFr,
  en: pageSEOEn
};

export function getSEOConfig(page: string, locale: string = defaultLocale): SEOConfig {
  const loc: Locale = isValidLocale(locale) ? locale : defaultLocale;
  const byLocale = pageSEOByLocale[loc] ?? pageSEOFr;
  return byLocale[page] ?? defaultSEO;
}

/** pathWithoutLocale: '' pour home, '/services', '/blog', '/blog/slug' */
export function getAlternates(
  pathWithoutLocale: string,
  localeList: readonly Locale[] = locales
): { canonical: string; languages: Record<string, string> } {
  const path = pathWithoutLocale.startsWith('/') ? pathWithoutLocale : `/${pathWithoutLocale}`;
  const languages: Record<string, string> = {};
  for (const loc of localeList) {
    const segment = path === '/' ? '' : path;
    languages[loc] = `${BASE_URL}/${loc}${segment}`;
  }
  languages['x-default'] = `${BASE_URL}/${defaultLocale}${path === '/' ? '' : path}`;
  const canonical = languages[defaultLocale] ?? `${BASE_URL}/${defaultLocale}${path}`;
  return { canonical, languages };
}

/** Alternates (hreflang + canonical) pour une page marché : uniquement les locales proposées pour ce marché. */
export function getMarketAlternates(countrySlug: string): { canonical: string; languages: Record<string, string> } | null {
  const market = getMarketBySlug(countrySlug);
  if (!market) return null;
  const path = `/markets/${countrySlug}`;
  const languages: Record<string, string> = {};
  for (const loc of market.locales) {
    languages[loc] = `${BASE_URL}/${loc}${path}`;
  }
  languages['x-default'] = `${BASE_URL}/${market.defaultLocale}${path}`;
  const canonical = `${BASE_URL}/${market.defaultLocale}${path}`;
  return { canonical, languages };
}

/** Config SEO pour une page marché (titre/description par locale). */
export function getMarketSEOConfig(countrySlug: string, locale: Locale): SEOConfig | null {
  const market = getMarketBySlug(countrySlug);
  if (!market || !market.locales.includes(locale)) return null;
  const name = locale === 'fr' ? market.name : market.nameEn;
  const title =
    locale === 'fr'
      ? `Ghezali International Advisory - ${name} | Conseil Stratégique & M&A`
      : `Ghezali International Advisory - ${name} | Strategic Advisory & M&A`;
  const description =
    locale === 'fr'
      ? `Conseil stratégique et M&A pour investisseurs en ${name}. Transformation portefeuille, valorisation, accompagnement fonds PE et family offices.`
      : `Strategic advisory and M&A for investors in ${name}. Portfolio transformation, value creation, support for PE funds and family offices.`;
  return {
    title,
    description,
    keywords: locale === 'fr' ? 'conseil stratégique, M&A, valorisation, private equity, family office' : 'strategic advisory, M&A, value creation, private equity, family office',
    canonical: `${BASE_URL}/${locale}/markets/${countrySlug}`,
  };
}

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
    "name": "Ghezali International Advisory",
    "alternateName": "GIA",
    "url": "https://www.ghezali-business.com",
    "logo": "https://www.ghezali-business.com/logo.png",
    "description": "Strategic advisory for private equity, family offices and institutional investors. Portfolio transformation, board-level execution, measurable value creation.",
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
      "https://www.linkedin.com/company/ghezali-international-advisory",
      "https://twitter.com/ghezali_advisory"
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
      "name": "Ghezali International Advisory"
    },
    "description": description,
    "offers": {
      "@type": "Offer",
      "price": price,
      "priceCurrency": "EUR"
    }
  })
};

