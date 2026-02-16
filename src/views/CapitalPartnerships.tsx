'use client';

import { useTranslation } from 'react-i18next';
import { LocaleLink } from '@/components/LocaleLink';
import { Shield, ArrowRight, ChevronRight } from 'lucide-react';

const CapitalPartnershipsPage = () => {
  const { t } = useTranslation('default');
  const arr = (key: string) => t(key, { returnObjects: true }) as string[];

  return (
    <div className="pt-16">
      {/* 1. Hero */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 backdrop-blur-sm text-yellow-400 text-sm font-medium">
              {t('capitalPartnerships.hero.badge1')}
            </span>
            <span className="inline-flex items-center px-4 py-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 backdrop-blur-sm text-yellow-400 text-sm font-medium">
              {t('capitalPartnerships.hero.badge2')}
            </span>
            <span className="inline-flex items-center px-4 py-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 backdrop-blur-sm text-yellow-400 text-sm font-medium">
              {t('capitalPartnerships.hero.badge3')}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">
            {t('capitalPartnerships.hero.headline')}
          </h1>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('capitalPartnerships.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* 2. Le problème / The context */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif text-black mb-6">
            {t('capitalPartnerships.problem.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mb-10 leading-relaxed">
            {t('capitalPartnerships.problem.intro')}
          </p>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-gray-600">
            {arr('capitalPartnerships.problem.items').map((item) => (
              <li key={item} className="flex items-center">
                <ChevronRight className="h-5 w-5 text-yellow-600 mr-2 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3. La solution / Our role */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif text-black mb-6">
            {t('capitalPartnerships.solution.title')}
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mb-10 leading-relaxed font-medium">
            {t('capitalPartnerships.solution.intro')}
          </p>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {arr('capitalPartnerships.solution.items').map((item) => (
              <li
                key={item}
                className="p-6 rounded-2xl bg-white border border-gray-200 flex items-center"
              >
                <Shield className="h-8 w-8 text-yellow-600 mr-4 flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. Investment thesis */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif text-black mb-12">
            {t('capitalPartnerships.thesis.title')}
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-serif text-black mb-4 border-b border-yellow-400 pb-2">
                {t('capitalPartnerships.thesis.focusTitle')}
              </h3>
              <ul className="space-y-2 text-gray-600">
                {arr('capitalPartnerships.thesis.focusItems').map((item) => (
                  <li key={item} className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-yellow-600 mr-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-serif text-black mb-4 border-b border-yellow-400 pb-2">
                {t('capitalPartnerships.thesis.targetTitle')}
              </h3>
              <dl className="space-y-2 text-gray-600">
                <div>
                  <dt className="font-medium text-gray-800">{t('capitalPartnerships.thesis.targetRevenue')}</dt>
                </div>
                <div>
                  <dt className="font-medium text-gray-800">{t('capitalPartnerships.thesis.targetEbitda')}</dt>
                </div>
                <div>
                  <dt className="font-medium text-gray-800">{t('capitalPartnerships.thesis.targetSector')}</dt>
                </div>
                <div>
                  <dt className="font-medium text-gray-800">{t('capitalPartnerships.thesis.targetGeography')}</dt>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Risk mitigation framework */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif text-black mb-6">
            {t('capitalPartnerships.risk.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mb-10 leading-relaxed">
            {t('capitalPartnerships.risk.intro')}
          </p>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {arr('capitalPartnerships.risk.items').map((item) => (
              <li
                key={item}
                className="p-6 rounded-2xl bg-white border border-gray-200 flex items-center"
              >
                <Shield className="h-8 w-8 text-yellow-600 mr-4 flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 6. Structure proposée */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif text-black mb-6">
            {t('capitalPartnerships.structure.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mb-10 leading-relaxed">
            {t('capitalPartnerships.structure.intro')}
          </p>
          <ul className="grid sm:grid-cols-2 gap-4">
            {arr('capitalPartnerships.structure.items').map((item) => (
              <li key={item} className="flex items-center p-4 rounded-xl bg-gray-50">
                <ChevronRight className="h-5 w-5 text-yellow-600 mr-3 flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 7. Process */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif text-black mb-10">
            {t('capitalPartnerships.process.title')}
          </h2>
          <ol className="space-y-4 max-w-2xl">
            {arr('capitalPartnerships.process.steps').map((step: string, index: number) => (
              <li key={step} className="flex items-start">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400 text-black font-semibold flex-shrink-0 mr-4">
                  {index + 1}
                </span>
                <span className="text-lg text-gray-700 pt-1.5">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 8. Disclaimer + CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            {t('capitalPartnerships.disclaimer.text')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <LocaleLink
              href="/contact"
              className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 inline-flex items-center"
            >
              {t('capitalPartnerships.cta.contact')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </LocaleLink>
            <span className="text-gray-500 text-sm">{t('capitalPartnerships.cta.availableUponRequest')}</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CapitalPartnershipsPage;
