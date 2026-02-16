'use client';

import { capitalPartnershipsEn } from '@/content/capitalPartnershipsEn';
import { LocaleLink } from '@/components/LocaleLink';
import { Shield, ArrowRight, ChevronRight } from 'lucide-react';

const c = capitalPartnershipsEn;

const CapitalPartnershipsPage = () => {
  return (
    <div className="pt-16">
      {/* 1. Hero */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-wrap justify-center gap-2 mb-4 sm:mb-6">
            <span className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 backdrop-blur-sm text-yellow-400 text-xs sm:text-sm font-medium">
              {c.hero.badge1}
            </span>
            <span className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 backdrop-blur-sm text-yellow-400 text-xs sm:text-sm font-medium">
              {c.hero.badge2}
            </span>
            <span className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 backdrop-blur-sm text-yellow-400 text-xs sm:text-sm font-medium">
              {c.hero.badge3}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4 sm:mb-6">
            {c.hero.headline}
          </h1>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-4 sm:mb-6" />
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {c.hero.subtitle}
          </p>
        </div>
      </section>

      {/* 2. The context */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-black mb-4 sm:mb-6">
            {c.problem.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mb-6 sm:mb-10 leading-relaxed">
            {c.problem.intro}
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 text-gray-600">
            {c.problem.items.map((item) => (
              <li key={item} className="flex items-center">
                <ChevronRight className="h-5 w-5 text-yellow-600 mr-2 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3. Our role */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-black mb-4 sm:mb-6">
            {c.solution.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mb-6 sm:mb-10 leading-relaxed font-medium">
            {c.solution.intro}
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {c.solution.items.map((item) => (
              <li
                key={item}
                className="p-4 sm:p-6 rounded-2xl bg-white border border-gray-200 flex items-center"
              >
                <Shield className="h-8 w-8 text-yellow-600 mr-4 flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. Investment thesis */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-black mb-8 sm:mb-12">
            {c.thesis.title}
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2 md:gap-12">
            <div>
              <h3 className="text-lg sm:text-xl font-serif text-black mb-3 sm:mb-4 border-b border-yellow-400 pb-2">
                {c.thesis.focusTitle}
              </h3>
              <ul className="space-y-2 text-gray-600">
                {c.thesis.focusItems.map((item) => (
                  <li key={item} className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-yellow-600 mr-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-serif text-black mb-3 sm:mb-4 border-b border-yellow-400 pb-2">
                {c.thesis.targetTitle}
              </h3>
              <dl className="space-y-2 text-gray-600">
                <div>
                  <dt className="font-medium text-gray-800">{c.thesis.targetRevenue}</dt>
                </div>
                <div>
                  <dt className="font-medium text-gray-800">{c.thesis.targetEbitda}</dt>
                </div>
                <div>
                  <dt className="font-medium text-gray-800">{c.thesis.targetSector}</dt>
                </div>
                <div>
                  <dt className="font-medium text-gray-800">{c.thesis.targetGeography}</dt>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Risk mitigation framework */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-black mb-4 sm:mb-6">
            {c.risk.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mb-6 sm:mb-10 leading-relaxed">
            {c.risk.intro}
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {c.risk.items.map((item) => (
              <li
                key={item}
                className="p-4 sm:p-6 rounded-2xl bg-white border border-gray-200 flex items-center"
              >
                <Shield className="h-8 w-8 text-yellow-600 mr-4 flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 6. Structure proposed */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-black mb-4 sm:mb-6">
            {c.structure.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mb-6 sm:mb-10 leading-relaxed">
            {c.structure.intro}
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {c.structure.items.map((item) => (
              <li key={item} className="flex items-center p-4 rounded-xl bg-gray-50">
                <ChevronRight className="h-5 w-5 text-yellow-600 mr-3 flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 7. Process */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-black mb-6 sm:mb-10">
            {c.process.title}
          </h2>
          <ol className="space-y-3 sm:space-y-4 max-w-2xl">
            {c.process.steps.map((step, index) => (
              <li key={step} className="flex items-start">
                <span className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-yellow-400 text-black font-semibold flex-shrink-0 mr-3 sm:mr-4 text-sm sm:text-base">
                  {index + 1}
                </span>
                <span className="text-base sm:text-lg text-gray-700 pt-1 sm:pt-1.5">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 8. Disclaimer + CTA */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs sm:text-sm text-gray-500 max-w-2xl mx-auto mb-6 sm:mb-10 leading-relaxed">
            {c.disclaimer.text}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <LocaleLink
              href="/contact"
              className="w-full sm:w-auto border-2 border-black text-black hover:bg-black hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 inline-flex items-center justify-center min-h-[44px]"
            >
              {c.cta.contact}
              <ArrowRight className="ml-2 h-5 w-5" />
            </LocaleLink>
            <span className="text-gray-500 text-sm">{c.cta.availableUponRequest}</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CapitalPartnershipsPage;
