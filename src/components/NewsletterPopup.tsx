'use client';

import React, { useState, useEffect } from 'react';
import { X, Mail, Gift, CheckCircle } from 'lucide-react';
import FormValidation, { fieldConfigs } from './FormValidation';
import { useAnalyticsTracking } from './Analytics';
import { FadeIn } from './Animations';

const NewsletterPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { trackFormSubmission } = useAnalyticsTracking();

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà vu le popup
    const hasSeenPopup = localStorage.getItem('newsletter-popup-seen');
    
    // Afficher le popup après 30 secondes si pas encore vu
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 30000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('newsletter-popup-seen', 'true');
  };

  const handleSubmit = async (formData: Record<string, string>) => {
    try {
      // Track form submission
      trackFormSubmission('newsletter_popup', formData);
      
      // Simulation d'envoi (remplacer par votre API)
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setIsSubscribed(true);
      
      // Fermer après 3 secondes
      setTimeout(() => {
        handleClose();
      }, 3000);
    } catch (error) {
      console.error('Error submitting newsletter:', error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"></div>

      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <FadeIn className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full transform transition-all">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>

          {!isSubscribed ? (
            <>
              {/* Header */}
              <div className="p-8 pb-6">
                <div className="text-center">
                  <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-8 w-8 text-yellow-600" />
                  </div>
                  <h3 className="text-2xl font-serif text-black mb-2">
                    Insights Stratégiques Exclusifs
                  </h3>
                  <p className="text-gray-600">
                    Recevez nos analyses business et conseils d'experts directement dans votre boîte mail.
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="px-8 pb-6">
                <div className="bg-yellow-50 p-4 rounded-lg mb-6">
                  <div className="flex items-center mb-2">
                    <Gift className="h-5 w-5 text-yellow-600 mr-2" />
                    <span className="font-semibold text-black">Bonus : Guide M&A Gratuit</span>
                  </div>
                  <p className="text-gray-700 text-sm">
                    En vous abonnant, recevez immédiatement notre guide "Valoriser son ETI avant cession" (PDF, 45 pages).
                  </p>
                </div>

                <FormValidation
                  fields={fieldConfigs.newsletter}
                  onSubmit={handleSubmit}
                  submitButtonText="S'abonner Gratuitement"
                  className="space-y-4"
                />

                <p className="text-gray-500 text-xs mt-4 text-center">
                  Pas de spam. Désabonnement en 1 clic. Confidentialité garantie.
                </p>
              </div>
            </>
          ) : (
            /* Success State */
            <div className="p-8 text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-serif text-black mb-2">
                Inscription Réussie !
              </h3>
              <p className="text-gray-600 mb-4">
                Merci pour votre confiance. Vous recevrez bientôt nos insights exclusifs.
              </p>
              <p className="text-sm text-gray-500">
                Vérifiez votre boîte mail pour télécharger votre guide M&A gratuit.
              </p>
            </div>
          )}
        </FadeIn>
      </div>
    </div>
  );
};

export default NewsletterPopup;
