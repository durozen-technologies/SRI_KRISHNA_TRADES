'use client';

import React from 'react';
import { Star, MessageSquare } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  review: string;
  rating: number;
  initials: string;
  badgeBg: string;
}

const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't-1',
    name: 'Rajesh Sharma',
    role: 'Homeowner, Renovation Project',
    review: 'Purchased all our bathroom fittings and CPVC plumbing pipes here. The team explained exact pipe fittings and delivered directly to our site on the same afternoon.',
    rating: 5,
    initials: 'RS',
    badgeBg: 'bg-orange-600 text-white'
  },
  {
    id: 't-2',
    name: 'Anand Varma',
    role: 'Civil Contractor',
    review: 'Sri Krishna Traders is our primary material supplier for plumbing, water storage tanks, and electrical wiring. Transparent wholesale rates and reliable stock.',
    rating: 5,
    initials: 'AV',
    badgeBg: 'bg-[#0B192C] text-white'
  },
  {
    id: 't-3',
    name: 'Pooja Iyer',
    role: 'Interior Architect',
    review: 'Their bathroom showroom display has gorgeous designer faucets and modern basin options. Customer support is prompt and very well organized.',
    rating: 5,
    initials: 'PI',
    badgeBg: 'bg-blue-700 text-white'
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Customer Trust & Reviews</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B192C] tracking-tight">
            Trusted by Homeowners & Builders
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            See what contractors, plumbers, and homeowners say about our products and on-site delivery.
          </p>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* 5 Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>

                <p className="text-slate-700 text-sm leading-relaxed italic">
                  &ldquo;{t.review}&rdquo;
                </p>
              </div>

              {/* User Avatar & Info */}
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs shrink-0 shadow-xs ${t.badgeBg}`}>
                  {t.initials}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">{t.name}</h4>
                  <p className="text-xs text-slate-600">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
