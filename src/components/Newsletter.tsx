'use client';

import React, { useState } from 'react';
import { Mail, TrendingUp, Users, BookOpen, CheckCircle, ArrowRight } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    setIsSubscribed(true);
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  const benefits = [
    {
      icon: TrendingUp,
      title: "Insights Exclusifs",
      description: "Analyses de marché et tendances sectorielles réservées aux abonnés"
    },
    {
      icon: Users,
      title: "Cas d'Usage Réels",
      description: "Études de cas détaillées et retours d'expérience anonymisés"
    },
    {
      icon: BookOpen,
      title: "Ressources Premium",
      description: "Guides, templates et outils utilisés par nos experts"
    }
  ];

  const recentArticles = [
    {
      title: "ETI : Les 5 leviers de valorisation méconnus",
      date: "15 Mars 2024",
      readTime: "8 min",
      category: "Stratégie"
    },
    {
      title: "M&A : Comment négocier un multiple supérieur",
      date: "8 Mars 2024",
      readTime: "12 min",
      category: "Finance"
    },
    {
      title: "Transformation digitale : éviter les 7 pièges classiques",
      date: "1 Mars 2024",
      readTime: "10 min",
      category: "Digital"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="flex items-center mb-6">
              <Mail className="h-8 w-8 text-yellow-400 mr-3" />
              <span className="text-yellow-400 font-semibold">Newsletter Premium</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
              Restez à la pointe de <span className="text-yellow-400">l'excellence business</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Recevez chaque mois nos analyses exclusives, études de cas et insights stratégiques 
              réservés aux dirigeants d'exception.
            </p>

            {/* Benefits */}
            <div className="space-y-6 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-yellow-400 p-2 rounded-lg mr-4 flex-shrink-0">
                    <benefit.icon className="h-5 w-5 text-black" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{benefit.title}</h3>
                    <p className="text-gray-400">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Subscription Form */}
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">
                    Email professionnel *
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="votre.email@entreprise.com"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubscribed}
                  className="w-full bg-yellow-400 text-black hover:bg-yellow-500 py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center disabled:opacity-50"
                >
                  {isSubscribed ? (
                    <>
                      <CheckCircle className="mr-2 h-5 w-5" />
                      Inscription confirmée !
                    </>
                  ) : (
                    <>
                      S'abonner gratuitement
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </>
                  )}
                </button>
              </form>
              
              <p className="text-gray-400 text-sm mt-4 text-center">
                Newsletter mensuelle • Pas de spam • Désinscription en un clic
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">2,500+</div>
                <div className="text-gray-400 text-sm">Dirigeants abonnés</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">95%</div>
                <div className="text-gray-400 text-sm">Taux d'ouverture</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">4.9/5</div>
                <div className="text-gray-400 text-sm">Note moyenne</div>
              </div>
            </div>
          </div>

          {/* Recent Articles Preview */}
          <div>
            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
              <h3 className="text-2xl font-serif text-white mb-6">Derniers articles premium</h3>
              
              <div className="space-y-6">
                {recentArticles.map((article, index) => (
                  <div key={index} className="border-b border-gray-700 pb-6 last:border-b-0 last:pb-0">
                    <div className="flex items-center justify-between mb-2">
                      <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                        {article.category}
                      </span>
                      <span className="text-gray-400 text-sm">{article.readTime}</span>
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2 leading-tight">
                      {article.title}
                    </h4>
                    <p className="text-gray-400 text-sm">{article.date}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-700">
                <button className="w-full text-yellow-400 hover:text-yellow-300 font-semibold text-sm flex items-center justify-center">
                  Voir tous les articles
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Testimonial */}
            <div className="mt-8 bg-gray-800 p-6 rounded-xl border border-gray-700">
              <blockquote className="text-gray-300 italic mb-4">
                "La newsletter Ghezali International Advisory est devenue ma lecture incontournable. 
                Les insights sont toujours pertinents et actionnables."
              </blockquote>
              <cite className="text-gray-400 text-sm">
                — Marie D., CEO Groupe Tech (CA 250M€)
              </cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;