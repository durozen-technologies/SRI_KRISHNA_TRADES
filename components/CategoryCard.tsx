'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, Droplets, Zap, Wrench, Cylinder, Layers, Hammer, LucideIcon } from 'lucide-react';
import { Category } from '@/data/storeData';

interface CategoryCardProps {
  category: Category;
  onSelectCategory: (categorySlug: string) => void;
}

const iconMap: Record<string, LucideIcon> = {
  'bathroom-sanitary': Droplets,
  'electrical-goods': Zap,
  'pipes-plumbing': Wrench,
  'water-storage': Cylinder,
  'building-materials': Layers,
  'hardware-essentials': Hammer,
};

export default function CategoryCard({ category, onSelectCategory }: CategoryCardProps) {
  const IconComponent = iconMap[category.slug] || Layers;

  return (
    <div
      onClick={() => onSelectCategory(category.slug)}
      className="group bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:border-slate-300 transition-all duration-200 flex flex-col justify-between cursor-pointer"
    >
      {/* Top Image Container */}
      <div className="relative h-32 sm:h-48 w-full overflow-hidden bg-slate-100">
        <Image
          src={category.image}
          alt={category.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
          className={category.image.includes('water-heater') || category.image.includes('fan') ? "object-contain p-2.5 sm:p-3.5 group-hover:scale-105 transition-transform duration-300" : "object-cover group-hover:scale-105 transition-transform duration-300"}
        />
        
        {/* Subtle overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>

        {/* Item count tag */}
        <div className="absolute top-2.5 right-2.5 bg-white/95 text-slate-800 text-xs font-bold px-2.5 py-0.5 rounded-full shadow-xs">
          {category.itemCount}
        </div>
      </div>

      {/* Floating Circular Icon overlapping image and content */}
      <div className="px-3 sm:px-5 -mt-4 sm:-mt-6 relative z-10 flex items-center justify-between">
        <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-white border border-slate-200 text-[#0B192C] group-hover:bg-[#0B192C] group-hover:text-orange-400 group-hover:border-[#0B192C] shadow-sm flex items-center justify-center transition-all duration-200">
          <IconComponent className="w-4 h-4 sm:w-6 sm:h-6" />
        </div>
        <span className="text-xs font-bold text-orange-700 bg-orange-100 px-2.5 py-0.5 rounded border border-orange-200">
          Verified Stock
        </span>
      </div>

      {/* Content Area */}
      <div className="p-3 sm:p-5 pt-2 sm:pt-3 flex-1 flex flex-col justify-between space-y-2.5 sm:space-y-3">
        <div>
          <h3 className="font-bold text-slate-900 text-xs sm:text-base leading-snug group-hover:text-orange-600 transition-colors line-clamp-2">
            {category.name}
          </h3>
          <p className="text-slate-600 text-xs sm:text-sm mt-1 sm:mt-1.5 leading-relaxed line-clamp-2 hidden xs:block sm:block">
            {category.description}
          </p>
        </div>

        {/* Feature Pills (visible on tablet/desktop) */}
        <div className="space-y-1.5 pt-2 border-t border-slate-100 hidden sm:block">
          {category.features.slice(0, 2).map((feat, i) => (
            <div key={i} className="flex items-center gap-2 text-xs text-slate-600">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0"></span>
              <span className="truncate">{feat}</span>
            </div>
          ))}
        </div>

        {/* Card Footer: Explore Link with circular arrow */}
        <div className="pt-2 flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-700 group-hover:text-orange-700 transition-colors">
          <span>Explore</span>
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-slate-200 group-hover:border-orange-600 group-hover:bg-orange-600 flex items-center justify-center text-slate-700 group-hover:text-white transition-all duration-200">
            <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-700 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
          </div>
        </div>
      </div>
    </div>
  );
}
