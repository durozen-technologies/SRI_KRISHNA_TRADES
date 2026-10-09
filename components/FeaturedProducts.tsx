'use client';

import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { PRODUCTS_DATA, BRANDS_DATA, Product } from '@/data/storeData';
import { Star, Filter, ArrowRight, Zap, Sparkles, Award } from 'lucide-react';

interface FeaturedProductsProps {
  onEnquireProduct: (product: Product) => void;
  selectedCategoryFilter?: string;
  selectedBrandFilter?: string;
}

export default function FeaturedProducts({ onEnquireProduct, selectedCategoryFilter, selectedBrandFilter }: FeaturedProductsProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeBrand, setActiveBrand] = useState<string>('all');

  useEffect(() => {
    if (selectedCategoryFilter) {
      setActiveCategory(selectedCategoryFilter);
      setActiveBrand('all');
    }
  }, [selectedCategoryFilter]);

  useEffect(() => {
    if (selectedBrandFilter) {
      setActiveBrand(selectedBrandFilter);
      setActiveCategory('all');
    }
  }, [selectedBrandFilter]);

  const categoryTabs = [
    { label: 'All Products', slug: 'all' },
    { label: 'Fans & Ventilation', slug: 'fans-ventilation' },
    { label: 'Lighting & Gate Lights', slug: 'lighting-fixtures' },
    { label: 'Wires & Cables', slug: 'wires-cables' },
    { label: 'Switches & Electricals', slug: 'electrical-goods' },
    { label: 'Pipes & Plumbing', slug: 'pipes-plumbing' },
    { label: 'Motors & Pumps', slug: 'motors-pumps' },
    { label: 'Water Heaters (Geysers)', slug: 'water-heaters' },
    { label: 'Water Storage Tanks', slug: 'water-storage' },
    { label: 'Bathroom, Taps & Sanitary', slug: 'bathroom-sanitary' },
    { label: 'Tools & Hardware', slug: 'hardware-essentials' },
  ];

  const brandTabs = [
    { label: 'All Brands', slug: 'all' },
    { label: 'Havells', slug: 'havells', dot: 'bg-red-500' },
    { label: 'Crompton', slug: 'crompton', dot: 'bg-blue-500' },
    { label: 'Luker', slug: 'luker', dot: 'bg-amber-500' },
    { label: 'Finolex', slug: 'finolex', dot: 'bg-cyan-500' },
    { label: 'RR Kābel / RR', slug: 'rr-kabel', dot: 'bg-emerald-500' },
    { label: 'V-Guard', slug: 'vguard', dot: 'bg-yellow-500' },
    { label: 'Kundan Cable', slug: 'kundan', dot: 'bg-indigo-500' },
    { label: 'CERA', slug: 'cera', dot: 'bg-teal-500' },
    { label: 'Parryware', slug: 'parryware', dot: 'bg-purple-500' },
    { label: 'Cheran & Sharp', slug: 'cheran-sharp', dot: 'bg-blue-700' },
    { label: 'Supreme', slug: 'supreme', dot: 'bg-red-700' },
    { label: 'Taparia & Venus', slug: 'taparia-venus', dot: 'bg-orange-600' },
  ];

  const filteredProducts = PRODUCTS_DATA.filter((p) => {
    const matchesCategory = activeCategory === 'all' || p.categorySlug === activeCategory;
    const matchesBrand = activeBrand === 'all' || p.brandSlug === activeBrand;
    return matchesCategory && matchesBrand;
  });

  return (
    <section id="products" className="py-16 sm:py-20 bg-slate-50 border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-2">
              <Star className="w-3.5 h-3.5 text-orange-600 fill-orange-600" />
              <span>In-Stock Verified Catalog</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B192C] tracking-tight">
              Featured Products & Brands
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-1 max-w-xl">
              Genuine authorized stock of Havells, Crompton, Luker, Finolex, RR Kābel, V-Guard, Kundan, CERA, Parryware, Supreme, Cheran & Sharp, and Taparia.
            </p>
          </div>

          {/* Quick Brand Filter Badges */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-1 hidden sm:inline">Filter Brand:</span>
            {brandTabs.map((brand) => {
              const isHavells = brand.slug === 'havells';
              return (
                <button
                  key={brand.slug}
                  onClick={() => {
                    setActiveBrand(brand.slug);
                    if (brand.slug !== 'all') {
                      setActiveCategory('all');
                    }
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                    activeBrand === brand.slug
                      ? isHavells
                        ? 'bg-red-600 text-white shadow-md ring-2 ring-red-400'
                        : 'bg-orange-600 text-white shadow-sm'
                      : isHavells
                        ? 'bg-red-50 text-red-700 hover:bg-red-100 border-2 border-red-400/80 font-black'
                        : 'bg-white text-slate-700 hover:bg-slate-200/70 border border-slate-200'
                  }`}
                >
                  {isHavells ? (
                    <span className="text-amber-300 font-black">★</span>
                  ) : (
                    brand.dot && <span className={`w-2 h-2 rounded-full ${brand.dot}`}></span>
                  )}
                  <span>{isHavells ? 'Havells (Flagship)' : brand.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-8 scrollbar-none border-b border-slate-200">
          {categoryTabs.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => {
                setActiveCategory(cat.slug);
                if (cat.slug !== 'all') {
                  setActiveBrand('all');
                }
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === cat.slug && activeBrand === 'all'
                  ? 'bg-[#0B192C] text-white shadow-md'
                  : 'bg-white text-slate-600 hover:bg-slate-200/80 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Grid (2-column on mobile, 4-column on desktop) */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onEnquire={onEnquireProduct}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-12 text-center border border-slate-200">
            <p className="text-slate-600 text-sm font-medium">No products match your active filter selection.</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setActiveBrand('all');
              }}
              className="mt-4 px-4 py-2 bg-[#0B192C] text-white text-xs font-bold rounded-xl cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Bottom Helper Bar - Integrated Dark Accent Banner */}
        <div className="mt-12 bg-[#0B192C] text-white rounded-2xl p-5 sm:p-6 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-800 text-orange-400 flex items-center justify-center font-bold shrink-0 border border-slate-700">
              ✓
            </div>
            <div>
              <h3 className="font-bold text-white text-sm sm:text-base">Looking for a specific model, wire gauge, fan color, or brand?</h3>
              <p className="text-xs text-slate-300 mt-0.5">We carry over 1,000+ items in warehouse stock. Get instant quotation & bulk contractor rates.</p>
            </div>
          </div>
          <button
            onClick={() => onEnquireProduct(PRODUCTS_DATA[0])}
            className="w-full sm:w-auto bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs sm:text-sm px-6 py-2.5 rounded-xl transition cursor-pointer shrink-0 shadow-sm whitespace-nowrap"
          >
            Custom Material Inquiry
          </button>
        </div>

      </div>
    </section>
  );
}

