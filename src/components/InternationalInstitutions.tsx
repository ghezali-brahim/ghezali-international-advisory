import React from 'react';
import { Globe, Building2, TrendingUp, Users, Award, CheckCircle, ArrowRight } from 'lucide-react';

const InternationalInstitutions = () => {
  const services = [
    {
      icon: Globe,
      title: "Stratégie de Développement National",
      description: "Accompagnement des gouvernements dans l'élaboration de stratégies de croissance économique et de compétitivité internationale",
      examples: [
        "Plans de développement économique nationaux",
        "Stratégies d'attractivité des investissements",
        "Politiques d'innovation et de digitalisation",
        "Réformes structurelles pour la croissance"
      ]
    },
    {
      icon: Building2,
      title: "Transformation Institutionnelle",
      description: "Modernisation des institutions publiques et optimisation des systèmes administratifs pour une efficacité maximale",
      examples: [
        "Digitalisation des services publics",
        "Réorganisation administrative",
        "Amélioration de la gouvernance",
        "Optimisation des processus institutionnels"
      ]
    },
    {
      icon: TrendingUp,
      title: "Dynamisation des Marchés",
      description: "Développement d'écosystèmes économiques performants et stimulation de la croissance des secteurs stratégiques",
      examples: [
        "Développement de clusters industriels",
        "Création de zones économiques spéciales",
        "Programmes de soutien aux PME/ETI",
        "Stratégies sectorielles ciblées"
      ]
    }
  ];

  const achievements = [
    {
      metric: "12",
      label: "Pays accompagnés",
      description: "Missions stratégiques réalisées"
    },
    {
      metric: "25+",
      label: "Institutions internationales",
      description: "Partenariats établis"
    },
    {
      metric: "€2.5Md",
      label: "Impact économique généré",
      description: "Croissance stimulée"
    },
    {
      metric: "150+",
      label: "Réformes implémentées",
      description: "Transformations réussies"
    }
  ];

  const partnerships = [
    "Banque Mondiale",
    "Union Européenne",
    "OCDE",
    "Banques de Développement Régionales",
    "Agences de Coopération Internationale",
    "Ministères des Finances",
    "Agences de Développement Économique",
    "Chambres de Commerce Internationales"
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 backdrop-blur-sm mb-6">
            <Globe className="h-4 w-4 text-yellow-400 mr-2" />
            <span className="text-yellow-400 text-sm font-medium">Expertise Institutionnelle Internationale</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
            Partenaire des <span className="text-yellow-400">Institutions Mondiales</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Nous accompagnons les pays et institutions internationales dans leur stratégie de développement, 
            l'optimisation de leur croissance, la dynamisation des marchés et la transformation des systèmes en place.
          </p>
          <p className="text-base text-gray-400 max-w-3xl mx-auto mt-4">
            Nous priorisons les mandats fonds et family offices ; nos interventions institutionnelles restent sélectives.
          </p>
        </div>

        {/* Services */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-yellow-400 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-yellow-400 p-4 rounded-lg mr-4">
                  <service.icon className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-xl font-serif text-white">{service.title}</h3>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
              
              <div className="space-y-3">
                {service.examples.map((example, idx) => (
                  <div key={idx} className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-yellow-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-400 text-sm">{example}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="mb-20">
          <h3 className="text-3xl font-serif text-white mb-12 text-center">Notre impact international</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">{achievement.metric}</div>
                <div className="text-white font-semibold mb-2">{achievement.label}</div>
                <div className="text-gray-400 text-sm">{achievement.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Case Study */}
        <div className="bg-gray-800 p-12 rounded-2xl border border-gray-700 mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Award className="h-6 w-6 text-yellow-400 mr-3" />
                <span className="text-yellow-400 font-semibold">Étude de cas récente</span>
              </div>
              <h3 className="text-3xl font-serif text-white mb-6">
                Transformation Économique Nationale
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Accompagnement d'un pays émergent dans la refonte complète de sa stratégie de développement économique, 
                incluant la digitalisation des institutions et la création de nouveaux écosystèmes industriels.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-yellow-400 w-2 h-2 rounded-full mr-4"></div>
                  <span className="text-gray-300">+35% de croissance du PIB en 3 ans</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-yellow-400 w-2 h-2 rounded-full mr-4"></div>
                  <span className="text-gray-300">50+ réformes structurelles implémentées</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-yellow-400 w-2 h-2 rounded-full mr-4"></div>
                  <span className="text-gray-300">€800M d'investissements étrangers attirés</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 p-8 rounded-xl">
              <h4 className="text-xl font-serif text-white mb-6">Méthodologie appliquée</h4>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-yellow-400 text-black w-8 h-8 rounded-full flex items-center justify-center mr-4 text-sm font-bold">1</div>
                  <span className="text-gray-300">Diagnostic économique complet</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-yellow-400 text-black w-8 h-8 rounded-full flex items-center justify-center mr-4 text-sm font-bold">2</div>
                  <span className="text-gray-300">Stratégie de développement sur mesure</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-yellow-400 text-black w-8 h-8 rounded-full flex items-center justify-center mr-4 text-sm font-bold">3</div>
                  <span className="text-gray-300">Implémentation avec task force locale</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-yellow-400 text-black w-8 h-8 rounded-full flex items-center justify-center mr-4 text-sm font-bold">4</div>
                  <span className="text-gray-300">Suivi et optimisation continue</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Partnerships */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-serif text-white mb-12">Nos partenaires institutionnels</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {partnerships.map((partner, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                <span className="text-gray-300 font-medium">{partner}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-12 rounded-2xl border border-gray-700">
            <h3 className="text-3xl md:text-4xl font-serif text-white mb-6">
              Transformons ensemble l'avenir économique
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Que vous soyez un gouvernement, une institution internationale ou une agence de développement, 
              nous avons l'expertise pour catalyser votre croissance.
            </p>
            <button className="bg-yellow-400 text-black hover:bg-yellow-500 px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-400/25 inline-flex items-center">
              <Globe className="mr-2 h-5 w-5" />
              Discuter de votre projet
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternationalInstitutions;