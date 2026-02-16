'use client';

import { LocaleLink } from '@/components/LocaleLink';
import { useLocale } from '@/context/LocaleContext';
import { ArrowRight, Briefcase, FileCheck, Scale, Lock, MapPin, Mic, Users, LayoutDashboard, Calendar, Shield, Target } from 'lucide-react';

type Locale = 'fr' | 'en';

const WHERE_INTERVENE_ICONS = [LayoutDashboard, Mic, Calendar, Users, Shield, Target] as const;

const content: Record<Locale, {
  badge: string;
  heroTitle: string;
  heroTitleHighlight: string;
  heroInvitationOnly: string;
  heroSubtitle: string;
  heroHint: string;
  whereTitle: string;
  whereSubtitle: string;
  whereItems: string[];
  mandatesTitle: string;
  mandatesIntro: string;
  mandates: string[];
  frameworkTitle: string;
  frameworkItems: string[];
  modelsTitle: string;
  modelsItems: string[];
  representationTitle: string;
  representationP1: string;
  representationP2: string;
  processTitle: string;
  processSteps: string[];
  processNote: string;
  capacityTitle: string;
  capacityText: string;
  regionsIntro: string;
  regionsTitle: string;
  regions: string[];
  ctaTitle: string;
  ctaSubtitle: string;
  ctaButton: string;
  ctaNote: string;
}> = {
  fr: {
    badge: 'Interventions stratégiques internationales',
    heroTitle: 'Interventions stratégiques',
    heroTitleHighlight: 'internationales',
    heroInvitationOnly: 'Sur invitation uniquement',
    heroSubtitle: 'Nous acceptons un nombre limité de mandats stratégiques au niveau board et institutionnels en Europe, aux États-Unis et au Moyen-Orient.',
    heroHint: 'Mandats, boards, conférences et événements — à la demande.',
    whereTitle: 'Où nous intervenons, à la demande',
    whereSubtitle: 'Nous sommes sollicités pour intervenir en tant qu\'intervenant stratégique, sur invitation.',
    whereItems: [
      'Conseils d\'administration et comités (boards)',
      'Conférences et keynotes',
      'Événements stratégiques et cercles restreints',
      'Réseaux et clubs d\'investisseurs (intervention ponctuelle)',
      'Sessions board-level et gouvernance',
      'Missions institutionnelles et task forces',
    ],
    mandatesTitle: 'Types de mandats envisagés',
    mandatesIntro: 'Nous intervenons sur invitation, dans un cadre défini.',
    mandates: [
      'Transformation de portefeuille pour fonds PE',
      'Intervention stratégique en environnements de gouvernance complexes',
      'Exécution de croissance cross-border',
      'Mandats advisory institutionnels',
      'Situations confidentielles et spéciales',
    ],
    frameworkTitle: 'Cadre d\'engagement',
    frameworkItems: [
      'Accès direct aux décideurs',
      'Mandat au niveau board',
      'Périmètre et autorité clairement définis',
      'Accord de confidentialité',
      'Calendrier d\'exécution défini',
      'Alignement des intérêts',
    ],
    modelsTitle: 'Modèles d\'intervention',
    modelsItems: [
      'Mandat stratégique forfaitaire',
      'Alignement sur la performance (success-based)',
      'Participation au capital (le cas échéant)',
      'Retainers advisory long terme',
    ],
    representationTitle: 'Représentation internationale',
    representationP1: 'Nous collaborons avec des intermédiaires et agents stratégiques sélectionnés pour structurer des interventions de haut niveau à l\'international.',
    representationP2: 'La représentation est examinée au cas par cas.',
    processTitle: 'Processus d\'examen des mandats',
    processSteps: [
      'Introduction confidentielle',
      'Entretien d\'alignement stratégique initial',
      'Revue interne du mandat',
      'Décision formelle d\'engagement',
    ],
    processNote: 'Chaque mandat est examiné en interne avant acceptation.',
    capacityTitle: 'Capacité d\'engagement limitée',
    capacityText: 'Pour préserver la qualité d\'exécution et la discrétion, nous maintenons un nombre strictement limité de mandats internationaux simultanés.',
    regionsIntro: 'Nous intervenons actuellement dans les régions suivantes.',
    regionsTitle: 'Régions d\'intervention actuelles',
    regions: ['Europe', 'États-Unis', 'Golfe (GCC)', 'Marchés africains sélectionnés'],
    ctaTitle: 'Demande de considération stratégique',
    ctaSubtitle: 'Chaque introduction de mandat est examinée avec attention. Réponse sous 24h pour les demandes qualifiées.',
    ctaButton: 'Soumettre une introduction de mandat',
    ctaNote: 'Introduction confidentielle',
  },
  en: {
    badge: 'International Strategic Interventions',
    heroTitle: 'International Strategic',
    heroTitleHighlight: 'Interventions',
    heroInvitationOnly: 'By Invitation Only',
    heroSubtitle: 'We accept a limited number of board-level and institutional mandates across Europe, the United States and the Middle East.',
    heroHint: 'Mandates, boards, conferences and events — on demand.',
    whereTitle: 'Where We Intervene, On Demand',
    whereSubtitle: 'We are invited to intervene as a strategic speaker and advisor, by invitation only.',
    whereItems: [
      'Boards and committees',
      'Conferences and keynotes',
      'Strategic events and private circles',
      'Investor networks and clubs (one-off intervention)',
      'Board-level sessions and governance',
      'Institutional missions and task forces',
    ],
    mandatesTitle: 'Types of Mandates Considered',
    mandatesIntro: 'We intervene by invitation, within a defined framework.',
    mandates: [
      'Portfolio transformation for PE funds',
      'Strategic intervention in complex governance environments',
      'Cross-border growth execution',
      'Institutional advisory mandates',
      'Confidential special situations',
    ],
    frameworkTitle: 'Engagement Framework',
    frameworkItems: [
      'Direct access to decision-makers',
      'Board-level mandate',
      'Clear scope and authority',
      'Confidentiality agreement',
      'Defined execution timeline',
      'Alignment of interests',
    ],
    modelsTitle: 'Intervention Models',
    modelsItems: [
      'Fixed strategic mandate',
      'Success-based alignment',
      'Equity participation (when relevant)',
      'Long-term advisory retainers',
    ],
    representationTitle: 'International Representation',
    representationP1: 'We collaborate with selected intermediaries and strategic agents to structure high-level interventions globally.',
    representationP2: 'Representation is reviewed on a case-by-case basis.',
    processTitle: 'Mandate Review Process',
    processSteps: [
      'Confidential introduction',
      'Initial strategic alignment call',
      'Internal mandate review',
      'Formal engagement decision',
    ],
    processNote: 'Each mandate is reviewed internally before acceptance.',
    capacityTitle: 'Limited Engagement Capacity',
    capacityText: 'To preserve execution quality and discretion, we maintain a strictly limited number of concurrent international mandates.',
    regionsIntro: 'We currently intervene in the following regions.',
    regionsTitle: 'Current Regions of Intervention',
    regions: ['Europe', 'United States', 'GCC', 'Select African Markets'],
    ctaTitle: 'Request Strategic Consideration',
    ctaSubtitle: 'Each mandate introduction is reviewed with care. Response within 24h for qualified requests.',
    ctaButton: 'Submit a Mandate Introduction',
    ctaNote: 'Confidential introduction',
  },
};

