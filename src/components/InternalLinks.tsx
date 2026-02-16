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
            title: 'Offers for funds and family offices',
            description: 'Strategic Deals & Equity, Executive Advisory, Corporate Acceleration',
            icon: TrendingUp
          },
          {
            to: '/reseau',
            title: 'Network & Partnerships',
            description: 'Selective partnerships with funds and leaders',
            icon: Users
          },
          {
            to: '/blog',
            title: 'Read our strategic insights',
            description: 'Exclusive analysis and experience sharing',
            icon: BookOpen
          }
        ];
      
      case 'services':
        return [
          {
            to: '/private-equity',
            title: 'Private Equity',
            description: 'Strategic partner to PE funds, portfolio transformation',
            icon: TrendingUp
          },
          {
            to: '/family-office',
            title: 'Family Office',
            description: 'Strategic partner to family offices, wealth and M&A',
            icon: Users
          },
          {
            to: '/group-holding',
            title: 'Group Holding',
            description: 'Advisory for groups and holdings, structuring and valuation',
            icon: TrendingUp
          },
          {
            to: '/institutional',
            title: 'Institutional Advisory',
            description: 'Advisory for institutions and governments',
            icon: Users
          },
          {
            to: '/expertise',
            title: 'Sector expertise',
            description: 'Industry, distribution, tech, services — tailored support',
            icon: BookOpen
          },
          {
            to: '/contact',
            title: 'Request a consultation',
            description: 'Confidential discussion with our experts',
            icon: ArrowRight
          }
        ];
      
      case 'blog':
        return [
          {
            to: '/services',
            title: 'Apply these strategies',
            description: 'Our programmes to transform your business',
            icon: TrendingUp
          },
          {
            to: '/reseau',
            title: 'Network & Partnerships',
            description: 'Selective partnerships, investors and leaders network',
            icon: Users
          },
          {
            to: '/contact',
            title: 'Speak with our experts',
            description: 'Confidential discussion about your situation',
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
        You may also be interested in
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
      title: 'All our articles',
      description: 'Discover all our strategic insights',
      icon: BookOpen
    },
    {
      to: '/services',
      title: 'Our support programmes',
      description: 'Turn these insights into concrete results',
      icon: TrendingUp
    },
    {
      to: '/contact',
      title: 'Speak with our experts',
      description: 'Confidential discussion about your situation',
      icon: Users
    }
  ];

  return (
    <div className="mt-12">
      <h3 className="text-xl font-semibold text-black mb-6">
        Related resources
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
      description: 'Our premium offers'
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
      description: 'Groups and holdings'
    },
    {
      to: '/team',
      title: 'Team',
      description: 'Our experts'
    },
    {
      to: '/expertise',
      title: 'Expertise',
      description: 'Sector expertise'
    },
    {
      to: '/positioning',
      title: 'Positioning',
      description: 'Our differentiation'
    },
    {
      to: '/blog',
      title: 'Blog',
      description: 'Strategic insights'
    },
    {
      to: '/reseau',
      title: 'Network',
      description: 'Partnerships'
    },
    {
      to: '/contact',
      title: 'Contact',
      description: 'Contact us'
    }
  ];

  return (
    <div className="bg-black p-8 rounded-xl">
      <h3 className="text-xl font-semibold text-white mb-6">
        Quick navigation
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
