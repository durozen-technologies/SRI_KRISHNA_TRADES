'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, ShieldCheck, Truck, ShoppingBag, Award, CheckCircle2, Maximize2, X, MapPin, Phone } from 'lucide-react';
import { STORE_INFO } from '@/data/storeData';

interface HeroProps {
  onOpenQuote: () => void;
}

export default function Hero({ onOpenQuote }: HeroProps) {
  const [isZoomOpen, setIsZoomOpen] = useState(false);

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
    <>
      <section id="home" className="relative bg-gradient-to-b from-slate-50 via-white to-slate-50/80 overflow-hidden pt-5 pb-12 sm:pt-8 sm:pb-16 lg:py-16 border-b border-slate-100">
        {/* Subtle background decorative shapes */}
        <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 bg-orange-100/40 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative">
          
          {/* ========================================================= */}
          {/* MOBILE & TABLET HERO (< lg screens)                       */}
          {/* ========================================================= */}
          <div className="lg:hidden space-y-4">
            
            {/* Header badges & headline */}
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600 text-white text-[11px] font-black tracking-wider uppercase shadow-sm">
                <Award className="w-3.5 h-3.5 text-white" />
                <span>⭐ Havells Flagship Partner</span>
              </div>

              <h1 className="text-2xl xs:text-3xl font-extrabold text-[#0B192C] leading-tight tracking-tight">
                Quality Products <br />
                <span className="text-orange-600">
                  for Every Home
                </span>
              </h1>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Authorized showroom for <strong className="text-red-700 font-bold">Havells</strong> (Solar Lights, BLDC Fans, FR-LSH Wires, Modular Switches), Finolex pipes, Crompton fans, V-Guard geysers, and sanitaryware.
              </p>
            </div>

            {/* FULL PANORAMIC STOREFRONT IMAGE - 100% Clean Unobstructed View */}
            <div 
              onClick={() => setIsZoomOpen(true)}
              className="relative w-full aspect-[2.22/1] rounded-2xl overflow-hidden shadow-md border-2 border-slate-200/80 bg-slate-900 group cursor-pointer"
            >
              <Image
                src="/images/store-front.jpg"
                alt="Sri Krishna Traders Showroom & Storefront - Havells Authorized Dealer Namakkal"
                fill
                sizes="100vw"
                className="object-cover object-center brightness-[0.87] contrast-[1.06] group-hover:scale-[1.02] transition-transform duration-300"
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
            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-200/80">
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
          <div className="hidden lg:grid lg:grid-cols-12 gap-8 xl:gap-10 items-center">
            
            {/* Left Column: Hero Content */}
            <div className="lg:col-span-5 space-y-6 text-left">
              {/* Small Label */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600 text-white text-xs font-extrabold tracking-wider uppercase shadow-md shadow-red-900/20">
                <Award className="w-4 h-4 text-white" />
                <span>⭐ Primary Authorized Havells Partner</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl xl:text-4xl 2xl:text-[2.9rem] font-extrabold text-[#0B192C] leading-[1.15] tracking-tight">
                Quality Products <br />
                <span className="text-orange-600">
                  for Every Home
                </span>
              </h1>

              {/* Supporting Text */}
              <p className="text-sm xl:text-base text-slate-600 leading-relaxed max-w-xl">
                Namakkal&apos;s leading authorized showroom for <strong className="text-red-700 font-bold">Havells</strong> (Solar Gate Lights, Stealth BLDC Fans, Life Line Plus FR-LSH Wires, Fabio Modular Switches & MCBs), Finolex plumbing pipes, Crompton fans, V-Guard geysers, and complete sanitaryware.
              </p>

              {/* CTA Buttons */}
              <div className="pt-1 flex flex-row items-center gap-3">
                <button
                  onClick={handleScrollToProducts}
                  className="bg-[#0B192C] hover:bg-[#1E3E62] text-white font-semibold py-3 px-6 rounded-xl shadow-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer text-sm"
                >
                  <span>Explore Products</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={onOpenQuote}
                  className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-xl shadow-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer text-sm"
                >
                  <span>Enquiry</span>
                </button>
              </div>

              {/* Small Trust Points */}
              <div className="pt-5 border-t border-slate-200/80">
                <div className="grid grid-cols-2 xl:grid-cols-4 gap-2.5">
                  {trustPoints.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-white border border-slate-200 shadow-2xs">
                        <div className="w-7 h-7 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
                          <Icon className="w-3.5 h-3.5" />
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

            {/* Right Column: Hero Visual - FULL CLEAR PANORAMIC STOREFRONT VIEW */}
            <div className="lg:col-span-7 relative">
              <div className="relative">
                
                {/* Main Showroom Panoramic Frame in Natural 2.22:1 Aspect Ratio - 100% Clean Image */}
                <div 
                  onClick={() => setIsZoomOpen(true)}
                  className="relative rounded-2xl xl:rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-900 aspect-[2.22/1] group cursor-pointer"
                >
                  <Image
                    src="/images/store-front.jpg"
                    alt="Sri Krishna Traders Authorized Havells Partner Storefront - Namakkal"
                    fill
                    sizes="(max-width: 1280px) 60vw, 700px"
                    className="object-cover object-center brightness-[0.87] contrast-[1.06] group-hover:scale-[1.02] transition-transform duration-300"
                    priority
                  />
                </div>

                {/* Floating Badge Top Right */}
                <div className="absolute -top-3 -right-3 bg-white p-2.5 rounded-2xl shadow-md border border-slate-200 flex items-center gap-2.5 animate-fade-in z-20">
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">Direct On-Site Dispatch</div>
                    <div className="text-[11px] text-slate-500">For Homes & Project Sites</div>
                  </div>
                </div>

                {/* Floating Badge Bottom Left */}
                <div className="hidden sm:flex absolute -bottom-3 -left-3 bg-[#0B192C] text-white p-2.5 rounded-2xl shadow-md border border-slate-700 items-center gap-2.5 z-20">
                  <div className="w-8 h-8 rounded-xl bg-slate-800 text-orange-400 flex items-center justify-center">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">7 Days Open</div>
                    <div className="text-[11px] text-slate-300">Fast Store & Delivery Support</div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* FULL CLEAR VIEW LIGHTBOX MODAL                            */}
      {/* ========================================================= */}
      {isZoomOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-3 sm:p-6 backdrop-blur-sm animate-fade-in"
          onClick={() => setIsZoomOpen(false)}
        >
          <div 
            className="relative w-full max-w-5xl bg-slate-900 rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-700 shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-3 sm:p-4 bg-slate-950 flex items-center justify-between border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-white font-bold text-sm sm:text-base">Sri Krishna Traders — Main Showroom & Storefront</span>
              </div>
              <button
                onClick={() => setIsZoomOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Full Image */}
            <div className="relative w-full aspect-[2.22/1] bg-black">
              <Image
                src="/images/store-front.jpg"
                alt="Sri Krishna Traders Full Storefront High Clarity"
                fill
                sizes="100vw"
                className="object-contain brightness-[0.87] contrast-[1.06]"
                priority
              />
            </div>

            {/* Modal Footer Info */}
            <div className="p-3 sm:p-4 bg-slate-950 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm text-slate-300 border-t border-slate-800">
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-orange-400 shrink-0" />
                <span>460/7, Tiruchengode Main Road, Near Collector Office, Thummankurichi, Namakkal</span>
              </div>
              <div className="flex items-center gap-3">
                <a 
                  href={`tel:${STORE_INFO.phone}`} 
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-orange-600 hover:bg-orange-700 text-white font-semibold transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call: {STORE_INFO.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

