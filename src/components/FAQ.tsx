'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Shield, Clock, DollarSign } from 'lucide-react';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqCategories = [
    {
      title: "Process & Methodology",
      icon: HelpCircle,
      questions: [
        {
          question: "How does the selection process work?",
          answer: "Our selection process has 4 steps: (1) Review of your application within 48h, (2) Confidential qualification interview, (3) Preliminary strategic audit, (4) Tailored engagement proposal. Only applications aligned with our excellence criteria are accepted."
        },
        {
          question: "What is your intervention methodology?",
          answer: "Our S.E.R approach (Strategy - Execution - Results) combines long-term vision with immediate implementation. We start with an in-depth diagnosis, develop a tailored strategy, then deploy an operational task force to ensure execution and measure results."
        },
        {
          question: "How long does a typical engagement last?",
          answer: "Duration varies by objective: Executive Advisory (6-12 months), Corporate Acceleration (12-18 months), Strategic Deals (varies by deal). Each assignment is calibrated to maximise impact within optimal timelines."
        }
      ]
    },
    {
      title: "Investment & ROI",
      icon: DollarSign,
      questions: [
        {
          question: "What are your fees and payment terms?",
          answer: "Our programmes range from 200k€ to 1M€+ depending on complexity and scope. We offer flexible arrangements: fixed fee, success fee, or a combination. Each proposal is tailored to your objectives and constraints."
        },
        {
          question: "How do you guarantee return on investment?",
          answer: "We commit contractually to measurable KPIs: valuation increase, cash generation, multiple improvement, etc. Our 95% success rate and average 380% ROI demonstrate our ability to create tangible value."
        },
        {
          question: "Do you offer result guarantees?",
          answer: "Yes, we offer contractual commitments with performance clauses. If agreed objectives are not met, we adjust our remuneration accordingly. Our reputation is built on concrete, measurable results."
        }
      ]
    },
    {
      title: "Confidentiality & Security",
      icon: Shield,
      questions: [
        {
          question: "How do you protect the confidentiality of our information?",
          answer: "We apply the highest security standards: systematic NDA before any exchange, ISO 27001 certification, encrypted data, restricted access for project teams. Your confidentiality is our absolute priority."
        },
        {
          question: "Who has access to our company information?",
          answer: "Only project team members directly involved in your assignment have access. Each consultant signs a specific confidentiality agreement. We apply the 'need to know' principle strictly."
        },
        {
          question: "Do you work with our competitors?",
          answer: "We apply a strict non-compete policy for the full duration of our collaboration and 24 months after. If we operate in your sector, it is only in different geographic markets or segments, with your prior agreement."
        }
      ]
    },
    {
      title: "Engagement criteria",
      icon: Clock,
      questions: [
        {
          question: "What are your selection criteria?",
          answer: "We primarily work with mid-market companies (50M€+ revenue) and divisions of large groups with significant growth potential, visionary leadership, and an ambition for excellence. Leadership commitment and investment capacity are essential."
        },
        {
          question: "Do you operate across all sectors?",
          answer: "We have recognised expertise in industry, distribution, services, and tech. Our sector approach enables us to deliver immediate added value through our knowledge of each market's specific challenges."
        },
        {
          question: "Do you support companies in difficulty?",
          answer: "Our positioning focuses on accelerating performance of healthy companies with growth potential. For turnaround situations, we refer to restructuring specialists within our network."
        }
      ]
    }
  ];

  const toggleFAQ = (categoryIndex: number, questionIndex: number) => {
    const faqIndex = categoryIndex * 100 + questionIndex;
    setOpenFAQ(openFAQ === faqIndex ? null : faqIndex);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-black mb-4 sm:mb-6">
            Frequently <span className="text-yellow-600">Asked Questions</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-600 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Find answers to the most common questions about our approach, methods and engagement terms.
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-6 sm:space-y-8">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-gray-50 rounded-xl p-5 sm:p-6 lg:p-8">
              <div className="flex items-center mb-4 sm:mb-6">
                <category.icon className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-600 mr-3 shrink-0" />
                <h3 className="text-xl sm:text-2xl font-serif text-black">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.questions.map((faq, questionIndex) => {
                  const faqIndex = categoryIndex * 100 + questionIndex;
                  const isOpen = openFAQ === faqIndex;
                  
                  return (
                    <div key={questionIndex} className="bg-white rounded-lg shadow-sm">
                      <button
                        type="button"
                        onClick={() => toggleFAQ(categoryIndex, questionIndex)}
                        className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors rounded-lg min-h-[44px]"
                      >
                        <span className="font-semibold text-black pr-4">{faq.question}</span>
                        {isOpen ? (
                          <ChevronUp className="h-5 w-5 text-yellow-600 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                        )}
                      </button>
                      
                      {isOpen && (
                        <div className="px-6 pb-4">
                          <div className="border-t border-gray-100 pt-4">
                            <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-10 sm:mt-16 text-center">
          <div className="bg-black p-6 sm:p-8 rounded-xl">
            <h3 className="text-xl sm:text-2xl font-serif text-white mb-3 sm:mb-4">
              Have a specific question?
            </h3>
            <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
              Our team is available to answer your questions in a confidential discussion.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button type="button" className="w-full sm:w-auto bg-yellow-400 text-black hover:bg-yellow-500 px-6 py-3 rounded-lg font-semibold transition-all duration-300 min-h-[44px]">
                Ask a question
              </button>
              <button type="button" className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-black px-6 py-3 rounded-lg font-semibold transition-all duration-300 min-h-[44px]">
                Schedule a call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;