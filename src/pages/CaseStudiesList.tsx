import { LocaleLink } from '../components/LocaleLink';
import type { CaseStudy } from '../lib/caseStudies';
import { FileText, ArrowRight, MapPin, Briefcase } from 'lucide-react';

interface CaseStudiesListProps {
  studies: CaseStudy[];
}

const CaseStudiesListPage = ({ studies }: CaseStudiesListProps) => {
  return (
    <div className="pt-16">
      <section className="py-24 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 backdrop-blur-sm mb-6">
            <FileText className="h-4 w-4 text-yellow-400 mr-2" />
            <span className="text-yellow-400 text-sm font-medium">Études de cas</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">
            Études de cas <span className="text-yellow-400">premium</span>
          </h1>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Références détaillées : transformation d&apos;ETI, valorisation, M&A. Retours d&apos;expérience et résultats mesurables.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {studies.length === 0 ? (
            <p className="text-center text-gray-600 text-lg">Aucune étude de cas publiée pour le moment.</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {studies.map((study) => (
                <LocaleLink
                  key={study.slug}
                  href={`/case-studies/${study.slug}`}
                  className="group block p-8 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors border border-gray-100 hover:border-yellow-400/30"
                >
                  {study.premium && (
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-yellow-400/20 text-yellow-700 rounded-full mb-4">
                      Premium
                    </span>
                  )}
                  <h2 className="text-xl font-serif text-black mb-3 group-hover:text-yellow-600 transition-colors">
                    {study.title}
                  </h2>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{study.summary}</p>
                  <div className="flex flex-wrap gap-3 text-sm text-gray-500">
                    {study.country && (
                      <span className="inline-flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {study.country}
                      </span>
                    )}
                    {study.sector && (
                      <span className="inline-flex items-center">
                        <Briefcase className="h-4 w-4 mr-1" />
                        {study.sector}
                      </span>
                    )}
                  </div>
                  <span className="inline-flex items-center mt-4 text-yellow-600 font-medium group-hover:underline">
                    Lire l&apos;étude
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </LocaleLink>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <LocaleLink href="/references" className="text-yellow-600 hover:text-yellow-700 font-medium">
            Voir toutes nos références
          </LocaleLink>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesListPage;
