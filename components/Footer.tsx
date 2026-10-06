'use client';

import React from 'react';
import Link from 'next/link';
import { Building2, Phone, MessageSquare, Mail, MapPin, Clock, ArrowUp, ChevronRight } from 'lucide-react';
import { STORE_INFO } from '@/data/storeData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  const productCategories = [
    { name: 'Bathroom & Sanitary Ware', href: '/products' },
    { name: 'Electrical Goods', href: '/products' },
    { name: 'Pipes & Plumbing', href: '/products' },
    { name: 'Water Storage', href: '/products' },
    { name: 'Building Materials', href: '/products' },
    { name: 'Hardware Essentials', href: '/products' },
  ];

  return (
    <footer className="bg-[#07111E] text-slate-400 text-sm border-t border-slate-800/80">
      
      {/* ========================================================================= */}
      {/* MOBILE COMPACT FOOTER (Amazon Mobile Style) - Visible only on < md screens */}
      {/* ========================================================================= */}
      <div className="block md:hidden">
        {/* Amazon-style full-width Back to Top Bar */}
        <button
          onClick={scrollToTop}
          className="w-full bg-[#112338] hover:bg-[#19324f] text-slate-200 py-3 text-center text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 border-b border-slate-800 active:bg-slate-800 transition cursor-pointer"
        >
          <span>Back to top</span>
          <ArrowUp className="w-3.5 h-3.5 text-orange-400" />
        </button>

        <div className="px-5 py-6 space-y-6">
          {/* Brand header */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-800/80">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-white">
                <Building2 className="w-4 h-4 text-orange-400" />
              </div>
              <div>
                <span className="font-bold text-sm text-white tracking-tight">SRI KRISHNA</span>{' '}
                <span className="font-light text-sm text-orange-500">TRADERS</span>
              </div>
            </Link>
            <span className="text-[10px] font-semibold text-orange-400 bg-slate-800/90 px-2 py-0.5 rounded border border-slate-700">
              Santé Dealer
            </span>
          </div>

          {/* Compact 2-Column Links Grid */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-5 text-xs">
            {/* Quick Links Column */}
            <div className="space-y-2.5">
              <h4 className="text-white font-bold text-xs uppercase tracking-wider pb-1 border-b border-slate-800">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {quickLinks.slice(0, 5).map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-slate-300 hover:text-orange-400 transition block truncate"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products Column */}
            <div className="space-y-2.5">
              <h4 className="text-white font-bold text-xs uppercase tracking-wider pb-1 border-b border-slate-800">
                Products
              </h4>
              <ul className="space-y-2">
                {productCategories.slice(0, 5).map((cat) => (
                  <li key={cat.name}>
                    <Link
                      href={cat.href}
                      className="text-slate-300 hover:text-orange-400 transition block truncate"
                    >
                      {cat.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Us Column */}
            <div className="space-y-2 col-span-2 pt-2 border-t border-slate-800/80">
              <h4 className="text-white font-bold text-xs uppercase tracking-wider">
                Contact Us
              </h4>
              <div className="grid grid-cols-2 gap-2 pt-1 text-[11px]">
                <a
                  href={`tel:${STORE_INFO.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-1.5 p-2 bg-slate-900/90 rounded-lg border border-slate-800 text-slate-200"
                >
                  <Phone className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                  <span className="truncate">{STORE_INFO.phone}</span>
                </a>
                <a
                  href={`https://wa.me/${STORE_INFO.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 p-2 bg-slate-900/90 rounded-lg border border-slate-800 text-emerald-400"
                >
                  <MessageSquare className="w-3.5 h-3.5 shrink-0" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>
              <div className="flex items-start gap-1.5 text-[11px] text-slate-400 pt-1">
                <MapPin className="w-3.5 h-3.5 text-orange-400 shrink-0 mt-0.5" />
                <span className="line-clamp-1">{STORE_INFO.address}</span>
              </div>
            </div>
          </div>

          {/* Compact Store Hours & Copyright */}
          <div className="pt-4 border-t border-slate-800 text-[11px] text-slate-400 space-y-1.5 text-center">
            <div className="flex items-center justify-center gap-1.5 text-slate-300 font-medium">
              <Clock className="w-3 h-3 text-orange-400" />
              <span>Mon-Sat: 8AM-9PM • Sun: 8AM-6:30PM</span>
            </div>
            <p className="text-slate-500 pt-1">© 2026 Sri Krishna Traders. All rights reserved.</p>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* DESKTOP & TABLET FOOTER (Unchanged Layout) - Visible only on md+ screens */}
      {/* ========================================================================= */}
      <div className="hidden md:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          
          {/* Column 1: Company Profile (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-white shadow-sm">
                <Building2 className="w-5 h-5 text-orange-400" />
              </div>
              <div>
                <span className="font-extrabold text-xl tracking-tight text-white">SRI KRISHNA</span>{' '}
                <span className="font-light text-xl text-orange-400">TRADERS</span>
                <p className="text-xs uppercase font-semibold tracking-wider text-slate-400 mt-0.5">
                  Hardware & Building Materials
                </p>
              </div>
            </Link>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-sm">
              Your trusted retail destination for premium bathroom fittings, electrical components, plumbing pipes, overhead water tanks, and essential construction supplies.
            </p>

            <div className="pt-2">
              <span className="inline-block px-3 py-1 bg-slate-800 text-orange-400 text-xs font-semibold rounded-lg border border-slate-700">
                Official Santé Bath Fittings Dealer
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-300 hover:text-orange-400 transition-colors duration-200 text-xs sm:text-sm flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Products (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider">Products</h3>
            <ul className="space-y-2.5">
              {productCategories.map((cat) => (
                <li key={cat.name}>
                  <Link
                    href={cat.href}
                    className="text-slate-300 hover:text-orange-400 transition-colors duration-200 text-xs sm:text-sm flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                    <span>{cat.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Hours (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider">Contact & Store Info</h3>
            
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <span className="text-slate-300">{STORE_INFO.address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-orange-400 shrink-0" />
                <a href={`tel:${STORE_INFO.phone.replace(/\s+/g, '')}`} className="text-slate-300 hover:text-white transition">
                  {STORE_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-orange-400 shrink-0" />
                <a 
                  href={`https://wa.me/${STORE_INFO.whatsapp.replace(/[^0-9]/g, '')}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-slate-300 hover:text-orange-400 transition"
                >
                  WhatsApp: {STORE_INFO.whatsapp}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-orange-400 shrink-0" />
                <span className="text-slate-300">{STORE_INFO.email}</span>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-800 text-xs space-y-1">
              <div className="font-semibold text-slate-200 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-orange-400" />
                <span>Store Timings:</span>
              </div>
              <div className="text-slate-300 pl-5">
                <div>Mon-Sat: {STORE_INFO.timings.weekdays}</div>
                <div>Sunday: {STORE_INFO.timings.sunday}</div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright & back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Sri Krishna Traders. All rights reserved.</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-orange-400" />
          </button>
        </div>
      </div>
    </footer>
  );
}
