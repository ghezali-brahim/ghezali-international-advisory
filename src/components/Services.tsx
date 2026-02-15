import React from 'react';
import Link from 'next/link';
import { Crown, Rocket, TrendingUp, ArrowRight, CheckCircle, Clock, Euro } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: TrendingUp,
      title: "Strategic Deals & Equity",
      subtitle: "Fonds PE • Family Offices • Holdings",
      price: "100k–300k€/an par portefeuille • ou 1–3% equity • ou success fee",
      duration: "Variable selon mandat",
      description: "Un contrat, une transformation globale du portefeuille. Partenaire stratégique au niveau board : recrutements CEO, M&A, opérations. Un mandat couvre l'ensemble de vos participations, pas une mission par société.",
      features: [
        "Transformation multi-sociétés (8–30 participations)",
        "Due diligence stratégique et optimisation pré-cession",
        "Accompagnement M&A et maximisation des multiples",
        "Alignement success fee / equity / intéressement performance",
        "Accès board et proximité avec les dirigeants"
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
        "Support 24/7 pour décisions critiques"
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
        "Préparation levée de fonds"
      ],
      color: "bg-gradient-to-br from-blue-900 to-blue-700"
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-black mb-6">
            Nos offres — Pour fonds, family offices et holdings
          </h2>
          <div className="w-24 h-1 bg-yellow-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transformation de portefeuille et impact multi-sociétés. Un mandat, plusieurs participations transformées.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform group-hover:scale-105 transition-all duration-300 h-full">
                {/* Header */}
                <div className={`${service.color} p-8 text-white relative overflow-hidden`}>
                  <div className="relative z-10">
                    <service.icon className="h-12 w-12 mb-4" />
                    <h3 className="text-2xl font-serif mb-2">{service.title}</h3>
                    <p className="text-sm opacity-90 mb-4">{service.subtitle}</p>
                    <div className="flex justify-between items-center text-sm">
                      <div className="flex items-center">
                        <Euro className="h-4 w-4 mr-1" />
                        <span className="font-semibold">{service.price}</span>
                      </div>
                      <div className="flex items-center opacity-90">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{service.duration}</span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-yellow-600 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className="w-full bg-black text-white hover:bg-gray-800 py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group">
                    En savoir plus
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-serif text-black mb-12 text-center">Notre processus d'excellence</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-yellow-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">1</div>
              <h4 className="font-semibold text-black mb-2">Audit Confidentiel</h4>
              <p className="text-gray-600 text-sm">Diagnostic approfondi sous NDA</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">2</div>
              <h4 className="font-semibold text-black mb-2">Stratégie Sur-Mesure</h4>
              <p className="text-gray-600 text-sm">Plan d'action personnalisé</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">3</div>
              <h4 className="font-semibold text-black mb-2">Exécution Rapide</h4>
              <p className="text-gray-600 text-sm">Mise en œuvre immédiate</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">4</div>
              <h4 className="font-semibold text-black mb-2">Résultats Mesurés</h4>
              <p className="text-gray-600 text-sm">ROI contractuel garanti</p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-black p-12 rounded-2xl">
            <h3 className="text-3xl md:text-4xl font-serif text-white mb-6">
              Chaque mission est unique, chaque résultat est exceptionnel
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Nos programmes sont conçus sur mesure pour votre ambition et vos objectifs spécifiques.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link href="/contact" className="bg-yellow-400 text-black hover:bg-yellow-500 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                Vérifier son éligibilité
              </Link>
              <Link href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                Recevoir notre proposition sur mesure
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;