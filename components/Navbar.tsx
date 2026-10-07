'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Phone, Menu, X, ChevronRight, MessageSquare, Award } from 'lucide-react';
import { STORE_INFO } from '@/data/storeData';
import { useQuote } from '@/context/QuoteContext';

interface NavbarProps {
  onOpenQuote?: () => void;
}

export default function Navbar({ onOpenQuote }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { openQuote } = useQuote();

  const handleQuoteClick = () => {
    if (onOpenQuote) {
      onOpenQuote();
    } else {
      openQuote();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  // Close mobile menu on pathname change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Slim Announcement Bar */}
      <div className="bg-[#0B192C] text-slate-300 text-xs py-2.5 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 tracking-wide font-medium text-slate-300">
            <span className="inline-block w-2 h-2 rounded-full bg-orange-500"></span>
            <span>{STORE_INFO.tagline}</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-slate-300 text-xs">
            <span className="flex items-center gap-1.5">
              <span className="text-orange-400 font-semibold">Authorized Brands:</span> Havells • Crompton • V-Guard • Finolex • RR Kābel
            </span>
            <span className="text-slate-600">|</span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <span className="text-slate-200 font-semibold">Hours:</span> Mon-Sat 8AM-9PM • Sun 8AM-6:30PM
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm py-3.5 border-b border-slate-200'
            : 'bg-white py-4 border-b border-slate-200'
        }`}
      >
        <div className="max-w-7xl mx-auto px-2.5 sm:px-6 lg:px-8 flex items-center justify-between gap-1.5 sm:gap-2">
          
          {/* Left Area: Mobile Hamburger Button on Left + Brand Logo & Name */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 min-w-0">
            {/* Hamburger Menu on the LEFT side (Mobile only) */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-1.5 -ml-1 text-slate-800 hover:bg-slate-100 rounded-lg transition focus:outline-none flex items-center justify-center cursor-pointer shrink-0"
              aria-label="Open navigation menu"
            >
              <Menu className="w-5 h-5 text-slate-900" />
            </button>

            {/* Brand Logo & Name */}
            <Link 
              href="/" 
              className="flex items-center gap-2 sm:gap-3 group focus:outline-none min-w-0"
            >
              <div className="relative w-9 h-9 sm:w-12 sm:h-12 rounded-xl bg-[#0B192C] overflow-hidden border border-slate-700/80 shadow-md shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="Sri Krishna Traders Logo"
                  fill
                  sizes="48px"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="flex flex-col justify-center min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center whitespace-nowrap leading-none">
                  <span className="font-extrabold text-xs xs:text-sm sm:text-xl tracking-tight text-[#0B192C] leading-none">
                    SRI KRISHNA
                  </span>
                  <span className="font-bold sm:font-light text-[10px] xs:text-xs sm:text-xl tracking-wider text-orange-600 sm:ml-1 mt-0.5 sm:mt-0 leading-none">
                    TRADERS
                  </span>
                </div>
                <p className="text-xs uppercase font-semibold tracking-wider text-slate-600 mt-1 hidden sm:block">
                  Hardware & Building Materials
                </p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links (Routes: /, /about, /products, /services, /gallery, /contact) */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-200 relative group py-1 ${
                    isActive ? 'text-orange-600 font-semibold' : 'text-slate-700 hover:text-orange-600'
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-orange-600 transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  ></span>
                </Link>
              );
            })}
          </div>

          {/* Right Action Buttons (Desktop) */}
          <div className="hidden sm:flex items-center gap-3">
            {/* WhatsApp Quick Link */}
            <a
              href={`https://wa.me/${STORE_INFO.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hello Sri Krishna Traders, I have an enquiry regarding materials and pricing.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-semibold text-emerald-700 hover:text-emerald-800 py-2 px-3 rounded-xl bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200 transition"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp</span>
            </a>

            {/* Phone Quick Link */}
            <a
              href={`tel:${STORE_INFO.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-orange-600 py-2 px-3 rounded-lg hover:bg-slate-50 transition"
            >
              <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-[#0B192C]">
                <Phone className="w-3.5 h-3.5 text-orange-600" />
              </div>
              <div className="text-left">
                <span className="block text-xs text-slate-600 font-normal">Call Project Desk</span>
                <span className="text-slate-900 font-medium">{STORE_INFO.phone}</span>
              </div>
            </a>

            {/* Orange CTA Button */}
            <button
              onClick={handleQuoteClick}
              className="bg-orange-600 hover:bg-orange-700 text-white font-semibold text-sm px-5 py-2.5 rounded-xl shadow-sm transition duration-200 cursor-pointer flex items-center gap-1.5"
            >
              <span>Enquiry</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Right Action: Enquiry Button on Right */}
          <div className="flex items-center sm:hidden shrink-0">
            <button
              onClick={handleQuoteClick}
              className="bg-orange-600 active:bg-orange-700 text-white font-semibold text-xs px-3.5 py-2 rounded-lg shadow-sm cursor-pointer whitespace-nowrap"
            >
              Enquiry
            </button>
          </div>
        </div>
      </nav>

      {/* ========================================================= */}
      {/* MOBILE LEFT SIDE MENU DRAWER (Opens from Left Side)      */}
      {/* ========================================================= */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          {/* Backdrop overlay */}
          <div
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity animate-fade-in"
            aria-hidden="true"
          />

          {/* Left Drawer Panel */}
          <div className="relative w-72 sm:w-80 max-w-[85vw] bg-white h-full shadow-2xl flex flex-col justify-between z-10 animate-fade-in">
            {/* Drawer Header */}
            <div className="p-4 bg-[#0B192C] text-white flex items-center justify-between border-b border-slate-800">
              <div className="flex items-center gap-2.5">
                <div className="relative w-8 h-8 rounded-lg bg-slate-800 overflow-hidden border border-slate-700 shrink-0">
                  <Image
                    src="/images/logo.png"
                    alt="Sri Krishna Traders Logo"
                    fill
                    sizes="32px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-extrabold text-sm tracking-tight leading-none">
                    SRI KRISHNA <span className="text-orange-400">TRADERS</span>
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">Hardware & Materials</div>
                </div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Nav Links */}
            <div className="p-4 overflow-y-auto flex-1 space-y-1">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider px-3 mb-2">Navigation</p>
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between py-2.5 px-3 rounded-xl text-sm font-medium transition ${
                      isActive
                        ? 'bg-orange-50 text-orange-600 font-semibold'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-orange-600'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className={`w-4 h-4 ${isActive ? 'text-orange-600' : 'text-slate-400'}`} />
                  </Link>
                );
              })}

              {/* Dealership Pill in Drawer */}
              <div className="pt-3 mt-3 border-t border-slate-100 px-3">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-orange-600 bg-orange-50 px-2.5 py-1 rounded-md">
                  <Award className="w-3.5 h-3.5" />
                  Havells • Crompton • V-Guard • Finolex • RR Kābel
                </span>
              </div>
            </div>

            {/* Drawer Footer Actions */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 space-y-3">
              <a
                href={`tel:${STORE_INFO.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-2.5 p-2.5 bg-white rounded-xl border border-slate-200 text-slate-800 shadow-xs"
              >
                <div className="w-7 h-7 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div className="truncate">
                  <div className="text-xs text-slate-500">Project Desk</div>
                  <div className="text-xs font-bold text-slate-900 truncate">{STORE_INFO.phone}</div>
                </div>
              </a>

              <a
                href={`https://wa.me/${STORE_INFO.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-2.5 bg-white rounded-xl border border-slate-200 text-slate-800 shadow-xs"
              >
                <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500">WhatsApp Chat</div>
                  <div className="text-xs font-bold text-emerald-600">Open Chat Now</div>
                </div>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleQuoteClick();
                }}
                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2.5 px-4 rounded-xl shadow-md text-xs text-center flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Enquiry</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
