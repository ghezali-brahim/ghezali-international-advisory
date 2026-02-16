import { LocaleLink } from './LocaleLink';
import { Shield, Target, Trophy, Users, Award, Briefcase, Globe, TrendingUp } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Trophy,
      title: 'Excellence',
      description: "Nothing approximate. Every engagement is calibrated to exceed your expectations and deliver measurable impact.",
    },
    {
      icon: Shield,
      title: 'Confidentiality',
      description: "Absolute discretion, private deals. Your strategy stays in expert hands.",
    },
    {
      icon: Target,
      title: 'Results',
      description: "Portfolio-wide impact. Cashflow, valuation, growth. Contractual, measurable commitments.",
    },
    {
      icon: Users,
      title: 'Board partnership',
      description: "Board-level partnership with investors and leadership. Strategic partner to the portfolio.",
    },
  ];

  const achievements = [
    {
      icon: Award,
      number: '20+',
      label: 'Years of expertise',
      description: 'At the service of business excellence',
    },
    {
      icon: Briefcase,
      number: '500M€+',
      label: 'Value created',
      description: 'For funds, family offices and mid-market',
    },
    {
      icon: Globe,
      number: '15',
      label: 'Countries',
      description: 'Established international presence',
    },
    {
      icon: TrendingUp,
      number: '95%',
      label: 'Success rate',
      description: 'Targets met or exceeded',
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-black mb-4 sm:mb-6">
            The DNA of <span className="text-yellow-600">Ghezali International Advisory</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-600 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our mission: to be the strategic partner of funds and family offices in transforming their portfolios — mid-market and large corporates at the service of this ambition.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-12 sm:mb-20">
          <div className="relative w-full aspect-[4/3] sm:h-96">
            <img
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
              alt="Executive leadership and corporate transformation - Strategy and valuation expert - GHEZALI"
              className="w-full h-full object-cover rounded-lg shadow-2xl max-w-full"
              loading="lazy"
            />
          </div>
          <div>
            <h3 className="text-2xl sm:text-3xl font-serif text-black mb-4 sm:mb-6">
              20 years of experience at the service of excellence
            </h3>
            <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
              Our founder built his reputation on 20 years of high-level business development,
              corporate structuring and strategic acquisitions. This unique expertise
              enables us to combine strategic vision with immediate operational execution.
            </p>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              Unlike traditional consulting firms, we do not just advise.
              We become your operational task force and strategic sparring partner.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-yellow-600">
              <p className="text-lg font-semibold text-black italic">
                &quot;Neither consultancy nor vendor. Strategic partner to the portfolio: board, execution, valuation. One contract, multiple companies transformed.&quot;
              </p>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mb-12 sm:mb-20">
          <h3 className="text-2xl sm:text-3xl font-serif text-black mb-8 sm:mb-12 text-center">Our results in numbers</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gray-50 group-hover:bg-yellow-50 p-4 sm:p-8 rounded-xl transition-all duration-300">
                  <achievement.icon className="h-10 w-10 sm:h-12 sm:w-12 text-yellow-600 mx-auto mb-2 sm:mb-4" />
                  <div className="text-2xl sm:text-4xl font-bold text-black mb-1 sm:mb-2">{achievement.number}</div>
                  <div className="text-sm sm:text-lg font-semibold text-black mb-1 sm:mb-2">{achievement.label}</div>
                  <p className="text-gray-600 text-sm">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-black group-hover:bg-yellow-600 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 transition-all duration-300">
                <value.icon className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-400 group-hover:text-black" />
              </div>
              <h4 className="text-xl sm:text-2xl font-serif text-black mb-3 sm:mb-4">{value.title}</h4>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Methodology Section */}
        <div className="mt-12 sm:mt-20">
          <div className="bg-gray-50 p-6 sm:p-8 lg:p-12 rounded-2xl">
            <h3 className="text-2xl sm:text-3xl font-serif text-black mb-6 sm:mb-8 text-center">Our exclusive methodology</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="bg-yellow-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">S</div>
                <h4 className="text-xl font-semibold text-black mb-3">Strategy</h4>
                <p className="text-gray-600">Long-term vision and optimal competitive positioning</p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">E</div>
                <h4 className="text-xl font-semibold text-black mb-3">Execution</h4>
                <p className="text-gray-600">Immediate, measurable operational implementation</p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">R</div>
                <h4 className="text-xl font-semibold text-black mb-3">Results</h4>
                <p className="text-gray-600">Sustainable performance and maximised valuation</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 sm:mt-20 text-center">
          <div className="bg-black p-6 sm:p-8 lg:p-12 rounded-2xl">
            <div className="mb-6 sm:mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 backdrop-blur-sm mb-4">
                <Globe className="h-4 w-4 text-yellow-400 mr-2 shrink-0" />
                <span className="text-yellow-400 text-sm font-medium">International expertise</span>
              </div>
              <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                We also support countries and international institutions in their development strategy,
                growth optimisation, market dynamisation and transformation of existing systems.
              </p>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white mb-4 sm:mb-6">
              Selective partnership
            </h3>
            <p className="text-base sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
              We selectively partner with investment firms and institutional investors.
            </p>
            <LocaleLink href="/contact" className="inline-block bg-yellow-400 text-black hover:bg-yellow-500 px-8 py-3 sm:px-10 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-400/25 min-h-[44px] flex items-center justify-center mx-auto">
              Contact us
            </LocaleLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;