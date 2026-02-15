import { Globe, Building2, TrendingUp, Users } from 'lucide-react';
import CaseStudies from '../components/CaseStudies';
import IndustryExpertise from '../components/IndustryExpertise';
import References from '../components/References';

const ReferencesPage = () => {
  return (
    <div className="pt-16">
      <References />
      <CaseStudies />
      <IndustryExpertise />
      
      {/* International Institutions References */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-black mb-6">
              Références <span className="text-yellow-600">Institutionnelles</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Notre expertise reconnue par les institutions internationales et gouvernements
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-serif text-black mb-6">Missions Gouvernementales</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-yellow-600 pl-6">
                  <h4 className="font-semibold text-black mb-2">Stratégie de Développement Économique</h4>
                  <p className="text-gray-600 mb-2">Pays émergent - Afrique de l'Ouest</p>
                  <p className="text-sm text-gray-500">+35% croissance PIB, €800M investissements attirés</p>
                </div>
                <div className="border-l-4 border-yellow-600 pl-6">
                  <h4 className="font-semibold text-black mb-2">Transformation Digitale Nationale</h4>
                  <p className="text-gray-600 mb-2">Pays européen - Europe de l'Est</p>
                  <p className="text-sm text-gray-500">100% services publics digitalisés, -40% délais administratifs</p>
                </div>
                <div className="border-l-4 border-yellow-600 pl-6">
                  <h4 className="font-semibold text-black mb-2">Réforme du Système Financier</h4>
                  <p className="text-gray-600 mb-2">Institution bancaire centrale</p>
                  <p className="text-sm text-gray-500">Modernisation complète, conformité internationale</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-serif text-black mb-6">Partenariats Institutionnels</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg text-center">
                  <Globe className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                  <p className="font-semibold text-black">Banque Mondiale</p>
                  <p className="text-sm text-gray-600">Consultant expert</p>
                </div>
                <div className="bg-white p-4 rounded-lg text-center">
                  <Building2 className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                  <p className="font-semibold text-black">Union Européenne</p>
                  <p className="text-sm text-gray-600">Missions stratégiques</p>
                </div>
                <div className="bg-white p-4 rounded-lg text-center">
                  <TrendingUp className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                  <p className="font-semibold text-black">OCDE</p>
                  <p className="text-sm text-gray-600">Études économiques</p>
                </div>
                <div className="bg-white p-4 rounded-lg text-center">
                  <Users className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                  <p className="font-semibold text-black">Agences Développement</p>
                  <p className="text-sm text-gray-600">Programmes nationaux</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-black p-12 rounded-2xl text-center">
            <h3 className="text-3xl font-serif text-white mb-6">Impact Global Mesuré</h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-bold text-yellow-400 mb-2">12</div>
                <div className="text-gray-300">Pays transformés</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-400 mb-2">€2.5Md</div>
                <div className="text-gray-300">Impact économique</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-400 mb-2">150+</div>
                <div className="text-gray-300">Réformes réussies</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-400 mb-2">25+</div>
                <div className="text-gray-300">Institutions partenaires</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReferencesPage;