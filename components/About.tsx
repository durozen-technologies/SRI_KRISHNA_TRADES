'use client';

import React from 'react';
import Image from 'next/image';
import { Award, CheckCircle2, Users, Building, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: ShieldCheck,
      title: "Authorized Dealer",
      desc: "Authorized partner for Havells, Crompton, V-Guard, Finolex Pipes & RR Kābel with 100% genuine brand warranty."
    },
    {
      icon: Building,
      title: "Extensive Stock",
      desc: "Over 1,000+ ready-to-dispatch SKUs in hardware, pipes, fittings & sanitary ware."
    },
    {
      icon: HeartHandshake,
      title: "Practical Guidance",
      desc: "Direct assistance with technical sizing, pipe diameters, and material estimates."
    },
    {
      icon: Users,
      title: "Contractor Friendly",
      desc: "Specialized support for builders, plumbers, electricians and home renovators."
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Story */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-900 aspect-[4/5]">
                <Image
                  src="/images/store-interior.png"
                  alt="Sri Krishna Traders Showroom & Comprehensive Material Inventory"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center brightness-[0.95] contrast-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/25 to-transparent"></div>
                
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <p className="text-xs uppercase font-bold tracking-wider text-orange-400">Our Showroom & Stock</p>
                  <p className="font-semibold text-sm sm:text-base mt-1 text-slate-100 leading-snug">
                    "Authentic Havells, Crompton, Finolex & RR Kābel inventory ready for direct pickup & on-site dispatch."
                  </p>
                </div>
              </div>

              {/* Secondary Floating Mini Showcase */}
              <div className="absolute -bottom-4 -right-2 sm:-right-4 w-28 sm:w-36 aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border-2 border-white bg-slate-900 hidden xs:block">
                <Image
                  src="/images/store-pvc-bends-shelving.jpg"
                  alt="Finolex & PVC Heavy Fittings Shelving"
                  fill
                  sizes="150px"
                  className="object-cover brightness-[1.08] contrast-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-1.5">
                  <span className="text-[9px] font-bold text-white tracking-tight">Plumbing Stock</span>
                </div>
              </div>

              {/* Floating Stat Pill */}
              <div className="absolute -top-3 -left-2 sm:-left-4 bg-[#0B192C] text-white p-3 rounded-2xl shadow-md border border-slate-700 flex items-center gap-3 z-10">
                <div className="w-9 h-9 rounded-xl bg-slate-800 text-orange-400 flex items-center justify-center font-bold">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold">100% Genuine</div>
                  <div className="text-xs text-slate-300">Verified Brands & Stock</div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider">
              <span>About Sri Krishna Traders</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B192C] tracking-tight leading-tight">
              Building Better Spaces with Quality Products
            </h2>

            <p className="text-slate-700 text-base sm:text-lg leading-relaxed max-w-xl">
              Sri Krishna Traders is a trusted retail destination for bathroom and sanitary ware, electrical goods, plumbing products, pipes, water storage solutions and essential building materials.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl">
              Whether you are an individual homeowner upgrading a bathroom, a master plumber looking for precision pressure valves, or a contractor executing a multi-story build, our catalog is curated to deliver unmatched longevity, safety, and performance.
            </p>

            {/* Highlights Grid - Flat Clean List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-200/80">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-start gap-3 py-2">
                    <div className="w-8 h-8 rounded-lg bg-orange-100/80 text-orange-700 flex items-center justify-center shrink-0 mt-0.5 border border-orange-200/60">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm">{item.title}</h3>
                      <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
