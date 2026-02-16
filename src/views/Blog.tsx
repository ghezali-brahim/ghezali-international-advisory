'use client';

import { useMemo, useState } from 'react';
import { LocaleLink } from '@/components/LocaleLink';
import { Calendar, Clock, User, ArrowRight, Search, Filter, BookOpen } from 'lucide-react';
import { ContextualLinks } from '@/components/InternalLinks';

export interface BlogArticleItem {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  featured: boolean;
}

const Blog = ({ articles }: { articles: BlogArticleItem[] }) => {
  const categories = useMemo(() => {
    const cats = new Set(articles.map((a) => a.category));
    return ['Tous', ...Array.from(cats)];
  }, [articles]);

  const defaultArticles: BlogArticleItem[] = [];
  const list = articles?.length ? articles : defaultArticles;
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  const filteredArticles = selectedCategory === 'Tous'
    ? list
    : list.filter((article) => article.category === selectedCategory);

  const featuredArticle = list.find((article) => article.featured);
  const regularArticles = list.filter((article) => !article.featured);

  return (
    <div className="pt-16">

      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4 sm:mb-6">
            Insights <span className="text-yellow-400">Stratégiques</span>
          </h1>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Analyses exclusives, stratégies éprouvées et retours d'expérience 
            pour transformer votre entreprise et accélérer votre croissance.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 sm:py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
            {/* Search */}
            <div className="relative flex-1 w-full max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher un article..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-base"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-4">
              <Filter className="h-5 w-5 text-gray-600" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-yellow-600 text-white'
                        : 'bg-white text-gray-600 hover:bg-yellow-50 hover:text-yellow-600'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="py-10 sm:py-14 lg:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-900 rounded-2xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative">
                  <img
                    src={featuredArticle.image}
                    alt={`Article vedette: ${featuredArticle.title}`}
                    className="w-full h-64 sm:h-80 lg:h-full object-cover min-h-[200px]"
                    loading="eager"
                  />
                  <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
                    <span className="bg-yellow-400 text-black px-2.5 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                      Article Vedette
                    </span>
                  </div>
                </div>
                <div className="p-5 sm:p-6 lg:p-8 xl:p-12 flex flex-col justify-center">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <span className="bg-yellow-600 text-white px-2.5 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                      {featuredArticle.category}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-white mb-3 sm:mb-4">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-gray-300 mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="flex items-center mb-4 sm:mb-6 text-gray-400 text-sm sm:text-base flex-wrap gap-x-4 gap-y-1">
                    <User className="h-4 w-4 mr-2" />
                    <span className="mr-4">{featuredArticle.author}</span>
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="mr-4">{new Date(featuredArticle.date).toLocaleDateString('fr-FR')}</span>
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{featuredArticle.readTime}</span>
                  </div>
                  <LocaleLink href={`/blog/${featuredArticle.slug}`} className="inline-flex items-center bg-yellow-400 text-black hover:bg-yellow-500 px-5 sm:px-6 py-3 rounded-lg font-semibold transition-all duration-300 w-fit min-h-[44px]">
                    Lire l'article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </LocaleLink>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="py-10 sm:py-14 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            {filteredArticles.map((article) => (
              <article key={article.slug} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="relative">
                  <img
                    src={article.image}
                    alt={`${article.title} - Article Ghezali International Advisory`}
                    className="w-full h-44 sm:h-48 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                    <span className="bg-yellow-600 text-white px-2.5 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-black mb-2 sm:mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-3 sm:mb-4 line-clamp-3 text-sm sm:text-base">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center mb-4 text-sm text-gray-500">
                    <User className="h-4 w-4 mr-2" />
                    <span className="mr-4">{article.author}</span>
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="mr-4">{new Date(article.date).toLocaleDateString('fr-FR')}</span>
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{article.readTime}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {(article.tags || []).slice(0, 2).map((tag) => (
                        <span key={tag} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <LocaleLink href={`/blog/${article.slug}`} className="text-yellow-600 hover:text-yellow-700 font-medium flex items-center min-h-[44px] sm:min-h-0">
                      Lire
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </LocaleLink>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-10 sm:py-14 lg:py-16 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BookOpen className="h-10 w-10 sm:h-12 sm:w-12 text-yellow-400 mx-auto mb-4 sm:mb-6" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white mb-4 sm:mb-6">
            Recevez nos insights exclusifs
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Abonnez-vous à notre newsletter premium pour recevoir nos analyses stratégiques, 
            études de cas exclusives et conseils d'experts directement dans votre boîte mail.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre email professionnel"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-base min-h-[44px]"
            />
            <button className="bg-yellow-400 text-black hover:bg-yellow-500 px-6 py-3 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap min-h-[44px]">
              S'abonner
            </button>
          </div>
          <p className="text-gray-500 text-xs sm:text-sm mt-3 sm:mt-4">
            Pas de spam. Désabonnement en 1 clic. Confidentialité garantie.
          </p>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-10 sm:py-14 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4 md:gap-8 text-center">
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-600 mb-1 sm:mb-2">50+</div>
              <div className="text-gray-600 text-sm sm:text-base">Articles publiés</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-600 mb-1 sm:mb-2">25k+</div>
              <div className="text-gray-600 text-sm sm:text-base">Lecteurs mensuels</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-600 mb-1 sm:mb-2">95%</div>
              <div className="text-gray-600 text-sm sm:text-base">Taux de satisfaction</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-600 mb-1 sm:mb-2">12</div>
              <div className="text-gray-600 text-sm sm:text-base">Experts contributeurs</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contextual Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
        <ContextualLinks context="blog" />
      </div>
    </div>
  );
};

export default Blog;
