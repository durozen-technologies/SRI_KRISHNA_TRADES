'use client';

import React from 'react';
import CategoryCard from './CategoryCard';
import { CATEGORIES_DATA } from '@/data/storeData';
import { Layers } from 'lucide-react';

interface CategoriesSectionProps {
  onSelectCategory: (categorySlug: string) => void;
}

export default function CategoriesSection({ onSelectCategory }: CategoriesSectionProps) {
  return (
    <section id="categories" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5 text-orange-600" />
            <span>Full Range Inventory</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B192C] tracking-tight">
            Everything You Need to Build Better
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Reliable products for homes, construction projects and everyday requirements.
          </p>
        </div>

        {/* Categories Grid (2-column on mobile, 3-column on desktop) */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-6 lg:gap-8">
          {CATEGORIES_DATA.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              onSelectCategory={onSelectCategory}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
