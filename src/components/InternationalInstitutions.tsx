import { Globe, Building2, TrendingUp, Users, Award, CheckCircle, ArrowRight } from 'lucide-react';

const InternationalInstitutions = () => {
  const services = [
    {
      icon: Globe,
      title: 'National development strategy',
      description:
        'Support for governments in designing economic growth and international competitiveness strategies',
      examples: [
        'National economic development plans',
        'Investment attractiveness strategies',
        'Innovation and digitalisation policies',
        'Structural reforms for growth',
      ],
    },
    {
      icon: Building2,
      title: 'Institutional transformation',
      description:
        'Modernisation of public institutions and optimisation of administrative systems for maximum efficiency',
      examples: [
        'Digitalisation of public services',
        'Administrative reorganisation',
        'Governance improvement',
        'Institutional process optimisation',
      ],
    },
    {
      icon: TrendingUp,
      title: 'Market dynamisation',
      description:
        'Development of high-performing economic ecosystems and stimulation of strategic sector growth',
      examples: [
        'Industrial cluster development',
        'Special economic zones',
        'SME and mid-market support programmes',
        'Targeted sector strategies',
      ],
    },
  ];

  const achievements = [
    { metric: '12', label: 'Countries supported', description: 'Strategic missions delivered' },
    { metric: '25+', label: 'International institutions', description: 'Partnerships established' },
    { metric: '€2.5B', label: 'Economic impact generated', description: 'Growth stimulated' },
    { metric: '150+', label: 'Reforms implemented', description: 'Successful transformations' },
  ];

  const partnerships = [
    'World Bank',
    'European Union',
    'OECD',
    'Regional development banks',
    'International cooperation agencies',
    'Finance ministries',
    'Economic development agencies',
    'International chambers of commerce',
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 backdrop-blur-sm mb-4 sm:mb-6">
            <Globe className="h-4 w-4 text-yellow-400 mr-2" />
            <span className="text-yellow-400 text-xs sm:text-sm font-medium">Institutional Advisory</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-4 sm:mb-6">
            Institutional Advisory — <span className="text-yellow-400">Advisory for institutions</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We support countries and international institutions in their development strategy,
            growth optimisation, market dynamisation and transformation of existing systems.
          </p>
          <p className="text-sm sm:text-base text-gray-400 max-w-3xl mx-auto mt-3 sm:mt-4">
            We prioritise fund and family office mandates; our institutional work remains selective.
          </p>
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12 sm:mb-20">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-800 p-5 sm:p-6 lg:p-8 rounded-xl border border-gray-700 hover:border-yellow-400 transition-all duration-300">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="bg-yellow-400 p-3 sm:p-4 rounded-lg mr-3 sm:mr-4">
                  <service.icon className="h-6 w-6 sm:h-8 sm:w-8 text-black" />
                </div>
                <h3 className="text-lg sm:text-xl font-serif text-white">{service.title}</h3>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
              
              <div className="space-y-3">
                {service.examples.map((example, idx) => (
                  <div key={idx} className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-yellow-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-400 text-sm">{example}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="mb-12 sm:mb-20">
          <h3 className="text-2xl sm:text-3xl font-serif text-white mb-8 sm:mb-12 text-center">Our international impact</h3>
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4 md:gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400 mb-1 sm:mb-2">{achievement.metric}</div>
                <div className="text-white font-semibold mb-1 sm:mb-2 text-sm sm:text-base">{achievement.label}</div>
                <div className="text-gray-400 text-xs sm:text-sm">{achievement.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Case Study */}
        <div className="bg-gray-800 p-6 sm:p-8 lg:p-12 rounded-2xl border border-gray-700 mb-12 sm:mb-20">
          <div className="grid grid-cols-1 gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Award className="h-6 w-6 text-yellow-400 mr-3" />
                <span className="text-yellow-400 font-semibold">Recent case study</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif text-white mb-4 sm:mb-6">
                National economic transformation
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Support for an emerging country in the complete overhaul of its economic development strategy,
                including institutional digitalisation and creation of new industrial ecosystems.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-yellow-400 w-2 h-2 rounded-full mr-4"></div>
                  <span className="text-gray-300">+35% GDP growth in 3 years</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-yellow-400 w-2 h-2 rounded-full mr-4"></div>
                  <span className="text-gray-300">50+ structural reforms implemented</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-yellow-400 w-2 h-2 rounded-full mr-4"></div>
                  <span className="text-gray-300">€800M foreign investment attracted</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 p-8 rounded-xl">
              <h4 className="text-xl font-serif text-white mb-6">Methodology applied</h4>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-yellow-400 text-black w-8 h-8 rounded-full flex items-center justify-center mr-4 text-sm font-bold">1</div>
                  <span className="text-gray-300">Full economic diagnostic</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-yellow-400 text-black w-8 h-8 rounded-full flex items-center justify-center mr-4 text-sm font-bold">2</div>
                  <span className="text-gray-300">Tailored development strategy</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-yellow-400 text-black w-8 h-8 rounded-full flex items-center justify-center mr-4 text-sm font-bold">3</div>
                  <span className="text-gray-300">Implementation with local task force</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-yellow-400 text-black w-8 h-8 rounded-full flex items-center justify-center mr-4 text-sm font-bold">4</div>
                  <span className="text-gray-300">Ongoing monitoring and optimisation</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Partnerships */}
        <div className="text-center mb-10 sm:mb-16">
          <h3 className="text-2xl sm:text-3xl font-serif text-white mb-8 sm:mb-12">Our institutional partners</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {partnerships.map((partner, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                <span className="text-gray-300 font-medium">{partner}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 sm:p-8 lg:p-12 rounded-2xl border border-gray-700">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white mb-4 sm:mb-6">
              Shaping the economic future together
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto">
              Whether you are a government, international institution or development agency,
              we have the expertise to catalyse your growth.
            </p>
            <button className="bg-yellow-400 text-black hover:bg-yellow-500 px-6 sm:px-10 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-400/25 inline-flex items-center min-h-[44px]">
              <Globe className="mr-2 h-5 w-5" />
              Discuss your project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternationalInstitutions;