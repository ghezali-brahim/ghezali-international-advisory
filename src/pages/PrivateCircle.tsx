import React from 'react';
import SEO from '../components/SEO';
import PrivateCircle from '../components/PrivateCircle';
import { Lock, Users, Calendar, Star, Crown, Shield, Zap, Award } from 'lucide-react';
import { getSEOConfig, structuredData } from '../config/seo';

const PrivateCirclePage = () => {
  const seoConfig = getSEOConfig('privateCircle');
  
  const breadcrumbData = structuredData.breadcrumb([
    { name: 'Accueil', url: 'https://www.ghezali-business.com/' },
    { name: 'Cercle Privé', url: 'https://www.ghezali-business.com/cercle-prive' }
  ]);
  const memberBenefits = [
    {
      icon: Users,
      title: "Réseau d'élite exclusif",
      description: "Accès à un cercle fermé de 50 dirigeants d'exception triés sur le volet",
      details: [
        "CEOs d'ETI et Grands Groupes",
        "Entrepreneurs à succès",
        "Investisseurs institutionnels",
        "Family offices prestigieux"
      ]
    },
    {
      icon: Calendar,
      title: "Événements privés premium",
      description: "6 événements exclusifs par an dans des lieux d'exception",
      details: [
        "Dîners privés dans des lieux iconiques",
        "Masterclasses avec experts internationaux",
        "Voyages d'affaires exclusifs",
        "Conférences fermées"
      ]
    },
    {
      icon: Zap,
      title: "Deal flow privilégié",
      description: "Accès prioritaire aux meilleures opportunités d'investissement",
      details: [
        "Deals pré-sélectionnés",
        "Co-investissements exclusifs",
        "Partenariats stratégiques",
        "Acquisitions off-market"
      ]
    },
    {
      icon: Shield,
      title: "Confidentialité absolue",
      description: "Tous les échanges sous accord de non-divulgation strict",
      details: [
        "NDA renforcé pour tous les membres",
        "Règles de confidentialité strictes",
        "Environnement de confiance totale",
        "Discrétion garantie"
      ]
    }
  ];

  const upcomingEvents = [
    {
      title: "Dîner des Leaders - Édition Printemps",
      date: "15 Avril 2024",
      location: "Hôtel Plaza Athénée, Paris",
      theme: "Intelligence Artificielle et Transformation des ETI",
      attendees: "12 dirigeants",
      status: "Complet"
    },
    {
      title: "Masterclass Private Equity",
      date: "22 Mai 2024",
      location: "Tour Majunga, La Défense",
      theme: "Optimiser sa valorisation pré-cession",
      attendees: "15 dirigeants",
      status: "Places disponibles"
    },
    {
      title: "Voyage d'affaires - Silicon Valley",
      date: "10-14 Juin 2024",
      location: "San Francisco & Palo Alto",
      theme: "Innovation et disruption technologique",
      attendees: "8 dirigeants",
      status: "Liste d'attente"
    }
  ];

  const testimonials = [
    {
      quote: "Le Cercle Ghezali m'a ouvert des portes que je n'aurais jamais imaginées. Les connexions et opportunités générées ont transformé ma vision du business.",
      author: "Pierre-Antoine M.",
      position: "CEO Groupe Industriel",
      company: "CA 180M€",
      result: "3 partenariats stratégiques conclus"
    },
    {
      quote: "Un réseau d'une qualité exceptionnelle. Chaque rencontre est une opportunité, chaque échange apporte de la valeur.",
      author: "Marie-Claire D.",
      position: "Directrice Générale",
      company: "Groupe Distribution 320M€",
      result: "Levée de fonds 50M€ facilitée"
    },
    {
      quote: "L'exclusivité et la confidentialité permettent des discussions franches et des collaborations authentiques.",
      author: "Jean-Marc L.",
      position: "Managing Partner",
      company: "Fonds d'Investissement",
      result: "5 deals co-investis"
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
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 backdrop-blur-sm mb-6">
            <Lock className="h-4 w-4 text-yellow-400 mr-2" />
            <span className="text-yellow-400 text-sm font-medium">Accès sur invitation uniquement</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">
            Le <span className="text-yellow-400">Cercle Privé</span>
          </h1>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Le réseau que l'on ne rejoint pas, mais auquel on est invité. 
            Un cercle fermé de dirigeants exceptionnels partageant la même vision de l'excellence.
          </p>
        </div>
      </section>

      {/* Member Benefits */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-black mb-6">Privilèges exclusifs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez les avantages réservés aux membres du Cercle Privé Ghezali
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {memberBenefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="flex items-start mb-6">
                  <div className="bg-yellow-400 p-4 rounded-lg mr-6 flex-shrink-0">
                    <benefit.icon className="h-8 w-8 text-black" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif text-black mb-3">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-black mb-3">Détails :</h4>
                  <ul className="space-y-2">
                    {benefit.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-yellow-600 rounded-full mr-3 flex-shrink-0"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-black mb-6">Événements à venir</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez notre calendrier exclusif d'événements premium
            </p>
          </div>

          <div className="space-y-8">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl border-l-4 border-yellow-600">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="lg:flex-1">
                    <div className="flex items-center mb-4">
                      <Calendar className="h-6 w-6 text-yellow-600 mr-3" />
                      <span className="text-yellow-600 font-semibold">{event.date}</span>
                      <span className={`ml-4 px-3 py-1 rounded-full text-sm font-medium ${
                        event.status === 'Complet' ? 'bg-red-100 text-red-800' :
                        event.status === 'Liste d\'attente' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {event.status}
                      </span>
                    </div>
                    <h3 className="text-2xl font-serif text-black mb-2">{event.title}</h3>
                    <p className="text-gray-600 mb-2">{event.location}</p>
                    <p className="text-lg text-gray-700 mb-4">{event.theme}</p>
                    <div className="flex items-center text-gray-600">
                      <Users className="h-4 w-4 mr-2" />
                      <span>{event.attendees}</span>
                    </div>
                  </div>
                  <div className="lg:ml-8 mt-6 lg:mt-0">
                    <button className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      event.status === 'Complet' ? 
                      'bg-gray-300 text-gray-500 cursor-not-allowed' :
                      'bg-yellow-600 text-white hover:bg-yellow-700'
                    }`}>
                      {event.status === 'Complet' ? 'Complet' : 
                       event.status === 'Liste d\'attente' ? 'Rejoindre la liste' : 
                       'Réserver ma place'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Member Testimonials */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-white mb-6">Témoignages de membres</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Découvrez l'impact du Cercle Privé sur la carrière de nos membres
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-xl border border-gray-700">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-300 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="border-t border-gray-700 pt-4">
                  <cite className="text-white font-semibold not-italic">{testimonial.author}</cite>
                  <p className="text-gray-400 text-sm">{testimonial.position}</p>
                  <p className="text-gray-500 text-sm">{testimonial.company}</p>
                  <div className="mt-3 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold inline-block">
                    {testimonial.result}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selection Criteria */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-black mb-6">Critères de sélection</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              L'excellence n'est pas négociable. Voici nos critères d'admission
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">Performance</h3>
              <p className="text-gray-600">CA minimum 50M€ ou croissance exceptionnelle</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Crown className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">Leadership</h3>
              <p className="text-gray-600">Reconnaissance dans votre secteur d'activité</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">Vision</h3>
              <p className="text-gray-600">Ambition stratégique et internationale</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">Engagement</h3>
              <p className="text-gray-600">Participation active et bienveillante</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
            Prêt à rejoindre l'élite ?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            L'accès au Cercle se mérite. Chaque candidature est étudiée personnellement.
          </p>
          <button className="bg-yellow-400 text-black hover:bg-yellow-500 px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-400/25 inline-flex items-center">
            <Lock className="mr-2 h-5 w-5" />
            Demander une invitation
          </button>
          <p className="text-gray-400 text-sm mt-4">
            Seules les candidatures qualifiées recevront une réponse sous 48h
          </p>
        </div>
      </section>
    </div>
  );
};

export default PrivateCirclePage;