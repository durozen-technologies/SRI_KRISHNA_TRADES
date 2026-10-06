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
      {/* 3. BOTTOM CONTROLS: THUMBNAILS & PAGINATION DOTS                          */}
      {/* ========================================================================= */}
      <div className="relative z-20 w-full px-3.5 sm:px-8 pb-4 sm:pb-6 flex flex-col items-center justify-center gap-2 pointer-events-auto">
        
        {/* Subtle Slide Title & Counter Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0B192C]/85 backdrop-blur-md border border-slate-700/70 shadow-lg text-xs">
          <span className="font-bold text-orange-400 uppercase tracking-wider text-[11px]">
            {currentItem.category}
          </span>
          <span className="text-slate-500">•</span>
          <span className="font-medium text-white truncate max-w-[200px] sm:max-w-md">
            {currentItem.title}
          </span>
          <span className="font-mono text-[10px] font-bold text-slate-300 bg-slate-800 border border-slate-700 px-1.5 py-0.5 rounded ml-1 tracking-wider">
            {formattedIndex}/{formattedTotal}
          </span>
        </div>

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
  );
}
