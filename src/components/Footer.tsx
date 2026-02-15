import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="text-2xl font-serif mb-4">
              <span className="text-yellow-400">G</span>HEZALI
              <div className="text-sm text-yellow-400 font-sans tracking-widest">
                BUSINESS MASTERY
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              Cabinet premium d'accélération stratégique pour dirigeants ambitieux. 
              Confidentialité absolue, résultats mesurables, impact immédiat.
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
            <h3 className="text-lg font-semibold mb-6">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/#accueil" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Nos Offres Premium
                </Link>
              </li>
              <li>
                <Link href="/#cercle-prive" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Cercle Privé
                </Link>
              </li>
              <li>
                <Link href="/#references" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Références
                </Link>
              </li>
              <li>
                <Link href="/#medias" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Médias
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
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
              © 2024 Ghezali Business Mastery. Tous droits réservés.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/legal" className="text-gray-400 hover:text-yellow-400 transition-colors">
                Mentions légales
              </Link>
              <Link href="/privacy" className="text-gray-400 hover:text-yellow-400 transition-colors">
                Politique de confidentialité
              </Link>
              <Link href="/blog" className="text-gray-400 hover:text-yellow-400 transition-colors">
                Blog
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