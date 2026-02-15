import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import ProcessTimeline from '../components/ProcessTimeline';
import { Crown, Rocket, TrendingUp, ArrowRight, CheckCircle, Clock, Euro, Star, Users, Shield, Zap, Globe, Building2 } from 'lucide-react';
import { ContextualLinks } from '../components/InternalLinks';
import { getSEOConfig, structuredData } from '../config/seo';

const ServicesPage = () => {
  const seoConfig = getSEOConfig('services');
  
  // Breadcrumb pour le SEO
  const breadcrumbData = structuredData.breadcrumb([
    { name: 'Accueil', url: 'https://www.ghezali-business.com/' },
    { name: 'Services', url: 'https://www.ghezali-business.com/services' }
  ]);
  const services = [
    {
      icon: TrendingUp,
      title: "Strategic Deals & Equity",
      subtitle: "Fonds PE • Family Offices • Holdings",
      price: "100k–300k€/an par portefeuille • ou 1–3% equity • ou success fee",
      duration: "Variable selon mandat",
      description: "Un contrat, une transformation globale du portefeuille. Partenaire stratégique au niveau board : recrutements CEO, M&A, opérations. Un mandat couvre l'ensemble de vos participations (8 à 30 sociétés), pas une mission par société.",
      features: [
        "Transformation multi-sociétés (8–30 participations)",
        "Due diligence stratégique et optimisation pré-cession",
        "Accompagnement M&A et maximisation des multiples",
        "Alignement success fee / equity / intéressement performance",
        "Accès board et proximité avec les dirigeants",
        "Structuration deals complexes",
        "Préparation data room",
        "Support post-acquisition"
      ],
      benefits: [
        "Un contrat, tout le portefeuille",
        "Multiples optimisés",
        "ROI maximisé",
        "Exits réussis"
      ],
      methodology: [
        "Audit portefeuille et sélection priorités",
        "Valorisation et stratégie de sortie",
        "Déploiement task force dédiée",
        "Pilotage board et dirigeants",
        "Closing et post-acquisition"
      ],
      color: "bg-gradient-to-br from-yellow-700 to-yellow-600"
    },
    {
      icon: Crown,
      title: "Executive Advisory",
      subtitle: "Pour les dirigeants de vos participations",
      price: "200k - 500k€",
      duration: "6 à 12 mois",
      description: "Accompagnement direct des dirigeants de vos sociétés en portefeuille. Stratégie et mentorat exécutif pour transformer leadership et vision en résultats concrets.",
      features: [
        "Stratégie personnalisée avec le dirigeant",
        "Mentorat exécutif hebdomadaire",
        "Accès privilégié au réseau privé",
        "Support 24/7 pour décisions critiques",
        "Coaching leadership personnalisé",
        "Préparation aux levées de fonds",
        "Optimisation de la gouvernance",
        "Développement vision long terme"
      ],
      benefits: [
        "Transformation du leadership",
        "Vision stratégique claire",
        "Décisions plus rapides",
        "Performance équipe dirigeante"
      ],
      methodology: [
        "Audit leadership 360°",
        "Définition vision stratégique",
        "Plan de développement personnel",
        "Sessions mentorat régulières",
        "Mesure impact performance"
      ],
      color: "bg-gradient-to-br from-purple-900 to-purple-700"
    },
    {
      icon: Rocket,
      title: "Corporate Acceleration",
      subtitle: "Task force pour vos ETI en portefeuille",
      price: "500k - 1M€+",
      duration: "12 à 18 mois",
      description: "Task force dédiée pour structurer et scaler une de vos participations. Objectif : +30% de valorisation en 12 mois, +1M€ de cash généré.",
      features: [
        "Restructuration complète",
        "Optimisation des processus",
        "Développement commercial accéléré",
        "Préparation levée de fonds",
        "Transformation digitale",
        "Optimisation supply chain",
        "Développement international",
        "M&A et acquisitions"
      ],
      benefits: [
        "Croissance accélérée",
        "Efficacité opérationnelle",
        "Valorisation maximisée",
        "Préparation exit réussie"
      ],
      methodology: [
        "Diagnostic complet 360°",
        "Roadmap transformation",
        "Déploiement task force",
        "Pilotage performance",
        "Optimisation continue"
      ],
      color: "bg-gradient-to-br from-blue-900 to-blue-700"
    }
  ];

  const institutionalServices = [
    {
      icon: Globe,
      title: "Institutional Advisory",
      subtitle: "Pour gouvernements et institutions",
      price: "Sur mesure",
      duration: "12 à 36 mois",
      description: "Conseil stratégique aux chefs d'État, ministères et institutions internationales. Transformation systémique pour stimuler l'économie, créer des emplois et optimiser les structures nationales.",
      features: [
        "Conseil direct aux chefs d'État",
        "Stratégies de développement national",
        "Transformation des systèmes publics",
        "Optimisation des structures régionales",
        "Stimulation de l'activité économique",
        "Création d'emplois structurels",
        "Réformes institutionnelles",
        "Accompagnement des ministères"
      ],
      benefits: [
        "Croissance économique nationale",
        "Création d'emplois durables",
        "Optimisation des ressources",
        "Attractivité internationale"
      ],
      methodology: [
        "Diagnostic économique national",
        "Stratégie de transformation",
        "Implémentation systématique",
        "Pilotage des réformes",
        "Mesure d'impact macroéconomique"
      ],
      color: "bg-gradient-to-br from-green-900 to-green-700"
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
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">
            Nos offres — Pour fonds, family offices et holdings
          </h1>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Transformation de portefeuille et impact multi-sociétés. Un mandat, plusieurs participations transformées.
          </p>
        </div>
      </section>

      {/* Services Detailed */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div key={index} className={`${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} flex flex-col lg:flex-row items-center gap-16`}>
                {/* Content */}
                <div className="lg:w-1/2">
                  <div className="flex items-center mb-6">
                    <service.icon className="h-12 w-12 text-yellow-600 mr-4" />
                    <div>
                      <h2 className="text-3xl font-serif text-black">{service.title}</h2>
                      <p className="text-lg text-yellow-600 font-semibold">{service.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">{service.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <div className="flex items-center mb-4">
                        <Euro className="h-5 w-5 text-yellow-600 mr-2" />
                        <span className="font-semibold text-black">Investissement</span>
                      </div>
                      <p className="text-2xl font-bold text-yellow-600">{service.price}</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <div className="flex items-center mb-4">
                        <Clock className="h-5 w-5 text-yellow-600 mr-2" />
                        <span className="font-semibold text-black">Durée</span>
                      </div>
                      <p className="text-2xl font-bold text-yellow-600">{service.duration}</p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-black mb-4">Bénéfices clés</h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {service.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-600 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button className="bg-black text-white hover:bg-gray-800 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center">
                    Demander une consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>

                {/* Features Card */}
                <div className="lg:w-1/2">
                  <div className={`${service.color} p-8 rounded-2xl text-white`}>
                    <h3 className="text-2xl font-serif mb-6">Ce qui est inclus</h3>
                    <div className="space-y-4 mb-8">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0 opacity-90" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="border-t border-white/20 pt-6">
                      <h4 className="text-lg font-semibold mb-4">Notre méthodologie</h4>
                      <div className="space-y-2">
                        {service.methodology.map((step, idx) => (
                          <div key={idx} className="flex items-center text-sm opacity-90">
                            <div className="bg-white/20 w-6 h-6 rounded-full flex items-center justify-center mr-3 text-xs font-bold">
                              {idx + 1}
                            </div>
                            {step}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <ProcessTimeline />

      {/* Guarantees & Commitments */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-black mb-6">
              Nos <span className="text-yellow-600">Engagements</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des garanties contractuelles qui reflètent notre confiance en nos méthodes
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <Shield className="h-12 w-12 text-yellow-600 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-black mb-4">Garantie Résultats</h3>
              <p className="text-gray-600 mb-6">
                Si les objectifs contractuels ne sont pas atteints, nous adaptons notre rémunération.
              </p>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <p className="text-yellow-800 font-semibold">95% de taux de réussite</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <Zap className="h-12 w-12 text-yellow-600 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-black mb-4">Réactivité 24h</h3>
              <p className="text-gray-600 mb-6">
                Réponse garantie sous 24h pour toute demande urgente ou décision critique.
              </p>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <p className="text-yellow-800 font-semibold">Support prioritaire</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <CheckCircle className="h-12 w-12 text-yellow-600 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-black mb-4">Confidentialité Absolue</h3>
              <p className="text-gray-600 mb-6">
                NDA renforcé, certification ISO 27001, aucun conflit d'intérêts.
              </p>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <p className="text-yellow-800 font-semibold">100% sécurisé</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
            Réservé aux investisseurs et dirigeants sélectionnés
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Nombre de mandats limité. Vérifiez votre éligibilité ou demandez une invitation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link to="/contact" className="bg-yellow-400 text-black hover:bg-yellow-500 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
              Vérifier son éligibilité
            </Link>
            <Link to="/contact" className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
              Recevoir notre proposition sur mesure
            </Link>
          </div>
        </div>
      </section>

      {/* International Institutions Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-black mb-6">Références Institutionnelles</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Nos interventions auprès des gouvernements et institutions</p>
          </div>

          <div className="bg-gray-50 p-12 rounded-2xl">
            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-serif text-black mb-6">Clients Institutionnels</h3>
                <div className="space-y-4">
                  <div className="flex items-center p-4 bg-white rounded-lg">
                    <Globe className="h-6 w-6 text-yellow-600 mr-4" />
                    <div>
                      <p className="font-semibold text-black">Chefs d'État et Gouvernements</p>
                      <p className="text-sm text-gray-600">Conseil stratégique direct</p>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-white rounded-lg">
                    <Building2 className="h-6 w-6 text-yellow-600 mr-4" />
                    <div>
                      <p className="font-semibold text-black">Ministères et Administrations</p>
                      <p className="text-sm text-gray-600">Transformation systémique</p>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-white rounded-lg">
                    <Users className="h-6 w-6 text-yellow-600 mr-4" />
                    <div>
                      <p className="font-semibold text-black">Institutions Internationales</p>
                      <p className="text-sm text-gray-600">Programmes de développement</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-serif text-black mb-6">Résultats Obtenus</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center bg-white p-6 rounded-lg">
                    <div className="text-3xl font-bold text-yellow-600 mb-2">12</div>
                    <div className="text-gray-600">Pays conseillés</div>
                  </div>
                  <div className="text-center bg-white p-6 rounded-lg">
                    <div className="text-3xl font-bold text-yellow-600 mb-2">€2.5Md</div>
                    <div className="text-gray-600">Impact économique</div>
                  </div>
                  <div className="text-center bg-white p-6 rounded-lg">
                    <div className="text-3xl font-bold text-yellow-600 mb-2">150+</div>
                    <div className="text-gray-600">Réformes menées</div>
                  </div>
                  <div className="text-center bg-white p-6 rounded-lg">
                    <div className="text-3xl font-bold text-yellow-600 mb-2">+35%</div>
                    <div className="text-gray-600">Croissance moyenne</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg text-gray-700 italic">
                "Notre méthode systématique transforme les structures nationales, stimule l'activité économique et crée des emplois durables dans chaque région d'intervention."
              </p>
              <div className="mt-6">
                <button className="bg-yellow-600 text-white hover:bg-yellow-700 px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                  Découvrir nos interventions institutionnelles
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contextual Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ContextualLinks context="services" />
      </div>
    </div>
  );
};

export default ServicesPage;