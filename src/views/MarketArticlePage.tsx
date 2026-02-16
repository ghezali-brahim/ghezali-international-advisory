import { LocaleLink } from '@/components/LocaleLink';
import { MarketArticleCards } from '@/components/MarketArticleCards';
import { ArrowLeft, ChevronRight, Globe, TrendingUp, Shield, Briefcase, FileText, ArrowRight } from 'lucide-react';
import type { MarketArticle } from '@/lib/marketArticles';
import { getAvailableArticleSlugs } from '@/lib/marketArticles';
import type { MarketConfig } from '@/config/markets';
import { parseArticleSections } from '@/lib/parseArticleHtml';
import type { MarketArticleSlug } from '@/config/marketArticles';
import type { Locale } from '@/i18n/config';

function getSectionIcon(title: string) {
  const t = title.toLowerCase();
  if (t.includes('introduction') || t.includes('why')) return Globe;
  if (t.includes('market') || t.includes('opportunit')) return TrendingUp;
  if (t.includes('regulatory') || t.includes('framework')) return Shield;
  if (t.includes('advisory') || t.includes('approach')) return Briefcase;
  if (t.includes('case') || t.includes('reference')) return FileText;
  return Globe;
}

interface MarketArticlePageProps {
  article: MarketArticle;
  market: MarketConfig;
  locale: string;
}

const MarketArticlePage = ({ article, market, locale }: MarketArticlePageProps) => {
  const countryName = market.nameEn;
  const isRtl = locale === 'ar';
  const sections = parseArticleSections(article.content);
  const availableSlugs = getAvailableArticleSlugs(market.slug, locale as Locale);
  const relatedSlugs = availableSlugs.filter((s) => s !== article.articleSlug);

  const t = {
    home: 'Home',
    markets: 'Markets',
    backTo: `Back to ${countryName}`,
    discussMandate: 'Discuss your mandate',
    contactSubline: 'Paris La Défense, London, New York. Response within 24h.',
    contact: 'Contact us',
    relatedTitle: `Strategic resources in ${countryName}`,
  };

  return (
    <div className="pt-16" dir={isRtl ? 'rtl' : undefined}>
      {/* Breadcrumb - compact band */}
      <section className="py-4 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-600 flex-wrap" aria-label="Breadcrumb">
            <LocaleLink href="/" className="hover:text-yellow-600 transition-colors">
              {t.home}
            </LocaleLink>
            <ChevronRight className={`h-4 w-4 text-gray-400 flex-shrink-0 ${isRtl ? 'rotate-180' : ''}`} />
            <LocaleLink href="/" className="hover:text-yellow-600 transition-colors">
              {t.markets}
            </LocaleLink>
            <ChevronRight className={`h-4 w-4 text-gray-400 flex-shrink-0 ${isRtl ? 'rotate-180' : ''}`} />
            <LocaleLink href={`/markets/${market.slug}`} className="hover:text-yellow-600 transition-colors">
              {countryName}
            </LocaleLink>
            <ChevronRight className={`h-4 w-4 text-gray-400 flex-shrink-0 ${isRtl ? 'rotate-180' : ''}`} />
            <span className="text-gray-900 font-medium truncate max-w-[200px]">{article.title}</span>
          </nav>
          <LocaleLink
            href={`/markets/${market.slug}`}
            className="inline-flex items-center mt-2 text-gray-600 hover:text-yellow-600 transition-colors text-sm"
          >
            <ArrowLeft className={`h-4 w-4 mr-2 flex-shrink-0 ${isRtl ? 'rotate-180' : ''}`} />
            {t.backTo}
          </LocaleLink>
        </div>
      </section>

      {/* Hero */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 backdrop-blur-sm mb-4 sm:mb-6">
            <Globe className="h-4 w-4 text-yellow-400 mr-2" />
            <span className="text-yellow-400 text-xs sm:text-sm font-medium">{countryName}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif text-white mb-4 sm:mb-6 leading-tight">
            {article.title}
          </h1>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-4 sm:mb-6" />
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {article.description}
          </p>
        </div>
      </section>

      {/* Table of contents */}
      {sections.length > 1 && (
        <section className="py-6 bg-white border-b border-gray-100 sticky top-16 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex gap-4 overflow-x-auto pb-2 scrollbar-thin" aria-label="Table des matières">
              {sections.map((s, i) => (
                <a
                  key={i}
                  href={`#section-${i}`}
                  className="flex-shrink-0 text-sm text-gray-600 hover:text-yellow-600 transition-colors whitespace-nowrap px-3 py-1 rounded-lg hover:bg-gray-50"
                >
                  {s.title}
                </a>
              ))}
            </nav>
          </div>
        </section>
      )}

      {/* Parsed sections with alternating backgrounds */}
      {sections.map((section, i) => {
        const Icon = getSectionIcon(section.title);
        return (
          <section
            key={i}
            id={`section-${i}`}
            className={`py-10 sm:py-14 lg:py-16 scroll-mt-32 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
          >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              {section.title ? (
                <div
                  className={`mb-6 sm:mb-8 flex items-center gap-3 sm:gap-4 ${isRtl ? 'flex-row-reverse border-r-4 border-yellow-400 pr-4 sm:pr-6' : 'border-l-4 border-yellow-400 pl-4 sm:pl-6'}`}
                >
                  <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-yellow-600 flex-shrink-0" />
                  <h2 className="text-xl sm:text-2xl font-serif text-black m-0">
                    {section.title}
                  </h2>
                </div>
              ) : null}
              <div
                className={`prose prose-lg max-w-none prose-headings:font-serif prose-a:text-yellow-600 prose-a:no-underline hover:prose-a:underline ${isRtl ? 'prose prose-rtl' : ''}`}
                style={{ lineHeight: '1.7', fontSize: '18px', color: '#374151' }}
                dangerouslySetInnerHTML={{ __html: section.content }}
              />
            </div>
          </section>
        );
      })}

      {/* Related articles */}
      {relatedSlugs.length > 0 && (
        <section className="py-12 sm:py-16 lg:py-24 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-black mb-6 sm:mb-8">
              {t.relatedTitle}
            </h2>
            <MarketArticleCards
              market={market}
              locale={locale}
              availableSlugs={availableSlugs}
              excludeSlug={article.articleSlug as MarketArticleSlug}
              variant="related"
            />
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white mb-4 sm:mb-6">
            {t.discussMandate}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
            {t.contactSubline}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <LocaleLink
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-yellow-400 text-black hover:bg-yellow-500 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 min-h-[44px]"
            >
              {t.contact}
              <ArrowRight className={`ml-2 h-5 w-5 flex-shrink-0 ${isRtl ? 'rotate-180' : ''}`} />
            </LocaleLink>
            <LocaleLink
              href={`/markets/${market.slug}`}
              className="w-full sm:w-auto inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 min-h-[44px]"
            >
              <ArrowLeft className={`h-5 w-5 flex-shrink-0 ${isRtl ? 'rotate-180 mr-2' : 'mr-2'}`} />
              {t.backTo}
            </LocaleLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MarketArticlePage;
