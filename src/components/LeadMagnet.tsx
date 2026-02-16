'use client';

import React, { useState } from 'react';
import { Download, FileText, Users, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import FormValidation, { fieldConfigs } from './FormValidation';
import { useAnalyticsTracking } from './Analytics';
import { FadeIn, StaggerContainer } from './Animations';

const LeadMagnet = () => {
  const [isDownloaded, setIsDownloaded] = useState(false);
  const { trackFormSubmission, trackDownload } = useAnalyticsTracking();

  const handleSubmit = async (formData: Record<string, string>) => {
    try {
      // Track form submission
      trackFormSubmission('lead_magnet', formData);
      
      // Simulation d'envoi (remplacer par votre API)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Track download
      trackDownload('guide_eti_valuation', 'pdf');
      
      setIsDownloaded(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const leadMagnets = [
    {
      id: 1,
      title: 'Confidential briefing: Portfolio valuation and transformation',
      description: 'For funds and family offices. Exclusive methods to maximise portfolio value and accelerate transformation of your holdings.',
      pages: 'Qualified access only',
      icon: TrendingUp,
      color: 'bg-gradient-to-br from-yellow-600 to-yellow-800',
      features: [
        'Multi-company valuation levers',
        'Retainer / equity / success fee structures',
        'Portfolio-wide transformation vs project by project',
        'Strategic partner selection criteria',
      ],
    },
    {
      id: 2,
      title: 'Valuing your mid-market company before exit',
      description: 'For your holdings. Methods to maximise value before exit. Optimised multiples, increased valuation.',
      pages: '45 pages',
      icon: FileText,
      color: 'bg-gradient-to-br from-blue-500 to-blue-700',
      features: [
        '5 valuation levers',
        'Real case studies',
        'Preparation checklist',
        'Negotiation templates',
      ],
    },
    {
      id: 3,
      title: 'Executive Advisory: for portfolio company leaders',
      description: 'How Executive Advisory transforms the leadership of your portfolio company leaders and accelerates results.',
      pages: '32 pages',
      icon: Users,
      color: 'bg-gradient-to-br from-purple-500 to-purple-700',
      features: [
        'S.E.R methodology',
        'ROI and selection criteria',
        'Alignment with fund objectives',
        'Board access and decisions',
      ],
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-black mb-6">
            Resources <span className="text-yellow-600">for qualified access only</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Briefings and methodologies for funds, family offices and portfolio leaders. Access on request, after profile verification.
          </p>
        </div>

        {/* Lead Magnets Grid */}
        <StaggerContainer className="grid lg:grid-cols-3 gap-8 mb-16" staggerDelay={200}>
          {leadMagnets.map((magnet) => (
            <div key={magnet.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
              {/* Header */}
              <div className={`${magnet.color} p-8 text-white relative overflow-hidden`}>
                <div className="relative z-10">
                  <magnet.icon className="h-12 w-12 mb-4" />
                  <h3 className="text-xl font-serif mb-2">{magnet.title}</h3>
                  <div className="flex items-center justify-between text-sm opacity-90">
                    <span>{magnet.pages}</span>
                    <span>On request, after profile verification</span>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-12 translate-x-12"></div>
              </div>

              {/* Content */}
              <div className="p-8">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {magnet.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-black mb-3">What you will discover:</h4>
                  <ul className="space-y-2">
                    {magnet.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-yellow-600 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-black text-white hover:bg-gray-800 py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group">
                  Request access
                  <Download className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </StaggerContainer>

        {/* Newsletter CTA */}
        <div className="bg-black p-12 rounded-2xl text-center">
          <Download className="h-12 w-12 text-yellow-400 mx-auto mb-6" />
          <h3 className="text-3xl md:text-4xl font-serif text-white mb-6">
            Request access to resources
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            For qualified investors and leaders only. Briefings and analysis on request.
          </p>

          {!isDownloaded ? (
            <div className="max-w-md mx-auto">
              <FormValidation
                fields={fieldConfigs.leadMagnet}
                onSubmit={handleSubmit}
                submitButtonText="Request access"
                className="space-y-4"
              />
              <p className="text-gray-400 text-sm mt-4 text-center">
                For qualified investors and leaders only. By signing up, you accept our confidentiality terms.
              </p>
            </div>
          ) : (
            <div className="bg-green-600 p-6 rounded-lg">
              <CheckCircle className="h-12 w-12 text-white mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-white mb-2">
                Successfully registered
              </h4>
              <p className="text-gray-100">
                You will soon receive all our premium guides by email.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LeadMagnet;
