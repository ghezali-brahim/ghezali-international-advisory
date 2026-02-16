import { LocaleLink } from '@/components/LocaleLink';
import { Target, Shield, Zap, ArrowRight } from 'lucide-react';

const PositioningPage = () => {
  const positioning = [
    {
      icon: Target,
      title: 'Targets',
      description: 'Private equity funds, family offices, groups and holdings, institutions. Strategic partner for the portfolio, not a per-mission vendor.',
    },
    {
      icon: Zap,
      title: 'Promise',
      description: 'Measurable portfolio transformation: valuation, M&A, board-level execution. One contract, multiple companies transformed. Success fee, equity or retainer alignment.',
    },
    {
      icon: Shield,
      title: 'Differentiation',
      description: 'Absolute confidentiality, dedicated task force, no conflicts of interest. Operational execution from week 1, results within 90 days.',
    },
  ];

  return (
    <div className="pt-16">
      <section className="py-24 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 backdrop-blur-sm mb-6">
            <Target className="h-4 w-4 text-yellow-400 mr-2" />
            <span className="text-yellow-400 text-sm font-medium">Positioning</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">
            Our strategic <span className="text-yellow-400">positioning</span>
          </h1>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Strategic partner to PE funds, family offices and institutions. Differentiation through execution, confidentiality and measurable results.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {positioning.map(({ icon: Icon, title, description }) => (
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
            Proof of value
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            +500M€ value created, 200+ mid-market companies supported, 25 countries. 95% success rate. Discover our offerings and references.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <LocaleLink href="/services" className="bg-yellow-400 text-black hover:bg-yellow-500 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 inline-flex items-center">
              Our offerings
              <ArrowRight className="ml-2 h-5 w-5" />
            </LocaleLink>
            <LocaleLink href="/expertise" className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
              Expertise
            </LocaleLink>
            <LocaleLink href="/contact" className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
              Contact us
            </LocaleLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PositioningPage;