const ReseauPage = () => {
  const locale = useLocale() as Locale;
  const t = content[locale] ?? content.en;

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 backdrop-blur-sm mb-6">
            <Briefcase className="h-4 w-4 text-yellow-400 mr-2" />
            <span className="text-yellow-400 text-sm font-medium">{t.badge}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">
            {t.heroTitle} <span className="text-yellow-400">{t.heroTitleHighlight}</span>
          </h1>
          <p className="text-lg md:text-xl text-yellow-400/90 font-medium mb-4">{t.heroInvitationOnly}</p>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t.heroSubtitle}
          </p>
          <p className="text-gray-400 mt-4 text-sm md:text-base">{t.heroHint}</p>
        </div>
      </section>

      {/* Où nous intervenons, à la demande */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-black mb-4">{t.whereTitle}</h2>
          <p className="text-gray-600 mb-10 max-w-2xl">{t.whereSubtitle}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.whereItems.map((label, idx) => {
              const Icon = WHERE_INTERVENE_ICONS[idx];
              return (
                <div
                  key={idx}
                  className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-yellow-100 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-yellow-600" />
                    </div>
                    <p className="ml-4 text-gray-800 font-medium leading-snug">{label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Types de mandats - cartes dans une box */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-black mb-4">{t.mandatesTitle}</h2>
          <p className="text-gray-600 mb-8 max-w-2xl">{t.mandatesIntro}</p>
          <div className="border-l-4 border-yellow-500 bg-gray-50 rounded-r-xl p-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {t.mandates.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-white rounded-lg p-4 shadow-sm">
                  <Briefcase className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cadre d'engagement - carte conteneur */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-black mb-6">{t.frameworkTitle}</h2>
          <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100">
            <ul className="grid sm:grid-cols-2 gap-4">
              {t.frameworkItems.map((item, idx) => (
                <li key={idx} className="flex items-start text-gray-700">
                  <FileCheck className="h-5 w-5 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Modèles d'intervention - box */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-black mb-6">{t.modelsTitle}</h2>
          <div className="bg-gray-50 rounded-2xl border border-gray-200 p-8">
            <ul className="grid sm:grid-cols-2 gap-4">
              {t.modelsItems.map((item, idx) => (
                <li key={idx} className="flex items-start text-gray-700">
                  <Scale className="h-5 w-5 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Représentation internationale - encadré */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-black mb-6">{t.representationTitle}</h2>
          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
            <p className="text-gray-700 leading-relaxed mb-4">{t.representationP1}</p>
            <p className="text-gray-700 leading-relaxed">{t.representationP2}</p>
          </div>
        </div>
      </section>

      {/* Processus d'examen - 4 blocs numérotés */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-black mb-10">{t.processTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {t.processSteps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-yellow-500 text-black font-serif font-bold text-xl flex items-center justify-center mb-4">
                  {idx + 1}
                </div>
                <p className="text-gray-700 font-medium">{step}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-600 italic border-l-4 border-yellow-500 pl-6 py-2 bg-gray-50 rounded-r-lg max-w-2xl">{t.processNote}</p>
        </div>
      </section>

      {/* Limited Engagement Capacity */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Lock className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-serif text-white mb-4">{t.capacityTitle}</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {t.capacityText}
          </p>
        </div>
      </section>

      {/* Régions - avec intro */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-black mb-4">{t.regionsTitle}</h2>
          <p className="text-gray-600 mb-8">{t.regionsIntro}</p>
          <div className="flex flex-wrap gap-4">
            {t.regions.map((region, idx) => (
              <span
                key={idx}
                className="inline-flex items-center px-5 py-2.5 rounded-full border-2 border-yellow-500/50 bg-yellow-50 text-gray-800 font-medium"
              >
                <MapPin className="h-4 w-4 text-yellow-600 mr-2" />
                {region}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">{t.ctaTitle}</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">{t.ctaSubtitle}</p>
          <LocaleLink
            href="/contact"
            className="bg-yellow-400 text-black hover:bg-yellow-500 px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-400/25 inline-flex items-center"
          >
            <ArrowRight className="mr-2 h-5 w-5" />
            {t.ctaButton}
          </LocaleLink>
          <p className="text-gray-400 text-sm mt-4">{t.ctaNote}</p>
        </div>
      </section>
    </div>
  );
};

export default ReseauPage;
