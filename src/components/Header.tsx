'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useLocale } from '../context/LocaleContext';
import { getDictionary } from '../i18n/getDictionary';
import { locales } from '../i18n/config';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const locale = useLocale();
  const t = getDictionary(locale).nav;
  const prefix = `/${locale}`;

  // Fermer menu mobile et dropdown à chaque changement de page
  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-serif text-white">
              <span className="text-yellow-400">G</span>HEZALI
              <div className="text-sm text-yellow-400 font-sans tracking-widest">
                INTERNATIONAL ADVISORY
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href={prefix} className={`px-3 py-2 text-sm font-medium transition-colors ${pathname === prefix || pathname === `${prefix}/` ? 'text-yellow-400' : 'text-white hover:text-yellow-400'}`}>
                {t.home}
              </Link>
              <div className="relative">
                <button
                  onClick={() => handleDropdown('services')}
                  className={`px-3 py-2 text-sm font-medium flex items-center transition-colors ${pathname === `${prefix}/services` ? 'text-yellow-400' : 'text-white hover:text-yellow-400'}`}
                >
                  {t.offers}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {activeDropdown === 'services' && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-black/95 backdrop-blur-sm border border-gray-800 rounded-lg shadow-xl">
                    <Link href={`${prefix}/services#strategic-deals`} className="block px-4 py-3 text-sm text-white hover:bg-gray-800 hover:text-yellow-400">
                      {t.strategicDeals}
                    </Link>
                    <Link href={`${prefix}/services#executive-advisory`} className="block px-4 py-3 text-sm text-white hover:bg-gray-800 hover:text-yellow-400">
                      {t.executiveAdvisory}
                    </Link>
                    <Link href={`${prefix}/services#corporate-acceleration`} className="block px-4 py-3 text-sm text-white hover:bg-gray-800 hover:text-yellow-400">
                      {t.corporateAcceleration}
                    </Link>
                    <Link href={`${prefix}/services#institutional-advisory`} className="block px-4 py-3 text-sm text-white hover:bg-gray-800 hover:text-yellow-400">
                      {t.institutionalAdvisory}
                    </Link>
                    <div className="border-t border-gray-700 my-2" />
                    <Link href={`${prefix}/private-equity`} className="block px-4 py-3 text-sm text-white hover:bg-gray-800 hover:text-yellow-400">
                      {t.privateEquity}
                    </Link>
                    <Link href={`${prefix}/family-office`} className="block px-4 py-3 text-sm text-white hover:bg-gray-800 hover:text-yellow-400">
                      {t.familyOffice}
                    </Link>
                    <Link href={`${prefix}/group-holding`} className="block px-4 py-3 text-sm text-white hover:bg-gray-800 hover:text-yellow-400">
                      {t.groupHolding}
                    </Link>
                    <Link href={`${prefix}/institutional`} className="block px-4 py-3 text-sm text-white hover:bg-gray-800 hover:text-yellow-400">
                      {t.institutional}
                    </Link>
                  </div>
                )}
              </div>
              <div className="relative">
                <button
                  onClick={() => handleDropdown('expertise')}
                  className="text-white hover:text-yellow-400 px-3 py-2 text-sm font-medium flex items-center transition-colors"
                >
                  {t.expertise}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {activeDropdown === 'expertise' && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-black/95 backdrop-blur-sm border border-gray-800 rounded-lg shadow-xl">
                    <Link href={`${prefix}/team`} className="block px-4 py-3 text-sm text-white hover:bg-gray-800 hover:text-yellow-400">
                      {t.team}
                    </Link>
                    <Link href={`${prefix}/case-studies`} className="block px-4 py-3 text-sm text-white hover:bg-gray-800 hover:text-yellow-400">
                      {t.caseStudies}
                    </Link>
                    <Link href={`${prefix}/positioning`} className="block px-4 py-3 text-sm text-white hover:bg-gray-800 hover:text-yellow-400">
                      {t.positioning}
                    </Link>
                    <Link href={`${prefix}/references`} className="block px-4 py-3 text-sm text-white hover:bg-gray-800 hover:text-yellow-400">
                      {t.references}
                    </Link>
                    <Link href={`${prefix}/#testimonials`} className="block px-4 py-3 text-sm text-white hover:bg-gray-800 hover:text-yellow-400">
                      {t.testimonials}
                    </Link>
                  </div>
                )}
              </div>
              <Link href={`${prefix}/reseau`} className={`px-3 py-2 text-sm font-medium transition-colors ${pathname === `${prefix}/reseau` ? 'text-yellow-400' : 'text-white hover:text-yellow-400'}`}>
                {t.network}
              </Link>
              <Link href={`${prefix}/references`} className={`px-3 py-2 text-sm font-medium transition-colors ${pathname === `${prefix}/references` ? 'text-yellow-400' : 'text-white hover:text-yellow-400'}`}>
                {t.references}
              </Link>
              <Link href={`${prefix}/blog`} className={`px-3 py-2 text-sm font-medium transition-colors ${pathname === `${prefix}/blog` ? 'text-yellow-400' : 'text-white hover:text-yellow-400'}`}>
                {t.blog}
              </Link>
              <Link href={`${prefix}/medias`} className={`px-3 py-2 text-sm font-medium transition-colors ${pathname === `${prefix}/medias` ? 'text-yellow-400' : 'text-white hover:text-yellow-400'}`}>
                {t.media}
              </Link>
              <div className="flex items-center gap-2">
                {locales.map((loc) => (
                  <Link
                    key={loc}
                    href={pathname ? `/${loc}${pathname.replace(new RegExp(`^/${locale}`), '') || '/'}` : `/${loc}`}
                    className={`px-2 py-1 text-sm font-medium transition-colors ${locale === loc ? 'text-yellow-400' : 'text-gray-400 hover:text-white'}`}
                  >
                    {loc.toUpperCase()}
                  </Link>
                ))}
              </div>
              <Link href={`${prefix}/contact`} className="bg-yellow-400 text-black hover:bg-yellow-500 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                {t.contact}
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-yellow-400 p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/95 backdrop-blur-sm">
              <Link href={prefix} className="text-white hover:text-yellow-400 block px-3 py-2 text-base font-medium">
                {t.home}
              </Link>
              <Link href={`${prefix}/services`} className="text-white hover:text-yellow-400 block px-3 py-2 text-base font-medium">
                {t.offers}
              </Link>
              <Link href={`${prefix}/private-equity`} className="text-white hover:text-yellow-400 block px-3 py-2 text-base font-medium">
                {t.privateEquity}
              </Link>
              <Link href={`${prefix}/family-office`} className="text-white hover:text-yellow-400 block px-3 py-2 text-base font-medium">
                {t.familyOffice}
              </Link>
              <Link href={`${prefix}/group-holding`} className="text-white hover:text-yellow-400 block px-3 py-2 text-base font-medium">
                {t.groupHolding}
              </Link>
              <Link href={`${prefix}/reseau`} className="text-white hover:text-yellow-400 block px-3 py-2 text-base font-medium">
                {t.network}
              </Link>
              <Link href={`${prefix}/references`} className="text-white hover:text-yellow-400 block px-3 py-2 text-base font-medium">
                {t.references}
              </Link>
              <Link href={`${prefix}/case-studies`} className="text-white hover:text-yellow-400 block px-3 py-2 text-base font-medium">
                {t.caseStudies}
              </Link>
              <Link href={`${prefix}/positioning`} className="text-white hover:text-yellow-400 block px-3 py-2 text-base font-medium">
                {t.positioning}
              </Link>
              <Link href={`${prefix}/blog`} className="text-white hover:text-yellow-400 block px-3 py-2 text-base font-medium">
                {t.blog}
              </Link>
              <Link href={`${prefix}/medias`} className="text-white hover:text-yellow-400 block px-3 py-2 text-base font-medium">
                {t.media}
              </Link>
              <Link href={`${prefix}/contact`} className="bg-yellow-400 text-black hover:bg-yellow-500 block px-3 py-2 rounded-lg text-base font-medium">
                {t.contact}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;