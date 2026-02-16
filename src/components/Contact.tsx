'use client';

import React, { useState } from 'react';
import { LocaleLink } from './LocaleLink';
import { useLocale } from '@/context/LocaleContext';
import { Shield, Calendar, Phone, Mail } from 'lucide-react';

const CONTACT_EMAIL = 'contact@ghezaliadvisory.com';
const PHONE_FR = '+33 1 87 66 06 01';
const PHONE_FR_HREF = 'tel:+33187660601';
const WHATSAPP = '+33 6 95 33 74 43';
const WHATSAPP_HREF = 'https://wa.me/33695337443';
const RDV_URL = 'https://bookings.business-evasion.com/#/session-prive';

const OBJECTIVE_LABELS: Record<string, string> = {
  valorisation: 'Valuation increase',
  levee: 'Fundraising preparation',
  cession: 'Sale preparation',
  croissance: 'Growth acceleration',
  transformation: 'Digital transformation',
  autre: 'Other strategic project',
};

const Contact = () => {
  const locale = useLocale();
  const rdvDisclaimer = locale === 'fr' ? '(sous condition de validation)' : '(subject to validation)';
  const [formData, setFormData] = useState({
    nom: '',
    societe: '',
    ca: '',
    objectif: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `[Contact] ${formData.nom} - ${formData.societe}`;
    const objectiveLabel = formData.objectif ? OBJECTIVE_LABELS[formData.objectif] ?? formData.objectif : '';
    const body = [
      `Name: ${formData.nom}`,
      `Company: ${formData.societe}`,
      `Annual revenue: ${formData.ca}`,
      `Primary objective: ${objectiveLabel}`,
      formData.message ? `\nMessage:\n${formData.message}` : ''
    ].filter(Boolean).join('\n');
    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-black mb-6">
            <span className="text-yellow-600">Contact us</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We select our partners with the utmost care. Every request is reviewed personally; only qualified applications are accepted.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <div className="flex items-center mb-6">
                <Shield className="h-6 w-6 text-yellow-600 mr-3" />
                <h3 className="text-2xl font-serif text-black">Premium Selection Process</h3>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-nom" className="block text-sm font-semibold text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      id="contact-nom"
                      type="text"
                      name="nom"
                      value={formData.nom}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      required
                      aria-required="true"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-societe" className="block text-sm font-semibold text-gray-700 mb-2">
                      Company *
                    </label>
                    <input
                      id="contact-societe"
                      type="text"
                      name="societe"
                      value={formData.societe}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      required
                      aria-required="true"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-ca" className="block text-sm font-semibold text-gray-700 mb-2">
                    Annual revenue *
                  </label>
                  <select
                    id="contact-ca"
                    name="ca"
                    value={formData.ca}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    required
                    aria-required="true"
                  >
                    <option value="">Select your range</option>
                    <option value="50-100M">50M€ - 100M€</option>
                    <option value="100-250M">100M€ - 250M€</option>
                    <option value="250-500M">250M€ - 500M€</option>
                    <option value="500M+">500M€+</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-objectif" className="block text-sm font-semibold text-gray-700 mb-2">
                    Primary objective *
                  </label>
                  <select
                    id="contact-objectif"
                    name="objectif"
                    value={formData.objectif}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    required
                    aria-required="true"
                  >
                    <option value="">Select your objective</option>
                    <option value="valorisation">Valuation increase</option>
                    <option value="levee">Fundraising preparation</option>
                    <option value="cession">Sale preparation</option>
                    <option value="croissance">Growth acceleration</option>
                    <option value="transformation">Digital transformation</option>
                    <option value="autre">Other strategic project</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Confidential message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    placeholder="Briefly describe your situation and expectations..."
                    aria-describedby="contact-message-desc"
                  />
                  <span id="contact-message-desc" className="sr-only">Optional. Briefly describe your situation and expectations.</span>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    <Shield className="h-4 w-4 inline mr-2 text-yellow-600" aria-hidden />
                    All information shared is strictly confidential and protected by a non-disclosure agreement.
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white hover:bg-gray-800 py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300"
                >
                  {locale === 'fr' ? 'Soumettre ma candidature' : 'Submit my application'}
                </button>
              </form>

              <p className="text-center text-sm text-gray-500 mt-6">
                Response within 48h for qualified applications
              </p>
            </div>
          </div>

          {/* Contact Info & CTAs */}
          <div className="space-y-8">
            {/* Direct Contact */}
            <div className="bg-black p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-serif mb-6">Direct contact</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-yellow-400 mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Direct line (France)</p>
                    <a href={PHONE_FR_HREF} className="text-gray-300 hover:text-yellow-400 transition-colors">{PHONE_FR}</a>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-yellow-400 mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">WhatsApp (Paris, France)</p>
                    <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-400 transition-colors">{WHATSAPP}</a>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-yellow-400 mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Confidential email</p>
                    <a href={`mailto:${CONTACT_EMAIL}`} className="text-gray-300 hover:text-yellow-400 transition-colors">{CONTACT_EMAIL}</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Calendar Booking */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <Calendar className="h-6 w-6 text-yellow-600 mr-3" />
                <h3 className="text-xl font-serif text-black">Confidential discussion</h3>
              </div>
              <p className="text-gray-600 mb-2">
                Book a 30-minute confidential call directly with our team.
              </p>
              <p className="text-sm text-gray-500 mb-6">{rdvDisclaimer}</p>
              <a
                href={RDV_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-yellow-600 text-white hover:bg-yellow-700 py-3 px-6 rounded-lg font-semibold transition-all duration-300 text-center"
              >
                {locale === 'fr' ? 'Réserver un créneau' : 'Book a slot'}
              </a>
            </div>

            {/* Échange */}
            <div className="bg-gradient-to-r from-gray-900 to-black p-8 rounded-2xl text-white">
              <h3 className="text-xl font-serif mb-4">Get in touch</h3>
              <p className="text-gray-300 mb-6">
                Let us discuss your mandate and objectives. Response within 24h.
              </p>
              <LocaleLink href="/contact" className="block w-full border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black py-3 px-6 rounded-lg font-semibold transition-all duration-300 text-center">
                Get in touch
              </LocaleLink>
            </div>

            {/* Trust Indicators */}
            <div className="bg-gray-100 p-6 rounded-lg">
              <h4 className="font-semibold text-black mb-3">Why trust us?</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 20 years of mid-market advisory experience</li>
                <li>• +500M€ value created</li>
                <li>• Absolute confidentiality guaranteed</li>
                <li>• Contractual, measurable results</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

