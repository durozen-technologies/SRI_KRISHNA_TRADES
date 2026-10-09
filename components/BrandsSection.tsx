'use client';

import React, { useState } from 'react';
import { Award, ShieldCheck, Sparkles, Check, Droplets, Zap, Fan, Flame, Wrench } from 'lucide-react';
import { BRANDS_DATA, Brand } from '@/data/storeData';

interface BrandsSectionProps {
  onSelectBrandFilter?: (brandSlug: string) => void;
}

export default function BrandsSection({ onSelectBrandFilter }: BrandsSectionProps) {
  const [selectedBrandSlug, setSelectedBrandSlug] = useState<string>('havells');

  const selectedBrand = BRANDS_DATA.find((b) => b.slug === selectedBrandSlug) || BRANDS_DATA[0];

  const brandIcons: Record<string, any> = {
    havells: Zap,
    'rr-kabel': ShieldCheck,
    finolex: Wrench,
    crompton: Fan,
    luker: Sparkles,
    vguard: Flame,
    kundan: Zap,
    cera: Droplets,
    parryware: Droplets,
    'cheran-sharp': Wrench,
    supreme: ShieldCheck,
    'taparia-venus': Wrench,
  };

  const handleBrandClick = (slug: string) => {
    setSelectedBrandSlug(slug);
  };

  const handleExploreBrand = (slug: string) => {
    if (onSelectBrandFilter) {
      onSelectBrandFilter(slug);
    }
    const elem = document.getElementById('products');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  const getBrandColor = (slug: string) => {
    switch (slug) {
      case 'havells': return 'bg-red-600 shadow-md shadow-red-900/50';
      case 'rr-kabel': return 'bg-emerald-600';
      case 'crompton': return 'bg-blue-600';
      case 'luker': return 'bg-amber-600';
      case 'vguard': return 'bg-amber-500 text-slate-950';
      case 'finolex': return 'bg-cyan-600';
      case 'kundan': return 'bg-indigo-700';
      case 'cera': return 'bg-teal-600';
      case 'parryware': return 'bg-purple-600';
      case 'cheran-sharp': return 'bg-blue-800';
      case 'supreme': return 'bg-red-700';
      case 'taparia-venus': return 'bg-orange-700';
      default: return 'bg-orange-600';
    }
  };

  return (
    <section id="brands" className="py-16 sm:py-20 bg-[#07111E] text-white relative overflow-hidden">
      {/* Subtle backdrop pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950 text-red-400 text-xs font-bold uppercase tracking-wider border border-red-800">
            <Sparkles className="w-3.5 h-3.5 text-red-400" />
            <span>Authorized Brands • Havells Primary Partner</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white">
            Industry-Leading Brands You Trust
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Direct authorized partnerships with India&apos;s leading manufacturers: <strong className="text-white font-bold">Havells</strong> (Flagship Dealership), Crompton, Luker, Finolex, RR Kābel, V-Guard, Kundan Cable, CERA, Parryware, Cheran & Sharp, Supreme, and Taparia.
          </p>
        </div>

        {/* Brand Selection Cards Grid (Responsive auto-fit columns) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3 mb-8">
          {BRANDS_DATA.map((brand) => {
            const Icon = brandIcons[brand.slug] || Award;
            const isSelected = selectedBrand.slug === brand.slug;
            const isHavells = brand.slug === 'havells';
            return (
              <button
                key={brand.id}
                onClick={() => handleBrandClick(brand.slug)}
                className={`p-3 sm:p-3.5 rounded-2xl text-left transition-all duration-200 border cursor-pointer flex flex-col justify-between relative ${
                  isSelected
                    ? isHavells
                      ? 'bg-gradient-to-b from-red-950/90 to-slate-900 border-red-500 shadow-xl shadow-red-950/50 ring-2 ring-red-500/50'
                      : 'bg-slate-800 border-orange-500/80 shadow-lg ring-1 ring-orange-500/50'
                    : isHavells
                      ? 'bg-slate-900/90 border-red-900/60 hover:border-red-600 hover:bg-slate-850'
                      : 'bg-slate-900/80 border-slate-800 hover:border-slate-700 hover:bg-slate-850'
                }`}
              >
                {isHavells && (
                  <span className="absolute -top-2.5 right-2 px-1.5 py-0.5 rounded bg-red-600 text-white text-[8px] font-black uppercase tracking-wider shadow-sm">
                    ★ Flagship
                  </span>
                )}
                <div className="flex items-start justify-between gap-1">
                  <div className="flex items-center gap-2">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-white shadow-xs shrink-0 ${getBrandColor(brand.slug)}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <h3 className={`text-xs sm:text-sm font-extrabold tracking-tight truncate ${isHavells ? 'text-red-400' : 'text-white'}`}>
                        {brand.name}
                      </h3>
                      <span className="text-[9px] sm:text-[10px] text-orange-400 font-medium block truncate">
                        {brand.badge}
                      </span>
                    </div>
                  </div>
                  {isSelected && (
                    <span className={`w-2 h-2 rounded-full animate-pulse mt-0.5 shrink-0 ${isHavells ? 'bg-red-400' : 'bg-orange-400'}`}></span>
                  )}
                </div>

                <p className="text-[10px] text-slate-300 mt-2 line-clamp-2 leading-tight hidden xs:block">
                  {brand.tagline}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Brand Detail Showcase Container */}
        <div className="bg-slate-800/90 rounded-3xl p-6 sm:p-10 border border-slate-700 shadow-xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content Area */}
            <div className="lg:col-span-8 space-y-5 text-left">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 text-orange-400 text-xs font-bold border border-slate-700">
                  <Award className="w-3.5 h-3.5" />
                  <span>{selectedBrand.badge}</span>
                </span>
                <span className="text-xs text-slate-400 font-medium hidden sm:inline">
                  • 100% Genuine In-Store Stock
                </span>
              </div>
              
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                  {selectedBrand.name}
                </h3>
                <p className="text-orange-400 font-semibold text-xs sm:text-sm mt-1">
                  {selectedBrand.tagline}
                </p>
              </div>
              
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {selectedBrand.description}
              </p>

              {/* Product Categories Pills */}
              <div className="space-y-2 pt-1">
                <h4 className="text-xs uppercase font-bold text-slate-400 tracking-wider">
                  Available Categories & Product Lines
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedBrand.categories.map((cat, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg bg-slate-900/90 text-slate-200 text-xs font-semibold border border-slate-700"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Feature Checkpoints */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {selectedBrand.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <Check className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                    <span className="leading-snug">{feat}</span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  onClick={() => handleExploreBrand(selectedBrand.slug)}
                  className="bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl transition-all shadow-md cursor-pointer inline-flex items-center gap-2"
                >
                  <span>Explore {selectedBrand.name} Catalog</span>
                  <Sparkles className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Visual Brand Summary Column */}
            <div className="lg:col-span-4 flex flex-col justify-center p-5 rounded-2xl bg-slate-900/90 border border-slate-700/80 space-y-4">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold shadow-md shrink-0 ${getBrandColor(selectedBrand.slug)}`}>
                  {React.createElement(brandIcons[selectedBrand.slug] || Award, { className: 'w-6 h-6' })}
                </div>
                <div>
                  <h4 className="font-extrabold text-white text-base sm:text-lg">{selectedBrand.name} Lineup</h4>
                  <p className="text-xs text-orange-400 font-semibold">Immediate Dispatch</p>
                </div>
              </div>

              <div className="border-t border-slate-800 pt-3 space-y-2">
                <div className="text-xs text-slate-400 font-medium">In-Stock Highlights:</div>
                <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800 text-xs text-slate-200 leading-relaxed font-mono">
                  {selectedBrand.productsSummary}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700/60 text-center">
                  <span className="block font-bold text-white">100%</span>
                  <span className="text-[10px] text-slate-400">Genuine ISI</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700/60 text-center">
                  <span className="block font-bold text-white">Full Range</span>
                  <span className="text-[10px] text-slate-400">Warranty Support</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

