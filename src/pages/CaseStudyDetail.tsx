import { LocaleLink } from '../components/LocaleLink';
import type { CaseStudy } from '../lib/caseStudies';
import { ArrowLeft, MapPin, Briefcase } from 'lucide-react';

interface CaseStudyDetailProps {
  study: CaseStudy;
}

const CaseStudyDetail = ({ study }: CaseStudyDetailProps) => {
  return (
    <div className="pt-16">
      <section className="py-8 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <LocaleLink href="/case-studies" className="inline-flex items-center text-gray-600 hover:text-yellow-600 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour aux études de cas
          </LocaleLink>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {study.premium && (
            <span className="inline-block px-3 py-1 text-xs font-medium bg-yellow-400/20 text-yellow-700 rounded-full mb-6">
              Premium
            </span>
          )}
          <h1 className="text-4xl md:text-5xl font-serif text-black mb-6 leading-tight">
            {study.title}
          </h1>
          <div className="flex flex-wrap gap-4 text-gray-600 mb-8">
            {study.country && (
              <span className="inline-flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                {study.country}
              </span>
            )}
            {study.sector && (
              <span className="inline-flex items-center">
                <Briefcase className="h-5 w-5 mr-2" />
                {study.sector}
              </span>
            )}
          </div>
          {study.summary && (
            <p className="text-xl text-gray-600 mb-8 border-l-4 border-yellow-400 pl-6">
              {study.summary}
            </p>
          )}
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: study.content }}
            style={{ lineHeight: '1.7', fontSize: '18px', color: '#374151' }}
          />
        </div>
      </section>

      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
            Échanger sur votre mandat
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Nos experts vous accompagnent pour transformer et valoriser votre portefeuille.
          </p>
          <LocaleLink href="/contact" className="bg-yellow-400 text-black hover:bg-yellow-500 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 inline-block">
            Nous contacter
          </LocaleLink>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyDetail;
