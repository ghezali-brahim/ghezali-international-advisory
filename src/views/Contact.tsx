import Contact from '@/components/Contact';
import FAQ from '@/components/FAQ';
import { MapPin, Phone, Mail, Clock, Users, Award, TrendingUp } from 'lucide-react';

const ContactPage = () => {
  const offices = [
    {
      city: "Paris - La Défense",
      address: "Tour Majunga\n6 Place de la Pyramide\n92400 Courbevoie",
      phone: "+33 (0)1 XX XX XX XX",
      email: "paris@ghezali-business.com",
      hours: "Mon-Fri: 8am-8pm"
    },
    {
      city: "Londres",
      address: "25 Old Broad Street\nLondon EC2N 1HN\nUnited Kingdom",
      phone: "+44 (0)20 XXXX XXXX",
      email: "london@ghezali-business.com",
      hours: "Mon-Fri: 8am-8pm"
    },
    {
      city: "New York",
      address: "1 World Trade Center\nNew York, NY 10007\nUnited States",
      phone: "+1 (212) XXX-XXXX",
      email: "newyork@ghezali-business.com",
      hours: "Mon-Fri: 8am-8pm"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Contact */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">
            Request an <span className="text-yellow-400">invitation</span>
          </h1>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Funds, family offices, institutions: let us discuss your mandate.
            Every request is reviewed personally. Limited number of mandates.
          </p>
        </div>
      </section>

      {/* Offices */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-black mb-6">Our offices</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              An international presence to support you wherever you are
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300">
                <h3 className="text-2xl font-serif text-black mb-6">{office.city}</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
                    <div className="text-gray-700 whitespace-pre-line">{office.address}</div>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-yellow-600 mr-3 flex-shrink-0" />
                    <div className="text-gray-700">{office.phone}</div>
                  </div>
                  
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-yellow-600 mr-3 flex-shrink-0" />
                    <div className="text-gray-700">{office.email}</div>
                  </div>
                  
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-yellow-600 mr-3 flex-shrink-0" />
                    <div className="text-gray-700">{office.hours}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Contact />
      <FAQ />

      {/* Trust Indicators */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-black mb-6">Why trust us?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Award className="h-12 w-12 text-yellow-600 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-black mb-4">20 years of expertise</h3>
              <p className="text-gray-600">
                Proven experience at the service of business excellence since 2004
              </p>
            </div>
            
            <div className="text-center">
              <Users className="h-12 w-12 text-yellow-600 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-black mb-4">200+ mid-market companies supported</h3>
              <p className="text-gray-600">
                An exceptional track record with high-performing companies
              </p>
            </div>
            
            <div className="text-center">
              <TrendingUp className="h-12 w-12 text-yellow-600 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-black mb-4">+500M€ value created</h3>
              <p className="text-gray-600">
                Measurable, lasting value creation for our clients
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;