import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  // Fermer menu mobile et dropdown à chaque changement de page
  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

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
                BUSINESS MASTERY
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to="/" className={`px-3 py-2 text-sm font-medium transition-colors ${location.pathname === '/' ? 'text-yellow-400' : 'text-white hover:text-yellow-400'}`}>
                Accueil
              </Link>
              <div className="relative">
                <button
                  onClick={() => handleDropdown('services')}
                  className={`px-3 py-2 text-sm font-medium flex items-center transition-colors ${location.pathname === '/services' ? 'text-yellow-400' : 'text-white hover:text-yellow-400'}`}
                >
                  Nos offres
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {activeDropdown === 'services' && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-black/95 backdrop-blur-sm border border-gray-800 rounded-lg shadow-xl">
                    <Link to="/services#strategic-deals" className="block px-4 py-3 text-sm text-white hover:bg-gray-800 hover:text-yellow-400">
                      Strategic Deals & Equity
                    </Link>
                    <Link to="/services#executive-advisory" className="block px-4 py-3 text-sm text-white hover:bg-gray-800 hover:text-yellow-400">
                      Executive Advisory
                    </Link>
                    <Link to="/services#corporate-acceleration" className="block px-4 py-3 text-sm text-white hover:bg-gray-800 hover:text-yellow-400">
                      Corporate Acceleration
                    </Link>
                  </div>
                )}
              </div>
              <div className="relative">
                <button
                  onClick={() => handleDropdown('expertise')}
                  className="text-white hover:text-yellow-400 px-3 py-2 text-sm font-medium flex items-center transition-colors"
                >
                  Expertise
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {activeDropdown === 'expertise' && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-black/95 backdrop-blur-sm border border-gray-800 rounded-lg shadow-xl">
                    <Link to="/team" className="block px-4 py-3 text-sm text-white hover:bg-gray-800 hover:text-yellow-400">
                      Notre Équipe
                    </Link>
                    <Link to="/references" className="block px-4 py-3 text-sm text-white hover:bg-gray-800 hover:text-yellow-400">
                      Études de Cas
                    </Link>
                    <Link to="/#testimonials" className="block px-4 py-3 text-sm text-white hover:bg-gray-800 hover:text-yellow-400">
                      Témoignages
                    </Link>
                  </div>
                )}
              </div>
              <Link to="/cercle-prive" className={`px-3 py-2 text-sm font-medium transition-colors ${location.pathname === '/cercle-prive' ? 'text-yellow-400' : 'text-white hover:text-yellow-400'}`}>
                Cercle Privé
              </Link>
              <Link to="/references" className={`px-3 py-2 text-sm font-medium transition-colors ${location.pathname === '/references' ? 'text-yellow-400' : 'text-white hover:text-yellow-400'}`}>
                Références
              </Link>
              <Link to="/blog" className={`px-3 py-2 text-sm font-medium transition-colors ${location.pathname === '/blog' ? 'text-yellow-400' : 'text-white hover:text-yellow-400'}`}>
                Blog
              </Link>
              <Link to="/medias" className={`px-3 py-2 text-sm font-medium transition-colors ${location.pathname === '/medias' ? 'text-yellow-400' : 'text-white hover:text-yellow-400'}`}>
                Médias
              </Link>
              <Link to="/contact" className="bg-yellow-400 text-black hover:bg-yellow-500 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Rejoindre
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
              <Link to="/" className="text-white hover:text-yellow-400 block px-3 py-2 text-base font-medium">
                Accueil
              </Link>
              <Link to="/services" className="text-white hover:text-yellow-400 block px-3 py-2 text-base font-medium">
                Nos Offres Premium
              </Link>
              <Link to="/cercle-prive" className="text-white hover:text-yellow-400 block px-3 py-2 text-base font-medium">
                Cercle Privé
              </Link>
              <Link to="/references" className="text-white hover:text-yellow-400 block px-3 py-2 text-base font-medium">
                Références
              </Link>
              <Link to="/blog" className="text-white hover:text-yellow-400 block px-3 py-2 text-base font-medium">
                Blog
              </Link>
              <Link to="/medias" className="text-white hover:text-yellow-400 block px-3 py-2 text-base font-medium">
                Médias
              </Link>
              <Link to="/contact" className="bg-yellow-400 text-black hover:bg-yellow-500 block px-3 py-2 rounded-lg text-base font-medium">
                Rejoindre
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;