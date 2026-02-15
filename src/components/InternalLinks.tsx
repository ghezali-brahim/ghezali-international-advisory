'use client';

import type { FC, ComponentType } from 'react';
import Link from 'next/link';
import { LocaleLink } from './LocaleLink';
import { ArrowRight, ExternalLink, TrendingUp, Users, BookOpen } from 'lucide-react';

interface InternalLinkProps {
  to: string;
  title: string;
  description: string;
  icon?: ComponentType<any>;
  className?: string;
  external?: boolean;
}

const InternalLink: FC<InternalLinkProps> = ({ 
  to, 
  title, 
  description, 
  icon: Icon, 
  className = "",
  external = false 
}) => {
  const linkContent = (
    <div className={`group ${className}`}>
      <div className="flex items-start space-x-4">
        {Icon && (
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-yellow-100 group-hover:bg-yellow-200 rounded-lg flex items-center justify-center transition-colors">
              <Icon className="h-6 w-6 text-yellow-600" />
            </div>
          </div>
        )}
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-black group-hover:text-yellow-600 transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 text-sm mt-1">
            {description}
          </p>
        </div>
        <div className="flex-shrink-0">
          {external ? (
            <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-yellow-600 transition-colors" />
          ) : (
            <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-yellow-600 transition-colors" />
          )}
        </div>
      </div>
    </div>
  );

  if (external) {
    return (
      <a href={to} className="block">
        {linkContent}
      </a>
    );
  }

  return (
    <LocaleLink href={to} className="block">
      {linkContent}
    </LocaleLink>
  );
};

// Composant pour les liens internes contextuels
export const ContextualLinks: FC<{ context: string }> = ({ context }) => {
  const getLinksForContext = (context: string) => {
    switch (context) {
      case 'home':
        return [
          {
            to: '/services',
            title: 'Offres pour fonds et family offices',
            description: 'Strategic Deals & Equity, Executive Advisory, Corporate Acceleration',
            icon: TrendingUp
          },
          {
            to: '/reseau',
            title: 'Réseau & Partenariats',
            description: 'Partenariats sélectifs avec fonds et dirigeants',
            icon: Users
          },
          {
            to: '/blog',
            title: 'Lire nos insights stratégiques',
            description: 'Analyses exclusives et retours d\'expérience',
            icon: BookOpen
          }
        ];
      
      case 'services':
        return [
          {
            to: '/private-equity',
            title: 'Private Equity',
            description: 'Partenaire stratégique des fonds PE, transformation de portefeuille',
            icon: TrendingUp
          },
          {
            to: '/family-office',
            title: 'Family Office',
            description: 'Partenaire stratégique des family offices, patrimoine et M&A',
            icon: Users
          },
          {
            to: '/group-holding',
            title: 'Group Holding',
            description: 'Conseil aux groupes et holdings, structuration et valorisation',
            icon: TrendingUp
          },
          {
            to: '/institutional',
            title: 'Institutional Advisory',
            description: 'Conseil aux institutions et gouvernements',
            icon: Users
          },
          {
            to: '/case-studies',
            title: 'Études de cas premium',
            description: 'Références détaillées et retours d\'expérience',
            icon: BookOpen
          },
          {
            to: '/references',
            title: 'Références et témoignages',
            description: 'Découvrez comment nous avons transformé 200+ ETI',
            icon: TrendingUp
          },
          {
            to: '/contact',
            title: 'Demander une consultation',
            description: 'Échange confidentiel avec nos experts',
            icon: ArrowRight
          }
        ];
      
      case 'blog':
        return [
          {
            to: '/services',
            title: 'Appliquer ces stratégies',
            description: 'Nos programmes d\'accompagnement pour transformer votre entreprise',
            icon: TrendingUp
          },
          {
            to: '/reseau',
            title: 'Réseau & Partenariats',
            description: 'Partenariats sélectifs, réseau d\'investisseurs et de dirigeants',
            icon: Users
          },
          {
            to: '/contact',
            title: 'Échanger avec nos experts',
            description: 'Discussion confidentielle sur votre situation',
            icon: ArrowRight
          }
        ];
      
      default:
        return [];
    }
  };

  const links = getLinksForContext(context);

  if (links.length === 0) return null;

  return (
    <div className="bg-gray-50 p-8 rounded-xl">
      <h3 className="text-xl font-semibold text-black mb-6">
        Vous pourriez aussi être intéressé par
      </h3>
      <div className="space-y-4">
        {links.map((link, index) => (
          <InternalLink
            key={index}
            to={link.to}
            title={link.title}
            description={link.description}
            icon={link.icon}
            className="p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
          />
        ))}
      </div>
    </div>
  );
};

// Composant pour les liens d'articles de blog
export const BlogRelatedLinks: FC = () => {
  const relatedLinks = [
    {
      to: '/blog',
      title: 'Tous nos articles',
      description: 'Découvrez tous nos insights stratégiques',
      icon: BookOpen
    },
    {
      to: '/services',
      title: 'Nos programmes d\'accompagnement',
      description: 'Transformez ces insights en résultats concrets',
      icon: TrendingUp
    },
    {
      to: '/contact',
      title: 'Échange avec nos experts',
      description: 'Discussion confidentielle sur votre situation',
      icon: Users
    }
  ];

  return (
    <div className="mt-12">
      <h3 className="text-xl font-semibold text-black mb-6">
        Ressources complémentaires
      </h3>
      <div className="grid md:grid-cols-3 gap-6">
        {relatedLinks.map((link, index) => (
          <InternalLink
            key={index}
            to={link.to}
            title={link.title}
            description={link.description}
            icon={link.icon}
            className="p-6 bg-white rounded-lg border border-gray-200 hover:border-yellow-300 hover:shadow-md transition-all"
          />
        ))}
      </div>
    </div>
  );
};

// Composant pour les liens de navigation rapide
export const QuickNavigation: FC = () => {
  const quickLinks = [
    {
      to: '/services',
      title: 'Services',
      description: 'Nos offres premium'
    },
    {
      to: '/private-equity',
      title: 'Private Equity',
      description: 'Fonds PE'
    },
    {
      to: '/family-office',
      title: 'Family Office',
      description: 'Family offices'
    },
    {
      to: '/group-holding',
      title: 'Group Holding',
      description: 'Groupes et holdings'
    },
    {
      to: '/team',
      title: 'Équipe',
      description: 'Nos experts'
    },
    {
      to: '/references',
      title: 'Références',
      description: 'Témoignages'
    },
    {
      to: '/case-studies',
      title: 'Études de cas',
      description: 'Case studies premium'
    },
    {
      to: '/positioning',
      title: 'Positionnement',
      description: 'Notre différenciation'
    },
    {
      to: '/blog',
      title: 'Blog',
      description: 'Insights stratégiques'
    },
    {
      to: '/reseau',
      title: 'Réseau',
      description: 'Partenariats'
    },
    {
      to: '/contact',
      title: 'Contact',
      description: 'Nous contacter'
    }
  ];

  return (
    <div className="bg-black p-8 rounded-xl">
      <h3 className="text-xl font-semibold text-white mb-6">
        Navigation rapide
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {quickLinks.map((link, index) => (
          <Link
            key={index}
            href={link.to}
            className="group p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors block"
          >
            <h4 className="text-white font-medium group-hover:text-yellow-400 transition-colors">
              {link.title}
            </h4>
            <p className="text-gray-400 text-sm mt-1">
              {link.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default InternalLink;
