import ProcessTimeline from '@/components/ProcessTimeline';
import { LocaleLink } from '@/components/LocaleLink';
import { Crown, Rocket, TrendingUp, ArrowRight, CheckCircle, Clock, Euro, Star, Users, Shield, Zap, Globe, Building2 } from 'lucide-react';
import { ContextualLinks } from '@/components/InternalLinks';

const ServicesPage = () => {
  const services = [
    {
      icon: TrendingUp,
      title: "Strategic Deals & Equity",
      subtitle: "PE Funds • Family Offices • Holdings",
      price: "100k–300k€/year per portfolio • or 1–3% equity • or success fee",
      duration: "Variable by mandate",
      description: "One contract, full portfolio transformation. Board-level strategic partner: CEO recruitment, M&A, operations. One mandate covers all your holdings (8 to 30 companies), not one assignment per company.",
      features: [
        "Multi-company transformation (8–30 holdings)",
        "Strategic due diligence and pre-exit optimisation",
        "M&A support and multiple maximisation",
        "Success fee / equity / performance alignment",
        "Board access and close work with leadership",
        "Complex deal structuring",
        "Data room preparation",
        "Post-acquisition support"
      ],
      benefits: [
        "One contract, full portfolio",
        "Optimised multiples",
        "Maximised ROI",
        "Successful exits"
      ],
      methodology: [
        "Portfolio audit and priority selection",
        "Valuation and exit strategy",
        "Dedicated task force deployment",
        "Board and leadership steering",
        "Closing and post-acquisition"
      ],
      color: "bg-gradient-to-br from-yellow-700 to-yellow-600"
    },
    {
      icon: Crown,
      title: "Executive Advisory",
      subtitle: "For the leaders of your portfolio companies",
      price: "200k - 500k€",
      duration: "6 to 12 months",
      description: "Direct support for the leaders of your portfolio companies. Strategy and executive mentoring to turn leadership and vision into concrete results.",
      features: [
        "Tailored strategy with the leader",
        "Weekly executive mentoring",
        "Access to our private network",
        "24/7 support for critical decisions",
        "Personalised leadership coaching",
        "Fundraising preparation",
        "Governance optimisation",
        "Long-term vision development"
      ],
      benefits: [
        "Leadership transformation",
        "Clear strategic vision",
        "Faster decisions",
        "Senior team performance"
      ],
      methodology: [
        "360° leadership audit",
        "Strategic vision definition",
        "Personal development plan",
        "Regular mentoring sessions",
        "Performance impact measurement"
      ],
      color: "bg-gradient-to-br from-purple-900 to-purple-700"
    },
    {
      icon: Rocket,
      title: "Corporate Acceleration",
      subtitle: "Task force for your mid-market portfolio companies",
      price: "500k - 1M€+",
      duration: "12 to 18 months",
      description: "Dedicated task force to structure and scale one of your holdings. Target: +30% valuation in 12 months, +1M€ cash generated.",
      features: [
        "Full restructuring",
        "Process optimisation",
        "Accelerated business development",
        "Fundraising preparation",
        "Digital transformation",
        "Supply chain optimisation",
        "International expansion",
        "M&A and acquisitions"
      ],
      benefits: [
        "Accelerated growth",
        "Operational efficiency",
        "Maximised valuation",
        "Successful exit preparation"
      ],
      methodology: [
        "Full 360° diagnosis",
        "Transformation roadmap",
        "Task force deployment",
        "Performance steering",
        "Continuous optimisation"
      ],
      color: "bg-gradient-to-br from-blue-900 to-blue-700"
    }
  ];

  const institutionalServices = [
    {
      icon: Globe,
      title: "Institutional Advisory",
      subtitle: "For governments and institutions",
      price: "Tailored",
      duration: "12 to 36 months",
      description: "Strategic advisory to heads of state, ministries and international institutions. Systemic transformation to stimulate the economy, create jobs and optimise national structures.",
      features: [
        "Direct advisory to heads of state",
        "National development strategies",
        "Public system transformation",
        "Regional structure optimisation",
        "Economic activity stimulation",
        "Structural job creation",
        "Institutional reforms",
        "Ministry support"
      ],
      benefits: [
        "National economic growth",
        "Sustainable job creation",
        "Resource optimisation",
        "International attractiveness"
      ],
      methodology: [
        "National economic diagnosis",
        "Transformation strategy",
        "Systematic implementation",
        "Reform steering",
        "Macroeconomic impact measurement"
      ],
      color: "bg-gradient-to-br from-green-900 to-green-700"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">
            Our offerings — Funds, family offices, holdings and institutions
          </h1>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Portfolio transformation and multi-company impact. One mandate, multiple holdings transformed. Advisory for institutions.
          </p>
        </div>
      </section>

      {/* Private Equity Advisory */}
      <section id="private-equity-advisory" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-black mb-4">Private Equity Advisory</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Portfolio transformation, board-level task force, aligned success fee and equity.</p>
          </div>
          <div className="space-y-24">
            {services.map((service, index) => (
              <div key={index} className={`${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} flex flex-col lg:flex-row items-center gap-16`}>
                {/* Content */}
                <div className="lg:w-1/2">
                  <div className="flex items-center mb-6">
                    <service.icon className="h-12 w-12 text-yellow-600 mr-4" />
                    <div>
                      <h2 className="text-3xl font-serif text-black">{service.title}</h2>
                      <p className="text-lg text-yellow-600 font-semibold">{service.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">{service.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <div className="flex items-center mb-4">
                        <Euro className="h-5 w-5 text-yellow-600 mr-2" />
                        <span className="font-semibold text-black">Investment</span>
                      </div>
                      <p className="text-2xl font-bold text-yellow-600">{service.price}</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <div className="flex items-center mb-4">
                        <Clock className="h-5 w-5 text-yellow-600 mr-2" />
                        <span className="font-semibold text-black">Duration</span>
                      </div>
                      <p className="text-2xl font-bold text-yellow-600">{service.duration}</p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-black mb-4">Key benefits</h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {service.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-600 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button className="bg-black text-white hover:bg-gray-800 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center">
                    Request a consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>

                {/* Features Card */}
                <div className="lg:w-1/2">
                  <div className={`${service.color} p-8 rounded-2xl text-white`}>
                    <h3 className="text-2xl font-serif mb-6">What is included</h3>
                    <div className="space-y-4 mb-8">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0 opacity-90" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="border-t border-white/20 pt-6">
                      <h4 className="text-lg font-semibold mb-4">Our methodology</h4>
                      <div className="space-y-2">
                        {service.methodology.map((step, idx) => (
                          <div key={idx} className="flex items-center text-sm opacity-90">
                            <div className="bg-white/20 w-6 h-6 rounded-full flex items-center justify-center mr-3 text-xs font-bold">
                              {idx + 1}
                            </div>
                            {step}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <ProcessTimeline />

      {/* Guarantees & Commitments */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-black mb-6">
              Our <span className="text-yellow-600">Commitments</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Contractual guarantees that reflect our confidence in our methods
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <Shield className="h-12 w-12 text-yellow-600 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-black mb-4">Result guarantee</h3>
              <p className="text-gray-600 mb-6">
                If contractual objectives are not met, we adjust our remuneration accordingly.
              </p>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <p className="text-yellow-800 font-semibold">95% success rate</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <Zap className="h-12 w-12 text-yellow-600 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-black mb-4">24h responsiveness</h3>
              <p className="text-gray-600 mb-6">
                Guaranteed response within 24h for any urgent request or critical decision.
              </p>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <p className="text-yellow-800 font-semibold">Priority support</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <CheckCircle className="h-12 w-12 text-yellow-600 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-black mb-4">Absolute confidentiality</h3>
              <p className="text-gray-600 mb-6">
                Strengthened NDA, ISO 27001 certification, no conflicts of interest.
              </p>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <p className="text-yellow-800 font-semibold">100% secure</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
            Selective partnership
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            We selectively partner with investment firms and institutional investors.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <LocaleLink href="/contact" className="bg-yellow-400 text-black hover:bg-yellow-500 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
              Contact us
            </LocaleLink>
            <LocaleLink href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
              Receive our tailored proposal
            </LocaleLink>
          </div>
        </div>
      </section>

      {/* Institutional Advisory */}
      <section id="institutional-advisory" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-black mb-4">Institutional Advisory</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-2">Advisory for governments and international institutions.</p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Institutional references — Our work with governments and institutions</p>
          </div>

          <div className="bg-gray-50 p-12 rounded-2xl">
            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-serif text-black mb-6">Institutional clients</h3>
                <div className="space-y-4">
                  <div className="flex items-center p-4 bg-white rounded-lg">
                    <Globe className="h-6 w-6 text-yellow-600 mr-4" />
                    <div>
                      <p className="font-semibold text-black">Heads of state and governments</p>
                      <p className="text-sm text-gray-600">Direct strategic advisory</p>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-white rounded-lg">
                    <Building2 className="h-6 w-6 text-yellow-600 mr-4" />
                    <div>
                      <p className="font-semibold text-black">Ministries and administrations</p>
                      <p className="text-sm text-gray-600">Systemic transformation</p>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-white rounded-lg">
                    <Users className="h-6 w-6 text-yellow-600 mr-4" />
                    <div>
                      <p className="font-semibold text-black">International institutions</p>
                      <p className="text-sm text-gray-600">Development programmes</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-serif text-black mb-6">Results achieved</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center bg-white p-6 rounded-lg">
                    <div className="text-3xl font-bold text-yellow-600 mb-2">12</div>
                    <div className="text-gray-600">Countries advised</div>
                  </div>
                  <div className="text-center bg-white p-6 rounded-lg">
                    <div className="text-3xl font-bold text-yellow-600 mb-2">€2.5B</div>
                    <div className="text-gray-600">Economic impact</div>
                  </div>
                  <div className="text-center bg-white p-6 rounded-lg">
                    <div className="text-3xl font-bold text-yellow-600 mb-2">150+</div>
                    <div className="text-gray-600">Reforms delivered</div>
                  </div>
                  <div className="text-center bg-white p-6 rounded-lg">
                    <div className="text-3xl font-bold text-yellow-600 mb-2">+35%</div>
                    <div className="text-gray-600">Average growth</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg text-gray-700 italic">
                &quot;Our systematic approach transforms national structures, stimulates economic activity and creates lasting jobs in each region we serve.&quot;
              </p>
              <div className="mt-6">
                <button className="bg-yellow-600 text-white hover:bg-yellow-700 px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                  Discover our institutional interventions
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contextual Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ContextualLinks context="services" />
      </div>
    </div>
  );
};

export default ServicesPage;