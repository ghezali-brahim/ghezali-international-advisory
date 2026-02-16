'use client';

import Link from 'next/link';
import { useMemo } from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLocale } from '@/context/LocaleContext';
import { markets } from '@/config/markets';

const REGION_ORDER: string[] = ['europe', 'americas', 'mena', 'apac', 'africa'];
const REGION_LABELS: Record<string, { fr: string; en: string }> = {
  americas: { fr: 'Amériques', en: 'Americas' },
  europe: { fr: 'Europe', en: 'Europe' },
  africa: { fr: 'Afrique', en: 'Africa' },
  mena: { fr: 'Moyen-Orient & Golfe', en: 'Middle East & Gulf' },
  apac: { fr: 'Asie-Pacifique', en: 'Asia-Pacific' },
};

const Footer = () => {
  const locale = useLocale();
  const prefix = `/${locale}`;
  const { t } = useTranslation('default');
  const marketsByRegion = useMemo(() => {
    const map: Record<string, typeof markets> = {};
    for (const m of markets) {
      if (!map[m.region]) map[m.region] = [];
      map[m.region].push(m);
    }
    return REGION_ORDER.filter((r) => map[r]?.length).map((region) => ({
      region,
      label: locale === 'fr' ? REGION_LABELS[region]?.fr ?? region : REGION_LABELS[region]?.en ?? region,
      markets: map[region],
    }));
  }, [locale]);
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="text-2xl font-serif mb-4">
              <span className="text-yellow-400">G</span>HEZALI
              <div className="text-sm text-yellow-400 font-sans tracking-widest">
                INTERNATIONAL ADVISORY
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              Strategic advisory for private equity, family offices and institutional investors. 
              Portfolio transformation, board-level execution, measurable value creation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t('footer.navigation')}</h3>
            <ul className="space-y-3">
              <li>
                <Link href={`${prefix}/#accueil`} className="text-gray-400 hover:text-yellow-400 transition-colors">
                  {t('footer.home')}
                </Link>
              </li>
              <li>
                <Link href={`${prefix}/services`} className="text-gray-400 hover:text-yellow-400 transition-colors">
                  {t('footer.offers')}
                </Link>
              </li>
              <li>
                <Link href={`${prefix}/private-equity`} className="text-gray-400 hover:text-yellow-400 transition-colors">
                  {t('footer.privateEquity')}
                </Link>
              </li>
              <li>
                <Link href={`${prefix}/institutional`} className="text-gray-400 hover:text-yellow-400 transition-colors">
                  {t('footer.institutional')}
                </Link>
              </li>
              <li>
                <Link href={`${prefix}/family-office`} className="text-gray-400 hover:text-yellow-400 transition-colors">
                  {t('footer.familyOffice')}
                </Link>
              </li>
              <li>
                <Link href={`${prefix}/group-holding`} className="text-gray-400 hover:text-yellow-400 transition-colors">
                  {t('footer.groupHolding')}
                </Link>
              </li>
              <li>
                <Link href={`${prefix}/reseau`} className="text-gray-400 hover:text-yellow-400 transition-colors">
                  {t('footer.network')}
                </Link>
              </li>
              <li>
                <Link href={`${prefix}/expertise`} className="text-gray-400 hover:text-yellow-400 transition-colors">
                  {t('footer.expertise')}
                </Link>
              </li>
              <li>
                <Link href={`${prefix}/positioning`} className="text-gray-400 hover:text-yellow-400 transition-colors">
                  {t('footer.positioning')}
                </Link>
              </li>
              <li>
                <Link href={`${prefix}/#medias`} className="text-gray-400 hover:text-yellow-400 transition-colors">
                  {t('footer.media')}
                </Link>
              </li>
              <li>
                <Link href={`${prefix}/#contact`} className="text-gray-400 hover:text-yellow-400 transition-colors">
                  {t('footer.contact')}
                </Link>
              </li>
              <li>
                <Link href={`${prefix}/blog`} className="text-gray-400 hover:text-yellow-400 transition-colors">
                  {t('footer.blog')}
                </Link>
              </li>
              <li className="pt-2 border-t border-gray-800 mt-2">
                <Link href={`${prefix}/capital-partnerships`} className="text-gray-400 hover:text-yellow-400 transition-colors">
                  {t('footer.strategicCapitalPartnerships')}
                </Link>
                <span className="block text-gray-500 text-xs mt-0.5">{t('footer.availableUponRequest')}</span>
              </li>
            </ul>
          </div>

          {/* Marchés (24 marchés par région) */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t('footer.markets')}</h3>
            <div className="space-y-5">
              {marketsByRegion.map(({ region, label, markets: regionMarkets }) => (
                <div key={region}>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-yellow-400/90 mb-2">
                    {label}
                  </h4>
                  <ul className="space-y-2">
                    {regionMarkets.map((market) => {
                      const marketLocale = market.locales.includes(locale) ? locale : market.defaultLocale;
                      return (
                        <li key={market.id}>
                          <Link href={`/${marketLocale}/markets/${market.slug}`} className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                            {locale === 'fr' ? market.name : market.nameEn}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t('footer.contactTitle')}</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                <div className="text-gray-400">
                  <p>Paris - La Défense</p>
                  <p>Tour Majunga</p>
                  <p>92400 Courbevoie</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-yellow-400 mr-3 flex-shrink-0" />
                <p className="text-gray-400">+33 (0)1 XX XX XX XX</p>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-yellow-400 mr-3 flex-shrink-0" />
                <p className="text-gray-400">contact@ghezali-business.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Ghezali International Advisory. {t('footer.rights')}
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href={`${prefix}/legal`} className="text-gray-400 hover:text-yellow-400 transition-colors">
                {t('footer.legal')}
              </Link>
              <Link href={`${prefix}/privacy`} className="text-gray-400 hover:text-yellow-400 transition-colors">
                {t('footer.privacy')}
              </Link>
              <Link href={`${prefix}/blog`} className="text-gray-400 hover:text-yellow-400 transition-colors">
                {t('footer.blog')}
              </Link>
            </div>
          </div>
        </div>

        {/* Trust Badge */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            Cabinet agréé formation professionnelle • Certification ISO 27001 • Membre SYNTEC Conseil
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;