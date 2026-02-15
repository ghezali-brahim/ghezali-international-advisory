import { Award, BookOpen, Users, Globe, Linkedin, Mail } from 'lucide-react';

const Team = () => {
  const founder = {
    name: "Ghezali",
    title: "Fondateur & CEO",
    subtitle: "International Advisory",
    experience: "20+ années",
    specialties: ["Stratégie Corporate", "M&A", "Transformation", "Leadership"],
    achievements: [
      "500M€+ de valorisation générée",
      "200+ ETI accompagnées",
      "15 pays d'intervention",
      "95% de taux de réussite"
    ],
    bio: "Entrepreneur et stratège reconnu, fort de 20 années d'expérience en développement commercial, structuration d'entreprises et acquisitions stratégiques. Ancien dirigeant de Business Evasion, il a créé Ghezali International Advisory pour accompagner fonds, family offices et institutions dans la transformation de leurs portefeuilles.",
    education: [
      "MBA Strategy & Finance",
      "Executive Program - INSEAD",
      "Certification M&A Institute"
    ],
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
  };

  const advisors = [
    {
      name: "Marie-Claire Dubois",
      title: "Senior Advisor",
      specialty: "Transformation Digitale",
      experience: "15 ans",
      background: "Ex-McKinsey, Ex-DG Groupe Tech",
      image: "https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg"
    },
    {
      name: "Jean-Marc Laurent",
      title: "Senior Advisor",
      specialty: "Private Equity & M&A",
      experience: "18 ans",
      background: "Ex-Goldman Sachs, Ex-Managing Partner PE",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg"
    },
    {
      name: "Pierre-Antoine Martin",
      title: "Senior Advisor",
      specialty: "Operations & Supply Chain",
      experience: "20 ans",
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
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-black mb-6">
            Leadership <span className="text-yellow-600">d'Exception</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Une équipe d'experts reconnus, issus des plus grands cabinets de conseil 
            et des entreprises les plus performantes au monde.
          </p>
        </div>

        {/* Founder Section */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src={founder.image}
                alt="Ghezali - Fondateur et CEO de Ghezali International Advisory - Expert en stratégie d'entreprise, M&A et transformation d'ETI - 20 ans d'expérience"
                className="w-full h-96 object-cover rounded-lg shadow-2xl"
                loading="lazy"
              />
            </div>
            <div>
              <div className="mb-6">
                <h3 className="text-4xl font-serif text-black mb-2">{founder.name}</h3>
                <p className="text-xl text-yellow-600 font-semibold mb-2">{founder.title}</p>
                <p className="text-lg text-gray-600">{founder.subtitle}</p>
              </div>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed">{founder.bio}</p>

              {/* Specialties */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-black mb-4">Domaines d'expertise</h4>
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
                <h4 className="text-lg font-semibold text-black mb-4">Réalisations clés</h4>
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
                <h4 className="text-lg font-semibold text-black mb-4">Formation</h4>
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
        <div className="mb-16">
          <h3 className="text-3xl font-serif text-black mb-12 text-center">Conseil d'Experts</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {advisors.map((advisor, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <img
                  src={advisor.image}
                  alt={`${advisor.name} - ${advisor.title} spécialisé en ${advisor.specialty} - Expert conseil stratégique GHEZALI`}
                  className="w-24 h-24 object-cover rounded-full mx-auto mb-6"
                  loading="lazy"
                />
                <div className="text-center">
                  <h4 className="text-xl font-semibold text-black mb-2">{advisor.name}</h4>
                  <p className="text-yellow-600 font-medium mb-2">{advisor.title}</p>
                  <p className="text-gray-600 mb-4">{advisor.specialty}</p>
                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <p className="text-sm text-gray-700 mb-1">{advisor.background}</p>
                    <p className="text-sm text-yellow-600 font-semibold">{advisor.experience} d'expérience</p>
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
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Certifications */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="flex items-center mb-6">
              <Award className="h-6 w-6 text-yellow-600 mr-3" />
              <h3 className="text-2xl font-serif text-black">Certifications Professionnelles</h3>
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
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="flex items-center mb-6">
              <Globe className="h-6 w-6 text-yellow-600 mr-3" />
              <h3 className="text-2xl font-serif text-black">Réseau International</h3>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-black mb-2">Partenaires Stratégiques</h4>
                <p className="text-gray-600 text-sm">McKinsey & Company, BCG, Bain & Company</p>
              </div>
              <div>
                <h4 className="font-semibold text-black mb-2">Institutions Financières</h4>
                <p className="text-gray-600 text-sm">Goldman Sachs, JP Morgan, Rothschild & Co</p>
              </div>
              <div>
                <h4 className="font-semibold text-black mb-2">Fonds d'Investissement</h4>
                <p className="text-gray-600 text-sm">KKR, Blackstone, Carlyle Group</p>
              </div>
              <div>
                <h4 className="font-semibold text-black mb-2">Présence Géographique</h4>
                <p className="text-gray-600 text-sm">Paris, Londres, New York, Singapour</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="bg-black p-12 rounded-2xl">
            <h3 className="text-3xl md:text-4xl font-serif text-white mb-6">
              Rencontrez notre équipe
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Échangez directement avec nos experts lors d'un entretien confidentiel.
            </p>
            <button className="bg-yellow-400 text-black hover:bg-yellow-500 px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-400/25 inline-flex items-center">
              <Users className="mr-2 h-5 w-5" />
              Planifier un entretien
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;