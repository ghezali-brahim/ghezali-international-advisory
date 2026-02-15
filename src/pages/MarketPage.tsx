import { LocaleLink } from '../components/LocaleLink';
import type { MarketConfig } from '../config/markets';
import { Globe, ArrowRight } from 'lucide-react';

interface MarketPageProps {
  market: MarketConfig;
  locale: string;
}

const MarketPage = ({ market, locale }: MarketPageProps) => {
  const name = locale === 'fr' ? market.name : market.nameEn;

  return (
    <div className="pt-16">
      <section className="py-24 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 backdrop-blur-sm mb-6">
            <Globe className="h-4 w-4 text-yellow-400 mr-2" />
            <span className="text-yellow-400 text-sm font-medium">{name}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">
            Ghezali International Advisory en <span className="text-yellow-400">{name}</span>
          </h1>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Conseil stratégique et M&A pour investisseurs en {name}. Transformation de portefeuille, valorisation, accompagnement fonds PE et family offices. Présence internationale, résultats mesurables.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-8 rounded-2xl bg-gray-50">
              <h2 className="text-xl font-serif text-black mb-4">Nos segments en {name}</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Private Equity, Family Office, Group Holding et Institutional Advisory. Un partenaire au niveau du board pour vos mandats locaux et internationaux.
              </p>
              <div className="flex flex-wrap gap-3">
                <LocaleLink href="/private-equity" className="border-2 border-black text-black hover:bg-black hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-300">
                  Private Equity
                </LocaleLink>
                <LocaleLink href="/family-office" className="border-2 border-black text-black hover:bg-black hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-300">
                  Family Office
                </LocaleLink>
                <LocaleLink href="/group-holding" className="border-2 border-black text-black hover:bg-black hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-300">
                  Group Holding
                </LocaleLink>
                <LocaleLink href="/institutional" className="border-2 border-black text-black hover:bg-black hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-300">
                  Institutional
                </LocaleLink>
              </div>
            </div>
            <div className="p-8 rounded-2xl bg-gray-50">
              <h2 className="text-xl font-serif text-black mb-4">Études de cas et références</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Découvrez nos études de cas premium et nos références clients. +500M€ de valorisation créée, 200+ ETI accompagnées.
              </p>
              <LocaleLink href="/case-studies" className="inline-flex items-center bg-yellow-400 text-black hover:bg-yellow-500 px-6 py-3 rounded-lg font-medium transition-all duration-300">
                Voir les études de cas
                <ArrowRight className="ml-2 h-4 w-4" />
              </LocaleLink>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-black mb-6">
            Échanger sur votre mandat
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Paris La Défense, Londres, New York. Réponse sous 24h.
          </p>
          <LocaleLink href="/contact" className="bg-yellow-400 text-black hover:bg-yellow-500 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 inline-flex items-center">
            Nous contacter
            <ArrowRight className="ml-2 h-5 w-5" />
          </LocaleLink>
        </div>
      </section>
    </div>
  );
};

export default MarketPage;
