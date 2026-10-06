'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, MessageSquare, Sparkles, Eye } from 'lucide-react';
import { GalleryItem } from '@/data/storeData';
import { useQuote } from '@/context/QuoteContext';

interface FullScreenGallerySliderProps {
  isOpen: boolean;
  items: GalleryItem[];
  initialIndex?: number;
  onClose: () => void;
  onInquire?: (item: GalleryItem) => void;
}

export default function FullScreenGallerySlider({
  isOpen,
  items,
  initialIndex = 0,
  onClose,
  onInquire
}: FullScreenGallerySliderProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right' | null>(null);
  
  // Touch swipe handling
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const minSwipeDistance = 45;

  const { openQuote } = useQuote();

  // Sync initialIndex when opened
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(Math.max(0, Math.min(initialIndex, items.length - 1)));
    }
  }, [isOpen, initialIndex, items.length]);

  const handleNext = useCallback(() => {
    if (items.length <= 1) return;
    setSlideDirection('right');
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % items.length);
    setTimeout(() => setIsTransitioning(false), 280);
  }, [items.length]);

  const handlePrev = useCallback(() => {
    if (items.length <= 1) return;
    setSlideDirection('left');
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    setTimeout(() => setIsTransitioning(false), 280);
  }, [items.length]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Lock body scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, handleNext, handlePrev, onClose]);

  // Touch event handlers for mobile swiping
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
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  if (!isOpen || items.length === 0) return null;

  const currentItem = items[currentIndex] || items[0];
  const formattedIndex = String(currentIndex + 1).padStart(2, '0');
  const formattedTotal = String(items.length).padStart(2, '0');

  const handleInquiryClick = () => {
    if (onInquire) {
      onInquire(currentItem);
    } else {
      openQuote(currentItem.category, currentItem.title);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Full-screen Gallery Slider"
      className="fixed inset-0 z-[100] flex flex-col justify-between select-none animate-fade-in"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.93)', backdropFilter: 'blur(16px)' }}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Top Header Bar */}
      <div className="relative z-10 w-full px-4 sm:px-8 py-4 sm:py-6 flex items-center justify-between text-white">
        {/* Left: Brand / Section Indicator */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center text-orange-400">
            <Eye className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-400">
              Showroom & Yard Gallery
            </span>
            <div className="text-xs sm:text-sm font-semibold text-slate-200">
              Sri Krishna Traders
            </div>
          </div>
        </div>

        {/* Center: Slide Counter */}
        <div className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-mono tracking-widest text-slate-200 backdrop-blur-md">
          <span className="text-orange-400 font-bold">{formattedIndex}</span>
          <span className="text-slate-500">/</span>
          <span>{formattedTotal}</span>
        </div>

        {/* Right: Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="group flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-slate-200 hover:text-white backdrop-blur-md transition-all duration-200 cursor-pointer focus:outline-none"
          aria-label="Close full-screen gallery"
        >
          <span className="text-xs font-medium hidden sm:inline text-slate-300 group-hover:text-white">Esc</span>
          <X className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:rotate-90" />
        </button>
      </div>

      {/* Main Image Viewport with Side Navigation */}
      <div className="relative flex-1 w-full max-w-7xl mx-auto px-2 sm:px-6 flex items-center justify-center overflow-hidden my-auto">
        
        {/* Left Navigation Arrow */}
        {items.length > 1 && (
          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-2 sm:left-4 md:left-6 z-20 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-black/40 hover:bg-orange-600/90 text-white border border-white/20 hover:border-orange-500/80 backdrop-blur-md flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 shadow-xl cursor-pointer focus:outline-none"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5 sm:w-7 sm:h-7" />
          </button>
        )}

        {/* Center Main High-Resolution Image Container */}
        <div className="relative w-full h-[55vh] sm:h-[65vh] md:h-[72vh] flex items-center justify-center">
          <div
            key={currentItem.id}
            className={`relative w-full h-full max-w-5xl rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 ease-out ${
              isTransitioning
                ? slideDirection === 'right'
                  ? 'opacity-80 scale-95 translate-x-3'
                  : 'opacity-80 scale-95 -translate-x-3'
                : 'opacity-100 scale-100 translate-x-0'
            }`}
          >
            <Image
              src={currentItem.image}
              alt={currentItem.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
              className="object-contain sm:object-cover drop-shadow-2xl"
            />
            {/* Subtle Gradient Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />
          </div>
        </div>

        {/* Right Navigation Arrow */}
        {items.length > 1 && (
          <button
            type="button"
            onClick={handleNext}
            className="absolute right-2 sm:right-4 md:right-6 z-20 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-black/40 hover:bg-orange-600/90 text-white border border-white/20 hover:border-orange-500/80 backdrop-blur-md flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 shadow-xl cursor-pointer focus:outline-none"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5 sm:w-7 sm:h-7" />
          </button>
        )}
      </div>

      {/* Floating Bottom Information Overlay & Controls */}
      <div className="relative z-10 w-full px-4 sm:px-6 pb-5 sm:pb-8 pt-2 flex flex-col items-center gap-3.5">
        
        {/* Floating Glass Banner */}
        <div className="w-full max-w-3xl bg-slate-900/80 backdrop-blur-xl border border-white/15 rounded-2xl p-3.5 sm:p-4 px-4 sm:px-6 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-6">
          <div className="text-center sm:text-left space-y-1 w-full sm:w-auto">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3 h-3 text-orange-400" />
                <span>{currentItem.category}</span>
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>Ready Stock</span>
              </span>
            </div>
            
            <h3 className="text-sm sm:text-base md:text-lg font-bold text-white tracking-tight leading-snug">
              {currentItem.title}
            </h3>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto justify-center sm:justify-end shrink-0">
            <button
              type="button"
              onClick={handleInquiryClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl shadow-lg shadow-orange-600/30 transition-all duration-200 cursor-pointer active:scale-95"
            >
              <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Inquire Now</span>
            </button>
          </div>
        </div>

        {/* Dot Pagination & Mobile Counter */}
        <div className="flex items-center gap-2">
          {/* Mobile slide counter */}
          <span className="sm:hidden text-[11px] font-mono font-semibold text-slate-400 mr-1">
            {formattedIndex} / {formattedTotal}
          </span>

          {items.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => {
                setSlideDirection(idx > currentIndex ? 'right' : 'left');
                setCurrentIndex(idx);
              }}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer focus:outline-none ${
                idx === currentIndex
                  ? 'w-6 sm:w-8 bg-orange-500 shadow-sm shadow-orange-500/50'
                  : 'w-1.5 sm:w-2 bg-white/30 hover:bg-white/60'
              }`}
              aria-label={`Jump to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </div>
  );
}
