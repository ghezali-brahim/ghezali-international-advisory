import React from 'react';
import { FileText, Scale, Building, Phone, Mail } from 'lucide-react';

const Legal = () => {
  return (
    <div className="pt-16">

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Scale className="h-16 w-16 text-yellow-400 mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">
            Mentions <span className="text-yellow-400">Légales</span>
          </h1>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Informations légales et réglementaires concernant GHEZALI BUSINESS MASTERY. 
            Transparence et conformité selon les standards internationaux.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              <strong>Dernière mise à jour :</strong> 3 octobre 2024
            </p>

            <h2 className="text-2xl font-serif text-black mb-6">1. Identification de l'éditeur</h2>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <div className="flex items-start">
                <Building className="h-6 w-6 text-yellow-600 mr-3 mt-1" />
                <div>
                  <p className="text-gray-700 mb-2">
                    <strong>GHEZALI BUSINESS MASTERY</strong><br />
                    Société par actions simplifiée (SAS)
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Siège social :</strong><br />
                    Tour Majunga<br />
                    6 Place de la Pyramide<br />
                    92400 Courbevoie<br />
                    France
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>SIRET :</strong> XXX XXX XXX XXXXX<br />
                    <strong>RCS :</strong> Nanterre B XXX XXX XXX<br />
                    <strong>Capital social :</strong> 50 000 €
                  </p>
                  <p className="text-gray-700">
                    <strong>TVA intracommunautaire :</strong> FR XX XXX XXX XXX
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-serif text-black mb-6">2. Directeur de la publication</h2>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <p className="text-gray-700">
                <strong>Directeur de la publication :</strong> Ghezali<br />
                <strong>Fonction :</strong> Président<br />
                <strong>Email :</strong> contact@ghezali-business.com
              </p>
            </div>

            <h2 className="text-2xl font-serif text-black mb-6">3. Hébergement</h2>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <p className="text-gray-700 mb-2">
                <strong>Hébergeur :</strong> [Nom de l'hébergeur]<br />
                <strong>Adresse :</strong> [Adresse de l'hébergeur]<br />
                <strong>Téléphone :</strong> [Téléphone de l'hébergeur]
              </p>
            </div>

            <h2 className="text-2xl font-serif text-black mb-6">4. Activité de la société</h2>
            <div className="bg-yellow-50 p-6 rounded-lg mb-8">
              <div className="flex items-center mb-4">
                <FileText className="h-6 w-6 text-yellow-600 mr-3" />
                <h3 className="text-lg font-semibold text-black">Cabinet de conseil stratégique</h3>
              </div>
              <p className="text-gray-700 mb-4">
                GHEZALI BUSINESS MASTERY est spécialisé dans :
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Conseil en stratégie d'entreprise</li>
                <li>Accompagnement en transformation organisationnelle</li>
                <li>Conseil en fusions-acquisitions</li>
                <li>Executive Advisory</li>
                <li>Corporate Acceleration</li>
                <li>Formation professionnelle</li>
              </ul>
            </div>

            <h2 className="text-2xl font-serif text-black mb-6">5. Propriété intellectuelle</h2>
            <p className="text-gray-700 mb-4">
              L'ensemble du contenu de ce site (textes, images, vidéos, logos, etc.) est protégé par le droit d'auteur 
              et appartient à GHEZALI BUSINESS MASTERY ou à ses partenaires.
            </p>
            <p className="text-gray-700 mb-6">
              Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments 
              du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable.
            </p>

            <h2 className="text-2xl font-serif text-black mb-6">6. Responsabilité</h2>
            <p className="text-gray-700 mb-4">
              Les informations contenues sur ce site sont aussi précises que possible et le site remis à jour 
              à différentes périodes de l'année, mais peut toutefois contenir des inexactitudes ou des omissions.
            </p>
            <p className="text-gray-700 mb-6">
              Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, merci de bien vouloir 
              le signaler par email à contact@ghezali-business.com, en décrivant le problème de la manière la plus précise possible.
            </p>

            <h2 className="text-2xl font-serif text-black mb-6">7. Liens hypertextes</h2>
            <p className="text-gray-700 mb-4">
              Des liens hypertextes peuvent être présents sur le site. L'utilisateur est informé qu'en cliquant 
              sur ces liens, il sortira du site ghezali-business.com. Ce dernier n'a pas de contrôle sur les pages 
              web sur lesquelles aboutissent ces liens et ne saurait en aucun cas être responsable de leur contenu.
            </p>

            <h2 className="text-2xl font-serif text-black mb-6">8. Collecte de données</h2>
            <p className="text-gray-700 mb-6">
              Les données personnelles collectées sur ce site font l'objet d'un traitement conforme au RGPD. 
              Pour plus d'informations, consultez notre <a href="/privacy" className="text-yellow-600 hover:text-yellow-700">Politique de Confidentialité</a>.
            </p>

            <h2 className="text-2xl font-serif text-black mb-6">9. Droit applicable</h2>
            <p className="text-gray-700 mb-6">
              Tout litige en relation avec l'utilisation du site ghezali-business.com est soumis au droit français. 
              Il est fait attribution exclusive de juridiction aux tribunaux compétents de Paris.
            </p>

            <h2 className="text-2xl font-serif text-black mb-6">10. Contact</h2>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-yellow-600 mr-3 mt-1" />
                <div>
                  <p className="text-gray-700 mb-2">
                    Pour toute question relative aux mentions légales :
                  </p>
                  <p className="text-gray-700">
                    <strong>Email :</strong> legal@ghezali-business.com<br />
                    <strong>Téléphone :</strong> +33 (0)1 XX XX XX XX<br />
                    <strong>Adresse :</strong> Tour Majunga, 6 Place de la Pyramide, 92400 Courbevoie
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-serif text-black mb-6">11. Modifications</h2>
            <p className="text-gray-700 mb-8">
              GHEZALI BUSINESS MASTERY se réserve le droit de modifier les présentes mentions légales à tout moment. 
              Les modifications entrent en vigueur dès leur publication sur le site.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
            Besoin d'informations complémentaires ?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Notre équipe juridique est disponible pour répondre à toutes vos questions 
            concernant nos mentions légales et notre activité.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-yellow-400 text-black hover:bg-yellow-500 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
              Nous contacter
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
              Télécharger nos CGV
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Legal;
