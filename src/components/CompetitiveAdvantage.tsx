import React from 'react';
import { Shield, Zap, Target, Users, Award, CheckCircle, Star, Layers } from 'lucide-react';

const CompetitiveAdvantage = () => {
  const advantages = [
    {
      icon: Layers,
      title: "Un contrat = transformation globale",
      description: "Un mandat couvre l'ensemble de vos participations (8 à 30 sociétés). Pas de facturation mission par mission.",
      details: [
        "Un seul contrat pour tout le portefeuille",
        "Impact sur plusieurs sociétés simultanément",
        "Modèle conçu pour fonds et family offices",
        "Efficacité et cohérence stratégique"
      ],
      differentiator: "Le conseil traditionnel facture par mission ; nous transformons le portefeuille entier"
    },
    {
      icon: Shield,
      title: "Confidentialité absolue",
      description: "Cercle fermé : vos deals restent privés. Aucun conflit d'intérêts.",
      details: [
        "NDA systématique avant tout échange",
        "Équipes dédiées sans rotation",
        "Pas de conflits d'intérêts",
        "Certification ISO 27001"
      ],
      differentiator: "Les grands cabinets travaillent souvent avec vos concurrents"
    },
    {
      icon: Zap,
      title: "Exécution au niveau portefeuille",
      description: "Task force au niveau board : recrutements CEO, M&A, opérations. Nous exécutons, nous ne livrons pas que des rapports.",
      details: [
        "Task force opérationnelle dédiée au portefeuille",
        "Mise en œuvre dès la semaine 1",
        "Résultats mesurables sous 90 jours",
        "Proximité avec les dirigeants et les boards"
      ],
      differentiator: "Les consultants traditionnels livrent des recommandations ; nous livrons des résultats"
    },
    {
      icon: Target,
      title: "Rémunération alignée",
      description: "Success fee, equity (1–3 %), intéressement performance ou retainer annuel (100k–300k€/an par portefeuille). Nous prenons le risque avec vous.",
      details: [
        "100k–300k€/an par portefeuille ou 1–3 % equity",
        "Success fees et intéressement performance",
        "KPIs contractuels définis",
        "Alignement total sur vos résultats"
      ],
      differentiator: "Nous prenons des risques sur vos résultats, pas seulement des honoraires fixes"
    },
    {
      icon: Users,
      title: "Cercle fermé et recommandations",
      description: "Les investisseurs se connaissent, co-investissent, siègent aux mêmes boards. Réussir avec 2–3 fonds ouvre le cercle.",
      details: [
        "Réseau de dirigeants et d'investisseurs",
        "Deal flow et co-investissements",
        "Références par le cercle, pas par la pub",
        "Un réseau que l'argent seul ne peut acheter"
      ],
      differentiator: "Réussir avec quelques fonds suffit : le cercle fait le reste"
    }
  ];

  const comparisons = [
    {
      criteria: "Périmètre",
      ghezali: "Portefeuille entier / plusieurs sociétés",
      others: "Mission par mission",
      advantage: true
    },
    {
      criteria: "Confidentialité",
      ghezali: "Absolue - NDA renforcé",
      others: "Standard - Conflits possibles",
      advantage: true
    },
    {
      criteria: "Exécution",
      ghezali: "Task force dédiée, niveau board",
      others: "Recommandations uniquement",
      advantage: true
    },
    {
      criteria: "Engagement",
      ghezali: "Success fees / equity / retainer aligné",
      others: "Honoraires fixes",
      advantage: true
    },
    {
      criteria: "Réseau",
      ghezali: "Cercle privé exclusif",
      others: "Réseau commercial",
      advantage: true
    },
    {
      criteria: "Durée",
      ghezali: "6-18 mois intensifs",
      others: "Missions longues diluées",
      advantage: true
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-black mb-6">
            Pourquoi les fonds et family offices nous <span className="text-yellow-600">choisissent</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Cercle fermé, sélection exigeante. Ce qui nous différencie du conseil traditionnel.
          </p>
        </div>

        {/* Competitive Advantages */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {advantages.map((advantage, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300">
              <div className="flex items-start mb-6">
                <div className="bg-yellow-600 p-4 rounded-lg mr-6 flex-shrink-0">
                  <advantage.icon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-serif text-black mb-3">{advantage.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-black mb-3">Concrètement :</h4>
                <div className="space-y-2">
                  {advantage.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-yellow-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-600">
                <p className="text-sm text-gray-700 italic">
                  <strong>Notre différence :</strong> {advantage.differentiator}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="mb-16">
          <h3 className="text-3xl font-serif text-black mb-12 text-center">
            Ghezali vs conseil traditionnel
          </h3>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-900 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Critères</th>
                    <th className="px-6 py-4 text-left font-semibold text-yellow-400">Ghezali Business Mastery</th>
                    <th className="px-6 py-4 text-left font-semibold">Cabinets Traditionnels</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons.map((comparison, index) => (
                    <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-yellow-50 transition-colors`}>
                      <td className="px-6 py-4 font-semibold text-black">{comparison.criteria}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                          <span className="text-gray-700">{comparison.ghezali}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-600">{comparison.others}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Client Success Stories */}
        <div className="bg-black p-12 rounded-2xl text-white mb-16">
          <h3 className="text-3xl font-serif mb-8 text-center">Ce que disent fonds et family offices</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-gray-300 italic mb-4">
                "Un partenaire stratégique du portefeuille, pas un prestataire. Exit à 4,2x au lieu des 2,8x prévus. La valeur créée parle d'elle-même."
              </blockquote>
              <cite className="text-yellow-400">— Managing Partner, Fonds PE</cite>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-gray-300 italic mb-4">
                "Cercle fermé, discrétion totale. Ils interviennent sur plusieurs de nos participations avec une cohérence rare. On les recommande en interne."
              </blockquote>
              <cite className="text-yellow-400">— Family Office, Europe</cite>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-gray-300 italic mb-4">
                "En 18 mois, valorisation du portefeuille significativement renforcée. Un contrat, plusieurs sociétés transformées. C'est exactement ce qu'on cherchait."
              </blockquote>
              <cite className="text-yellow-400">— Holding d'entrepreneurs</cite>
            </div>
          </div>
        </div>

        {/* Awards & Recognition */}
        <div className="text-center">
          <h3 className="text-2xl font-serif text-black mb-8">Reconnaissances & Distinctions</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <Award className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h4 className="font-semibold text-black mb-2">Top Consulting Firm</h4>
              <p className="text-gray-600 text-sm">Les Échos Business 2024</p>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h4 className="font-semibold text-black mb-2">Excellence Award</h4>
              <p className="text-gray-600 text-sm">SYNTEC Conseil 2023</p>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h4 className="font-semibold text-black mb-2">Best M&A Advisory</h4>
              <p className="text-gray-600 text-sm">Finance Magazine 2023</p>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h4 className="font-semibold text-black mb-2">Client Satisfaction</h4>
              <p className="text-gray-600 text-sm">98% - Record industrie</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompetitiveAdvantage;