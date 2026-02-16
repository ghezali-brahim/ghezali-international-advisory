'use client';

import React, { useState } from 'react';
import { ChevronRight, Building, TrendingUp, DollarSign, Calendar, Target, CheckCircle } from 'lucide-react';
import { LocaleLink } from './LocaleLink';

const CaseStudies = () => {
  const [activeCase, setActiveCase] = useState(0);

  const caseStudies = [
    {
      id: 1,
      title: "Industrial Mid-Market Transformation",
      sector: "Industry & Manufacturing",
      challenge: "Full restructuring and sale preparation",
      duration: "18 months",
      investment: "750k€",
      results: {
        valorisation: "+45%",
        cash: "+1.8M€",
        multiple: "8x EBITDA",
        roi: "420%"
      },
      description: "An industrial mid-market company with 180M€ revenue sought to optimise its structure before a sale. Our intervention enabled a full organisational transformation.",
      methodology: [
        "Complete strategic and operational audit",
        "Restructuring of key processes",
        "Supply chain optimisation",
        "Due diligence preparation",
        "Sale negotiation and closing"
      ],
      timeline: [
        { phase: "Audit & Diagnosis", duration: "2 months", status: "completed" },
        { phase: "Restructuring", duration: "8 months", status: "completed" },
        { phase: "Optimisation", duration: "6 months", status: "completed" },
        { phase: "Sale", duration: "2 months", status: "completed" }
      ]
    },
    {
      id: 2,
      title: "Distribution Group Digitalisation",
      sector: "Distribution & Retail",
      challenge: "Digital transformation and supply chain optimisation",
      duration: "24 months",
      investment: "1.2M€",
      results: {
        valorisation: "+35%",
        cash: "+2.3M€",
        multiple: "6.5x EBITDA",
        roi: "380%"
      },
      description: "A distribution group with 320M€ revenue required a full digital transformation to remain competitive.",
      methodology: [
        "Digital transformation strategy",
        "CRM/ERP tool implementation",
        "Logistics optimisation",
        "Team training",
        "Performance measurement"
      ],
      timeline: [
        { phase: "Digital Strategy", duration: "3 months", status: "completed" },
        { phase: "Implementation", duration: "12 months", status: "completed" },
        { phase: "Training", duration: "6 months", status: "completed" },
        { phase: "Optimisation", duration: "3 months", status: "completed" }
      ]
    },
    {
      id: 3,
      title: "Portfolio Company Acceleration",
      sector: "Private Equity",
      challenge: "Value maximisation before exit",
      duration: "12 months",
      investment: "500k€",
      results: {
        valorisation: "+65%",
        cash: "+3.1M€",
        multiple: "4.2x",
        roi: "520%"
      },
      description: "A private equity fund sought to accelerate the growth of a portfolio company before exit.",
      methodology: [
        "In-depth strategic due diligence",
        "Tailored acceleration plan",
        "Operational optimisation",
        "Exit preparation",
        "Buyer negotiation"
      ],
      timeline: [
        { phase: "Due Diligence", duration: "1 month", status: "completed" },
        { phase: "Acceleration", duration: "8 months", status: "completed" },
        { phase: "Exit Preparation", duration: "2 months", status: "completed" },
        { phase: "Closing", duration: "1 month", status: "completed" }
      ]
    }
  ];

  const currentCase = caseStudies[activeCase];

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-black mb-4 sm:mb-6">
            Detailed <span className="text-yellow-600">Case Studies</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-600 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how we have transformed companies and delivered exceptional results for our clients.
          </p>
          <LocaleLink href="/expertise" className="inline-block mt-6 text-yellow-600 hover:text-yellow-700 font-medium">
            View all premium case studies →
          </LocaleLink>
        </div>

        {/* Case Study Selector */}
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 mb-10 sm:mb-16">
          <div className="lg:w-1/3">
            <h3 className="text-xl sm:text-2xl font-serif text-black mb-4 sm:mb-6">Select a case study</h3>
            <div className="space-y-4">
              {caseStudies.map((study, index) => (
                <button
                  key={study.id}
                  onClick={() => setActiveCase(index)}
                  className={`w-full text-left p-4 sm:p-6 rounded-lg border-2 transition-all duration-300 min-h-[44px] ${
                    activeCase === index
                      ? 'border-yellow-600 bg-yellow-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-black">{study.title}</h4>
                    <ChevronRight className={`h-5 w-5 transition-transform ${
                      activeCase === index ? 'rotate-90 text-yellow-600' : 'text-gray-400'
                    }`} />
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{study.sector}</p>
                  <div className="flex items-center text-sm text-yellow-600">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    {study.results.valorisation} valuation
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Case Study Details */}
          <div className="lg:w-2/3">
            <div className="bg-gray-50 p-5 sm:p-6 lg:p-8 rounded-xl">
              {/* Header */}
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <Building className="h-6 w-6 text-yellow-600 mr-3" />
                  <span className="text-yellow-600 font-semibold">{currentCase.sector}</span>
                </div>
                <h3 className="text-3xl font-serif text-black mb-4">{currentCase.title}</h3>
                <p className="text-gray-600 leading-relaxed">{currentCase.description}</p>
              </div>

              {/* Key Metrics */}
              <div className="grid md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white p-4 rounded-lg text-center">
                  <TrendingUp className="h-6 w-6 text-yellow-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-black">{currentCase.results.valorisation}</div>
                  <div className="text-sm text-gray-600">Valuation</div>
                </div>
                <div className="bg-white p-4 rounded-lg text-center">
                  <DollarSign className="h-6 w-6 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-black">{currentCase.results.cash}</div>
                  <div className="text-sm text-gray-600">Cash generated</div>
                </div>
                <div className="bg-white p-4 rounded-lg text-center">
                  <Target className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-black">{currentCase.results.multiple}</div>
                  <div className="text-sm text-gray-600">Multiple</div>
                </div>
                <div className="bg-white p-4 rounded-lg text-center">
                  <Calendar className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-black">{currentCase.duration}</div>
                  <div className="text-sm text-gray-600">Duration</div>
                </div>
              </div>

              {/* Methodology */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-black mb-4">Methodology applied</h4>
                <div className="space-y-3">
                  {currentCase.methodology.map((step, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-yellow-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Timeline */}
              <div>
                <h4 className="text-xl font-semibold text-black mb-4">Project timeline</h4>
                <div className="space-y-4">
                  {currentCase.timeline.map((phase, index) => (
                    <div key={index} className="flex items-center">
                      <div className="bg-yellow-600 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-black">{phase.phase}</span>
                          <span className="text-gray-600 text-sm">{phase.duration}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                          <div className="bg-yellow-600 h-2 rounded-full w-full"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ROI Calculator CTA */}
        <div className="text-center">
          <div className="bg-black p-6 sm:p-8 lg:p-12 rounded-2xl">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white mb-4 sm:mb-6">
              Calculate your valuation potential
            </h3>
            <p className="text-base sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Discover the impact our support could have on your company.
            </p>
            <button type="button" className="bg-yellow-400 text-black hover:bg-yellow-500 px-8 py-3 sm:px-10 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-400/25 min-h-[44px]">
              Simulate my ROI
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;