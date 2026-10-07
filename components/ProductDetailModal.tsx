'use client';

import React from 'react';
import Image from 'next/image';
import { X, Check, Phone, Send, ArrowRight, ShieldCheck, Truck, Sparkles } from 'lucide-react';
import { Product, STORE_INFO } from '@/data/storeData';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onRequestQuote: (product: Product) => void;
}

export default function ProductDetailModal({ product, onClose, onRequestQuote }: ProductDetailModalProps) {
  if (!product) return null;

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Sri Krishna Traders, I would like to inquire about price and stock availability for:\n\n*${product.name}*\nCategory: ${product.category}\nBrand: ${product.brand || 'Standard'}`
    );
    const rawNumber = STORE_INFO.whatsapp.replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${rawNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#0B192C] text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-orange-400 uppercase tracking-wider">{product.category}</span>
          </div>
          <button
            onClick={onClose}
            className="text-slate-300 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
            
            {/* Image Box */}
            <div className="relative h-60 w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className={product.image.includes('fan') || product.image.includes('panel') ? 'object-contain p-4 bg-white' : 'object-cover'}
              />
              {product.brand && (
                <div className={`absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-lg shadow-sm ${
                  product.brandSlug === 'havells' ? 'bg-red-600 text-white' :
                  product.brandSlug === 'rr-kabel' ? 'bg-emerald-600 text-white' :
                  product.brandSlug === 'crompton' ? 'bg-blue-600 text-white' :
                  product.brandSlug === 'vguard' ? 'bg-amber-500 text-slate-950 font-extrabold' :
                  product.brandSlug === 'finolex' ? 'bg-cyan-600 text-white' :
                  product.brandSlug === 'kundan' ? 'bg-indigo-700 text-white' : 'bg-slate-900 text-white'
                }`}>
                  {product.brand}
                </div>
              )}
            </div>

            {/* Product Details */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900 leading-tight">
                {product.name}
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed">
                {product.description}
              </p>

              {product.specs && (
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Specifications & Highlights</h4>
                  {product.specs.map((spec, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              )}

              <div className="pt-2 flex items-center gap-4 text-xs text-slate-500">
                <span className="flex items-center gap-1">
                  <Truck className="w-3.5 h-3.5 text-orange-500" />
                  Direct Site Delivery
                </span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                  100% Genuine
                </span>
              </div>
            </div>

          </div>

          {/* Action Footer */}
          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => {
                onClose();
                onRequestQuote(product);
              }}
              className="flex-1 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-5 rounded-xl shadow-md transition text-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Enquiry</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={handleWhatsApp}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-5 rounded-xl transition text-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>WhatsApp Inquiry</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
