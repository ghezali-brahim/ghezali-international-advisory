import { LocaleLink } from './LocaleLink';
import { Users, Calendar, TrendingUp, Shield, Star, ArrowRight } from 'lucide-react';

const PrivateCircle = () => {
  const benefits = [
    {
      icon: Users,
      title: "Réseau d'investisseurs et de dirigeants",
      description: "Partenariats avec fonds PE, family offices et dirigeants. Références par le réseau, co-investissements et deal flow."
    },
    {
      icon: Calendar,
      title: "Événements et échanges",
      description: "Rencontres et sessions dédiées pour partager les meilleures pratiques et opportunités, dans un cadre confidentiel."
    },
    {
      icon: TrendingUp,
      title: "Valeur advisory partagée",
      description: "Transformation de portefeuille, exécution au niveau board, valorisation. Résultats mesurables."
    },
    {
      icon: Shield,
      title: "Confidentialité absolue",
      description: "Tous les échanges restent strictement confidentiels, sous accord de non-divulgation."
    }
  ];

  return (
    <section id="reseau" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 backdrop-blur-sm mb-6">
            <Users className="h-4 w-4 text-yellow-400 mr-2" />
            <span className="text-yellow-400 text-sm font-medium">Réseau & Partenariats</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
            Réseau & <span className="text-yellow-400">Partenariats</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We selectively partner with investment firms and institutional investors. 
            Un réseau d'investisseurs et de dirigeants partageant une même exigence de résultats et de confidentialité.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Image */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg"
              alt="Partenariats et réseau - Ghezali International Advisory"
              className="w-full h-96 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-transparent rounded-lg"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-black/80 backdrop-blur-sm p-4 rounded-lg">
                <p className="text-white text-sm italic">
                  "Partenariats sélectifs, exécution board-level, valeur créée ensemble."
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-3xl font-serif text-white mb-8">
              Partenariats stratégiques et réseau
            </h3>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-yellow-400 p-3 rounded-lg flex-shrink-0">
                    <benefit.icon className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">{benefit.title}</h4>
                    <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-400 mb-2">15</div>
            <div className="text-gray-400">Pays d'intervention</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-400 mb-2">+500M€</div>
            <div className="text-gray-400">Valorisation générée</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-400 mb-2">100%</div>
            <div className="text-gray-400">Confidentialité garantie</div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-xl text-white italic mb-4">
                "Un partenaire stratégique qui comprend les enjeux des fonds. Les connexions et la qualité d'exécution ont fait la différence."
              </blockquote>
              <cite className="text-gray-400">
                — CEO, Groupe industriel (CA 180M€)
              </cite>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-gray-900 to-black p-12 rounded-2xl border border-gray-700">
            <h3 className="text-3xl md:text-4xl font-serif text-white mb-6">
              Échanger avec nous
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Nous travaillons avec un nombre limité de partenaires pour garantir qualité et confidentialité.
            </p>
            <LocaleLink href="/contact" className="bg-yellow-400 text-black hover:bg-yellow-500 px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-400/25 inline-flex items-center">
              <ArrowRight className="mr-2 h-5 w-5" />
              Nous contacter
            </LocaleLink>
            <p className="text-gray-400 text-sm mt-4">
              Réponse sous 24h
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivateCircle;
