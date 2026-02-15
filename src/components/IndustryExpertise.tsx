'use client';

import React, { useState } from 'react';
import { Building, Truck, Cpu, ShoppingBag, Briefcase, Globe, TrendingUp, Users } from 'lucide-react';

const IndustryExpertise = () => {
  const [activeSector, setActiveSector] = useState(0);

  const sectors = [
    {
      icon: Building,
      name: "Industrie & Manufacturing",
      projects: "45+ projets",
      description: "Optimisation des processus industriels, supply chain et transformation digitale",
      expertise: [
        "Lean Manufacturing & Six Sigma",
        "Optimisation supply chain",
        "Industrie 4.0 et IoT",
        "Gestion des coûts industriels",
        "Qualité et certifications",
        "Développement durable"
      ],
      caseStudy: {
        title: "Groupe Industriel Métallurgie",
        challenge: "Restructuration complète et préparation cession",
        result: "+45% valorisation en 18 mois",
        details: "Optimisation des processus, digitalisation et préparation due diligence"
      },
      kpis: [
        { metric: "Réduction coûts", value: "15-25%" },
        { metric: "Amélioration marge", value: "3-8 points" },
        { metric: "Délais production", value: "-20-30%" },
        { metric: "Qualité", value: "+40%" }
      ]
    },
    {
      icon: ShoppingBag,
      name: "Distribution & Retail",
      projects: "38+ projets",
      description: "Transformation omnicanale, optimisation logistique et expérience client",
      expertise: [
        "Stratégie omnicanale",
        "E-commerce et marketplace",
        "Optimisation logistique",
        "Customer Experience",
        "Data Analytics & BI",
        "Gestion des stocks"
      ],
      caseStudy: {
        title: "Chaîne de Distribution Spécialisée",
        challenge: "Transformation digitale et croissance",
        result: "+35% CA en 24 mois",
        details: "Déploiement omnicanal et optimisation de l'expérience client"
      },
      kpis: [
        { metric: "Croissance CA", value: "20-35%" },
        { metric: "Marge brute", value: "+2-5 points" },
        { metric: "Taux conversion", value: "+25-40%" },
        { metric: "Satisfaction client", value: "+30%" }
      ]
    },
    {
      icon: Cpu,
      name: "Technologies & Digital",
      projects: "32+ projets",
      description: "Scale-up technologique, levées de fonds et expansion internationale",
      expertise: [
        "Product Management",
        "Scaling technique",
        "Levées de fonds",
        "Go-to-Market Strategy",
        "Expansion internationale",
        "Partenariats stratégiques"
      ],
      caseStudy: {
        title: "Scale-up SaaS B2B",
        challenge: "Préparation Série B et expansion Europe",
        result: "Levée 25M€ réussie",
        details: "Structuration produit, équipes et expansion géographique"
      },
      kpis: [
        { metric: "ARR Growth", value: "150-300%" },
        { metric: "Churn Rate", value: "-50%" },
        { metric: "LTV/CAC", value: "3-5x" },
        { metric: "Time to Market", value: "-40%" }
      ]
    },
    {
      icon: Briefcase,
      name: "Services & Conseil",
      projects: "28+ projets",
      description: "Développement commercial, structuration et croissance externe",
      expertise: [
        "Développement commercial",
        "Structuration offres",
        "Croissance externe",
        "Transformation RH",
        "Excellence opérationnelle",
        "Internationalisation"
      ],
      caseStudy: {
        title: "Cabinet de Conseil IT",
        challenge: "Structuration et croissance externe",
        result: "3 acquisitions réussies",
        details: "Stratégie M&A et intégration post-acquisition"
      },
      kpis: [
        { metric: "Croissance organique", value: "25-40%" },
        { metric: "Marge opérationnelle", value: "+5-10 points" },
        { metric: "Taux utilisation", value: "+15%" },
        { metric: "Rétention talents", value: "+25%" }
      ]
    }
  ];

  const currentSector = sectors[activeSector];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-black mb-6">
            Expertise <span className="text-yellow-600">Sectorielle</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Une connaissance approfondie des enjeux spécifiques de chaque secteur 
            pour un accompagnement sur mesure et des résultats optimaux.
          </p>
        </div>

        {/* Sector Selector */}
        <div className="grid md:grid-cols-4 gap-4 mb-16">
          {sectors.map((sector, index) => (
            <button
              key={index}
              onClick={() => setActiveSector(index)}
              className={`p-6 rounded-xl transition-all duration-300 text-left ${
                activeSector === index
                  ? 'bg-yellow-600 text-white shadow-xl transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-lg'
              }`}
            >
              <sector.icon className={`h-8 w-8 mb-4 ${
                activeSector === index ? 'text-white' : 'text-yellow-600'
              }`} />
              <h3 className="font-semibold mb-2">{sector.name}</h3>
              <p className={`text-sm ${
                activeSector === index ? 'text-white/90' : 'text-yellow-600'
              }`}>
                {sector.projects}
              </p>
            </button>
          ))}
        </div>

        {/* Sector Details */}
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <div>
            <div className="flex items-center mb-6">
              <div className="bg-yellow-600 p-4 rounded-lg mr-6">
                <currentSector.icon className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-serif text-black">{currentSector.name}</h3>
                <p className="text-yellow-600 font-semibold">{currentSector.projects}</p>
              </div>
            </div>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {currentSector.description}
            </p>

            <div className="mb-8">
              <h4 className="text-xl font-semibold text-black mb-6">Domaines d'expertise</h4>
              <div className="grid md:grid-cols-2 gap-4">
                {currentSector.expertise.map((skill, index) => (
                  <div key={index} className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                    <div className="bg-yellow-600 w-2 h-2 rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* KPIs */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="text-lg font-semibold text-black mb-4">Résultats moyens obtenus</h4>
              <div className="grid grid-cols-2 gap-4">
                {currentSector.kpis.map((kpi, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-yellow-600">{kpi.value}</div>
                    <div className="text-gray-600 text-sm">{kpi.metric}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Case Study */}
          <div>
            <div className="bg-black p-8 rounded-2xl text-white">
              <div className="flex items-center mb-6">
                <TrendingUp className="h-6 w-6 text-yellow-400 mr-3" />
                <h4 className="text-xl font-serif">Étude de cas récente</h4>
              </div>
              
              <h5 className="text-2xl font-semibold mb-4">{currentSector.caseStudy.title}</h5>
              
              <div className="space-y-4 mb-6">
                <div>
                  <span className="text-yellow-400 font-semibold">Défi : </span>
                  <span className="text-gray-300">{currentSector.caseStudy.challenge}</span>
                </div>
                <div>
                  <span className="text-yellow-400 font-semibold">Résultat : </span>
                  <span className="text-white font-bold">{currentSector.caseStudy.result}</span>
                </div>
                <div>
                  <span className="text-yellow-400 font-semibold">Approche : </span>
                  <span className="text-gray-300">{currentSector.caseStudy.details}</span>
                </div>
              </div>

              <button className="w-full bg-yellow-400 text-black hover:bg-yellow-500 py-3 px-6 rounded-lg font-semibold transition-all duration-300">
                Voir l'étude complète
              </button>
            </div>

            {/* Testimonial */}
            <div className="mt-8 bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <Users className="h-5 w-5 text-yellow-600 mr-2" />
                <span className="text-yellow-600 font-semibold">Témoignage client</span>
              </div>
              <blockquote className="text-gray-700 italic mb-4">
                "L'expertise sectorielle de Ghezali Business Mastery a fait toute la différence. 
                Ils comprennent parfaitement nos enjeux et défis spécifiques."
              </blockquote>
              <cite className="text-gray-600 text-sm">
                — Dirigeant, {currentSector.name}
              </cite>
            </div>

            {/* Industry Insights */}
            <div className="mt-8 bg-gray-100 p-6 rounded-xl">
              <h4 className="text-lg font-semibold text-black mb-4">Tendances sectorielles 2024</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Accélération de la transformation digitale</li>
                <li>• Focus sur la durabilité et l'ESG</li>
                <li>• Optimisation des chaînes d'approvisionnement</li>
                <li>• Développement de nouveaux modèles économiques</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Global Stats */}
        <div className="mt-20 bg-gradient-to-r from-gray-900 to-black p-12 rounded-2xl">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-serif text-white mb-4">Notre impact global</h3>
            <p className="text-gray-300">Résultats cumulés sur l'ensemble de nos secteurs d'intervention</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">143</div>
              <div className="text-gray-300">Projets réalisés</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">+500M€</div>
              <div className="text-gray-300">Valorisation créée</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">15</div>
              <div className="text-gray-300">Pays d'intervention</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">95%</div>
              <div className="text-gray-300">Taux de satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryExpertise;