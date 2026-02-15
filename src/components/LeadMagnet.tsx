import React, { useState } from 'react';
import { Download, FileText, Users, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import FormValidation, { fieldConfigs } from './FormValidation';
import { useAnalyticsTracking } from './Analytics';
import { FadeIn, StaggerContainer } from './Animations';

const LeadMagnet = () => {
  const [isDownloaded, setIsDownloaded] = useState(false);
  const { trackFormSubmission, trackDownload } = useAnalyticsTracking();

  const handleSubmit = async (formData: Record<string, string>) => {
    try {
      // Track form submission
      trackFormSubmission('lead_magnet', formData);
      
      // Simulation d'envoi (remplacer par votre API)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Track download
      trackDownload('guide_eti_valuation', 'pdf');
      
      setIsDownloaded(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const leadMagnets = [
    {
      id: 1,
      title: "Briefing confidentiel : Valorisation et transformation de portefeuille",
      description: "Pour fonds et family offices. Méthodes exclusives pour maximiser la valeur du portefeuille et accélérer la transformation de vos participations.",
      pages: "Réservé aux qualifiés",
      icon: TrendingUp,
      color: "bg-gradient-to-br from-yellow-600 to-yellow-800",
      features: [
        "Leviers de valorisation multi-sociétés",
        "Structures retainer / equity / success fee",
        "Transformation globale vs mission par mission",
        "Critères de sélection partenaire stratégique"
      ]
    },
    {
      id: 2,
      title: "Valoriser son ETI avant cession",
      description: "Pour vos participations. Méthodes pour maximiser la valeur avant sortie. Multiples optimisés, valorisation augmentée.",
      pages: "45 pages",
      icon: FileText,
      color: "bg-gradient-to-br from-blue-500 to-blue-700",
      features: [
        "5 leviers de valorisation",
        "Études de cas réelles",
        "Checklist de préparation",
        "Templates négociation"
      ]
    },
    {
      id: 3,
      title: "Executive Advisory : pour les dirigeants de portefeuille",
      description: "Comment l'Executive Advisory transforme le leadership des dirigeants de vos sociétés et accélère les résultats.",
      pages: "32 pages",
      icon: Users,
      color: "bg-gradient-to-br from-purple-500 to-purple-700",
      features: [
        "Méthodologie S.E.R",
        "ROI et critères de sélection",
        "Alignement avec les objectifs fonds",
        "Accès board et décisions"
      ]
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-black mb-6">
            Ressources <span className="text-yellow-600">réservées aux qualifiés</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Briefings et méthodologies pour fonds, family offices et dirigeants de portefeuille. Accès sur demande, après vérification de profil.
          </p>
        </div>

        {/* Lead Magnets Grid */}
        <StaggerContainer className="grid lg:grid-cols-3 gap-8 mb-16" staggerDelay={200}>
          {leadMagnets.map((magnet) => (
            <div key={magnet.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
              {/* Header */}
              <div className={`${magnet.color} p-8 text-white relative overflow-hidden`}>
                <div className="relative z-10">
                  <magnet.icon className="h-12 w-12 mb-4" />
                  <h3 className="text-xl font-serif mb-2">{magnet.title}</h3>
                  <div className="flex items-center justify-between text-sm opacity-90">
                    <span>{magnet.pages}</span>
                    <span>Sur demande, après vérification de profil</span>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-12 translate-x-12"></div>
              </div>

              {/* Content */}
              <div className="p-8">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {magnet.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-black mb-3">Ce que vous découvrirez :</h4>
                  <ul className="space-y-2">
                    {magnet.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-yellow-600 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-black text-white hover:bg-gray-800 py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group">
                  Demander l'accès
                  <Download className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </StaggerContainer>

        {/* Newsletter CTA */}
        <div className="bg-black p-12 rounded-2xl text-center">
          <Download className="h-12 w-12 text-yellow-400 mx-auto mb-6" />
          <h3 className="text-3xl md:text-4xl font-serif text-white mb-6">
            Demander l'accès aux ressources
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Réservé aux investisseurs et dirigeants qualifiés. Briefings et analyses sur demande.
          </p>

          {!isDownloaded ? (
            <div className="max-w-md mx-auto">
              <FormValidation
                fields={fieldConfigs.leadMagnet}
                onSubmit={handleSubmit}
                submitButtonText="Demander l'accès"
                className="space-y-4"
              />
              <p className="text-gray-400 text-sm mt-4 text-center">
                Réservé aux investisseurs et dirigeants qualifiés. En vous inscrivant, vous acceptez nos conditions de confidentialité.
              </p>
            </div>
          ) : (
            <div className="bg-green-600 p-6 rounded-lg">
              <CheckCircle className="h-12 w-12 text-white mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-white mb-2">
                Inscription Réussie !
              </h4>
              <p className="text-gray-100">
                Vous recevrez bientôt tous nos guides premium par email.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LeadMagnet;
