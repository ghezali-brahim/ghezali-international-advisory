'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLocale } from '@/context/LocaleContext';
import { locales, getPathWithoutLocale, localeLabels } from '@/i18n/config';
import FlagIcon from '@/components/FlagIcon';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const pathname = usePathname();
  const locale = useLocale();
  const { t } = useTranslation('default');
  const prefix = `/${locale}`;
  const pathWithoutLocale = getPathWithoutLocale(pathname ?? '/');
  const langDropdownRef = useRef<HTMLDivElement>(null);

  // Fermer menu mobile et dropdown à chaque changement de page
  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
    setLangDropdownOpen(false);
  }, [pathname]);

  // Fermer le dropdown langue au clic extérieur
  useEffect(() => {
    if (!langDropdownOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(e.target as Node)) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [langDropdownOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo */}
          <div className="flex items-center min-h-[44px]">
            <div className="text-lg font-serif text-white md:text-2xl">
              <span className="text-yellow-400">G</span>HEZALI
              <div className="text-xs text-yellow-400 font-sans tracking-widest md:text-sm">
                INTERNATIONAL ADVISORY
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href={prefix} className={`px-3 py-2 text-sm font-medium transition-colors ${pathname === prefix || pathname === `${prefix}/` ? 'text-yellow-400' : 'text-white hover:text-yellow-400'}`}>
                {t('nav.home')}
              </Link>
              <div className="relative">
                <button
                  onClick={() => handleDropdown('services')}
                  className={`px-3 py-2 text-sm font-medium flex items-center transition-colors ${pathname === `${prefix}/services` ? 'text-yellow-400' : 'text-white hover:text-yellow-400'}`}
                >
                  {t('nav.offers')}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {activeDropdown === 'services' && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-black/95 backdrop-blur-sm border border-gray-800 rounded-lg shadow-xl">
                    <Link href={`${prefix}/services#strategic-deals`} className="block px-4 py-3 text-sm text-white hover:bg-gray-800 hover:text-yellow-400">
                      {t('nav.strategicDeals')}
                    </Link>
                    <Link href={`${prefix}/services#executive-advisory`} className="block px-4 py-3 text-sm text-white hover:bg-gray-800 hover:text-yellow-400">
                      {t('nav.executiveAdvisory')}
                    </Link>
                    <Link href={`${prefix}/services#corporate-acceleration`} className="block px-4 py-3 text-sm text-white hover:bg-gray-800 hover:text-yellow-400">
                      {t('nav.corporateAcceleration')}
                    </Link>
                    <Link href={`${prefix}/services#institutional-advisory`} className="block px-4 py-3 text-sm text-white hover:bg-gray-800 hover:text-yellow-400">
                      {t('nav.institutionalAdvisory')}
                    </Link>
                    <div className="border-t border-gray-700 my-2" />
                    <Link href={`${prefix}/private-equity`} className="block px-4 py-3 text-sm text-white hover:bg-gray-800 hover:text-yellow-400">
                      {t('nav.privateEquity')}
                    </Link>
                    <Link href={`${prefix}/family-office`} className="block px-4 py-3 text-sm text-white hover:bg-gray-800 hover:text-yellow-400">
                      {t('nav.familyOffice')}
                    </Link>
                    <Link href={`${prefix}/group-holding`} className="block px-4 py-3 text-sm text-white hover:bg-gray-800 hover:text-yellow-400">
                      {t('nav.groupHolding')}
                    </Link>
                    <Link href={`${prefix}/institutional`} className="block px-4 py-3 text-sm text-white hover:bg-gray-800 hover:text-yellow-400">
                      {t('nav.institutional')}
                    </Link>
                  </div>
                )}
              </div>
              <Link href={`${prefix}/expertise`} className={`px-3 py-2 text-sm font-medium transition-colors ${pathname === `${prefix}/expertise` ? 'text-yellow-400' : 'text-white hover:text-yellow-400'}`}>
                {t('nav.expertise')}
              </Link>
              <Link href={`${prefix}/reseau`} className={`px-3 py-2 text-sm font-medium transition-colors ${pathname === `${prefix}/reseau` ? 'text-yellow-400' : 'text-white hover:text-yellow-400'}`}>
                {t('nav.network')}
              </Link>
              <Link href={`${prefix}/blog`} className={`px-3 py-2 text-sm font-medium transition-colors ${pathname === `${prefix}/blog` ? 'text-yellow-400' : 'text-white hover:text-yellow-400'}`}>
                {t('nav.blog')}
              </Link>
              <Link href={`${prefix}/medias`} className={`px-3 py-2 text-sm font-medium transition-colors ${pathname === `${prefix}/medias` ? 'text-yellow-400' : 'text-white hover:text-yellow-400'}`}>
                {t('nav.media')}
              </Link>
              <div className="relative" ref={langDropdownRef}>
                <button
                  type="button"
                  onClick={() => setLangDropdownOpen((v) => !v)}
                  className="flex items-center gap-1.5 px-2 py-1.5 text-lg rounded border border-gray-700 hover:border-gray-500 transition-colors min-w-[8rem] justify-between"
                  aria-label="Changer de langue"
                  aria-expanded={langDropdownOpen}
                  aria-haspopup="true"
                >
                  <span className="flex items-center gap-1.5">
                    <FlagIcon locale={locale} className="shrink-0" />
                    <span className="text-sm font-medium text-white">{localeLabels[locale]}</span>
                  </span>
                  <ChevronDown className="h-4 w-4 text-gray-400 shrink-0" />
                </button>
                {langDropdownOpen && (
                  <div className="absolute top-full right-0 mt-2 w-48 bg-black/95 backdrop-blur-sm border border-gray-800 rounded-lg shadow-xl py-2 z-50">
                    {locales.map((loc) => (
                      <Link
                        key={loc}
                        href={`/${loc}${pathWithoutLocale || '/'}`}
                        className={`flex items-center gap-2 px-4 py-2 text-sm transition-colors ${locale === loc ? 'text-yellow-400 bg-gray-800/50' : 'text-white hover:bg-gray-800 hover:text-yellow-400'}`}
                        onClick={() => setLangDropdownOpen(false)}
                      >
                        <FlagIcon locale={loc} className="shrink-0" />
                        <span>{localeLabels[loc]}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link href={`${prefix}/contact`} className="bg-yellow-400 text-black hover:bg-yellow-500 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                {t('nav.contact')}
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-yellow-400 p-3 min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-0 bg-black/95 backdrop-blur-sm max-h-[70vh] overflow-y-auto">
              <Link href={prefix} className="text-white hover:text-yellow-400 block px-3 py-3 text-base font-medium min-h-[44px] flex items-center">
                {t('nav.home')}
              </Link>
              <Link href={`${prefix}/services`} className="text-white hover:text-yellow-400 block px-3 py-3 text-base font-medium min-h-[44px] flex items-center">
                {t('nav.offers')}
              </Link>
              <Link href={`${prefix}/private-equity`} className="text-white hover:text-yellow-400 block px-3 py-3 text-base font-medium min-h-[44px] flex items-center">
                {t('nav.privateEquity')}
              </Link>
              <Link href={`${prefix}/family-office`} className="text-white hover:text-yellow-400 block px-3 py-3 text-base font-medium min-h-[44px] flex items-center">
                {t('nav.familyOffice')}
              </Link>
              <Link href={`${prefix}/group-holding`} className="text-white hover:text-yellow-400 block px-3 py-3 text-base font-medium min-h-[44px] flex items-center">
                {t('nav.groupHolding')}
              </Link>
              <Link href={`${prefix}/reseau`} className="text-white hover:text-yellow-400 block px-3 py-3 text-base font-medium min-h-[44px] flex items-center">
                {t('nav.network')}
              </Link>
              <Link href={`${prefix}/expertise`} className="text-white hover:text-yellow-400 block px-3 py-3 text-base font-medium min-h-[44px] flex items-center">
                {t('nav.expertise')}
              </Link>
              <Link href={`${prefix}/positioning`} className="text-white hover:text-yellow-400 block px-3 py-3 text-base font-medium min-h-[44px] flex items-center">
                {t('nav.positioning')}
              </Link>
              <Link href={`${prefix}/blog`} className="text-white hover:text-yellow-400 block px-3 py-3 text-base font-medium min-h-[44px] flex items-center">
                {t('nav.blog')}
              </Link>
              <Link href={`${prefix}/medias`} className="text-white hover:text-yellow-400 block px-3 py-3 text-base font-medium min-h-[44px] flex items-center">
                {t('nav.media')}
              </Link>
              <div className="px-3 py-3 border-t border-gray-800 mt-2 pt-3">
                <p className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                  <FlagIcon locale={locale} />
                  <span>{localeLabels[locale]}</span>
                </p>
                <div className="flex flex-wrap gap-2">
                  {locales.map((loc) => (
                    <Link
                      key={loc}
                      href={`/${loc}${pathWithoutLocale || '/'}`}
                      className={`inline-flex items-center justify-center min-h-[44px] min-w-[44px] rounded-lg transition-colors ${locale === loc ? 'bg-yellow-400/20 ring-1 ring-yellow-400/50' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`}
                      title={localeLabels[loc]}
                    >
                      <FlagIcon locale={loc} />
                    </Link>
                  ))}
                </div>
              </div>
              <Link href={`${prefix}/contact`} className="bg-yellow-400 text-black hover:bg-yellow-500 block px-3 py-3 rounded-lg text-base font-medium mt-2 min-h-[44px] flex items-center justify-center">
                {t('nav.contact')}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;