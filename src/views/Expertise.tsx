import IndustryExpertise from '@/components/IndustryExpertise';
import { Target } from 'lucide-react';

const ExpertisePage = () => {
  return (
    <div className="pt-16">
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 backdrop-blur-sm mb-4 sm:mb-6">
            <Target className="h-4 w-4 text-yellow-400 mr-2" />
            <span className="text-yellow-400 text-xs sm:text-sm font-medium">Expertise</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4 sm:mb-6">
            Our sector <span className="text-yellow-400">expertise</span>
          </h1>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-4 sm:mb-6" />
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            In-depth knowledge of sector-specific challenges for tailored support and optimal results.
          </p>
        </div>
      </section>
      <IndustryExpertise />
    </div>
  );
};

export default ExpertisePage;
