'use client';

import React from 'react';
import Image from 'next/image';
import { Award, Zap, ShieldCheck, Sun, Fan, Flame, ArrowRight, CheckCircle2, Sparkles, PhoneCall } from 'lucide-react';
import { STORE_INFO, PRODUCTS_DATA, Product } from '@/data/storeData';

interface HavellsFlagshipSectionProps {
  onSelectHavellsFilter?: () => void;
  onEnquireProduct?: (product: Product) => void;
  onOpenQuote?: () => void;
}

export default function HavellsFlagshipSection({
  onSelectHavellsFilter,
  onEnquireProduct,
  onOpenQuote
}: HavellsFlagshipSectionProps) {
  const havellsProducts = PRODUCTS_DATA.filter((p) => p.brandSlug === 'havells');

  const flagshipHighlights = [
    {
      title: "Havells Solar Automatic Gate Lights",
      category: "Outdoor Lighting",
      description: "Automatic dusk-to-dawn intelligent solar gate & pillar light with monocrystalline solar panel and IP65 weatherproof casing.",
      specs: ["Zero Electricity Bill", "Auto Day/Night Sensing", "IP65 Waterproof Housing", "High-Capacity Li-Ion Battery"],
      image: "/images/havells-led-panel-light.jpg",
      badge: "Eco Solar",
      productId: "prod-havells-solar-gate-light"
    },
    {
      title: "Stealth & Festiva BLDC Energy Saver Fans",
      category: "Ceiling & BLDC Fans",
      description: "Whisper-quiet aerodynamic designer fans saving up to 60% power with high air delivery and high velocity 350 RPM.",
      specs: ["28W-40W Low Power Consumption", "1200mm Aerodynamic Sweep", "245 m³/min Ultra Air Delivery", "5-Star BEE Energy Rating"],
      image: "/images/havells-ceiling-fan.jpg",
      badge: "5-Star Energy Saver",
      productId: "prod-havells-stealth-ceiling-fan"
    },
    {
      title: "Life Line Plus S3 FR-LSH Copper Wires",
      category: "House Wires & Cables",
      description: "100% electrolytic annealed copper conductors with Flame Retardant Low Smoke & Halogen (FR-LSH) dual-layer insulation.",
      specs: ["0.75 to 6.0 sq mm In Stock", "Flame Retardant Low Smoke (FR-LSH)", "90m Certified Sealed Box", "ISI & CE Certified Safety"],
      image: "/images/havells-cable-range.jpg",
      badge: "Fire-Safe Shield",
      productId: "prod-havells-life-line-wire"
    },
    {
      title: "Fabio Modular Switches & Euro-II MCBs",
      category: "Modular Switches & Switchgears",
      description: "Premium flame-retardant modular switch plates with spark-free silver contacts and 10kA short circuit breaking Euro-II MCBs.",
      specs: ["1M to 18M Gang Plates & Grids", "Child-Safe Shuttered Sockets", "6A to 63A Euro-II MCBs", "Double Door SPN & TPN DBs"],
      image: "/images/havells-mcb-distribution-box.jpg",
      badge: "Euro-II Certified",
      productId: "prod-havells-modular-switches"
    }
  ];

  const handleExploreHavells = () => {
    if (onSelectHavellsFilter) {
      onSelectHavellsFilter();
    }
    const elem = document.getElementById('products');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCardClick = (productId: string) => {
    const prod = havellsProducts.find((p) => p.id === productId) || havellsProducts[0];
    if (onEnquireProduct && prod) {
      onEnquireProduct(prod);
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-[#110406] via-[#1a0509] to-[#0d0305] text-white relative overflow-hidden border-y-2 border-red-600/30">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-rose-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ff3344_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Flagship Header Banner */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/20 text-red-400 text-xs sm:text-sm font-extrabold uppercase tracking-widest border border-red-500/40 shadow-lg shadow-red-950/50 animate-pulse">
            <Award className="w-4 h-4 text-red-400" />
            <span>PRIMARY AUTHORIZED FLAGSHIP BRAND</span>
          </div>

          <div className="flex items-center justify-center gap-3 pt-1">
            <span className="h-1 w-10 sm:w-16 bg-gradient-to-r from-transparent to-red-500 rounded-full"></span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white uppercase">
              HAVELLS <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-300 to-amber-300">SPOTLIGHT</span>
            </h2>
            <span className="h-1 w-10 sm:w-16 bg-gradient-to-l from-transparent to-red-500 rounded-full"></span>
          </div>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Sri Krishna Traders is proud to be Namakkal&apos;s leading authorized dealership for <strong className="text-white font-bold">Havells India</strong>. We maintain extensive showroom inventory of Solar Gate Lights, Stealth BLDC Fans, FR-LSH Fire-Retardant Wires, Fabio Modular Switches, and Euro-II MCBs.
          </p>

          {/* Quick Stats Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <span className="px-3 py-1 rounded-lg bg-red-950/80 border border-red-800/60 text-red-200 text-xs font-semibold flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-red-400" /> 100% Genuine ISI Stock
            </span>
            <span className="px-3 py-1 rounded-lg bg-red-950/80 border border-red-800/60 text-red-200 text-xs font-semibold flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-red-400" /> On-Site Project Delivery
            </span>
            <span className="px-3 py-1 rounded-lg bg-red-950/80 border border-red-800/60 text-red-200 text-xs font-semibold flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-red-400" /> Full Manufacturer Warranty
            </span>
          </div>
        </div>

        {/* 4-Card Flagship Product Showcase Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {flagshipHighlights.map((item, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(item.productId)}
              className="group bg-gradient-to-b from-[#24080d] to-[#160407] rounded-2xl sm:rounded-3xl border border-red-900/60 hover:border-red-500 p-4 sm:p-5 flex flex-col justify-between transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-red-900/40 hover:-translate-y-1 cursor-pointer relative overflow-hidden"
            >
              {/* Top Accent Ribbon */}
              <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-red-600 via-rose-500 to-amber-500 opacity-80 group-hover:opacity-100 transition-opacity"></div>

              {/* Product Image Container */}
              <div className="relative h-44 sm:h-48 w-full rounded-2xl overflow-hidden bg-white/95 mb-4 p-2 shadow-inner">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Badge Tag */}
                <div className="absolute top-2.5 left-2.5 bg-red-600 text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-md shadow-md">
                  {item.badge}
                </div>
                <div className="absolute top-2.5 right-2.5 bg-slate-900/90 text-red-300 text-[10px] font-bold px-2 py-0.5 rounded-md shadow-md">
                  HAVELLS
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-red-400 block mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-extrabold text-white text-base sm:text-lg leading-snug group-hover:text-red-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 text-xs mt-1.5 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>

                {/* Specs */}
                <div className="pt-3 border-t border-red-950/80 space-y-1.5">
                  {item.specs.slice(0, 2).map((spec, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0"></span>
                      <span className="truncate">{spec}</span>
                    </div>
                  ))}
                </div>

                {/* Card Footer Button */}
                <div className="pt-3">
                  <div className="w-full bg-red-950/80 group-hover:bg-red-600 text-red-200 group-hover:text-white font-bold py-2 px-3 rounded-xl border border-red-800/60 group-hover:border-transparent text-xs flex items-center justify-center gap-1.5 transition-all">
                    <span>View Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Havells Call to Action Bar */}
        <div className="bg-gradient-to-r from-red-950/90 via-[#2d0a11] to-red-950/90 rounded-3xl p-6 sm:p-8 border border-red-600/40 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-red-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full Showroom Inventory Ready for Dispatch</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Looking for Bulk Contractor Rates on Havells Wires & Switchgear?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              Get special wholesale pricing, contractor estimation support, and immediate site delivery for residential and commercial projects.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <button
              onClick={handleExploreHavells}
              className="w-full sm:w-auto bg-red-600 hover:bg-red-500 text-white font-black text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-lg shadow-red-900/50 transition cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Explore All Havells Stock</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {onOpenQuote && (
              <button
                onClick={onOpenQuote}
                className="w-full sm:w-auto bg-slate-900 hover:bg-black text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl border border-red-700/50 transition cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Request Havells Quote</span>
              </button>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
