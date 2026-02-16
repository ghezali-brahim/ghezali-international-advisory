'use client';

import { LocaleLink } from '@/components/LocaleLink';
import { ArrowRight, TrendingUp, Briefcase, BarChart3, Crosshair } from 'lucide-react';
import type { MarketConfig } from '@/config/markets';
import { MARKET_ARTICLE_SLUGS } from '@/config/marketArticles';
import type { MarketArticleSlug } from '@/config/marketArticles';

const ARTICLE_ICONS = {
  'international-growth-strategy': TrendingUp,
  'private-equity-consulting': Briefcase,
  'enterprise-growth-strategy': BarChart3,
  'strategic-positioning': Crosshair,
} as const;

/** Contenu anglais fixe des cartes d’articles marchés (non traduit). */
const MARKET_ARTICLES_EN: Record<
  MarketArticleSlug,
  { title: string; description: string }
> = {
  'international-growth-strategy': {
    title: 'International Growth Strategy',
    description:
      'International growth strategy and cross-border expansion for investors.',
  },
  'private-equity-consulting': {
    title: 'Private Equity Consulting',
    description: 'PE fund support and portfolio value creation.',
  },
  'enterprise-growth-strategy': {
    title: 'Enterprise Growth Strategy',
    description:
      'Growth strategy and corporate scaling for mid-market.',
  },
  'strategic-positioning': {
    title: 'Strategic Positioning',
    description:
      'Global strategy consulting and international positioning.',
  },
};

interface MarketArticleCardsProps {
  market: MarketConfig;
  locale: string;
  /** Slug of the current article to exclude (e.g. for "related articles" block) */
  excludeSlug?: MarketArticleSlug;
  /** Si fourni, n'afficher que les cartes pour ces slugs (articles existants). Sinon, tous les slugs. */
  availableSlugs?: MarketArticleSlug[];
  /** Layout: "grid" shows 2 cols, "related" shows 3 cards in a row */
  variant?: 'grid' | 'related';
}

export function MarketArticleCards({
  market,
  locale,
  excludeSlug,
  availableSlugs,
  variant = 'grid',
}: MarketArticleCardsProps) {
  const baseSlugs = availableSlugs ?? [...MARKET_ARTICLE_SLUGS];
  const slugs = excludeSlug ? baseSlugs.filter((s) => s !== excludeSlug) : baseSlugs;

  return (
    <div
      className={
        variant === 'related'
          ? 'grid md:grid-cols-3 gap-6'
          : 'grid md:grid-cols-2 gap-6'
      }
    >
      {slugs.map((slug) => {
        const { title, description } = MARKET_ARTICLES_EN[slug];
        const Icon = ARTICLE_ICONS[slug];
        return (
          <LocaleLink
            key={slug}
            href={`/markets/${market.slug}/${slug}`}
            className="group block p-6 rounded-xl bg-white border border-gray-200 hover:border-yellow-300 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-yellow-100 group-hover:bg-yellow-200 flex items-center justify-center transition-colors">
                <Icon className="h-6 w-6 text-yellow-600" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-black group-hover:text-yellow-600 transition-colors">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm mt-1 line-clamp-2">
                  {description}
                </p>
                <span className="inline-flex items-center mt-3 text-sm font-medium text-yellow-600 group-hover:underline">
                  Read article
                  <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </div>
            </div>
          </LocaleLink>
        );
      })}
    </div>
  );
}
