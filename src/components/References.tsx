import React from 'react';
import { Award, Download, Building, TrendingUp, CheckCircle, FileText, Users, Globe } from 'lucide-react';

const References = () => {
  const caseStudies = [
    {
      sector: "ETI Industrielle",
      challenge: "Restructuration et préparation à la cession",
      result: "+45% de valorisation en 18 mois",
      impact: "Cession réalisée à 8x EBITDA vs 5.5x initial"
    },
    {
      sector: "Groupe de Distribution",
      challenge: "Digitalisation et optimisation supply chain",
      result: "+2.3M€ de cash généré",
      impact: "ROI de 380% sur l'investissement conseil"
    },
    {
      sector: "Fonds d'Investissement",
      challenge: "Accélération portfolio company",
      result: "Exit réussi en 24 mois",
      impact: "Multiple de sortie : 4.2x vs 2.8x prévu"
    }
  ];

  const certifications = [
    "Certification ISO 27001 - Sécurité de l'information",
    "Membre de la Fédération des Cabinets de Conseil",
    "Agrément formation professionnelle continue",
    "Certification Qualiopi pour les actions de formation"
  ];

  const sectors = [
    { name: "Industrie & Manufacturing", projects: "45+ projets", icon: Building },
    { name: "Services & Conseil", projects: "38+ projets", icon: Users },
    { name: "Distribution & Retail", projects: "32+ projets", icon: TrendingUp },
    { name: "Technologies & Digital", projects: "28+ projets", icon: Globe }
  ];

  return (
    <section id="references" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-black mb-6">
            Références & <span className="text-yellow-600">Appels d'Offres</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Des résultats concrets, mesurables et vérifiables. 
            Nos interventions génèrent un impact immédiat sur la performance et la valorisation.
          </p>
        </div>

        {/* Case Studies */}
        <div className="mb-20">
          <h3 className="text-3xl font-serif text-black mb-12 text-center">Études de cas récentes</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <Building className="h-8 w-8 text-yellow-600 mr-3" />
                  <h4 className="text-xl font-semibold text-black">{study.sector}</h4>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Défi</p>
                    <p className="text-gray-700">{study.challenge}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Résultat</p>
                    <p className="text-lg font-semibold text-yellow-600">{study.result}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Impact</p>
                    <p className="text-gray-700">{study.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sectors Expertise */}
        <div className="mb-20">
          <h3 className="text-3xl font-serif text-black mb-12 text-center">Expertise sectorielle</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {sectors.map((sector, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300">
                <sector.icon className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                <h4 className="font-semibold text-black mb-2">{sector.name}</h4>
                <p className="text-yellow-600 font-medium">{sector.projects}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-black p-12 rounded-2xl mb-20">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">+500M€</div>
              <div className="text-gray-300">Valorisation générée</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">200+</div>
              <div className="text-gray-300">ETI accompagnées</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">95%</div>
              <div className="text-gray-300">Taux de satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">15</div>
              <div className="text-gray-300">Pays d'intervention</div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-700">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-2xl font-bold text-yellow-400 mb-2">4.2x</div>
                <div className="text-gray-300">Multiple moyen de sortie</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-400 mb-2">18 mois</div>
                <div className="text-gray-300">Durée moyenne d'accompagnement</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-400 mb-2">380%</div>
                <div className="text-gray-300">ROI moyen généré</div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications & Corporate */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-serif text-black mb-6 flex items-center">
              <Award className="h-6 w-6 text-yellow-600 mr-3" />
              Certifications & Agréments
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                  <CheckCircle className="h-5 w-5 text-yellow-600 mr-4 flex-shrink-0" />
                  <p className="text-gray-700">{cert}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Corporate Download */}
          <div>
            <h3 className="text-2xl font-serif text-black mb-6 flex items-center">
              <FileText className="h-6 w-6 text-yellow-600 mr-3" />
              Documentation Corporate
            </h3>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold text-black mb-4">Dossier Institutionnel</h4>
              <p className="text-gray-600 mb-6">
                Téléchargez notre présentation complète incluant références, 
                méthodologies, équipe et conditions d'intervention.
              </p>
              <div className="mb-6">
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-yellow-600 mr-2" />
                    Études de cas détaillées
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-yellow-600 mr-2" />
                    Méthodologies propriétaires
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-yellow-600 mr-2" />
                    Équipe et références
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-yellow-600 mr-2" />
                    Conditions d'intervention
                  </li>
                </ul>
              </div>
              <button className="bg-yellow-600 text-white hover:bg-yellow-700 px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center">
                <Download className="h-5 w-5 mr-2" />
                Télécharger le dossier PDF
              </button>
              <p className="text-sm text-gray-500 mt-3">
                Document confidentiel - Usage strictement professionnel
              </p>
            </div>
          </div>
        </div>

        {/* Partners Section */}
        <div className="text-center">
          <h3 className="text-2xl font-serif text-black mb-8">Nos partenaires de confiance</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <div className="text-xl font-bold text-gray-600">GRANDS GROUPES CAC 40</div>
            <div className="text-xl font-bold text-gray-600">ETI LEADERS</div>
            <div className="text-xl font-bold text-gray-600">FAMILY OFFICES</div>
            <div className="text-xl font-bold text-gray-600">FONDS PE/VC</div>
          </div>
          <p className="text-gray-500 text-sm mt-6">
            Logos et références détaillées disponibles sur demande sous accord de confidentialité
          </p>
        </div>
      </div>
    </section>
  );
};

export default References;