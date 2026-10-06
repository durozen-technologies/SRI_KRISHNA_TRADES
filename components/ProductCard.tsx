'use client';

import React from 'react';
import Image from 'next/image';
import { Eye } from 'lucide-react';
import { Product } from '@/data/storeData';

interface ProductCardProps {
  product: Product;
  onEnquire: (product: Product) => void;
}

export default function ProductCard({ product, onEnquire }: ProductCardProps) {
  return (
    <div className="group bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:border-slate-300 transition-all duration-200 flex flex-col justify-between">
      {/* Product Image Box */}
      <div className="relative h-36 sm:h-56 w-full bg-slate-100 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover"
        />
        
        {/* Category Pill */}
        <div className="absolute top-2.5 left-2.5 bg-[#0B192C] text-white text-xs font-semibold px-2.5 py-0.5 rounded-md max-w-[85%] truncate shadow-xs">
          {product.category}
        </div>

        {/* Brand Tag */}
        {product.brand && (
          <div className="absolute top-2.5 right-2.5 bg-slate-900 text-white text-xs font-bold px-2 py-0.5 rounded-md border border-slate-700 shadow-xs hidden xs:block sm:block">
            {product.brand}
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-3 sm:p-5 flex-1 flex flex-col justify-between space-y-2.5 sm:space-y-4">
        <div>
          <h3 className="font-bold text-slate-900 text-xs sm:text-base leading-snug group-hover:text-orange-600 transition-colors line-clamp-2">
            {product.name}
          </h3>
          <p className="text-slate-600 text-xs sm:text-sm mt-1 sm:mt-1.5 line-clamp-2 leading-relaxed hidden xs:block sm:block">
            {product.description}
          </p>
        </div>

        {/* Specs List (Desktop/Tablet) */}
        {product.specs && (
          <div className="space-y-1.5 pt-2 border-t border-slate-100 hidden sm:block">
            {product.specs.slice(0, 2).map((spec, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-slate-600">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0"></span>
                <span className="truncate">{spec}</span>
              </div>
            ))}
          </div>
        )}

        {/* Action Button */}
        <div className="pt-1 sm:pt-2">
          <button
            onClick={() => onEnquire(product)}
            className="w-full bg-slate-100 hover:bg-[#0B192C] text-slate-800 hover:text-white font-semibold py-2 sm:py-2.5 px-3 sm:px-4 rounded-lg sm:rounded-xl border border-slate-200 hover:border-transparent transition-all duration-200 text-xs sm:text-sm flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
          >
            <Eye className="w-4 h-4 text-orange-600 shrink-0" />
            <span className="truncate">Enquiry</span>
          </button>
        </div>
      </div>
    </div>
  );
}
