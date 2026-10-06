'use client';

import React from 'react';
import { Award, ShieldCheck, Sparkles, Check, Droplets } from 'lucide-react';

export default function BrandsSection() {
  return (
    <section id="brands" className="py-16 bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle backdrop pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-orange-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Authorized Dealership</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
            Quality Brands. Reliable Products.
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            We partner with trusted manufacturing leaders to guarantee genuine build quality, warranties, and dependable performance.
          </p>
        </div>

        {/* Santé Bath Fittings Showcase Card */}
        <div className="max-w-4xl mx-auto bg-slate-800 rounded-3xl p-8 sm:p-10 border border-slate-700 shadow-md relative">
          <div className="flex flex-col md:flex-row items-center gap-8 justify-between">
            
            <div className="space-y-4 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-orange-400 text-xs font-bold border border-slate-700">
                <Award className="w-3.5 h-3.5" />
                <span>Dedicated Authorized Dealer</span>
              </div>
              
              <h3 className="text-3xl font-extrabold text-white tracking-tight">
                SANTÉ <span className="text-orange-400 font-light text-2xl">Bath Fittings</span>
              </h3>
              
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-lg">
                Official dealer for Santé Bath Fittings. Explore our showroom display featuring premium brass basin mixers, diverters, health faucets, showers, and architectural CP bathroom accessories.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                  <Check className="w-4 h-4 text-orange-400" />
                  <span>100% Genuine Warranty</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                  <Check className="w-4 h-4 text-orange-400" />
                  <span>Mirror Chrome Durability</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                  <Check className="w-4 h-4 text-orange-400" />
                  <span>Full Replacement Spares</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                  <Check className="w-4 h-4 text-orange-400" />
                  <span>Showroom Touch & Feel</span>
                </div>
              </div>
            </div>

            {/* Visual Badge Icon */}
            <div className="shrink-0 flex flex-col items-center justify-center p-6 bg-slate-900 rounded-2xl border border-slate-700 text-center w-full md:w-56">
              <div className="w-14 h-14 rounded-2xl bg-orange-600 flex items-center justify-center text-white mb-3 shadow-sm">
                <Droplets className="w-7 h-7" />
              </div>
              <span className="text-sm font-bold text-white uppercase tracking-wider">Santé Dealer</span>
              <span className="text-xs text-slate-400 mt-0.5">Showroom Partner</span>
              <span className="mt-3 text-xs text-slate-200 font-medium bg-slate-800 px-3 py-1 rounded border border-slate-700">
                Direct Distribution
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
