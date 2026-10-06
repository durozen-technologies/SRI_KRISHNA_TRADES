'use client';

import React, { useState, useEffect } from 'react';
import { ShieldCheck, Truck, Zap, Headphones, ArrowRight, CheckCircle, X, Check } from 'lucide-react';
import { BENEFITS_DATA, Benefit } from '@/data/storeData';

interface WhyChooseUsProps {
  onContactClick: () => void;
}

export default function WhyChooseUs({ onContactClick }: WhyChooseUsProps) {
  const [selectedBenefit, setSelectedBenefit] = useState<Benefit | null>(null);

  const iconMap = {
    ShieldCheck: ShieldCheck,
    Truck: Truck,
    Zap: Zap,
    Headphones: Headphones,
    Award: ShieldCheck,
    Clock: Zap
  };

  // Close modal on Escape key and prevent body scrolling
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedBenefit(null);
      }
    };

    if (selectedBenefit) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedBenefit]);

  const SelectedIcon = selectedBenefit ? (iconMap[selectedBenefit.iconName] || ShieldCheck) : null;

  return (
    <section id="why-choose-us" className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-stretch">
          
          {/* Left Split: Dark Navy Card */}
          <div className="lg:col-span-5 bg-[#0B192C] text-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 flex flex-col justify-between relative overflow-hidden shadow-md">
            <div className="relative space-y-4 sm:space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 text-orange-400 text-xs font-bold uppercase tracking-wider">
                <CheckCircle className="w-3.5 h-3.5 text-orange-400" />
                <span>The Sri Krishna Advantage</span>
              </div>

              <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
                Your Trusted Partner for Every Project
              </h2>

              <p className="text-slate-300 text-xs sm:text-base leading-relaxed">
                We provide quality construction and home-improvement products with dependable service and practical solutions for homeowners, contractors and builders.
              </p>

              <div className="pt-2 space-y-2.5 sm:space-y-3">
                <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-slate-200">
                  <span className="w-2 h-2 rounded-full bg-orange-500 shrink-0"></span>
                  <span>Certified Sanitary & Plumbing Standards</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-slate-200">
                  <span className="w-2 h-2 rounded-full bg-orange-500 shrink-0"></span>
                  <span>Transparent Pricing & Honest Guidance</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-slate-200">
                  <span className="w-2 h-2 rounded-full bg-orange-500 shrink-0"></span>
                  <span>Contractor & Bulk Project Supply Support</span>
                </div>
              </div>
            </div>

            <div className="relative pt-6 sm:pt-8 mt-4 sm:mt-6 border-t border-slate-800">
              <button
                onClick={onContactClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 sm:py-3.5 px-6 sm:px-8 rounded-xl shadow-sm transition duration-200 text-xs sm:text-sm cursor-pointer"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Split: 4 Benefit Cards (2-column on mobile, 2-column on tablet/desktop) */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-2.5 sm:gap-6 items-stretch">
            {BENEFITS_DATA.map((benefit) => {
              const IconComponent = iconMap[benefit.iconName] || ShieldCheck;
              return (
                <div
                  key={benefit.id}
                  onClick={() => setSelectedBenefit(benefit)}
                  className="bg-slate-50 hover:bg-white rounded-xl sm:rounded-2xl p-4 sm:p-7 border border-slate-200 hover:border-orange-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between group cursor-pointer"
                >
                  <div className="space-y-2 sm:space-y-3">
                    <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-white border border-slate-200 text-[#0B192C] flex items-center justify-center transition-colors shrink-0 shadow-xs">
                      <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600" />
                    </div>
                    <h3 className="text-xs sm:text-base font-bold text-slate-900 leading-snug">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>

                  <div className="pt-2 sm:pt-4 mt-1 sm:mt-2 flex items-center text-xs font-semibold text-orange-600">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedBenefit(benefit);
                      }}
                      className="flex items-center gap-1 hover:underline text-left cursor-pointer focus:outline-none"
                      aria-label={`Learn more about ${benefit.title}`}
                    >
                      <span>Learn More →</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>

      {/* Service / Feature Detail Modal */}
      {selectedBenefit && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-benefit-title"
          onClick={() => setSelectedBenefit(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0B192C]/75 backdrop-blur-xs animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]"
          >
            {/* Top Accent Strip */}
            <div className="h-1.5 w-full bg-gradient-to-r from-orange-500 via-orange-600 to-[#0B192C]" />

            {/* Modal Header */}
            <div className="p-5 sm:p-6 pb-4 border-b border-slate-200 flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-orange-50 text-orange-700 border border-orange-200 flex items-center justify-center shrink-0">
                  {SelectedIcon && <SelectedIcon className="w-5 h-5 sm:w-6 sm:h-6" />}
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-orange-700">
                    The Sri Krishna Advantage
                  </span>
                  <h3 id="modal-benefit-title" className="text-lg sm:text-xl font-extrabold text-[#0B192C]">
                    {selectedBenefit.title}
                  </h3>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSelectedBenefit(null)}
                className="p-1.5 sm:p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Content */}
            <div className="p-5 sm:p-6 space-y-4 sm:space-y-5 overflow-y-auto">
              <p className="text-slate-800 text-xs sm:text-sm leading-relaxed bg-slate-50 p-3.5 sm:p-4 rounded-xl border border-slate-200 font-medium">
                {selectedBenefit.detailedDescription}
              </p>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-3">
                  Key Highlights & Standards
                </h4>
                <ul className="space-y-2.5">
                  {selectedBenefit.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-800">
                      <div className="w-5 h-5 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span className="font-medium leading-snug">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex flex-col-reverse sm:flex-row items-center justify-end gap-2.5 sm:gap-3">
              <button
                type="button"
                onClick={() => setSelectedBenefit(null)}
                className="w-full sm:w-auto px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  setSelectedBenefit(null);
                  onContactClick();
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-xl shadow-sm transition-colors cursor-pointer"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
