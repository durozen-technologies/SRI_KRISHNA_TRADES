'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Award, Zap, ShieldCheck, Sparkles, CheckCircle2, ArrowRight, Fan, Sliders, ChevronRight, Wind, Layers, Compass, Star, Eye } from 'lucide-react';
import { STORE_INFO, PRODUCTS_DATA, Product } from '@/data/storeData';
import { useQuote } from '@/context/QuoteContext';

interface HavellsFanGuideProps {
  onEnquireProduct?: (product: Product) => void;
}

export default function HavellsFanGuide({ onEnquireProduct }: HavellsFanGuideProps) {
  const { openQuote, openProductDetail } = useQuote();
  const [activeTab, setActiveTab] = useState<'bldc-underlight' | 'bldc-plus' | 'special-finish' | 'decorative' | 'table-pedestal' | 'ventilair'>('bldc-plus');
  
  // Interactive Fan Selection Guide States
  const [selectedSweep, setSelectedSweep] = useState<number>(1200);
  const [selectedRoomType, setSelectedRoomType] = useState<string>('master-bedroom');
  const [roomCondition, setRoomCondition] = useState<'dusty' | 'quiet' | 'smart'>('quiet');
  const [layoutType, setLayoutType] = useState<'linear' | 'non-linear'>('linear');

  const fanCategories = [
    {
      id: 'bldc-plus',
      label: 'BLDC+ Fans',
      count: '38+ Models',
      desc: 'High-speed energy-saving BLDC fans consuming 26W-35W with Pebble RF smart remote control.',
      models: [
        { name: 'Havells Amaya BLDC+', award: 'German Design Award 2024 & Good Design Japan', power: '28W ActivBLDC', sweep: '1200 mm', cmm: '240 m³/min', prodId: 'prod-havells-amaya-bldc' },
        { name: 'Havells Stealth Neo BLDC+', award: 'German Design Award 2025 & India Design Mark', power: '40W High Velocity', sweep: '1200 / 1400 mm', cmm: '245 m³/min', prodId: 'prod-havells-stealth-neo' },
        { name: 'Havells Efficiencia Neo', award: 'National Energy Conservation Award Winner', power: '26W 5-Star BEE', sweep: '1200 mm', cmm: '220 m³/min', prodId: 'prod-havells-efficiencia-neo' }
      ]
    },
    {
      id: 'bldc-underlight',
      label: 'BLDC+ Underlight',
      count: '14+ Models',
      desc: 'Integrated 3-color dimmable LED chandelier lighting paired with ultra-silent BLDC motors.',
      models: [
        { name: 'Havells Albus Underlight', award: 'Product of the Year 2024 Winner', power: '32W Dimmable LED', sweep: '1200 mm', cmm: '230 m³/min', prodId: 'prod-havells-albus-underlight' },
        { name: 'Havells Stealth Air Underlight', award: 'CII Design Excellence Award', power: '35W Multi-Color', sweep: '1200 mm', cmm: '240 m³/min', prodId: 'prod-havells-albus-underlight' }
      ]
    },
    {
      id: 'special-finish',
      label: 'Special Finish',
      count: '66+ Models',
      desc: 'Natural teak & walnut hydrographic woodgrain and electroplated brushed metallic trims.',
      models: [
        { name: 'Havells Woodtone Series', award: 'Hydrographic Wood Grain Finish', power: 'High Torque Copper', sweep: '1200 mm', cmm: '235 m³/min', prodId: 'prod-havells-special-finish' },
        { name: 'Havells Champagne Gold Metallic', award: 'Electroplated Mirror Canopy', power: 'Double Ball Bearings', sweep: '1200 mm', cmm: '238 m³/min', prodId: 'prod-havells-special-finish' }
      ]
    },
    {
      id: 'decorative',
      label: 'Decorative & Regular',
      count: '162+ Models',
      desc: 'Artistic foil prints, dual-tone bodies, and 400 RPM high-speed copper motors.',
      models: [
        { name: 'Havells Enticer & Elio', award: 'India Design Mark 2024 Winner', power: '390 RPM Fast Air', sweep: '600-1400 mm', cmm: '235 m³/min', prodId: 'prod-havells-enticer-elio' },
        { name: 'Havells Pacer / Sprint High-Speed', award: '100% Copper Continuous Duty', power: '400 RPM Super High', sweep: '600-1400 mm', cmm: '230 m³/min', prodId: 'prod-havells-regular-pacer' }
      ]
    },
    {
      id: 'table-pedestal',
      label: 'Table, Wall & Pedestal',
      count: '334+ Models',
      desc: 'Portable table fans, wall-mounted pull-cord fans, personal cabin fans, and heavy pedestal stands.',
      models: [
        { name: 'Havells High-Speed Table Fan', award: '90° Jerk-Free Oscillation', power: '400mm / 2000 RPM', sweep: '400 mm', cmm: 'High Air Flow', prodId: 'prod-havells-table-fan' },
        { name: 'Havells Telescopic Pedestal Fan', award: 'Telescopic Height Adjust', power: 'Thermal Overload Safe', sweep: '400 / 450 mm', cmm: 'High Air Delivery', prodId: 'prod-havells-pedestal-stand-fan' },
        { name: 'Havells Dual Pull-Cord Wall Fan', award: 'Dual Pull Cord Mechanism', power: 'Space Saving 90° Sweep', sweep: '400 mm', cmm: 'High Air Delivery', prodId: 'prod-havells-wall-fan' }
      ]
    },
    {
      id: 'ventilair',
      label: 'Ventilair & Industrial',
      count: '314+ Models',
      desc: 'Kitchen & bathroom automatic shutter exhaust fans and heavy industrial air circulators.',
      models: [
        { name: 'Havells Ventilair DB & DX', award: 'Automatic Gravity Shutters', power: 'High Suction Copper', sweep: '150-300 mm', cmm: 'Rapid Extraction', prodId: 'prod-havells-ventilair-exhaust' },
        { name: 'Havells Industrial Air Circulator', award: 'Heavy Cast Column Base', power: 'Class F Insulation', sweep: '450-750 mm', cmm: 'High Volume Industrial', prodId: 'prod-havells-industrial-air-circulator' }
      ]
    }
  ];

  const prestigiousAwards = [
    { title: 'Amaya', award: 'GERMAN DESIGN AWARD', year: '2024', flag: '🇩🇪' },
    { title: 'Amaya', award: 'GOOD DESIGN AWARD', year: '2023', flag: '🇯🇵 JAPAN' },
    { title: 'Stealth Neo', award: 'GERMAN DESIGN AWARD', year: '2025', flag: '🇩🇪' },
    { title: 'Florette All Weather', award: 'GERMAN DESIGN AWARD', year: '2026', flag: '🇩🇪' },
    { title: 'Pebble Fan Remote', award: 'GERMAN DESIGN AWARD', year: '2026', flag: '🇩🇪' },
    { title: 'Albus Underlight', award: 'PRODUCT OF THE YEAR', year: '2024', flag: '🏆' },
    { title: 'Elio Series', award: 'INDIA DESIGN MARK', year: '2024', flag: '🇮🇳' },
    { title: 'Stealth Neo', award: 'INDIA DESIGN MARK', year: '2023', flag: '🇮🇳' },
    { title: 'Efficiencia Neo', award: 'ENERGY CONSERVATION AWARD', year: '2021', flag: '⚡' },
    { title: 'Stealth Air', award: 'CII DESIGN EXCELLENCE', year: '2018', flag: '🇮🇳' },
    { title: 'Stealth Air', award: 'INDIA DESIGN MARK', year: '2018', flag: '🇮🇳' },
    { title: 'Enticer', award: 'INDIA DESIGN MARK', year: '2017', flag: '🇮🇳' },
  ];

  const sweepGuideTable = [
    { sweep: '600 mm (24")', roomSize: '1.2 m × 2.0 m (up to 30 sq ft)', roomType: 'Small Cabin, Utility, Veranda, Balcony, Washroom', bestFor: 'Compact Spaces' },
    { sweep: '900 mm (36")', roomSize: '3.0 m × 3.0 m (up to 100 sq ft)', roomType: 'Guest Bedroom, Study Room, Kitchen', bestFor: 'Medium Rooms' },
    { sweep: '1200 mm (48")', roomSize: '3.6 m × 4.0 m (100 - 180 sq ft)', roomType: 'Master Bedroom, Living Room, Dining Hall', bestFor: 'Standard Living Spaces' },
    { sweep: '1400 mm (56")', roomSize: '4.2 m × 4.8 m (180+ sq ft)', roomType: 'Large Halls, Workspaces, Commercial Spaces', bestFor: 'Spacious Hallways' },
  ];

  const handleEnquireFan = (prodId: string) => {
    const product = PRODUCTS_DATA.find((p) => p.id === prodId) || PRODUCTS_DATA.find((p) => p.brandSlug === 'havells') || PRODUCTS_DATA[0];
    if (onEnquireProduct) {
      onEnquireProduct(product);
    } else {
      openProductDetail(product);
    }
  };

  const handleCustomQuote = () => {
    openQuote();
  };

  return (
    <section className="py-16 sm:py-20 bg-[#0A0D14] text-white relative overflow-hidden border-t-2 border-red-600">
      {/* Background Decorative Lighting */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* ========================================================= */}
        {/* 1. HAVELSS "LOOK UP" HERO BANNER                         */}
        {/* ========================================================= */}
        <div className="bg-gradient-to-r from-[#170508] via-[#24080e] to-[#120406] rounded-3xl p-6 sm:p-10 border border-red-800/60 shadow-2xl mb-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-600/20 text-red-400 text-xs font-black uppercase tracking-wider border border-red-500/40">
                <Award className="w-4 h-4 text-red-400" />
                <span>HAVELLS AUTHORIZED PREMIUM FAN SHOWROOM</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase leading-none">
                LOOK <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-300 to-amber-300">UP</span>
              </h2>

              <p className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-red-400">
                TO GREAT DESIGNS | TO WIDE RANGE | TO ENERGY SAVINGS
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
                Explore the complete award-winning collection of Havells ceiling fans, 5-Star ActivBLDC silent energy savers, luxury underlight chandeliers, table fans, wall fans, and Ventilair exhaust systems.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => {
                    const elem = document.getElementById('fan-guide-calculator');
                    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-red-600 hover:bg-red-500 text-white font-black text-xs sm:text-sm px-6 py-3 rounded-xl shadow-lg shadow-red-950 transition cursor-pointer flex items-center gap-2"
                >
                  <Sliders className="w-4 h-4" />
                  <span>Interactive Room Fan Sizer</span>
                </button>

                <button
                  onClick={handleCustomQuote}
                  className="bg-slate-900 hover:bg-black text-slate-200 hover:text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl border border-red-800/60 transition cursor-pointer"
                >
                  Request Wholesale Quotation
                </button>
              </div>
            </div>

            {/* Right Visual Image Showcase */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full aspect-[4/3] max-w-sm rounded-2xl overflow-hidden bg-gradient-to-b from-slate-900 to-black p-4 border border-red-900/50 shadow-2xl flex items-center justify-center">
                <Image
                  src="/images/havells-ceiling-fan.jpg"
                  alt="Havells Stealth Amaya Luxury Ceiling Fan"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-contain p-4"
                  priority
                />
                <div className="absolute bottom-2 left-2 right-2 text-center bg-black/80 backdrop-blur-xs py-1.5 px-3 rounded-xl border border-red-950">
                  <span className="text-[10px] sm:text-xs font-black text-amber-300 tracking-wider uppercase">
                    ⭐ Havells Amaya & Stealth Neo • 28W ActivBLDC Motor
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ========================================================= */}
        {/* 2. 11 FAN SERIES CATEGORY SELECTOR                       */}
        {/* ========================================================= */}
        <div className="mb-14">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <span className="text-xs font-bold text-red-400 uppercase tracking-widest">Complete Catalog Index</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Explore All Havells Fan Series
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Select a series to view in-stock specifications, energy ratings, and design award accolades.
            </p>
          </div>

          {/* Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none justify-start lg:justify-center">
            {fanCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id as any)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition cursor-pointer flex items-center gap-2 ${
                  activeTab === cat.id
                    ? 'bg-red-600 text-white shadow-lg shadow-red-950 ring-2 ring-red-400'
                    : 'bg-slate-900/80 text-slate-300 hover:bg-slate-800 border border-slate-800'
                }`}
              >
                <Fan className={`w-3.5 h-3.5 ${activeTab === cat.id ? 'animate-spin' : ''}`} />
                <span>{cat.label}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded ${activeTab === cat.id ? 'bg-red-800 text-white' : 'bg-slate-800 text-slate-400'}`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

          {/* Active Category Models Showcase */}
          {(() => {
            const currentCat = fanCategories.find((c) => c.id === activeTab) || fanCategories[0];
            return (
              <div className="bg-slate-900/80 rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
                  <div>
                    <h4 className="text-xl font-bold text-white flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                      {currentCat.label} Range
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5">{currentCat.desc}</p>
                  </div>
                  <span className="text-xs font-bold text-amber-400 bg-amber-950/60 px-3 py-1 rounded-lg border border-amber-800/60 shrink-0">
                    Showroom Verified Stock
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {currentCat.models.map((model, idx) => (
                    <div
                      key={idx}
                      onClick={() => handleEnquireFan(model.prodId)}
                      className="bg-slate-950/90 rounded-2xl p-4 border border-slate-800 hover:border-red-500/80 transition-all duration-200 flex flex-col justify-between group cursor-pointer shadow-sm hover:shadow-red-950"
                    >
                      <div className="space-y-2">
                        <div className="flex items-start justify-between gap-2">
                          <h5 className="font-extrabold text-white text-sm sm:text-base group-hover:text-red-400 transition-colors">
                            {model.name}
                          </h5>
                          <span className="text-[10px] font-bold text-red-300 bg-red-950 px-2 py-0.5 rounded border border-red-900 shrink-0">
                            {model.power}
                          </span>
                        </div>

                        <div className="text-[11px] font-semibold text-amber-400 flex items-center gap-1.5">
                          <Award className="w-3.5 h-3.5 shrink-0" />
                          <span className="truncate">{model.award}</span>
                        </div>

                        <div className="grid grid-cols-2 gap-2 pt-2 text-xs text-slate-300 border-t border-slate-900">
                          <div>
                            <span className="text-[10px] text-slate-500 block">Sweep:</span>
                            <span className="font-mono font-bold text-slate-200">{model.sweep}</span>
                          </div>
                          <div>
                            <span className="text-[10px] text-slate-500 block">Air Delivery:</span>
                            <span className="font-mono font-bold text-slate-200">{model.cmm}</span>
                          </div>
                        </div>
                      </div>

                      <div className="pt-3 mt-3 border-t border-slate-900 flex items-center justify-between text-xs font-bold text-red-400 group-hover:text-red-300">
                        <span>Check Sizing & Price</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })()}
        </div>

        {/* ========================================================= */}
        {/* 3. PRESTIGIOUS INTERNATIONAL DESIGN AWARDS GRID          */}
        {/* ========================================================= */}
        <div className="mb-14">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-amber-400 text-xs font-black uppercase tracking-wider border border-slate-800">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>GLOBAL EXCELLENCE RECOGNITIONS</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Havells Design & Energy Conservation Awards
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Celebrated internationally with German Design Awards, Good Design Award Japan, and National Energy Conservation Awards.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {prestigiousAwards.map((item, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-b from-slate-900 to-[#120508] p-3.5 rounded-2xl border border-slate-800 text-center flex flex-col justify-between space-y-2 hover:border-amber-500/50 transition duration-200 shadow-sm"
              >
                <div className="text-lg">{item.flag}</div>
                <div>
                  <h5 className="font-black text-xs text-white uppercase tracking-tight line-clamp-1">{item.title}</h5>
                  <p className="text-[10px] font-extrabold text-amber-400 mt-1 line-clamp-2 leading-tight">{item.award}</p>
                </div>
                <div className="text-[10px] font-bold text-slate-500 bg-slate-950 py-0.5 rounded border border-slate-800">
                  {item.year}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================= */}
        {/* 4. INTERACTIVE FAN SELECTION & ROOM SIZING GUIDE         */}
        {/* ========================================================= */}
        <div id="fan-guide-calculator" className="bg-gradient-to-b from-[#140609] to-[#0A0D14] rounded-3xl p-6 sm:p-10 border-2 border-red-700/60 shadow-2xl">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <span className="text-xs font-extrabold text-red-400 uppercase tracking-widest">Architectural Sizing Guide</span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Fan Selection & Room Sizing Chart
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Select your room type and conditions to determine the exact fan sweep size and ideal layout.
            </p>
          </div>

          {/* Sweep & Room Sizing Reference Table */}
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-left text-xs sm:text-sm border-collapse bg-slate-950/80 rounded-2xl overflow-hidden border border-slate-800">
              <thead>
                <tr className="bg-red-950/80 text-red-200 border-b border-red-900 font-extrabold uppercase text-[10px] sm:text-xs tracking-wider">
                  <th className="p-3 sm:p-4">Sweep Size</th>
                  <th className="p-3 sm:p-4">Room Dimensions</th>
                  <th className="p-3 sm:p-4">Recommended Room Type</th>
                  <th className="p-3 sm:p-4">Application</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                {sweepGuideTable.map((row, idx) => (
                  <tr
                    key={idx}
                    onClick={() => setSelectedSweep(parseInt(row.sweep))}
                    className={`hover:bg-slate-900 cursor-pointer transition ${
                      selectedSweep === parseInt(row.sweep) ? 'bg-red-950/40 text-white font-semibold' : ''
                    }`}
                  >
                    <td className="p-3 sm:p-4 font-mono font-bold text-red-400 whitespace-nowrap">{row.sweep}</td>
                    <td className="p-3 sm:p-4 whitespace-nowrap">{row.roomSize}</td>
                    <td className="p-3 sm:p-4">{row.roomType}</td>
                    <td className="p-3 sm:p-4 font-semibold text-amber-300">{row.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Interactive 3-Pillar Sizing Advisor */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            
            {/* Pillar 1: Room Environment */}
            <div className="bg-slate-900/90 p-4 rounded-2xl border border-slate-800 space-y-2.5">
              <h5 className="text-xs uppercase font-extrabold text-red-400 tracking-wider">1. Room Environment</h5>
              <div className="space-y-1.5">
                <button
                  onClick={() => setRoomCondition('dusty')}
                  className={`w-full p-2.5 rounded-xl text-xs font-bold text-left transition cursor-pointer flex items-center justify-between ${
                    roomCondition === 'dusty' ? 'bg-red-600 text-white' : 'bg-slate-950 text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  <span>Dusty / Open Windows</span>
                  <span className="text-[10px] opacity-80">Anti-Dust Paint</span>
                </button>
                <button
                  onClick={() => setRoomCondition('quiet')}
                  className={`w-full p-2.5 rounded-xl text-xs font-bold text-left transition cursor-pointer flex items-center justify-between ${
                    roomCondition === 'quiet' ? 'bg-red-600 text-white' : 'bg-slate-950 text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  <span>Quiet / Study / Bedroom</span>
                  <span className="text-[10px] opacity-80">Silent BLDC Motor</span>
                </button>
                <button
                  onClick={() => setRoomCondition('smart')}
                  className={`w-full p-2.5 rounded-xl text-xs font-bold text-left transition cursor-pointer flex items-center justify-between ${
                    roomCondition === 'smart' ? 'bg-red-600 text-white' : 'bg-slate-950 text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  <span>Smart / Modern Living</span>
                  <span className="text-[10px] opacity-80">Underlight + IoT</span>
                </button>
              </div>
            </div>

            {/* Pillar 2: Room Layout Selection */}
            <div className="bg-slate-900/90 p-4 rounded-2xl border border-slate-800 space-y-2.5">
              <h5 className="text-xs uppercase font-extrabold text-red-400 tracking-wider">2. Room Layout</h5>
              <div className="space-y-1.5">
                <button
                  onClick={() => setLayoutType('linear')}
                  className={`w-full p-2.5 rounded-xl text-xs font-bold text-left transition cursor-pointer flex items-center justify-between ${
                    layoutType === 'linear' ? 'bg-red-600 text-white' : 'bg-slate-950 text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  <span>Linear (Square / Standard)</span>
                  <span className="text-[10px] opacity-80">1 Center Fan</span>
                </button>
                <button
                  onClick={() => setLayoutType('non-linear')}
                  className={`w-full p-2.5 rounded-xl text-xs font-bold text-left transition cursor-pointer flex items-center justify-between ${
                    layoutType === 'non-linear' ? 'bg-red-600 text-white' : 'bg-slate-950 text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  <span>Non-Linear (L-Shape / Large)</span>
                  <span className="text-[10px] opacity-80">2 Staggered Fans</span>
                </button>
              </div>
            </div>

            {/* Pillar 3: Style & Color Pairing */}
            <div className="bg-slate-900/90 p-4 rounded-2xl border border-slate-800 space-y-2.5">
              <h5 className="text-xs uppercase font-extrabold text-red-400 tracking-wider">3. Interior Style Advice</h5>
              <div className="p-3 bg-slate-950 rounded-xl text-xs text-slate-300 space-y-1 leading-relaxed">
                <p><strong className="text-white">Modern Interiors:</strong> Pair with solid coloured BLDC fans (Espresso / Matte White).</p>
                <p><strong className="text-white">Traditional Homes:</strong> Opt for decorative foil trims & show-caps (Enticer / Elio).</p>
              </div>
            </div>

          </div>

          {/* Recommended Result Bar */}
          <div className="bg-slate-950 p-5 rounded-2xl border border-red-800/80 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center md:text-left">
              <span className="text-[10px] font-extrabold uppercase text-amber-400 tracking-wider">Recommended Havells Configuration:</span>
              <h4 className="text-lg sm:text-xl font-black text-white">
                {selectedSweep}mm Sweep • {roomCondition === 'dusty' ? 'Anti-Dust Liquid Coat' : roomCondition === 'smart' ? 'Albus BLDC+ Underlight' : 'Amaya / Stealth Neo BLDC+'} ({layoutType === 'linear' ? '1 Fan Setup' : '2 Fan Balanced Setup'})
              </h4>
            </div>

            <button
              onClick={() => {
                const queryText = encodeURIComponent(`Hello Sri Krishna Traders, I need pricing and stock check for: Havells ${selectedSweep}mm Fan (${roomCondition} condition, ${layoutType} layout).`);
                window.open(`https://wa.me/${STORE_INFO.whatsapp.replace(/[^0-9]/g, '')}?text=${queryText}`, '_blank');
              }}
              className="w-full md:w-auto bg-red-600 hover:bg-red-500 text-white font-black text-xs sm:text-sm px-6 py-3 rounded-xl transition cursor-pointer flex items-center justify-center gap-2 shrink-0 shadow-lg shadow-red-950"
            >
              <span>Instant WhatsApp Sizing Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
