'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ChevronLeft, 
  ChevronRight, 
  Building2, 
  Sparkles, 
  MessageSquare, 
  Menu, 
  X, 
  Phone, 
  Play, 
  Pause, 
  Eye, 
  Layers 
} from 'lucide-react';
import { GALLERY_DATA, STORE_INFO } from '@/data/storeData';
import { useQuote } from '@/context/QuoteContext';

export default function GalleryPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right');
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const { openQuote } = useQuote();

  // Touch Swipe Handling
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const minSwipeDistance = 45;

  const totalSlides = GALLERY_DATA.length;

  const handleNext = useCallback(() => {
    setSlideDirection('right');
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
    setTimeout(() => setIsTransitioning(false), 300);
  }, [totalSlides]);

  const handlePrev = useCallback(() => {
    setSlideDirection('left');
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    setTimeout(() => setIsTransitioning(false), 300);
  }, [totalSlides]);

  const handleJump = (index: number) => {
    if (index === currentIndex) return;
    setSlideDirection(index > currentIndex ? 'right' : 'left');
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === ' ') {
        e.preventDefault();
        setIsAutoPlay((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  // Autoplay Timer
  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      handleNext();
    }, 4500);
    return () => clearInterval(interval);
  }, [isAutoPlay, handleNext]);

  // Touch event handlers
  const onTouchStart = (e: React.TouchEvent) => {
    touchEndX.current = null;
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }
  };

  const currentItem = GALLERY_DATA[currentIndex];
  const formattedIndex = String(currentIndex + 1).padStart(2, '0');
  const formattedTotal = String(totalSlides).padStart(2, '0');

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <div 
      className="relative w-screen h-screen overflow-hidden bg-black text-white select-none flex flex-col justify-between"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* ========================================================================= */}
      {/* 1. FULL VIEWPORT BACKGROUND IMAGE SLIDER                                  */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 z-0">
        {GALLERY_DATA.map((item, idx) => {
          const isActive = idx === currentIndex;
          return (
            <div
              key={item.id}
              className={`absolute inset-0 transition-all duration-700 ease-out ${
                isActive
                  ? 'opacity-100 scale-100 pointer-events-auto'
                  : 'opacity-0 scale-105 pointer-events-none'
              }`}
            >
              {/* Main Image: fully bright and sharp without dark obscuring overlays */}
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  priority={idx === 0 || idx === currentIndex}
                  sizes="100vw"
                  className="object-contain sm:object-cover object-center"
                />
              </div>
            </div>
          );
        })}

        {/* Ambient Dark Gradient Overlays (Desktop Only for contrast; Removed from mobile for maximum image clarity) */}
        <div className="hidden sm:block absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-black/70 pointer-events-none" />
        <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/50 pointer-events-none" />
      </div>

      {/* ========================================================================= */}
      {/* 2. FLOATING MINIMAL HEADER (Top Overlay)                                  */}
      {/* ========================================================================= */}
      <header className="relative z-30 w-full px-4 sm:px-8 py-3 sm:py-6 flex items-center justify-between pointer-events-auto">
        {/* Brand Logo & Name */}
        <Link 
          href="/" 
          className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none"
        >
          <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-xl bg-white/15 hover:bg-white/25 border border-white/25 backdrop-blur-md flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform duration-300">
            <Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400" />
          </div>
          <div className="flex flex-col justify-center min-w-0">
            <div className="flex items-center whitespace-nowrap leading-none">
              <span className="font-extrabold text-xs xs:text-[15px] sm:text-xl tracking-tight text-white drop-shadow-md">
                SRI KRISHNA
              </span>
              <span className="font-bold sm:font-light text-xs xs:text-[15px] sm:text-xl tracking-wider text-orange-400 ml-1 drop-shadow-md">
                TRADERS
              </span>
            </div>
            <p className="text-[9px] sm:text-[10px] uppercase font-semibold tracking-wider text-slate-300 mt-1 hidden sm:block">
              Hardware & Building Materials
            </p>
          </div>
        </Link>

        {/* Center: Frosted Glass Nav Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/15 shadow-xl">
          {navLinks.map((link) => {
            const isActive = link.href === '/gallery';
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium px-4 py-1.5 rounded-full transition-all duration-200 ${
                  isActive
                    ? 'bg-orange-600 text-white font-semibold shadow-sm shadow-orange-600/40'
                    : 'text-slate-200 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions: Phone + Enquiry CTA + Mobile Hamburger */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Phone Quick Link (Desktop) */}
          <a
            href={`tel:${STORE_INFO.phone.replace(/\s+/g, '')}`}
            className="hidden sm:flex items-center gap-2 text-xs font-semibold text-slate-200 hover:text-white px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 backdrop-blur-md transition"
          >
            <Phone className="w-3.5 h-3.5 text-orange-400" />
            <span>{STORE_INFO.phone}</span>
          </a>

          {/* Enquiry Button */}
          <button
            onClick={() => openQuote(currentItem.category, currentItem.title)}
            className="hidden xs:inline-flex items-center gap-1.5 bg-orange-600 hover:bg-orange-700 text-white font-semibold text-xs sm:text-sm px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl shadow-md shadow-orange-600/20 hover:shadow-lg transition duration-200 cursor-pointer active:scale-95"
          >
            <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Enquiry</span>
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-2 rounded-xl bg-black/60 hover:bg-black/80 border border-white/20 backdrop-blur-md text-white transition focus:outline-none cursor-pointer shadow-md"
            aria-label="Open menu"
          >
            <Menu className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* 2b. CONDENSED MOBILE INFO BLOCK (Upper Right Quadrant, Below Header)      */}
      {/* ========================================================================= */}
      <div className="sm:hidden absolute top-16 right-3 z-30 max-w-[215px] xs:max-w-[245px] bg-black/65 backdrop-blur-md border border-white/20 rounded-xl p-2.5 shadow-2xl space-y-1.5 text-left pointer-events-auto animate-fade-in">
        {/* Badges & Counter */}
        <div className="flex items-center justify-between gap-1">
          <span className="px-1.5 py-0.5 rounded bg-orange-600 text-white text-[9px] font-bold uppercase tracking-wide">
            {currentItem.category}
          </span>
          {currentItem.badge && (
            <span className="px-1.5 py-0.5 rounded bg-white/15 text-slate-200 text-[9px] font-semibold truncate max-w-[80px]">
              {currentItem.badge}
            </span>
          )}
          <span className="font-mono text-[9px] font-bold text-orange-400 bg-white/10 px-1.5 py-0.5 rounded ml-auto tracking-wider">
            {formattedIndex}/{formattedTotal}
          </span>
        </div>

        {/* Compact Title */}
        <h2 className="text-xs xs:text-[13px] font-extrabold text-white leading-tight line-clamp-2">
          {currentItem.title}
        </h2>

        {/* Compact Description */}
        {currentItem.description && (
          <p className="text-[10px] text-slate-300 leading-snug line-clamp-2">
            {currentItem.description}
          </p>
        )}

        {/* Inquire CTA + Mini Arrow Navigation Controls */}
        <div className="flex items-center justify-between gap-1.5 pt-1 border-t border-white/10">
          <button
            type="button"
            onClick={() => openQuote(currentItem.category, currentItem.title)}
            className="inline-flex items-center gap-1 bg-orange-600 hover:bg-orange-500 text-white font-bold text-[10px] px-2.5 py-1 rounded-md shadow-xs active:scale-95 transition-all"
          >
            <MessageSquare className="w-2.5 h-2.5" />
            <span>Inquire Now</span>
          </button>

          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={handlePrev}
              className="p-1 rounded-md bg-white/15 hover:bg-white/30 text-white active:scale-90 transition-all"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-3 h-3" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="p-1 rounded-md bg-white/15 hover:bg-white/30 text-white active:scale-90 transition-all"
              aria-label="Next slide"
            >
              <ChevronRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. SIDE NAVIGATION ARROWS (Desktop)                                       */}
      {/* ========================================================================= */}
      <button
        type="button"
        onClick={handlePrev}
        className="hidden sm:flex absolute left-4 sm:left-6 md:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-black/50 hover:bg-orange-600 text-white border border-white/20 hover:border-orange-500 backdrop-blur-md items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 shadow-2xl cursor-pointer focus:outline-none"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-5 h-5 sm:w-7 sm:h-7" />
      </button>

      <button
        type="button"
        onClick={handleNext}
        className="hidden sm:flex absolute right-4 sm:right-6 md:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-black/50 hover:bg-orange-600 text-white border border-white/20 hover:border-orange-500 backdrop-blur-md items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 shadow-2xl cursor-pointer focus:outline-none"
        aria-label="Next image"
      >
        <ChevronRight className="w-5 h-5 sm:w-7 sm:h-7" />
      </button>

      {/* ========================================================================= */}
      {/* 4. CONTENT OVERLAY (Bottom-Left Desktop) & THUMBNAIL STRIP (Bottom)       */}
      {/* ========================================================================= */}
      <div className="relative z-20 w-full px-4 sm:px-8 pb-3 sm:pb-8 flex flex-col lg:flex-row items-center lg:items-end justify-between gap-3 sm:gap-6 pointer-events-auto">
        
        {/* Full Desktop Content Overlay Card (Hidden on mobile to preserve clear image view) */}
        <div className="hidden sm:block w-full max-w-xl bg-[#0B192C]/85 backdrop-blur-xl border border-white/15 rounded-3xl p-5 sm:p-7 shadow-2xl space-y-3.5 transition-all duration-300">
          
          {/* Category & Status Badges */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-orange-400 text-xs font-bold uppercase tracking-wider border border-slate-700">
              <Sparkles className="w-3.5 h-3.5 text-orange-400" />
              <span>{currentItem.category}</span>
            </span>

            {currentItem.badge && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-slate-200 text-xs font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>{currentItem.badge}</span>
              </span>
            )}

            {/* Slide Counter Badge */}
            <span className="ml-auto font-mono text-xs font-bold text-slate-300 px-2.5 py-0.5 rounded bg-white/10 border border-white/10 tracking-widest">
              <span className="text-orange-400">{formattedIndex}</span> / {formattedTotal}
            </span>
          </div>

          {/* Dynamic Title in Crisp White Modern Typography */}
          <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-tight">
            {currentItem.title}
          </h1>

          {/* Description */}
          {currentItem.description && (
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-2 sm:line-clamp-3">
              {currentItem.description}
            </p>
          )}

          {/* Primary Action Button */}
          <div className="pt-2 flex items-center gap-3">
            <button
              type="button"
              onClick={() => openQuote(currentItem.category, currentItem.title)}
              className="inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg shadow-orange-600/30 transition duration-200 text-xs sm:text-sm cursor-pointer active:scale-95"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Inquire Now</span>
            </button>

            <button
              type="button"
              onClick={() => setIsAutoPlay((prev) => !prev)}
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-slate-200 transition-colors cursor-pointer"
              title={isAutoPlay ? 'Pause Slideshow' : 'Play Slideshow'}
            >
              {isAutoPlay ? (
                <>
                  <Pause className="w-3.5 h-3.5 text-orange-400" />
                  <span className="hidden sm:inline">Pause</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 text-orange-400" />
                  <span className="hidden sm:inline">Slideshow</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Bottom Horizontal Thumbnail Strip (Preserved with distinct spacing below showroom image) */}
        <div className="w-full lg:w-auto flex flex-col items-center lg:items-end gap-2 sm:gap-3">
          
          {/* Scrollable Thumbnail Strip */}
          <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto max-w-[95vw] sm:max-w-full pb-1 scrollbar-none p-1.5 sm:p-2 rounded-2xl bg-black/65 backdrop-blur-md border border-white/20 shadow-2xl">
            {GALLERY_DATA.map((thumb, idx) => {
              const isSelected = idx === currentIndex;
              return (
                <button
                  key={thumb.id}
                  onClick={() => handleJump(idx)}
                  className={`relative w-12 h-9 xs:w-14 xs:h-10 sm:w-20 sm:h-14 rounded-lg sm:rounded-xl overflow-hidden shrink-0 border-2 transition-all duration-300 cursor-pointer focus:outline-none ${
                    isSelected
                      ? 'border-orange-500 scale-105 shadow-md shadow-orange-500/40 ring-2 ring-orange-500/50'
                      : 'border-white/20 opacity-60 hover:opacity-100 hover:border-white/50'
                  }`}
                  aria-label={`Go to slide ${idx + 1}: ${thumb.title}`}
                >
                  <Image
                    src={thumb.image}
                    alt={thumb.title}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                  {isSelected && (
                    <div className="absolute inset-0 bg-orange-600/20" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Indicator Dots */}
          <div className="flex items-center gap-1.5">
            {GALLERY_DATA.map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleJump(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === currentIndex
                    ? 'w-5 sm:w-6 bg-orange-500'
                    : 'w-1.5 bg-white/40 hover:bg-white/70'
                }`}
                aria-label={`Jump to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>

      {/* ========================================================================= */}
      {/* 5. MOBILE MENU DRAWER                                                     */}
      {/* ========================================================================= */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/70 backdrop-blur-xs transition-opacity animate-fade-in"
            aria-hidden="true"
          />

          <div className="relative w-72 max-w-[85vw] bg-[#0B192C] text-white h-full shadow-2xl flex flex-col justify-between z-10 animate-fade-in border-r border-slate-800">
            {/* Header */}
            <div className="p-4 flex items-center justify-between border-b border-slate-800">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center">
                  <Building2 className="w-4 h-4 text-orange-400" />
                </div>
                <div>
                  <div className="font-extrabold text-sm tracking-tight leading-none">
                    SRI KRISHNA <span className="text-orange-400">TRADERS</span>
                  </div>
                  <div className="text-[9px] text-slate-400 mt-0.5">Showroom Gallery</div>
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

            {/* Links */}
            <div className="p-4 overflow-y-auto flex-1 space-y-1">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-3 mb-2">Navigation</p>
              {navLinks.map((link) => {
                const isActive = link.href === '/gallery';
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between py-2.5 px-3 rounded-xl text-sm font-medium transition ${
                      isActive
                        ? 'bg-orange-600 text-white font-semibold'
                        : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </Link>
                );
              })}
            </div>

            {/* Footer */}
            <div className="p-4 bg-slate-900/80 border-t border-slate-800 space-y-2.5">
              <a
                href={`tel:${STORE_INFO.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-2 p-2.5 bg-slate-800/80 rounded-xl text-xs font-semibold text-slate-200"
              >
                <Phone className="w-4 h-4 text-orange-400" />
                <span>{STORE_INFO.phone}</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openQuote(currentItem.category, currentItem.title);
                }}
                className="w-full bg-orange-600 hover:bg-orange-500 text-white font-bold py-2.5 px-4 rounded-xl text-xs text-center flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Inquire Now</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
