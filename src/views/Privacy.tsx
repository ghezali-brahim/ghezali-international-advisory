import { Shield, Eye, Lock, Database, Mail } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="pt-16">

      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="h-12 w-12 sm:h-16 sm:w-16 text-yellow-400 mx-auto mb-4 sm:mb-6" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4 sm:mb-6">
            Politique de <span className="text-yellow-400">Confidentialité</span>
          </h1>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Vos données personnelles sont protégées selon les plus hauts standards de sécurité. 
            Confidentialité absolue garantie par notre certification ISO 27001.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-10 sm:py-14 lg:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              <strong>Dernière mise à jour :</strong> 3 octobre 2024
            </p>

            <h2 className="text-2xl font-serif text-black mb-6">1. Introduction</h2>
            <p className="text-gray-700 mb-6">
              GHEZALI INTERNATIONAL ADVISORY s'engage à protéger la confidentialité et la sécurité de vos données personnelles. 
              Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations 
              conformément au Règlement Général sur la Protection des Données (RGPD).
            </p>

            <h2 className="text-2xl font-serif text-black mb-6">2. Responsable du traitement</h2>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <p className="text-gray-700 mb-4">
                <strong>GHEZALI INTERNATIONAL ADVISORY</strong><br />
                Tour Majunga<br />
                6 Place de la Pyramide<br />
                92400 Courbevoie<br />
                France
              </p>
              <p className="text-gray-700">
                <strong>Email :</strong> privacy@ghezali-business.com<br />
                <strong>Téléphone :</strong> +33 (0)1 XX XX XX XX
              </p>
            </div>

            <h2 className="text-2xl font-serif text-black mb-6">3. Données collectées</h2>
            <p className="text-gray-700 mb-4">Nous collectons les données suivantes :</p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li><strong>Données d'identification :</strong> Nom, prénom, fonction, société</li>
              <li><strong>Données de contact :</strong> Adresse email, numéro de téléphone</li>
              <li><strong>Données professionnelles :</strong> Secteur d'activité, chiffre d'affaires, objectifs</li>
              <li><strong>Données de navigation :</strong> Cookies, adresse IP, pages visitées</li>
            </ul>

            <h2 className="text-2xl font-serif text-black mb-6">4. Finalités du traitement</h2>
            <p className="text-gray-700 mb-4">Vos données sont utilisées pour :</p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Répondre à vos demandes de contact et de consultation</li>
              <li>Vous envoyer nos newsletters et communications commerciales</li>
              <li>Améliorer nos services et notre site web</li>
              <li>Respecter nos obligations légales et réglementaires</li>
            </ul>

            <h2 className="text-2xl font-serif text-black mb-6">5. Base légale</h2>
            <p className="text-gray-700 mb-6">
              Le traitement de vos données repose sur votre consentement explicite, l'exécution d'un contrat 
              ou nos intérêts légitimes pour développer notre activité de conseil stratégique.
            </p>

            <h2 className="text-2xl font-serif text-black mb-6">6. Partage des données</h2>
            <p className="text-gray-700 mb-6">
              Nous ne vendons jamais vos données personnelles. Elles peuvent être partagées uniquement avec :
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Nos équipes internes (sous accord de confidentialité)</li>
              <li>Nos partenaires de confiance (avec votre accord)</li>
              <li>Autorités compétentes (si requis par la loi)</li>
            </ul>

            <h2 className="text-2xl font-serif text-black mb-6">7. Sécurité des données</h2>
            <div className="bg-yellow-50 p-6 rounded-lg mb-8">
              <div className="flex items-center mb-4">
                <Lock className="h-6 w-6 text-yellow-600 mr-3" />
                <h3 className="text-lg font-semibold text-black">Certification ISO 27001</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Nous appliquons les plus hauts standards de sécurité :
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Chiffrement des données sensibles</li>
                <li>Accès restreint aux informations</li>
                <li>Audits de sécurité réguliers</li>
                <li>Formation du personnel à la protection des données</li>
                <li>Sauvegardes sécurisées et redondantes</li>
              </ul>
            </div>

            <h2 className="text-2xl font-serif text-black mb-6">8. Durée de conservation</h2>
            <p className="text-gray-700 mb-6">
              Vos données sont conservées pendant la durée nécessaire aux finalités pour lesquelles elles ont été collectées :
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li><strong>Prospects :</strong> 3 ans maximum</li>
              <li><strong>Clients :</strong> Durée de la relation + 5 ans</li>
              <li><strong>Newsletter :</strong> Jusqu'à désabonnement</li>
              <li><strong>Données de navigation :</strong> 13 mois maximum</li>
            </ul>

            <h2 className="text-2xl font-serif text-black mb-6">9. Vos droits</h2>
            <p className="text-gray-700 mb-4">Conformément au RGPD, vous disposez des droits suivants :</p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <Eye className="h-6 w-6 text-yellow-600 mb-2" />
                <h4 className="font-semibold text-black mb-2">Droit d'accès</h4>
                <p className="text-gray-600 text-sm">Consulter vos données personnelles</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <Database className="h-6 w-6 text-yellow-600 mb-2" />
                <h4 className="font-semibold text-black mb-2">Droit de rectification</h4>
                <p className="text-gray-600 text-sm">Corriger des informations inexactes</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <Lock className="h-6 w-6 text-yellow-600 mb-2" />
                <h4 className="font-semibold text-black mb-2">Droit à l'effacement</h4>
                <p className="text-gray-600 text-sm">Supprimer vos données</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <Shield className="h-6 w-6 text-yellow-600 mb-2" />
                <h4 className="font-semibold text-black mb-2">Droit d'opposition</h4>
                <p className="text-gray-600 text-sm">Vous opposer au traitement</p>
              </div>
            </div>

            <h2 className="text-2xl font-serif text-black mb-6">10. Cookies</h2>
            <p className="text-gray-700 mb-6">
              Notre site utilise des cookies pour améliorer votre expérience de navigation. 
              Vous pouvez accepter ou refuser les cookies non essentiels via notre bannière de consentement.
            </p>

            <h2 className="text-2xl font-serif text-black mb-6">11. Contact</h2>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-yellow-600 mr-3 mt-1" />
                <div>
                  <p className="text-gray-700 mb-2">
                    Pour toute question relative à cette politique de confidentialité ou pour exercer vos droits :
                  </p>
                  <p className="text-gray-700">
                    <strong>Email :</strong> privacy@ghezali-business.com<br />
                    <strong>Réponse garantie :</strong> Sous 30 jours
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-serif text-black mb-6">12. Modifications</h2>
            <p className="text-gray-700 mb-8">
              Cette politique peut être modifiée pour refléter les évolutions de nos pratiques ou de la réglementation. 
              Toute modification sera publiée sur cette page avec une nouvelle date de mise à jour.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
            Une question sur la confidentialité ?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Notre équipe est disponible pour répondre à toutes vos questions 
            sur la protection de vos données personnelles.
          </p>
          <button className="bg-yellow-400 text-black hover:bg-yellow-500 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
            Nous contacter
          </button>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
