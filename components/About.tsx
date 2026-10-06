'use client';

import React from 'react';
import Image from 'next/image';
import { Award, CheckCircle2, Users, Building, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: ShieldCheck,
      title: "Authorized Dealer",
      desc: "Dedicated dealer for Santé Bath Fittings & certified electrical/plumbing brands."
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
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80"
                  alt="Sri Krishna Traders Building & Hardware Quality"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent"></div>
                
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="bg-[#0B192C]/95 p-4 rounded-2xl shadow-md border border-slate-700">
                    <p className="text-xs uppercase font-bold tracking-wider text-orange-400">Our Commitment</p>
                    <p className="font-semibold text-sm sm:text-base mt-1 text-white leading-snug">
                      "Uncompromising product durability for residential & commercial building projects."
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Stat Pill */}
              <div className="absolute -top-4 -left-2 sm:-left-4 bg-[#0B192C] text-white p-3.5 rounded-2xl shadow-md border border-slate-700 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-800 text-orange-400 flex items-center justify-center font-bold">
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

            <p className="text-slate-700 text-base sm:text-lg leading-relaxed max-w-2xl">
              Sri Krishna Traders is a trusted retail destination for bathroom and sanitary ware, electrical goods, plumbing products, pipes, water storage solutions and essential building materials.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl">
              Whether you are an individual homeowner upgrading a bathroom, a master plumber looking for precision pressure valves, or a contractor executing a multi-story build, our catalog is curated to deliver unmatched longevity, safety, and performance.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm">{item.title}</h3>
                      <p className="text-xs text-slate-600 mt-1 leading-normal">{item.desc}</p>
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
