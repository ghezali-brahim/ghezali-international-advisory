import { Award, BookOpen, Users, Globe, Linkedin, Mail } from 'lucide-react';

const Team = () => {
  const founder = {
    name: "Ghezali",
    title: "Founder & CEO",
    subtitle: "International Advisory",
    experience: "20+ years",
    specialties: ["Corporate Strategy", "M&A", "Transformation", "Leadership"],
    achievements: [
      "500M€+ value created",
      "200+ mid-market companies supported",
      "25 countries of operation",
      "95% success rate"
    ],
    bio: "Recognised entrepreneur and strategist with 20 years of experience in business development, company structuring and strategic acquisitions. Former leader at Business Evasion, he founded Ghezali International Advisory to support funds, family offices and institutions in transforming their portfolios.",
    education: [
      "MBA Strategy & Finance",
      "Executive Program - INSEAD",
      "M&A Institute Certification"
    ],
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
  };

  const advisors = [
    {
      name: "Marie-Claire Dubois",
      title: "Senior Advisor",
      specialty: "Digital Transformation",
      experience: "15 years",
      background: "Ex-McKinsey, Ex-CEO Tech Group",
      image: "https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg"
    },
    {
      name: "Jean-Marc Laurent",
      title: "Senior Advisor",
      specialty: "Private Equity & M&A",
      experience: "18 years",
      background: "Ex-Goldman Sachs, Ex-Managing Partner PE",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg"
    },
    {
      name: "Pierre-Antoine Martin",
      title: "Senior Advisor",
      specialty: "Operations & Supply Chain",
      experience: "20 years",
      background: "Ex-BCG, Ex-COO Fortune 500",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg"
    }
  ];

  const certifications = [
    "Certified M&A Professional (CMP)",
    "Executive Coach Certification",
    "ISO 27001 Lead Auditor",
    "Certified Strategy Professional"
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-black mb-4 sm:mb-6">
            Exceptional <span className="text-yellow-600">Leadership</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-600 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A team of recognised experts from the world&apos;s leading consultancies and top-performing companies.
          </p>
        </div>

        {/* Founder Section */}
        <div className="mb-12 sm:mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-96">
              <img
                src={founder.image}
                alt="Ghezali - Founder and CEO of Ghezali International Advisory - Expert in corporate strategy, M&A and mid-market transformation - 20 years of experience"
                className="w-full h-full object-cover rounded-lg shadow-2xl max-w-full"
                loading="lazy"
              />
            </div>
            <div>
              <div className="mb-4 sm:mb-6">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-black mb-2">{founder.name}</h3>
                <p className="text-lg sm:text-xl text-yellow-600 font-semibold mb-2">{founder.title}</p>
                <p className="text-base sm:text-lg text-gray-600">{founder.subtitle}</p>
              </div>

              <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">{founder.bio}</p>

              {/* Specialties */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-black mb-4">Areas of expertise</h4>
                <div className="flex flex-wrap gap-3">
                  {founder.specialties.map((specialty, index) => (
                    <span key={index} className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium">
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-black mb-4">Key achievements</h4>
                <div className="space-y-3">
                  {founder.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center">
                      <Award className="h-5 w-5 text-yellow-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div>
                <h4 className="text-lg font-semibold text-black mb-4">Education</h4>
                <div className="space-y-2">
                  {founder.education.map((edu, index) => (
                    <div key={index} className="flex items-center">
                      <BookOpen className="h-4 w-4 text-yellow-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{edu}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Senior Advisors */}
        <div className="mb-10 sm:mb-16">
          <h3 className="text-2xl sm:text-3xl font-serif text-black mb-8 sm:mb-12 text-center">Expert Advisory</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {advisors.map((advisor, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <img
                  src={advisor.image}
                  alt={`${advisor.name} - ${advisor.title} specialised in ${advisor.specialty} - GHEZALI strategic advisory expert`}
                  className="w-24 h-24 object-cover rounded-full mx-auto mb-6"
                  loading="lazy"
                />
                <div className="text-center">
                  <h4 className="text-xl font-semibold text-black mb-2">{advisor.name}</h4>
                  <p className="text-yellow-600 font-medium mb-2">{advisor.title}</p>
                  <p className="text-gray-600 mb-4">{advisor.specialty}</p>
                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <p className="text-sm text-gray-700 mb-1">{advisor.background}</p>
                    <p className="text-sm text-yellow-600 font-semibold">{advisor.experience} experience</p>
                  </div>
                  <div className="flex justify-center space-x-4">
                    <button className="text-gray-400 hover:text-yellow-600 transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </button>
                    <button className="text-gray-400 hover:text-yellow-600 transition-colors">
                      <Mail className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications & Network */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Certifications */}
          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
            <div className="flex items-center mb-4 sm:mb-6">
              <Award className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-600 mr-3 shrink-0" />
              <h3 className="text-xl sm:text-2xl font-serif text-black">Professional Certifications</h3>
            </div>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <div className="bg-yellow-600 w-2 h-2 rounded-full mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">{cert}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Network */}
          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
            <div className="flex items-center mb-4 sm:mb-6">
              <Globe className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-600 mr-3 shrink-0" />
              <h3 className="text-xl sm:text-2xl font-serif text-black">International Network</h3>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-black mb-2">Strategic Partners</h4>
                <p className="text-gray-600 text-sm">McKinsey & Company, BCG, Bain & Company</p>
              </div>
              <div>
                <h4 className="font-semibold text-black mb-2">Financial Institutions</h4>
                <p className="text-gray-600 text-sm">Goldman Sachs, JP Morgan, Rothschild & Co</p>
              </div>
              <div>
                <h4 className="font-semibold text-black mb-2">Investment Funds</h4>
                <p className="text-gray-600 text-sm">KKR, Blackstone, Carlyle Group</p>
              </div>
              <div>
                <h4 className="font-semibold text-black mb-2">Geographic Presence</h4>
                <p className="text-gray-600 text-sm">Paris, London, New York, Singapore</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 sm:mt-16 text-center">
          <div className="bg-black p-6 sm:p-8 lg:p-12 rounded-2xl">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white mb-4 sm:mb-6">
              Meet our team
            </h3>
            <p className="text-base sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Speak directly with our experts in a confidential discussion.
            </p>
            <button type="button" className="bg-yellow-400 text-black hover:bg-yellow-500 px-8 py-3 sm:px-10 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-400/25 inline-flex items-center min-h-[44px]">
              <Users className="mr-2 h-5 w-5 shrink-0" />
              Schedule a meeting
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;