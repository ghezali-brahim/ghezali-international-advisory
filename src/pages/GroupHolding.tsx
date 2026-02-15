import { LocaleLink } from '../components/LocaleLink';
import { Building2, Layers, ArrowRight } from 'lucide-react';

const GroupHoldingPage = () => {
  const pillars = [
    {
      icon: Building2,
      title: 'Structuration et pilotage',
      description: "Conseil aux groupes et holdings : structuration juridique et opérationnelle, pilotage des filiales, stratégie de croissance et M&A.",
    },
    {
      icon: Layers,
      title: 'Transformation et valorisation',
      description: "Transformation des portefeuilles, optimisation des synergies, due diligence et accompagnement cession. Partenaire au niveau du board.",
    },
  ];

  return (
    <div className="pt-16">
      <section className="py-24 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 backdrop-blur-sm mb-6">
            <Building2 className="h-4 w-4 text-yellow-400 mr-2" />
            <span className="text-yellow-400 text-sm font-medium">Group Holding</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">
            Partenaire stratégique des <span className="text-yellow-400">groupes et holdings</span>
          </h1>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Conseil aux groupes et holdings : structuration, M&A, transformation et valorisation. Un partenaire au niveau du board pour piloter la croissance.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
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
            Nos offres pour groupes et holdings
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Executive Advisory, Corporate Acceleration, M&A et valorisation. Découvrez nos services et nos autres segments.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
            <LocaleLink href="/services" className="bg-yellow-400 text-black hover:bg-yellow-500 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 inline-flex items-center">
              Voir nos offres
              <ArrowRight className="ml-2 h-5 w-5" />
            </LocaleLink>
            <LocaleLink href="/private-equity" className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
              Private Equity
            </LocaleLink>
            <LocaleLink href="/institutional" className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
              Institutional
            </LocaleLink>
            <LocaleLink href="/contact" className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
              Nous contacter
            </LocaleLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GroupHoldingPage;
