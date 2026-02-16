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
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-black mb-6">
            The DNA of <span className="text-yellow-600">Ghezali International Advisory</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our mission: to be the strategic partner of funds and family offices in transforming their portfolios — mid-market and large corporates at the service of this ambition.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <img
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
              alt="Executive leadership and corporate transformation - Strategy and valuation expert - GHEZALI"
              className="w-full h-96 object-cover rounded-lg shadow-2xl"
              loading="lazy"
            />
          </div>
          <div>
            <h3 className="text-3xl font-serif text-black mb-6">
              20 years of experience at the service of excellence
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Our founder built his reputation on 20 years of high-level business development,
              corporate structuring and strategic acquisitions. This unique expertise
              enables us to combine strategic vision with immediate operational execution.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
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
        <div className="mb-20">
          <h3 className="text-3xl font-serif text-black mb-12 text-center">Our results in numbers</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gray-50 group-hover:bg-yellow-50 p-8 rounded-xl transition-all duration-300">
                  <achievement.icon className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-black mb-2">{achievement.number}</div>
                  <div className="text-lg font-semibold text-black mb-2">{achievement.label}</div>
                  <p className="text-gray-600 text-sm">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-black group-hover:bg-yellow-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300">
                <value.icon className="h-8 w-8 text-yellow-400 group-hover:text-black" />
              </div>
              <h4 className="text-2xl font-serif text-black mb-4">{value.title}</h4>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Methodology Section */}
        <div className="mt-20">
          <div className="bg-gray-50 p-12 rounded-2xl">
            <h3 className="text-3xl font-serif text-black mb-8 text-center">Our exclusive methodology</h3>
            <div className="grid lg:grid-cols-3 gap-8">
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
        <div className="mt-20 text-center">
          <div className="bg-black p-12 rounded-2xl">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 backdrop-blur-sm mb-4">
                <Globe className="h-4 w-4 text-yellow-400 mr-2" />
                <span className="text-yellow-400 text-sm font-medium">International expertise</span>
              </div>
              <p className="text-gray-300 mb-6">
                We also support countries and international institutions in their development strategy,
                growth optimisation, market dynamisation and transformation of existing systems.
              </p>
            </div>
            <h3 className="text-3xl md:text-4xl font-serif text-white mb-6">
              Selective partnership
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We selectively partner with investment firms and institutional investors.
            </p>
            <LocaleLink href="/contact" className="inline-block bg-yellow-400 text-black hover:bg-yellow-500 px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-400/25">
              Contact us
            </LocaleLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;