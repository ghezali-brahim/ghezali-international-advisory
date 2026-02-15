import React from 'react';
import SEO from '../components/SEO';
import Media from '../components/Media';
import Newsletter from '../components/Newsletter';
import { BookOpen, Users, TrendingUp, Award, Calendar, Globe, Clock } from 'lucide-react';
import { getSEOConfig, structuredData } from '../config/seo';

const MediaPage = () => {
  const seoConfig = getSEOConfig('media');
  
  const breadcrumbData = structuredData.breadcrumb([
    { name: 'Accueil', url: 'https://www.ghezali-business.com/' },
    { name: 'Médias', url: 'https://www.ghezali-business.com/medias' }
  ]);
  const publications = [
    {
      title: "Le Guide Ultime de la Valorisation d'Entreprise",
      description: "Méthodes exclusives pour maximiser la valeur de votre ETI",
      pages: "120 pages",
      downloads: "2,500+",
      category: "Stratégie"
    },
    {
      title: "ETI : Réussir sa Transformation Digitale",
      description: "Roadmap complète et retours d'expérience concrets",
      pages: "85 pages",
      downloads: "1,800+",
      category: "Digital"
    },
    {
      title: "M&A : Négocier comme un Expert",
      description: "Techniques avancées de négociation et structuration de deals",
      pages: "95 pages",
      downloads: "1,200+",
      category: "M&A"
    }
  ];

  const webinars = [
    {
      title: "Les Secrets de la Croissance des ETI",
      date: "25 Avril 2024",
      duration: "60 min",
      attendees: "250+",
      status: "À venir"
    },
    {
      title: "Préparer sa Levée de Fonds Série B",
      date: "15 Mars 2024",
      duration: "45 min",
      attendees: "180+",
      status: "Replay disponible"
    },
    {
      title: "Optimiser sa Valorisation Pré-Cession",
      date: "28 Février 2024",
      duration: "55 min",
      attendees: "320+",
      status: "Replay disponible"
    }
  ];

  return (
    <div className="pt-16">
      <SEO
        title={seoConfig.title}
        description={seoConfig.description}
        keywords={seoConfig.keywords}
        canonical={seoConfig.canonical}
        structuredData={breadcrumbData}
      />
      {/* Publications Premium */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-black mb-6">
              Publications <span className="text-yellow-600">Premium</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Guides exclusifs et ressources stratégiques pour dirigeants d'exception
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {publications.map((pub, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-yellow-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {pub.category}
                    </span>
                    <BookOpen className="h-6 w-6 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-3">{pub.title}</h3>
                  <p className="text-gray-600 mb-6">{pub.description}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500 mb-6">
                    <span>{pub.pages}</span>
                    <span>{pub.downloads} téléchargements</span>
                  </div>
                  <button className="w-full bg-black text-white hover:bg-gray-800 py-3 px-6 rounded-lg font-semibold transition-all duration-300">
                    Télécharger gratuitement
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Webinars */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-black mb-6">
              Webinars <span className="text-yellow-600">Exclusifs</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sessions live avec nos experts pour approfondir vos connaissances
            </p>
          </div>

          <div className="space-y-6">
            {webinars.map((webinar, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="lg:flex-1">
                    <div className="flex items-center mb-4">
                      <Calendar className="h-5 w-5 text-yellow-600 mr-3" />
                      <span className="text-yellow-600 font-semibold">{webinar.date}</span>
                      <span className={`ml-4 px-3 py-1 rounded-full text-sm font-medium ${
                        webinar.status === 'À venir' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                      }`}>
                        {webinar.status}
                      </span>
                    </div>
                    <h3 className="text-2xl font-serif text-black mb-2">{webinar.title}</h3>
                    <div className="flex items-center text-gray-600 space-x-6">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>{webinar.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2" />
                        <span>{webinar.attendees} participants</span>
                      </div>
                    </div>
                  </div>
                  <div className="lg:ml-8 mt-6 lg:mt-0">
                    <button className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      webinar.status === 'À venir' ? 
                      'bg-yellow-600 text-white hover:bg-yellow-700' :
                      'bg-gray-600 text-white hover:bg-gray-700'
                    }`}>
                      {webinar.status === 'À venir' ? 'S\'inscrire' : 'Voir le replay'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Media />
      <Newsletter />
    </div>
  );
};

export default MediaPage;