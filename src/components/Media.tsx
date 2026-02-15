import React from 'react';
import { Newspaper, Mic, Video, PenTool } from 'lucide-react';

const Media = () => {
  const mediaItems = [
    {
      type: "Presse",
      icon: Newspaper,
      title: "Les Échos - ETI : Les nouveaux défis de la croissance",
      description: "Tribune sur l'accompagnement stratégique des entreprises de taille intermédiaire",
      date: "Mars 2024",
      color: "bg-blue-600"
    },
    {
      type: "Podcast",
      icon: Mic,
      title: "Business Leaders - Stratégies de valorisation",
      description: "Interview sur les méthodes d'accélération de la performance des ETI",
      date: "Février 2024",
      color: "bg-green-600"
    },
    {
      type: "Conférence",
      icon: Video,
      title: "Forum des ETI - Transformation digitale",
      description: "Keynote sur l'accompagnement des dirigeants dans la digitalisation",
      date: "Janvier 2024",
      color: "bg-purple-600"
    },
    {
      type: "Tribune",
      icon: PenTool,
      title: "Forbes - L'art du business engineering",
      description: "Article d'opinion sur l'évolution du conseil stratégique",
      date: "Décembre 2023",
      color: "bg-red-600"
    }
  ];

  const blogPosts = [
    {
      title: "Comment préparer votre ETI à une levée de fonds réussie",
      excerpt: "Les 7 étapes clés pour maximiser votre valorisation et séduire les investisseurs.",
      readTime: "8 min"
    },
    {
      title: "Digitalisation : éviter les pièges classiques des ETI",
      excerpt: "Retour d'expérience sur les erreurs les plus coûteuses en transformation digitale.",
      readTime: "6 min"
    },
    {
      title: "M&A : optimiser la due diligence stratégique",
      excerpt: "Comment maximiser la valeur lors d'une acquisition ou d'une cession d'entreprise.",
      readTime: "10 min"
    }
  ];

  return (
    <section id="medias" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-black mb-6">
            Médias & <span className="text-yellow-600">Autorité</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Notre expertise reconnue par les médias de référence. 
            Découvrez nos analyses et points de vue sur l'évolution du business.
          </p>
        </div>

        {/* Media Coverage */}
        <div className="mb-20">
          <h3 className="text-3xl font-serif text-black mb-12 text-center">Couverture médiatique</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {mediaItems.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className={`${item.color} p-6 text-white`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <item.icon className="h-6 w-6 mr-3" />
                      <span className="font-semibold">{item.type}</span>
                    </div>
                    <span className="text-sm opacity-90">{item.date}</span>
                  </div>
                  <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  <button className="mt-4 text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
                    Lire l'article →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Blog Premium */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-serif text-black mb-4">Blog Premium</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Insights exclusifs sur la croissance des ETI, stratégies de valorisation et tendances du marché.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300">
                <h4 className="text-xl font-semibold text-black mb-3 leading-tight">{post.title}</h4>
                <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.readTime} de lecture</span>
                  <button className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">
                    Lire →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-black p-12 rounded-2xl text-center">
          <h3 className="text-3xl md:text-4xl font-serif text-white mb-6">
            Restez informé de nos dernières analyses
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Recevez chaque mois nos insights exclusifs sur les stratégies de croissance des ETI.
          </p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Votre email professionnel"
              className="flex-1 px-4 py-3 rounded-l-lg border-0 focus:ring-2 focus:ring-yellow-400"
            />
            <button className="bg-yellow-400 text-black hover:bg-yellow-500 px-6 py-3 rounded-r-lg font-semibold transition-all duration-300">
              S'abonner
            </button>
          </div>
          <p className="text-gray-400 text-sm mt-4">
            Newsletter mensuelle - Pas de spam, désinscription en un clic
          </p>
        </div>
      </div>
    </section>
  );
};

export default Media;