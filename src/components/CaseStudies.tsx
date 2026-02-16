'use client';

import React, { useState } from 'react';
import { ChevronRight, Building, TrendingUp, DollarSign, Calendar, Target, CheckCircle } from 'lucide-react';
import { LocaleLink } from './LocaleLink';

const CaseStudies = () => {
  const [activeCase, setActiveCase] = useState(0);

  const caseStudies = [
    {
      id: 1,
      title: "Transformation d'une ETI Industrielle",
      sector: "Industrie & Manufacturing",
      challenge: "Restructuration complète et préparation à la cession",
      duration: "18 mois",
      investment: "750k€",
      results: {
        valorisation: "+45%",
        cash: "+1.8M€",
        multiple: "8x EBITDA",
        roi: "420%"
      },
      description: "Une ETI industrielle de 180M€ de CA souhaitait optimiser sa structure avant une cession. Notre intervention a permis une transformation complète de l'organisation.",
      methodology: [
        "Audit stratégique et opérationnel complet",
        "Restructuration des processus clés",
        "Optimisation de la supply chain",
        "Préparation due diligence",
        "Négociation et closing de la cession"
      ],
      timeline: [
        { phase: "Audit & Diagnostic", duration: "2 mois", status: "completed" },
        { phase: "Restructuration", duration: "8 mois", status: "completed" },
        { phase: "Optimisation", duration: "6 mois", status: "completed" },
        { phase: "Cession", duration: "2 mois", status: "completed" }
      ]
    },
    {
      id: 2,
      title: "Digitalisation d'un Groupe de Distribution",
      sector: "Distribution & Retail",
      challenge: "Transformation digitale et optimisation supply chain",
      duration: "24 mois",
      investment: "1.2M€",
      results: {
        valorisation: "+35%",
        cash: "+2.3M€",
        multiple: "6.5x EBITDA",
        roi: "380%"
      },
      description: "Un groupe de distribution de 320M€ de CA nécessitait une transformation digitale complète pour rester compétitif.",
      methodology: [
        "Stratégie de transformation digitale",
        "Implémentation d'outils CRM/ERP",
        "Optimisation logistique",
        "Formation des équipes",
        "Mesure de performance"
      ],
      timeline: [
        { phase: "Stratégie Digitale", duration: "3 mois", status: "completed" },
        { phase: "Implémentation", duration: "12 mois", status: "completed" },
        { phase: "Formation", duration: "6 mois", status: "completed" },
        { phase: "Optimisation", duration: "3 mois", status: "completed" }
      ]
    },
    {
      id: 3,
      title: "Accélération Portfolio Company",
      sector: "Private Equity",
      challenge: "Maximisation de la valeur avant exit",
      duration: "12 mois",
      investment: "500k€",
      results: {
        valorisation: "+65%",
        cash: "+3.1M€",
        multiple: "4.2x",
        roi: "520%"
      },
      description: "Un fonds de Private Equity souhaitait accélérer la croissance d'une participation avant la sortie.",
      methodology: [
        "Due diligence stratégique approfondie",
        "Plan d'accélération sur mesure",
        "Optimisation opérationnelle",
        "Préparation à l'exit",
        "Négociation avec acquéreurs"
      ],
      timeline: [
        { phase: "Due Diligence", duration: "1 mois", status: "completed" },
        { phase: "Accélération", duration: "8 mois", status: "completed" },
        { phase: "Préparation Exit", duration: "2 mois", status: "completed" },
        { phase: "Closing", duration: "1 mois", status: "completed" }
      ]
    }
  ];

  const currentCase = caseStudies[activeCase];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-black mb-6">
            Études de <span className="text-yellow-600">Cas Détaillées</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez comment nous avons transformé des entreprises et généré 
            des résultats exceptionnels pour nos clients.
          </p>
          <LocaleLink href="/expertise" className="inline-block mt-6 text-yellow-600 hover:text-yellow-700 font-medium">
            Voir toutes les études de cas premium →
          </LocaleLink>
        </div>

        {/* Case Study Selector */}
        <div className="flex flex-col lg:flex-row gap-8 mb-16">
          <div className="lg:w-1/3">
            <h3 className="text-2xl font-serif text-black mb-6">Sélectionnez une étude</h3>
            <div className="space-y-4">
              {caseStudies.map((study, index) => (
                <button
                  key={study.id}
                  onClick={() => setActiveCase(index)}
                  className={`w-full text-left p-6 rounded-lg border-2 transition-all duration-300 ${
                    activeCase === index
                      ? 'border-yellow-600 bg-yellow-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-black">{study.title}</h4>
                    <ChevronRight className={`h-5 w-5 transition-transform ${
                      activeCase === index ? 'rotate-90 text-yellow-600' : 'text-gray-400'
                    }`} />
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{study.sector}</p>
                  <div className="flex items-center text-sm text-yellow-600">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    {study.results.valorisation} valorisation
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Case Study Details */}
          <div className="lg:w-2/3">
            <div className="bg-gray-50 p-8 rounded-xl">
              {/* Header */}
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <Building className="h-6 w-6 text-yellow-600 mr-3" />
                  <span className="text-yellow-600 font-semibold">{currentCase.sector}</span>
                </div>
                <h3 className="text-3xl font-serif text-black mb-4">{currentCase.title}</h3>
                <p className="text-gray-600 leading-relaxed">{currentCase.description}</p>
              </div>

              {/* Key Metrics */}
              <div className="grid md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white p-4 rounded-lg text-center">
                  <TrendingUp className="h-6 w-6 text-yellow-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-black">{currentCase.results.valorisation}</div>
                  <div className="text-sm text-gray-600">Valorisation</div>
                </div>
                <div className="bg-white p-4 rounded-lg text-center">
                  <DollarSign className="h-6 w-6 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-black">{currentCase.results.cash}</div>
                  <div className="text-sm text-gray-600">Cash généré</div>
                </div>
                <div className="bg-white p-4 rounded-lg text-center">
                  <Target className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-black">{currentCase.results.multiple}</div>
                  <div className="text-sm text-gray-600">Multiple</div>
                </div>
                <div className="bg-white p-4 rounded-lg text-center">
                  <Calendar className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-black">{currentCase.duration}</div>
                  <div className="text-sm text-gray-600">Durée</div>
                </div>
              </div>

              {/* Methodology */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-black mb-4">Méthodologie appliquée</h4>
                <div className="space-y-3">
                  {currentCase.methodology.map((step, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-yellow-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Timeline */}
              <div>
                <h4 className="text-xl font-semibold text-black mb-4">Timeline du projet</h4>
                <div className="space-y-4">
                  {currentCase.timeline.map((phase, index) => (
                    <div key={index} className="flex items-center">
                      <div className="bg-yellow-600 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-black">{phase.phase}</span>
                          <span className="text-gray-600 text-sm">{phase.duration}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                          <div className="bg-yellow-600 h-2 rounded-full w-full"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ROI Calculator CTA */}
        <div className="text-center">
          <div className="bg-black p-12 rounded-2xl">
            <h3 className="text-3xl md:text-4xl font-serif text-white mb-6">
              Calculez votre potentiel de valorisation
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Découvrez l&apos;impact que notre accompagnement pourrait avoir sur votre entreprise.
            </p>
            <button className="bg-yellow-400 text-black hover:bg-yellow-500 px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-400/25">
              Simuler mon ROI
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;