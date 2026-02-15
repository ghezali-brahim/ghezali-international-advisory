'use client';

import React, { useState } from 'react';
import { Shield, Calendar, Phone, Mail } from 'lucide-react';

const Contact = () => {
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
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-black mb-6">
            Rejoindre <span className="text-yellow-600">l'Excellence</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nous sélectionnons nos partenaires avec la plus grande attention. 
            Chaque demande est examinée personnellement, seules les candidatures qualifiées sont retenues.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <div className="flex items-center mb-6">
                <Shield className="h-6 w-6 text-yellow-600 mr-3" />
                <h3 className="text-2xl font-serif text-black">Processus de Sélection Premium</h3>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nom & Prénom *
                    </label>
                    <input
                      type="text"
                      name="nom"
                      value={formData.nom}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Société *
                    </label>
                    <input
                      type="text"
                      name="societe"
                      value={formData.societe}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Chiffre d'affaires annuel *
                  </label>
                  <select
                    name="ca"
                    value={formData.ca}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    required
                  >
                    <option value="">Sélectionnez votre tranche</option>
                    <option value="50-100M">50M€ - 100M€</option>
                    <option value="100-250M">100M€ - 250M€</option>
                    <option value="250-500M">250M€ - 500M€</option>
                    <option value="500M+">500M€+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Objectif principal *
                  </label>
                  <select
                    name="objectif"
                    value={formData.objectif}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    required
                  >
                    <option value="">Sélectionnez votre objectif</option>
                    <option value="valorisation">Augmentation de valorisation</option>
                    <option value="levee">Préparation levée de fonds</option>
                    <option value="cession">Préparation à la cession</option>
                    <option value="croissance">Accélération de croissance</option>
                    <option value="transformation">Transformation digitale</option>
                    <option value="autre">Autre projet stratégique</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message confidentiel
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    placeholder="Décrivez brièvement votre situation et vos attentes..."
                  ></textarea>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    <Shield className="h-4 w-4 inline mr-2 text-yellow-600" />
                    Toutes les informations partagées sont strictement confidentielles et protégées par un accord de non-divulgation.
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white hover:bg-gray-800 py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300"
                >
                  Soumettre ma candidature
                </button>
              </form>

              <p className="text-center text-sm text-gray-500 mt-6">
                Réponse sous 48h pour les candidatures qualifiées
              </p>
            </div>
          </div>

          {/* Contact Info & CTAs */}
          <div className="space-y-8">
            {/* Direct Contact */}
            <div className="bg-black p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-serif mb-6">Contact Direct</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-yellow-400 mr-4" />
                  <div>
                    <p className="font-semibold">Ligne directe</p>
                    <p className="text-gray-300">+33 (0)1 XX XX XX XX</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-yellow-400 mr-4" />
                  <div>
                    <p className="font-semibold">Email confidentiel</p>
                    <p className="text-gray-300">contact@ghezali-business.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Calendar Booking */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <Calendar className="h-6 w-6 text-yellow-600 mr-3" />
                <h3 className="text-xl font-serif text-black">Échange Confidentiel</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Réservez directement un créneau pour un échange confidentiel de 30 minutes avec notre équipe.
              </p>
              <button className="w-full bg-yellow-600 text-white hover:bg-yellow-700 py-3 px-6 rounded-lg font-semibold transition-all duration-300">
                Réserver un créneau
              </button>
            </div>

            {/* Private Circle CTA */}
            <div className="bg-gradient-to-r from-gray-900 to-black p-8 rounded-2xl text-white">
              <h3 className="text-xl font-serif mb-4">Invitation au Cercle Privé</h3>
              <p className="text-gray-300 mb-6">
                Rejoignez notre réseau exclusif de dirigeants d'exception pour des événements privés et des opportunités uniques.
              </p>
              <button className="w-full border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black py-3 px-6 rounded-lg font-semibold transition-all duration-300">
                Demander une invitation
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="bg-gray-100 p-6 rounded-lg">
              <h4 className="font-semibold text-black mb-3">Pourquoi nous faire confiance ?</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 20 ans d'expérience en accompagnement ETI</li>
                <li>• +500M€ de valorisation générée</li>
                <li>• Confidentialité absolue garantie</li>
                <li>• Résultats contractuels et mesurables</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

