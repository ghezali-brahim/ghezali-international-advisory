import { LocaleLink } from './LocaleLink';
import { ArrowRight, Star, Play, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg"
          alt="Strategic advisory firm - Business leaders in meeting - Ghezali International Advisory"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-yellow-400/30 bg-black/30 backdrop-blur-sm mb-8">
            <span className="text-yellow-400 text-sm font-medium">
              Private Equity • Family Offices • Institutional Investors
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight">
            <span className="text-yellow-400 block">
              Strategic Advisory for Private Equity, Family Offices and Institutional Investors.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-2 max-w-3xl mx-auto leading-relaxed">
            Portfolio transformation. Board-level execution. Measurable value creation.
          </p>
          <p className="text-base md:text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            We selectively partner with investment firms and institutional investors.
          </p>

          {/* Video CTA */}
          <div className="mb-8">
            <button className="group inline-flex items-center px-6 py-3 bg-black/50 backdrop-blur-sm border border-yellow-400/30 rounded-full text-white hover:bg-yellow-400/10 transition-all duration-300">
              <Play className="h-5 w-5 mr-3 text-yellow-400" />
              <span>Discover our approach in 2 minutes</span>
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-12 mb-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400">+500M€</div>
              <div className="text-gray-400">Value created</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400">12</div>
              <div className="text-gray-400">Active mandates</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400">15</div>
              <div className="text-gray-400">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400">24h</div>
              <div className="text-gray-400">Response within 24h</div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <LocaleLink href="/contact" className="bg-yellow-400 text-black hover:bg-yellow-500 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-400/25 flex items-center">
              Contact us
              <ArrowRight className="ml-2 h-5 w-5" />
            </LocaleLink>
            <LocaleLink href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center">
              Get in touch
              <Star className="ml-2 h-5 w-5" />
            </LocaleLink>
          </div>

          {/* Trust Badge */}
          <div className="mt-8 inline-flex items-center px-4 py-2 bg-black/30 backdrop-blur-sm border border-gray-600 rounded-full">
            <Shield className="h-4 w-4 text-yellow-400 mr-2" />
            <span className="text-gray-300 text-sm">ISO 27001 confidentiality • Systematic NDA</span>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-gray-700">
            <p className="text-gray-400 text-sm mb-2">Strict confidentiality. Our clients do not cite us.</p>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 opacity-60">
              <span className="text-2xl font-bold text-white">FONDS PE</span>
              <span className="text-2xl font-bold text-white">FAMILY OFFICES</span>
              <span className="text-2xl font-bold text-white">HOLDINGS</span>
              <span className="text-2xl font-bold text-white">ETI</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;