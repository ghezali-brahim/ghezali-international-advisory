import { LocaleLink } from '@/components/LocaleLink';
import { Users, Calendar, TrendingUp, Shield, Award, ArrowRight } from 'lucide-react';

const ReseauPage = () => {
  const pillars = [
    {
      icon: Users,
      title: "Réseau d'investisseurs et de dirigeants",
      description: "Partenariats avec fonds PE, family offices et dirigeants d'ETI. Références par le réseau, co-investissements et deal flow partagé.",
      details: [
        "Managing partners et investisseurs institutionnels",
        "Dirigeants d'ETI et grands groupes",
        "Family offices et holdings",
        "Partenariats sélectifs"
      ]
    },
    {
      icon: Calendar,
      title: "Événements et échanges",
      description: "Rencontres et sessions dédiées pour partager les meilleures pratiques et opportunités.",
      details: [
        "Échanges confidentiels entre pairs",
        "Sessions stratégiques ciblées",
        "Partage d'expertise sectorielle",
        "Confidentialité absolue"
      ]
    },
    {
      icon: TrendingUp,
      title: "Valeur advisory partagée",
      description: "Notre réseau bénéficie d'une expertise commune : transformation de portefeuille, board-level execution, valorisation.",
      details: [
        "Transformation multi-sociétés",
        "Exécution au niveau board",
        "Success fee et equity alignés",
        "Résultats mesurables"
      ]
    },
    {
      icon: Shield,
      title: "Confidentialité et confiance",
      description: "Tous les échanges sont protégés par des accords de non-divulgation et une discrétion absolue.",
      details: [
        "NDA systématique",
        "Pas de conflit d'intérêts",
        "Certification ISO 27001",
        "Environnement de confiance"
      ]
    }
  ];

  const testimonials = [
    {
      quote: "Un partenaire stratégique qui comprend les enjeux des fonds. Les connexions et la qualité d'exécution ont fait la différence.",
      author: "Pierre-Antoine M.",
      position: "CEO Groupe Industriel",
      company: "CA 180M€",
      result: "Partenariats stratégiques conclus"
    },
    {
      quote: "Un réseau d'une qualité exceptionnelle. Chaque échange apporte de la valeur et des opportunités concrètes.",
      author: "Marie-Claire D.",
      position: "Directrice Générale",
      company: "Groupe Distribution 320M€",
      result: "Levée de fonds facilitée"
    },
    {
      quote: "La confidentialité et le niveau d'expertise permettent des discussions franches et des collaborations authentiques.",
      author: "Jean-Marc L.",
      position: "Managing Partner",
      company: "Fonds d'Investissement",
      result: "Deals co-investis"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 backdrop-blur-sm mb-6">
            <Users className="h-4 w-4 text-yellow-400 mr-2" />
            <span className="text-yellow-400 text-sm font-medium">Réseau & Partenariats</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">
            Réseau & <span className="text-yellow-400">Partenariats</span>
          </h1>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We selectively partner with investment firms and institutional investors. 
            Un réseau d'investisseurs et de dirigeants partageant une même exigence de résultats et de confidentialité.
          </p>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-black mb-6">Ce que nous proposons</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Partenariats sélectifs, réseau d'investisseurs et de dirigeants, valeur advisory partagée.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {pillars.map((pillar, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="flex items-start mb-6">
                  <div className="bg-yellow-400 p-4 rounded-lg mr-6 flex-shrink-0">
                    <pillar.icon className="h-8 w-8 text-black" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif text-black mb-3">{pillar.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <ul className="space-y-2">
                    {pillar.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-yellow-600 rounded-full mr-3 flex-shrink-0"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-white mb-6">Témoignages</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ce que disent nos partenaires
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-xl border border-gray-700">
                <blockquote className="text-gray-300 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="border-t border-gray-700 pt-4">
                  <cite className="text-white font-semibold not-italic">{testimonial.author}</cite>
                  <p className="text-gray-400 text-sm">{testimonial.position}</p>
                  <p className="text-gray-500 text-sm">{testimonial.company}</p>
                  <div className="mt-3 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold inline-block">
                    {testimonial.result}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
            Échanger avec nous
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Nous travaillons avec un nombre limité de partenaires pour garantir qualité et confidentialité. Chaque demande est examinée avec attention.
          </p>
          <LocaleLink href="/contact" className="bg-yellow-400 text-black hover:bg-yellow-500 px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-400/25 inline-flex items-center">
            <ArrowRight className="mr-2 h-5 w-5" />
            Nous contacter
          </LocaleLink>
          <p className="text-gray-400 text-sm mt-4">
            Réponse sous 24h
          </p>
        </div>
      </section>
    </div>
  );
};

export default ReseauPage;
