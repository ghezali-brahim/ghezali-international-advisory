import { LocaleLink } from '../components/LocaleLink';
import { Globe, Shield, Users, ArrowRight } from 'lucide-react';

const InstitutionalPage = () => {
  const pillars = [
    {
      icon: Globe,
      title: 'Références internationales',
      description: 'Conseil aux gouvernements et institutions internationales. Mandats stratégiques, task forces et accompagnement sur des enjeux de transformation.',
    },
    {
      icon: Shield,
      title: 'Exigence et confidentialité',
      description: 'Traitement des dossiers sensibles avec la plus grande discrétion. Conformité et standards internationaux.',
    },
    {
      icon: Users,
      title: 'Expertise terrain',
      description: 'Implémentation avec task forces locales. Résultats mesurables et livrables adaptés au contexte institutionnel.',
    },
  ];

  return (
    <div className="pt-16">
      <section className="py-24 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 backdrop-blur-sm mb-6">
            <Globe className="h-4 w-4 text-yellow-400 mr-2" />
            <span className="text-yellow-400 text-sm font-medium">Institutional Advisory</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">
            Conseil aux <span className="text-yellow-400">institutions</span>
          </h1>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Références institutionnelles. Nos interventions auprès des gouvernements et institutions : mandats stratégiques, task forces, accompagnement sur mesure.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {pillars.map(({ icon: Icon, title, description }) => (
              <div key={title} className="p-8 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
                <Icon className="h-12 w-12 text-yellow-600 mb-6" />
                <h2 className="text-xl font-serif text-black mb-4">{title}</h2>
                <p className="text-gray-600 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-black mb-6">
            Échanger sur un mandat institutionnel
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Réponse sous 24h. Confidentialité absolue et NDA systématique.
          </p>
          <LocaleLink href="/contact" className="bg-yellow-400 text-black hover:bg-yellow-500 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 inline-flex items-center">
            Nous contacter
            <ArrowRight className="ml-2 h-5 w-5" />
          </LocaleLink>
        </div>
      </section>
    </div>
  );
};

export default InstitutionalPage;
