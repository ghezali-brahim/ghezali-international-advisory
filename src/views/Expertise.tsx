import IndustryExpertise from '@/components/IndustryExpertise';
import { Target } from 'lucide-react';

const ExpertisePage = () => {
  return (
    <div className="pt-16">
      <section className="py-24 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 backdrop-blur-sm mb-6">
            <Target className="h-4 w-4 text-yellow-400 mr-2" />
            <span className="text-yellow-400 text-sm font-medium">Expertise</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">
            Notre <span className="text-yellow-400">expertise</span> sectorielle
          </h1>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Une connaissance approfondie des enjeux par secteur pour un accompagnement sur mesure et des résultats optimaux.
          </p>
        </div>
      </section>
      <IndustryExpertise />
    </div>
  );
};

export default ExpertisePage;
