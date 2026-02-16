import { LocaleLink } from '@/components/LocaleLink';
import { TrendingUp, Target, Building2, ArrowRight } from 'lucide-react';

const PrivateEquityPage = () => {
  const pillars = [
    {
      icon: TrendingUp,
      title: 'Transformation du portefeuille',
      description: "Un contrat, plusieurs sociétés transformées. Partenaire stratégique au niveau board : recrutements CEO, M&A, opérations. Mandat couvrant l'ensemble de vos participations.",
    },
    {
      icon: Target,
      title: 'Strategic Deals & Equity',
      description: 'Alignement success fee, equity ou intéressement performance. Due diligence stratégique, optimisation pré-cession, accompagnement M&A et maximisation des multiples.',
    },
    {
      icon: Building2,
      title: 'Exécution au niveau board',
      description: 'Accès board et proximité avec les dirigeants. Intervention directe du fondateur sur chaque mission. Résultats contractuels et mesurables.',
    },
  ];

  return (
    <div className="pt-16">
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 backdrop-blur-sm mb-4 sm:mb-6">
            <TrendingUp className="h-4 w-4 text-yellow-400 mr-2" />
            <span className="text-yellow-400 text-xs sm:text-sm font-medium">Private Equity</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4 sm:mb-6">
            Partenaire stratégique des <span className="text-yellow-400">fonds PE</span>
          </h1>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-4 sm:mb-6" />
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Accompagnement des fonds en transformation de portefeuille, exécution au niveau board, M&A et valorisation. Un contrat, plusieurs sociétés transformées.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3 md:gap-12">
            {pillars.map(({ icon: Icon, title, description }) => (
              <div key={title} className="p-5 sm:p-6 lg:p-8 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
                <Icon className="h-10 w-10 sm:h-12 sm:w-12 text-yellow-600 mb-4 sm:mb-6" />
                <h2 className="text-lg sm:text-xl font-serif text-black mb-3 sm:mb-4">{title}</h2>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-black mb-4 sm:mb-6">
            Nos offres pour fonds PE
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-6 sm:mb-10">
            Strategic Deals & Equity, Executive Advisory, Corporate Acceleration. Découvrez l&apos;ensemble de nos services.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <LocaleLink href="/services" className="w-full sm:w-auto bg-yellow-400 text-black hover:bg-yellow-500 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 inline-flex items-center justify-center min-h-[44px]">
              Voir nos offres
              <ArrowRight className="ml-2 h-5 w-5" />
            </LocaleLink>
            <LocaleLink href="/contact" className="w-full sm:w-auto border-2 border-black text-black hover:bg-black hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 inline-flex items-center justify-center min-h-[44px]">
              Nous contacter
            </LocaleLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivateEquityPage;
