'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  MessageSquare, 
  Play, 
  Pause 
} from 'lucide-react';
import { GALLERY_DATA } from '@/data/storeData';
import { useQuote } from '@/context/QuoteContext';

export default function GalleryPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
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

  return (
    <div 
      className="relative w-full h-full overflow-hidden bg-black text-white select-none flex flex-col justify-end"
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
              {/* Main Image: fully bright and sharp without dark obscuring overlays on mobile */}
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

        {/* Ambient Dark Gradient Overlays (Desktop Only for subtle bottom readability) */}
        <div className="hidden sm:block absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent pointer-events-none" />
      </div>

      {/* ========================================================================= */}
      {/* 2. SIDE NAVIGATION ARROWS (Desktop)                                       */}
      {/* ========================================================================= */}
      <button
        type="button"
        onClick={handlePrev}
        className="hidden sm:flex absolute left-4 sm:left-6 md:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#0B192C]/80 hover:bg-orange-600 text-white border border-slate-700 hover:border-orange-500 backdrop-blur-md items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 shadow-xl cursor-pointer focus:outline-none"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        type="button"
        onClick={handleNext}
        className="hidden sm:flex absolute right-4 sm:right-6 md:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#0B192C]/80 hover:bg-orange-600 text-white border border-slate-700 hover:border-orange-500 backdrop-blur-md items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 shadow-xl cursor-pointer focus:outline-none"
        aria-label="Next image"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* ========================================================================= */}
      {/* 3. CONTENT OVERLAY (Bottom-Left) & THUMBNAIL STRIP (Bottom)               */}
      {/* ========================================================================= */}
      <div className="relative z-20 w-full px-3.5 sm:px-8 pb-4 sm:pb-6 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-3 sm:gap-6 pointer-events-auto">
        
        {/* Compact Mobile Info Block (Positioned at Bottom-Left / Left-Down) */}
        <div className="sm:hidden self-start max-w-[210px] xs:max-w-[230px] bg-[#0B192C]/90 backdrop-blur-md border border-slate-700/70 rounded-xl p-2 xs:p-2.5 shadow-2xl space-y-1 text-left animate-fade-in mb-1">
          {/* Badges & Counter */}
          <div className="flex items-center justify-between gap-1">
            <span className="px-1.5 py-0.5 rounded bg-orange-600 text-white text-[9px] font-bold uppercase tracking-wide">
              {currentItem.category}
            </span>
            {currentItem.badge && (
              <span className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-200 text-[9px] font-semibold truncate max-w-[70px]">
                {currentItem.badge}
              </span>
            )}
            <span className="font-mono text-[9px] font-bold text-orange-400 bg-slate-800 border border-slate-700 px-1.5 py-0.5 rounded ml-auto tracking-wider">
              {formattedIndex}/{formattedTotal}
            </span>
          </div>

          {/* Compact Title */}
          <h2 className="text-[11px] xs:text-xs font-bold text-white leading-tight line-clamp-2">
            {currentItem.title}
          </h2>

          {/* Compact Description */}
          {currentItem.description && (
            <p className="text-[9.5px] text-slate-300 leading-snug line-clamp-1">
              {currentItem.description}
            </p>
          )}

          {/* Inquire CTA + Mini Arrow Navigation Controls */}
          <div className="flex items-center justify-between gap-1 pt-1 border-t border-slate-700/50">
            <button
              type="button"
              onClick={() => openQuote(currentItem.category, currentItem.title)}
              className="inline-flex items-center gap-1 bg-orange-600 hover:bg-orange-500 text-white font-bold text-[9px] px-2 py-0.5 rounded shadow-xs active:scale-95 transition-all cursor-pointer"
            >
              <MessageSquare className="w-2.5 h-2.5" />
              <span>Inquire Now</span>
            </button>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={handlePrev}
                className="p-1 rounded bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white active:scale-90 transition-all cursor-pointer"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-2.5 h-2.5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="p-1 rounded bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white active:scale-90 transition-all cursor-pointer"
                aria-label="Next slide"
              >
                <ChevronRight className="w-2.5 h-2.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Compact Desktop Content Overlay Card (Theme Matched & Proportionately Sized) */}
        <div className="hidden sm:block w-full max-w-md lg:max-w-lg bg-[#0B192C]/90 backdrop-blur-xl border border-slate-700/70 rounded-2xl p-4 sm:p-5 shadow-2xl space-y-2.5 transition-all duration-300">
          
          {/* Category & Status Badges */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-800 text-orange-400 text-xs font-bold uppercase tracking-wider border border-slate-700">
              <Sparkles className="w-3.5 h-3.5 text-orange-400" />
              <span>{currentItem.category}</span>
            </span>

            {currentItem.badge && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-800/80 border border-slate-700 text-slate-200 text-xs font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>{currentItem.badge}</span>
              </span>
            )}

            {/* Slide Counter Badge */}
            <span className="ml-auto font-mono text-xs font-bold text-slate-300 px-2 py-0.5 rounded bg-slate-800 border border-slate-700 tracking-widest">
              <span className="text-orange-400">{formattedIndex}</span> / {formattedTotal}
            </span>
          </div>

          {/* Dynamic Title in Crisp Brand Typography */}
          <h1 className="text-base sm:text-lg lg:text-xl font-bold text-white tracking-tight leading-snug">
            {currentItem.title}
          </h1>

          {/* Description */}
          {currentItem.description && (
            <p className="text-slate-300 text-xs sm:text-[13px] leading-relaxed line-clamp-2">
              {currentItem.description}
            </p>
          )}

          {/* Primary Action Button */}
          <div className="pt-1 flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => openQuote(currentItem.category, currentItem.title)}
              className="inline-flex items-center justify-center gap-1.5 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded-xl shadow-md shadow-orange-600/30 transition duration-200 text-xs cursor-pointer active:scale-95"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Inquire Now</span>
            </button>

            <button
              type="button"
              onClick={() => setIsAutoPlay((prev) => !prev)}
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 transition-colors cursor-pointer"
              title={isAutoPlay ? 'Pause Slideshow' : 'Play Slideshow'}
            >
              {isAutoPlay ? (
                <>
                  <Pause className="w-3 h-3 text-orange-400" />
                  <span>Pause</span>
                </>
              ) : (
                <>
                  <Play className="w-3 h-3 text-orange-400" />
                  <span>Slideshow</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Bottom Horizontal Thumbnail Strip (Right / Bottom) */}
        <div className="w-full lg:w-auto flex flex-col items-center lg:items-end gap-2 sm:gap-2.5">
          
          {/* Scrollable Thumbnail Strip */}
          <div className="flex items-center gap-2 sm:gap-2.5 overflow-x-auto max-w-[95vw] sm:max-w-full pb-1 scrollbar-none p-1.5 rounded-2xl bg-[#0B192C]/85 backdrop-blur-md border border-slate-700/70 shadow-2xl">
            {GALLERY_DATA.map((thumb, idx) => {
              const isSelected = idx === currentIndex;
              return (
                <button
                  key={thumb.id}
                  onClick={() => handleJump(idx)}
                  className={`relative w-12 h-9 xs:w-14 xs:h-10 sm:w-16 sm:h-12 md:w-18 md:h-13 rounded-lg overflow-hidden shrink-0 border-2 transition-all duration-300 cursor-pointer focus:outline-none ${
                    isSelected
                      ? 'border-orange-500 scale-105 shadow-md shadow-orange-500/40 ring-2 ring-orange-500/40'
                      : 'border-slate-700/60 opacity-60 hover:opacity-100 hover:border-slate-500'
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
                    : 'w-1.5 bg-slate-600 hover:bg-slate-400'
                }`}
                aria-label={`Jump to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>

    </div>
  );
}
