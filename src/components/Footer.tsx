'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';
import { useLocale } from '../context/LocaleContext';
import { getDictionary } from '../i18n/getDictionary';
import { getMarketsForLocale } from '../config/markets';

const Footer = () => {
  const locale = useLocale();
  const prefix = `/${locale}`;
  const t = getDictionary(locale).footer;
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
            <h3 className="text-lg font-semibold mb-6">{t.navigation}</h3>
            <ul className="space-y-3">
              <li>
                <Link href={`${prefix}/#accueil`} className="text-gray-400 hover:text-yellow-400 transition-colors">
                  {t.home}
                </Link>
              </li>
              <li>
                <Link href={`${prefix}/services`} className="text-gray-400 hover:text-yellow-400 transition-colors">
                  {t.offers}
                </Link>
              </li>
              <li>
                <Link href={`${prefix}/private-equity`} className="text-gray-400 hover:text-yellow-400 transition-colors">
                  {t.privateEquity}
                </Link>
              </li>
              <li>
                <Link href={`${prefix}/institutional`} className="text-gray-400 hover:text-yellow-400 transition-colors">
                  {t.institutional}
                </Link>
              </li>
              <li>
                <Link href={`${prefix}/family-office`} className="text-gray-400 hover:text-yellow-400 transition-colors">
                  {t.familyOffice}
                </Link>
              </li>
              <li>
                <Link href={`${prefix}/group-holding`} className="text-gray-400 hover:text-yellow-400 transition-colors">
                  {t.groupHolding}
                </Link>
              </li>
              <li>
                <Link href={`${prefix}/reseau`} className="text-gray-400 hover:text-yellow-400 transition-colors">
                  {t.network}
                </Link>
              </li>
              <li>
                <Link href={`${prefix}/references`} className="text-gray-400 hover:text-yellow-400 transition-colors">
                  {t.references}
                </Link>
              </li>
              <li>
                <Link href={`${prefix}/case-studies`} className="text-gray-400 hover:text-yellow-400 transition-colors">
                  {t.caseStudies}
                </Link>
              </li>
              <li>
                <Link href={`${prefix}/positioning`} className="text-gray-400 hover:text-yellow-400 transition-colors">
                  {t.positioning}
                </Link>
              </li>
              <li>
                <Link href={`${prefix}/#medias`} className="text-gray-400 hover:text-yellow-400 transition-colors">
                  {t.media}
                </Link>
              </li>
              <li>
                <Link href={`${prefix}/#contact`} className="text-gray-400 hover:text-yellow-400 transition-colors">
                  {t.contact}
                </Link>
              </li>
              <li>
                <Link href={`${prefix}/blog`} className="text-gray-400 hover:text-yellow-400 transition-colors">
                  {t.blog}
                </Link>
              </li>
            </ul>
          </div>

          {/* Marchés */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t.markets}</h3>
            <ul className="space-y-3">
              {getMarketsForLocale(locale).map((market) => (
                <li key={market.id}>
                  <Link href={`${prefix}/markets/${market.slug}`} className="text-gray-400 hover:text-yellow-400 transition-colors">
                    {locale === 'fr' ? market.name : market.nameEn}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t.contactTitle}</h3>
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
              © 2024 Ghezali International Advisory. {t.rights}
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href={`${prefix}/legal`} className="text-gray-400 hover:text-yellow-400 transition-colors">
                {t.legal}
              </Link>
              <Link href={`${prefix}/privacy`} className="text-gray-400 hover:text-yellow-400 transition-colors">
                {t.privacy}
              </Link>
              <Link href={`${prefix}/blog`} className="text-gray-400 hover:text-yellow-400 transition-colors">
                {t.blog}
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