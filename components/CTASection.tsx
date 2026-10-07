'use client';

import React from 'react';
import { ArrowRight, PhoneCall, Sparkles, MessageCircle } from 'lucide-react';
import { STORE_INFO } from '@/data/storeData';

interface CTASectionProps {
  onOpenQuote: () => void;
  onContactClick: () => void;
}

export default function CTASection({ onOpenQuote, onContactClick }: CTASectionProps) {
  return (
    <section className="bg-[#0B192C] text-white py-16 sm:py-20 relative overflow-hidden border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        
        <div className="max-w-xl mx-auto space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-orange-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ready for Your Next Build</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Looking for the Right Products? <br className="hidden sm:inline" />
            <span className="text-orange-400">
              We&apos;re Here to Help.
            </span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Find the right products for your home, construction or renovation project. Talk to our material specialists today.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenQuote}
              className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3.5 px-8 rounded-xl shadow-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer text-sm sm:text-base"
            >
              <span>Enquiry</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onContactClick}
              className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-slate-100 font-semibold py-3.5 px-8 rounded-xl border border-slate-700 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer text-sm sm:text-base"
            >
              <PhoneCall className="w-4 h-4 text-orange-400" />
              <span>Contact Us</span>
            </button>
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-500"></span>
              Fast On-Site Delivery
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-500"></span>
              100% Genuine Certified Stock
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-500"></span>
              Open 7 Days a Week
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
