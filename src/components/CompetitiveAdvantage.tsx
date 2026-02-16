import { Shield, Zap, Target, Users, Award, CheckCircle, Star, Layers } from 'lucide-react';

const CompetitiveAdvantage = () => {
  const advantages = [
    {
      icon: Layers,
      title: 'One contract = portfolio-wide transformation',
      description: 'One mandate covers all your holdings (8 to 30 companies). No per-project billing.',
      details: [
        'Single contract for the entire portfolio',
        'Impact across multiple companies at once',
        'Model designed for funds and family offices',
        'Efficiency and strategic consistency',
      ],
      differentiator: 'Traditional consulting bills per project; we transform the whole portfolio',
    },
    {
      icon: Shield,
      title: 'Absolute confidentiality',
      description: 'Your deals stay private. No conflicts of interest.',
      details: [
        'Systematic NDA before any exchange',
        'Dedicated teams, no rotation',
        'No conflicts of interest',
        'ISO 27001 certification',
      ],
      differentiator: 'Large firms often work with your competitors',
    },
    {
      icon: Zap,
      title: 'Portfolio-level execution',
      description: 'Board-level task force: CEO recruitment, M&A, operations. We execute, we do not just deliver reports.',
      details: [
        'Dedicated operational task force for the portfolio',
        'Implementation from week 1',
        'Measurable results within 90 days',
        'Close contact with leadership and boards',
      ],
      differentiator: 'Traditional consultants deliver recommendations; we deliver results',
    },
    {
      icon: Target,
      title: 'Aligned remuneration',
      description: 'Success fee, equity (1–3%), performance incentive or annual retainer (100k–300k€/year per portfolio). We take the risk with you.',
      details: [
        '100k–300k€/year per portfolio or 1–3% equity',
        'Success fees and performance incentive',
        'Contractual KPIs defined',
        'Full alignment on your results',
      ],
      differentiator: 'We take risk on your results, not just fixed fees',
    },
    {
      icon: Users,
      title: 'Network and referrals',
      description: 'Investors know each other, co-invest, sit on the same boards. Succeeding with a few funds opens referrals.',
      details: [
        'Network of leaders and investors',
        'Deal flow and co-investments',
        'Referrals through the network, not marketing',
        'Partnerships that money alone cannot buy',
      ],
      differentiator: 'Succeeding with a few funds is enough: the network does the rest',
    },
  ];

  const comparisons = [
    { criteria: 'Scope', ghezali: 'Full portfolio / multiple companies', others: 'Project by project', advantage: true },
    { criteria: 'Confidentiality', ghezali: 'Absolute - reinforced NDA', others: 'Standard - possible conflicts', advantage: true },
    { criteria: 'Execution', ghezali: 'Dedicated task force, board level', others: 'Recommendations only', advantage: true },
    { criteria: 'Commitment', ghezali: 'Success fees / equity / aligned retainer', others: 'Fixed fees', advantage: true },
    { criteria: 'Network', ghezali: 'Selective network', others: 'Commercial network', advantage: true },
    { criteria: 'Duration', ghezali: '6–18 months intensive', others: 'Long, diluted projects', advantage: true },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-black mb-6">
            Why funds and family offices <span className="text-yellow-600">choose us</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Rigorous selection and confidentiality. What sets us apart from traditional consulting.
          </p>
        </div>

        {/* Competitive Advantages */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {advantages.map((advantage, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300">
              <div className="flex items-start mb-6">
                <div className="bg-yellow-600 p-4 rounded-lg mr-6 flex-shrink-0">
                  <advantage.icon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-serif text-black mb-3">{advantage.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-black mb-3">In practice:</h4>
                <div className="space-y-2">
                  {advantage.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-yellow-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-600">
                <p className="text-sm text-gray-700 italic">
                  <strong>Our difference:</strong> {advantage.differentiator}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="mb-16">
          <h3 className="text-3xl font-serif text-black mb-12 text-center">
            Ghezali vs traditional consulting
          </h3>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-900 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Criteria</th>
                    <th className="px-6 py-4 text-left font-semibold text-yellow-400">Ghezali International Advisory</th>
                    <th className="px-6 py-4 text-left font-semibold">Traditional firms</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons.map((comparison, index) => (
                    <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-yellow-50 transition-colors`}>
                      <td className="px-6 py-4 font-semibold text-black">{comparison.criteria}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                          <span className="text-gray-700">{comparison.ghezali}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-600">{comparison.others}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Client Success Stories */}
        <div className="bg-black p-12 rounded-2xl text-white mb-16">
          <h3 className="text-3xl font-serif mb-8 text-center">What funds and family offices say</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-gray-300 italic mb-4">
                &quot;Strategic partner to the portfolio, not a vendor. Exit at 4.2x instead of 2.8x expected. The value created speaks for itself.&quot;
              </blockquote>
              <cite className="text-yellow-400">— Managing Partner, PE Fund</cite>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-gray-300 italic mb-4">
                &quot;Absolute confidentiality, total discretion. They work across several of our holdings with rare consistency. We recommend them internally.&quot;
              </blockquote>
              <cite className="text-yellow-400">— Family Office, Europe</cite>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-gray-300 italic mb-4">
                &quot;In 18 months, portfolio valuation significantly strengthened. One contract, multiple companies transformed. Exactly what we were looking for.&quot;
              </blockquote>
              <cite className="text-yellow-400">— Entrepreneur holding</cite>
            </div>
          </div>
        </div>

        {/* Awards & Recognition */}
        <div className="text-center">
          <h3 className="text-2xl font-serif text-black mb-8">Recognition & awards</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <Award className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h4 className="font-semibold text-black mb-2">Top Consulting Firm</h4>
              <p className="text-gray-600 text-sm">Business Awards 2024</p>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h4 className="font-semibold text-black mb-2">Excellence Award</h4>
              <p className="text-gray-600 text-sm">SYNTEC Conseil 2023</p>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h4 className="font-semibold text-black mb-2">Best M&A Advisory</h4>
              <p className="text-gray-600 text-sm">Finance Magazine 2023</p>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h4 className="font-semibold text-black mb-2">Client Satisfaction</h4>
              <p className="text-gray-600 text-sm">98% - Industry record</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompetitiveAdvantage;