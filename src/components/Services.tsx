import { LocaleLink } from './LocaleLink';
import { Crown, Rocket, TrendingUp, ArrowRight, CheckCircle, Clock, Euro } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: TrendingUp,
      title: 'Strategic Deals & Equity',
      subtitle: 'PE Funds • Family Offices • Holdings',
      price: '100k–300k€/year per portfolio • or 1–3% equity • or success fee',
      duration: 'Variable by mandate',
      description:
        "One contract, portfolio-wide transformation. Board-level strategic partner: CEO recruitment, M&A, operations. One mandate covers all your holdings, not one project per company.",
      features: [
        'Multi-company transformation (8–30 holdings)',
        'Strategic due diligence and pre-exit optimisation',
        'M&A support and multiple maximisation',
        'Success fee / equity / performance alignment',
        'Board access and close leadership contact',
      ],
      color: 'bg-gradient-to-br from-yellow-700 to-yellow-600',
    },
    {
      icon: Crown,
      title: 'Executive Advisory',
      subtitle: 'For leaders of your portfolio companies',
      price: '200k - 500k€',
      duration: '6 to 12 months',
      description:
        'Direct support for leaders of your portfolio companies. Strategy and executive mentoring to turn leadership and vision into concrete results.',
      features: [
        'Tailored strategy with the leader',
        'Weekly executive mentoring',
        'Access to private network',
        '24/7 support for critical decisions',
      ],
      color: 'bg-gradient-to-br from-purple-900 to-purple-700',
    },
    {
      icon: Rocket,
      title: 'Corporate Acceleration',
      subtitle: 'Task force for your portfolio mid-market companies',
      price: '500k - 1M€+',
      duration: '12 to 18 months',
      description:
        'Dedicated task force to structure and scale one of your holdings. Target: +30% valuation in 12 months, +1M€ cash generated.',
      features: [
        'Full restructuring',
        'Process optimisation',
        'Accelerated business development',
        'Fundraising preparation',
      ],
      color: 'bg-gradient-to-br from-blue-900 to-blue-700',
    },
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-black mb-6">
            Our offers — For funds, family offices and holdings
          </h2>
          <div className="w-24 h-1 bg-yellow-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Portfolio transformation and multi-company impact. One mandate, multiple holdings transformed.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform group-hover:scale-105 transition-all duration-300 h-full">
                {/* Header */}
                <div className={`${service.color} p-8 text-white relative overflow-hidden`}>
                  <div className="relative z-10">
                    <service.icon className="h-12 w-12 mb-4" />
                    <h3 className="text-2xl font-serif mb-2">{service.title}</h3>
                    <p className="text-sm opacity-90 mb-4">{service.subtitle}</p>
                    <div className="flex justify-between items-center text-sm">
                      <div className="flex items-center">
                        <Euro className="h-4 w-4 mr-1" />
                        <span className="font-semibold">{service.price}</span>
                      </div>
                      <div className="flex items-center opacity-90">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{service.duration}</span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-yellow-600 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className="w-full bg-black text-white hover:bg-gray-800 py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-serif text-black mb-12 text-center">Our excellence process</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-yellow-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">1</div>
              <h4 className="font-semibold text-black mb-2">Confidential audit</h4>
              <p className="text-gray-600 text-sm">In-depth diagnostic under NDA</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">2</div>
              <h4 className="font-semibold text-black mb-2">Tailored strategy</h4>
              <p className="text-gray-600 text-sm">Custom action plan</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">3</div>
              <h4 className="font-semibold text-black mb-2">Rapid execution</h4>
              <p className="text-gray-600 text-sm">Immediate implementation</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">4</div>
              <h4 className="font-semibold text-black mb-2">Measured results</h4>
              <p className="text-gray-600 text-sm">Contractual ROI guaranteed</p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-black p-12 rounded-2xl">
            <h3 className="text-3xl md:text-4xl font-serif text-white mb-6">
              Every engagement is unique, every result is exceptional
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our programmes are tailored to your ambition and specific objectives.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <LocaleLink href="/contact" className="bg-yellow-400 text-black hover:bg-yellow-500 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                Contact us
              </LocaleLink>
              <LocaleLink href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                Request a tailored proposal
              </LocaleLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
