import { Star, Quote, Shield, TrendingUp } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Un partenaire stratégique du portefeuille, pas un prestataire. Un contrat, plusieurs participations transformées. Exit à 4,2x au lieu des 2,8x prévus. La valeur créée parle d'elle-même.",
      author: "Jean-Marc L.",
      position: "Managing Partner",
      company: "Fonds Private Equity",
      sector: "Private Equity",
      result: "4,2x multiple de sortie",
      rating: 5
    },
    {
      quote: "Confidentialité absolue, discrétion totale. Ils interviennent sur plusieurs de nos participations avec une cohérence rare. On les recommande en interne.",
      author: "Sophie V.",
      position: "Directrice Investissements",
      company: "Family Office, Europe",
      sector: "Family Office",
      result: "Transformation multi-sociétés",
      rating: 5
    },
    {
      quote: "En 18 mois, valorisation du portefeuille significativement renforcée. Un contrat, plusieurs sociétés transformées. C'est exactement ce qu'on cherchait.",
      author: "Philippe R.",
      position: "Président",
      company: "Holding d'entrepreneurs",
      sector: "Holding",
      result: "+45% valorisation portefeuille",
      rating: 5
    }
  ];

  const stats = [
    { number: "98%", label: "Taux de satisfaction client", icon: Star },
    { number: "24h", label: "Délai de réponse garanti", icon: Shield },
    { number: "380%", label: "ROI moyen généré", icon: TrendingUp }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
            Ils nous font <span className="text-yellow-400">confiance</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ce que disent fonds, family offices et dirigeants qui nous font confiance.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-8 w-8 text-black" />
              </div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">{stat.number}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-yellow-400 transition-all duration-300">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <Quote className="h-8 w-8 text-yellow-400 mb-4" />
              
              <blockquote className="text-gray-300 mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="border-t border-gray-700 pt-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <cite className="text-white font-semibold not-italic">{testimonial.author}</cite>
                    <p className="text-gray-400 text-sm">{testimonial.position}</p>
                    <p className="text-gray-500 text-sm">{testimonial.company}</p>
                  </div>
                  <div className="text-right">
                    <div className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                      {testimonial.result}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="text-center">
          <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
            <h3 className="text-2xl font-serif text-white mb-6">Confidentialité & Sécurité</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center justify-center">
                <Shield className="h-6 w-6 text-yellow-400 mr-3" />
                <span className="text-gray-300">NDA systématique</span>
              </div>
              <div className="flex items-center justify-center">
                <Shield className="h-6 w-6 text-yellow-400 mr-3" />
                <span className="text-gray-300">ISO 27001 certifié</span>
              </div>
              <div className="flex items-center justify-center">
                <Shield className="h-6 w-6 text-yellow-400 mr-3" />
                <span className="text-gray-300">Données chiffrées</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;