import { LocaleLink } from '@/components/LocaleLink';
import { MarketArticleCards } from '@/components/MarketArticleCards';
import type { MarketConfig } from '@/config/markets';
import { getAvailableArticleSlugs } from '@/lib/marketArticles';
import type { Locale } from '@/i18n/config';
import { Globe, ArrowRight } from 'lucide-react';

interface MarketPageProps {
  market: MarketConfig;
  locale: string;
}

const MarketPage = ({ market, locale }: MarketPageProps) => {
  const name = market.nameEn;
  const availableSlugs = getAvailableArticleSlugs(market.slug, locale as Locale);

  return (
    <div className="pt-16">
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 backdrop-blur-sm mb-4 sm:mb-6">
            <Globe className="h-4 w-4 text-yellow-400 mr-2" />
            <span className="text-yellow-400 text-xs sm:text-sm font-medium">{name}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4 sm:mb-6">
            Ghezali International Advisory in <span className="text-yellow-400">{name}</span>
          </h1>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-4 sm:mb-6" />
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Strategic and M&A advisory for investors in {name}. Portfolio transformation, valuation, PE fund and family office support. International presence, measurable results.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 md:gap-12">
            <div className="p-5 sm:p-6 lg:p-8 rounded-2xl bg-gray-50">
              <h2 className="text-lg sm:text-xl font-serif text-black mb-3 sm:mb-4">Our segments in {name}</h2>
              <p className="text-gray-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                Private Equity, Family Office, Group Holding and Institutional Advisory. A board-level partner for your local and international mandates.
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <LocaleLink href="/private-equity" className="border-2 border-black text-black hover:bg-black hover:text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium transition-all duration-300 min-h-[44px] inline-flex items-center">
                  Private Equity
                </LocaleLink>
                <LocaleLink href="/family-office" className="border-2 border-black text-black hover:bg-black hover:text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium transition-all duration-300 min-h-[44px] inline-flex items-center">
                  Family Office
                </LocaleLink>
                <LocaleLink href="/group-holding" className="border-2 border-black text-black hover:bg-black hover:text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium transition-all duration-300 min-h-[44px] inline-flex items-center">
                  Group Holding
                </LocaleLink>
                <LocaleLink href="/institutional" className="border-2 border-black text-black hover:bg-black hover:text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium transition-all duration-300 min-h-[44px] inline-flex items-center">
                  Institutional
                </LocaleLink>
              </div>
            </div>
            <div className="p-5 sm:p-6 lg:p-8 rounded-2xl bg-gray-50">
              <h2 className="text-lg sm:text-xl font-serif text-black mb-3 sm:mb-4">Case studies and references</h2>
              <p className="text-gray-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                Discover our premium case studies and client references. +500M€ value created, 200+ mid-market companies supported.
              </p>
              <LocaleLink href="/expertise" className="inline-flex items-center bg-yellow-400 text-black hover:bg-yellow-500 px-5 sm:px-6 py-3 rounded-lg font-medium transition-all duration-300 min-h-[44px]">
                View case studies
                <ArrowRight className="ml-2 h-4 w-4" />
              </LocaleLink>
            </div>
          </div>
        </div>
      </section>

      {availableSlugs.length > 0 && (
        <section className="py-12 sm:py-16 lg:py-24 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-black mb-2">
              Strategic resources
            </h2>
            <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
              Articles and analysis for investors in {name}
            </p>
            <MarketArticleCards market={market} locale={locale} availableSlugs={availableSlugs} />
          </div>
        </section>
      )}

      <section className="py-12 sm:py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-black mb-4 sm:mb-6">
            Discuss your mandate
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-6 sm:mb-10">
            Paris La Défense, London, New York. Response within 24h.
          </p>
          <LocaleLink href="/contact" className="bg-yellow-400 text-black hover:bg-yellow-500 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 inline-flex items-center min-h-[44px]">
            Contact us
            <ArrowRight className="ml-2 h-5 w-5" />
          </LocaleLink>
        </div>
      </section>
    </div>
  );
};

export default MarketPage;
