'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, ShieldCheck, Truck, ShoppingBag, Award, Sparkles, CheckCircle2 } from 'lucide-react';
import { STORE_INFO } from '@/data/storeData';

interface HeroProps {
  onOpenQuote: () => void;
}

export default function Hero({ onOpenQuote }: HeroProps) {
  const trustPoints = [
    { label: "Quality Products", icon: Award },
    { label: "Trusted Service", icon: ShieldCheck },
    { label: "On-Site Delivery", icon: Truck },
    { label: "Easy Purchase", icon: ShoppingBag },
  ];

  const handleScrollToProducts = (e: React.MouseEvent) => {
    e.preventDefault();
    const elem = document.getElementById('products');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative bg-gradient-to-b from-slate-50 via-white to-slate-50/80 overflow-hidden pt-6 pb-12 sm:pt-8 sm:pb-16 lg:py-20 border-b border-slate-100">
      {/* Subtle background decorative shapes */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 bg-orange-100/40 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative">
        
        {/* ========================================================= */}
        {/* MOBILE & TABLET COMPACT HERO (< lg screens)               */}
        {/* ========================================================= */}
        <div className="lg:hidden space-y-4">
          {/* Top Text Content */}
          <div className="space-y-2">
            <h1 className="text-2xl xs:text-3xl font-extrabold text-[#0B192C] leading-tight tracking-tight">
              Quality Products <br />
              <span className="text-orange-600">
                for Every Home
              </span>
            </h1>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {STORE_INFO.heroSubtitle}
            </p>
          </div>

          {/* Big Full-Width Storefront Image for Mobile */}
          <div className="relative w-full aspect-[16/8] rounded-2xl overflow-hidden shadow-lg border-2 border-white bg-slate-900">
            <Image
              src="/images/storefront-latest.png"
              alt="Sri Krishna Traders Storefront & Counter"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
              priority
            />
          </div>

          {/* CTA Buttons Row */}
          <div className="grid grid-cols-2 gap-2 pt-1">
            <button
              onClick={handleScrollToProducts}
              className="bg-[#0B192C] active:bg-[#1E3E62] text-white font-semibold py-2.5 px-3 rounded-xl shadow-sm flex items-center justify-center gap-1.5 text-xs cursor-pointer group"
            >
              <span>Explore Products</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={onOpenQuote}
              className="bg-orange-600 active:bg-orange-700 text-white font-semibold py-2.5 px-3 rounded-xl shadow-sm flex items-center justify-center gap-1 text-xs cursor-pointer"
            >
              <span>Enquiry</span>
            </button>
          </div>

          {/* 4 Small Trust Badges in 2-Column Grid */}
          <div className="grid grid-cols-2 gap-2 pt-3 border-t border-slate-200/80">
            {trustPoints.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-white border border-slate-200">
                  <div className="w-6 h-6 rounded-md bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-semibold text-slate-800 leading-tight truncate">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================= */}
        {/* DESKTOP HERO SECTION (lg+ screens)                        */}
        {/* ========================================================= */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B192C] text-orange-400 text-xs font-bold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-orange-400" />
              <span>{STORE_INFO.label}</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.15rem] font-extrabold text-[#0B192C] leading-[1.15] tracking-tight">
              Quality Products <br className="hidden sm:inline" />
              <span className="text-orange-600">
                for Every Home
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
              {STORE_INFO.heroSubtitle}
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={handleScrollToProducts}
                className="bg-[#0B192C] hover:bg-[#1E3E62] text-white font-semibold py-3.5 px-7 rounded-xl shadow-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer text-sm sm:text-base"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenQuote}
                className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3.5 px-7 rounded-xl shadow-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer text-sm sm:text-base"
              >
                <span>Enquiry</span>
              </button>
            </div>

            {/* Small Trust Points */}
            <div className="pt-6 border-t border-slate-200/80">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {trustPoints.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex items-center gap-2.5 p-2 rounded-lg bg-white border border-slate-200">
                      <div className="w-8 h-8 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-semibold text-slate-800 leading-tight">
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual & Badges with Extra High Brightness & Clarity */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Main Showroom & Materials Visual Frame - Slightly increased vertical height */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-900 aspect-[16/8]">
                <Image
                  src="/images/storefront-latest.png"
                  alt="Sri Krishna Traders Hardware & Building Materials Store"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                  priority
                />
              </div>

              {/* Floating Badge Bottom Left */}
              <div className="hidden sm:flex absolute -bottom-4 -left-3 bg-[#0B192C] text-white p-3 rounded-2xl shadow-md border border-slate-700 items-center gap-3 z-10">
                <div className="w-9 h-9 rounded-xl bg-slate-800 text-orange-400 flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">7 Days Open</div>
                  <div className="text-xs text-slate-300">Fast Store & Delivery Support</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
