'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Shield, Clock, DollarSign } from 'lucide-react';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqCategories = [
    {
      title: "Processus & Méthodologie",
      icon: HelpCircle,
      questions: [
        {
          question: "Comment se déroule le processus de sélection ?",
          answer: "Notre processus de sélection comprend 4 étapes : (1) Analyse de votre candidature sous 48h, (2) Entretien confidentiel de qualification, (3) Audit stratégique préliminaire, (4) Proposition d'accompagnement sur mesure. Seules les candidatures alignées avec nos critères d'excellence sont retenues."
        },
        {
          question: "Quelle est votre méthodologie d'intervention ?",
          answer: "Notre approche S.E.R (Stratégie - Exécution - Résultats) combine vision long terme et mise en œuvre immédiate. Nous commençons par un diagnostic approfondi, développons une stratégie personnalisée, puis déployons une task force opérationnelle pour garantir l'exécution et mesurer les résultats."
        },
        {
          question: "Combien de temps dure un accompagnement typique ?",
          answer: "La durée varie selon l'objectif : Executive Advisory (6-12 mois), Corporate Acceleration (12-18 mois), Strategic Deals (variable selon le deal). Chaque mission est calibrée pour maximiser l'impact dans les délais optimaux."
        }
      ]
    },
    {
      title: "Investissement & ROI",
      icon: DollarSign,
      questions: [
        {
          question: "Quels sont vos tarifs et modalités de paiement ?",
          answer: "Nos programmes s'échelonnent de 200k€ à 1M€+ selon la complexité et l'ampleur de la mission. Nous proposons des modalités flexibles : forfait, success fee, ou combinaison des deux. Chaque proposition est personnalisée selon vos objectifs et contraintes."
        },
        {
          question: "Comment garantissez-vous le retour sur investissement ?",
          answer: "Nous nous engageons contractuellement sur des KPIs mesurables : augmentation de valorisation, génération de cash, amélioration de multiples, etc. Notre taux de réussite de 95% et ROI moyen de 380% témoignent de notre capacité à créer de la valeur tangible."
        },
        {
          question: "Proposez-vous des garanties de résultats ?",
          answer: "Oui, nous proposons des engagements contractuels avec des clauses de performance. Si les objectifs convenus ne sont pas atteints, nous adaptons notre rémunération en conséquence. Notre réputation repose sur des résultats concrets et mesurables."
        }
      ]
    },
    {
      title: "Confidentialité & Sécurité",
      icon: Shield,
      questions: [
        {
          question: "Comment protégez-vous la confidentialité de nos informations ?",
          answer: "Nous appliquons les plus hauts standards de sécurité : NDA systématique avant tout échange, certification ISO 27001, données chiffrées, accès restreint aux équipes projet. Votre confidentialité est notre priorité absolue."
        },
        {
          question: "Qui a accès aux informations de notre entreprise ?",
          answer: "Seuls les membres de l'équipe projet directement impliqués dans votre mission ont accès aux informations. Chaque intervenant signe un accord de confidentialité spécifique. Nous appliquons le principe du 'need to know' de manière stricte."
        },
        {
          question: "Travaillez-vous avec nos concurrents ?",
          answer: "Nous appliquons une politique stricte de non-concurrence pendant toute la durée de notre collaboration et 24 mois après. Si nous intervenons dans votre secteur, c'est uniquement sur des marchés géographiques ou segments différents, avec votre accord préalable."
        }
      ]
    },
    {
      title: "Éligibilité & Critères",
      icon: Clock,
      questions: [
        {
          question: "Quels sont vos critères de sélection ?",
          answer: "Nous accompagnons principalement les ETI (CA 50M€+) et divisions de Grands Groupes avec un potentiel de croissance significatif, des dirigeants visionnaires, et une ambition d'excellence. L'engagement du leadership et la capacité d'investissement sont essentiels."
        },
        {
          question: "Intervenez-vous dans tous les secteurs ?",
          answer: "Nous avons une expertise reconnue dans l'industrie, la distribution, les services, et la tech. Notre approche sectorielle nous permet d'apporter une valeur ajoutée immédiate grâce à notre connaissance des enjeux spécifiques de chaque marché."
        },
        {
          question: "Accompagnez-vous les entreprises en difficulté ?",
          answer: "Notre positionnement se concentre sur l'accélération de la performance d'entreprises saines avec un potentiel de croissance. Pour les situations de retournement, nous orientons vers des spécialistes du restructuring de notre réseau."
        }
      ]
    }
  ];

  const toggleFAQ = (categoryIndex: number, questionIndex: number) => {
    const faqIndex = categoryIndex * 100 + questionIndex;
    setOpenFAQ(openFAQ === faqIndex ? null : faqIndex);
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-black mb-6">
            Questions <span className="text-yellow-600">Fréquentes</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Retrouvez les réponses aux questions les plus courantes sur notre approche, 
            nos méthodes et nos conditions d'intervention.
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-gray-50 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <category.icon className="h-6 w-6 text-yellow-600 mr-3" />
                <h3 className="text-2xl font-serif text-black">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.questions.map((faq, questionIndex) => {
                  const faqIndex = categoryIndex * 100 + questionIndex;
                  const isOpen = openFAQ === faqIndex;
                  
                  return (
                    <div key={questionIndex} className="bg-white rounded-lg shadow-sm">
                      <button
                        onClick={() => toggleFAQ(categoryIndex, questionIndex)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors rounded-lg"
                      >
                        <span className="font-semibold text-black pr-4">{faq.question}</span>
                        {isOpen ? (
                          <ChevronUp className="h-5 w-5 text-yellow-600 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                        )}
                      </button>
                      
                      {isOpen && (
                        <div className="px-6 pb-4">
                          <div className="border-t border-gray-100 pt-4">
                            <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <div className="bg-black p-8 rounded-xl">
            <h3 className="text-2xl font-serif text-white mb-4">
              Une question spécifique ?
            </h3>
            <p className="text-gray-300 mb-6">
              Notre équipe est disponible pour répondre à toutes vos questions 
              lors d'un échange confidentiel.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-yellow-400 text-black hover:bg-yellow-500 px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                Poser une question
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-black px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                Planifier un appel
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;