import React from 'react';
import { Lock, Calendar, Users, Sparkles, Star, Crown, Shield, Zap } from 'lucide-react';

const PrivateCircle = () => {
  const benefits = [
    {
      icon: Users,
      title: "Réseau d'élite",
      description: "Rencontrez d'autres dirigeants de premier plan lors d'événements privés exclusifs"
    },
    {
      icon: Calendar,
      title: "Événements confidentiels",
      description: "Dîners privés, conférences exclusives et masterclasses avec des experts internationaux"
    },
    {
      icon: Sparkles,
      title: "Opportunités uniques",
      description: "Accès prioritaire aux deals, partenariats stratégiques et investissements privés"
    },
    {
      icon: Lock,
      title: "Confidentialité absolue",
      description: "Tous les échanges restent strictement confidentiels, sous accord de non-divulgation"
    }
  ];

  const exclusiveEvents = [
    {
      title: "Dîner des Leaders",
      description: "Rencontres mensuelles dans des lieux d'exception",
      icon: Crown
    },
    {
      title: "Masterclass Privées",
      description: "Sessions exclusives avec des experts internationaux",
      icon: Star
    },
    {
      title: "Deal Flow Premium",
      description: "Accès prioritaire aux opportunités d'investissement",
      icon: Zap
    }
  ];

  return (
    <section id="cercle-prive" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 backdrop-blur-sm mb-6">
            <Lock className="h-4 w-4 text-yellow-400 mr-2" />
            <span className="text-yellow-400 text-sm font-medium">Accès sur invitation uniquement</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
            Le <span className="text-yellow-400">Cercle Privé</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Le réseau que l'on ne rejoint pas, mais auquel on est invité. 
            Un cercle fermé de dirigeants exceptionnels partageant la même vision de l'excellence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Image */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg"
              alt="Private Executive Event"
              className="w-full h-96 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-transparent rounded-lg"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-black/80 backdrop-blur-sm p-4 rounded-lg">
                <p className="text-white text-sm italic">
                  "Les meilleures opportunités naissent dans l'intimité des cercles d'exception"
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-3xl font-serif text-white mb-8">
              Un privilège réservé aux leaders visionnaires
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

            <div className="mt-10 p-6 border border-gray-700 rounded-lg bg-gray-900/50">
              <h4 className="text-xl font-semibold text-yellow-400 mb-3">Critères de sélection</h4>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• CA minimum 50M€ ou potentiel de croissance exceptionnel</li>
                <li>• Leadership reconnu dans votre secteur</li>
                <li>• Vision stratégique et ambition internationale</li>
                <li>• Engagement dans l'excellence opérationnelle</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Exclusive Events */}
        <div className="mb-16">
          <h3 className="text-3xl font-serif text-white mb-12 text-center">Événements exclusifs</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {exclusiveEvents.map((event, index) => (
              <div key={index} className="bg-gray-900 p-8 rounded-xl border border-gray-700 hover:border-yellow-400 transition-all duration-300">
                <event.icon className="h-12 w-12 text-yellow-400 mb-4" />
                <h4 className="text-xl font-semibold text-white mb-3">{event.title}</h4>
                <p className="text-gray-400">{event.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-400 mb-2">15</div>
            <div className="text-gray-400">Dirigeants maximum par événement</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-400 mb-2">6</div>
            <div className="text-gray-400">Événements exclusifs par an</div>
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
                "Le Cercle Ghezali m'a ouvert des portes que je n'aurais jamais imaginées. 
                Les connexions et opportunités générées ont transformé ma vision du business."
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
              Prêt à rejoindre l'élite ?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              L'accès au Cercle se mérite. Chaque candidature est étudiée personnellement.
            </p>
            <button className="bg-yellow-400 text-black hover:bg-yellow-500 px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-400/25 inline-flex items-center">
              <Lock className="mr-2 h-5 w-5" />
              Demander une invitation
            </button>
            <p className="text-gray-400 text-sm mt-4">
              Seules les candidatures qualifiées recevront une réponse sous 48h
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivateCircle;