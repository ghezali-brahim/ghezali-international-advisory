import React, { useState } from 'react';
import { CheckCircle, Clock, ArrowRight, Users, FileText, Zap, Target } from 'lucide-react';

const ProcessTimeline = () => {
  const [activePhase, setActivePhase] = useState(0);

  const phases = [
    {
      id: 1,
      title: "Audit Confidentiel",
      duration: "2-4 semaines",
      icon: FileText,
      description: "Diagnostic approfondi de votre entreprise sous NDA strict",
      deliverables: [
        "Analyse stratégique 360°",
        "Audit opérationnel complet",
        "Benchmark concurrentiel",
        "Identification des leviers de croissance",
        "Rapport confidentiel détaillé"
      ],
      methodology: [
        "Entretiens avec l'équipe dirigeante",
        "Analyse des données financières",
        "Étude de marché approfondie",
        "Évaluation des processus internes"
      ]
    },
    {
      id: 2,
      title: "Stratégie Sur-Mesure",
      duration: "3-6 semaines",
      icon: Target,
      description: "Élaboration d'un plan d'action personnalisé et détaillé",
      deliverables: [
        "Roadmap stratégique détaillée",
        "Plan d'action opérationnel",
        "KPIs et objectifs mesurables",
        "Timeline de mise en œuvre",
        "Budget et ressources nécessaires"
      ],
      methodology: [
        "Workshops stratégiques",
        "Modélisation financière",
        "Définition des priorités",
        "Validation avec le comité de direction"
      ]
    },
    {
      id: 3,
      title: "Task Force Opérationnelle",
      duration: "6-18 mois",
      icon: Users,
      description: "Déploiement d'une équipe dédiée pour l'exécution",
      deliverables: [
        "Équipe projet dédiée",
        "Mise en œuvre opérationnelle",
        "Pilotage performance temps réel",
        "Ajustements stratégiques",
        "Reporting mensuel détaillé"
      ],
      methodology: [
        "Gestion de projet agile",
        "Suivi hebdomadaire des KPIs",
        "Comités de pilotage mensuels",
        "Optimisation continue"
      ]
    },
    {
      id: 4,
      title: "Accélération & Scale",
      duration: "3-6 mois",
      icon: Zap,
      description: "Optimisation et accélération des résultats obtenus",
      deliverables: [
        "Optimisation des processus",
        "Scaling des succès",
        "Formation des équipes",
        "Transfert de compétences",
        "Plan de continuité"
      ],
      methodology: [
        "Analyse des résultats",
        "Identification des best practices",
        "Formation et coaching",
        "Documentation des processus"
      ]
    },
    {
      id: 5,
      title: "Résultats & Transition",
      duration: "1-2 mois",
      icon: CheckCircle,
      description: "Mesure des résultats et transition vers l'autonomie",
      deliverables: [
        "Bilan complet des résultats",
        "ROI détaillé et mesurable",
        "Plan de continuité autonome",
        "Support post-mission",
        "Certification des acquis"
      ],
      methodology: [
        "Audit final des résultats",
        "Mesure du ROI réalisé",
        "Transfert complet des compétences",
        "Plan de suivi à long terme"
      ]
    }
  ];

  const currentPhase = phases[activePhase];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-black mb-6">
            Notre Processus <span className="text-yellow-600">d'Excellence</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Une méthodologie éprouvée en 5 phases pour garantir des résultats exceptionnels 
            et un transfert de compétences durable.
          </p>
        </div>

        {/* Timeline Navigation */}
        <div className="mb-16">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            {phases.map((phase, index) => (
              <div key={phase.id} className="flex items-center mb-4 lg:mb-0">
                <button
                  onClick={() => setActivePhase(index)}
                  className={`flex items-center px-6 py-4 rounded-lg transition-all duration-300 ${
                    activePhase === index
                      ? 'bg-yellow-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <phase.icon className="h-6 w-6 mr-3" />
                  <div className="text-left">
                    <div className="font-semibold">{phase.title}</div>
                    <div className="text-sm opacity-75">{phase.duration}</div>
                  </div>
                </button>
                {index < phases.length - 1 && (
                  <ArrowRight className="h-6 w-6 text-gray-400 mx-4 hidden lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Phase Details */}
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Description */}
          <div>
            <div className="flex items-center mb-6">
              <div className="bg-yellow-600 p-4 rounded-lg mr-6">
                <currentPhase.icon className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-serif text-black">{currentPhase.title}</h3>
                <div className="flex items-center mt-2">
                  <Clock className="h-4 w-4 text-yellow-600 mr-2" />
                  <span className="text-yellow-600 font-semibold">{currentPhase.duration}</span>
                </div>
              </div>
            </div>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {currentPhase.description}
            </p>

            <div className="mb-8">
              <h4 className="text-xl font-semibold text-black mb-4">Notre méthodologie</h4>
              <div className="space-y-3">
                {currentPhase.methodology.map((method, index) => (
                  <div key={index} className="flex items-center">
                    <div className="bg-yellow-600 w-2 h-2 rounded-full mr-4 flex-shrink-0"></div>
                    <span className="text-gray-700">{method}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-black mb-3">Points clés de cette phase</h4>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Engagement contractuel sur les résultats</li>
                <li>• Confidentialité absolue garantie</li>
                <li>• Équipe dédiée et expérimentée</li>
                <li>• Reporting transparent et régulier</li>
              </ul>
            </div>
          </div>

          {/* Deliverables */}
          <div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h4 className="text-2xl font-serif text-black mb-6">Livrables inclus</h4>
              <div className="space-y-4">
                {currentPhase.deliverables.map((deliverable, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{deliverable}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Success Metrics */}
            <div className="mt-8 bg-black p-8 rounded-2xl text-white">
              <h4 className="text-xl font-serif mb-6">Métriques de succès</h4>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">95%</div>
                  <div className="text-gray-300 text-sm">Taux de réussite</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">380%</div>
                  <div className="text-gray-300 text-sm">ROI moyen</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">24h</div>
                  <div className="text-gray-300 text-sm">Délai de réponse</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">100%</div>
                  <div className="text-gray-300 text-sm">Confidentialité</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-900 to-black p-12 rounded-2xl">
            <h3 className="text-3xl md:text-4xl font-serif text-white mb-6">
              Prêt à démarrer votre transformation ?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Chaque parcours commence par un audit confidentiel approfondi. 
              Découvrez votre potentiel de croissance.
            </p>
            <button className="bg-yellow-400 text-black hover:bg-yellow-500 px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-400/25">
              Démarrer l'audit confidentiel
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;