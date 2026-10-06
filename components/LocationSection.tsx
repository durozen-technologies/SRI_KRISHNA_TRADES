'use client';

import React from 'react';
import Image from 'next/image';
import { MapPin, Phone, MessageSquare, Clock, Calendar, Navigation, Sparkles, Send } from 'lucide-react';
import { STORE_INFO } from '@/data/storeData';

export default function LocationSection() {
  const handleWhatsApp = () => {
    const rawNumber = STORE_INFO.whatsapp.replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${rawNumber}?text=${encodeURIComponent('Hello Sri Krishna Traders, I would like to visit the store / inquire about materials.')}`, '_blank');
  };

  const mapUrl = `https://maps.google.com/?q=${encodeURIComponent('Sri Krishna Traders, Aayyampalayam 1-460, Tiruchengode - Namakkal - Trichy Road, Thummankurichi, Namakkal, Tamil Nadu 637003')}`;

  return (
    <section id="contact" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-orange-600" />
            <span>Store Location & Timings</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B192C] tracking-tight">
            Visit Sri Krishna Traders
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Stop by our retail counter or get in touch for instant material quotes and site deliveries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Store Info Cards (Left side) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Opening Hours Highlight Card */}
            <div className="bg-[#0B192C] text-white rounded-2xl p-6 sm:p-7 shadow-sm relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-slate-800 text-orange-400 flex items-center justify-center">
                    <Clock className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-lg text-white">Opening Hours</h3>
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-800 text-orange-400 border border-slate-700">
                  {STORE_INFO.timings.highlight}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-slate-800/90 p-4 rounded-xl border border-slate-700">
                  <span className="block text-xs text-slate-300 font-medium">Monday – Saturday</span>
                  <span className="text-base font-bold text-white mt-0.5 block">{STORE_INFO.timings.weekdays}</span>
                </div>
                <div className="bg-slate-800/90 p-4 rounded-xl border border-slate-700">
                  <span className="block text-xs text-slate-300 font-medium">Sunday</span>
                  <span className="text-base font-bold text-white mt-0.5 block">{STORE_INFO.timings.sunday}</span>
                </div>
              </div>
            </div>

            {/* Contact Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Phone Card */}
              <a
                href={`tel:${STORE_INFO.phone.replace(/\s+/g, '')}`}
                className="bg-slate-50 hover:bg-white p-5 rounded-2xl border border-slate-200 hover:border-orange-300 shadow-sm transition-all duration-200 flex flex-col justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white group-hover:bg-[#0B192C] text-[#0B192C] group-hover:text-white border border-slate-200 flex items-center justify-center transition-colors shadow-xs">
                    <Phone className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-600 font-medium">Phone Enquiries</span>
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                      {STORE_INFO.phone}
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-semibold text-orange-600 mt-4 block">Click to Call Now →</span>
              </a>

              {/* WhatsApp Card */}
              <button
                onClick={handleWhatsApp}
                className="bg-slate-50 hover:bg-white p-5 rounded-2xl border border-slate-200 hover:border-orange-300 shadow-sm transition-all duration-200 flex flex-col justify-between group text-left cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white group-hover:bg-[#0B192C] text-[#0B192C] group-hover:text-white border border-slate-200 flex items-center justify-center transition-colors shadow-xs">
                    <MessageSquare className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-600 font-medium">Instant WhatsApp</span>
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                      Chat with Project Desk
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-semibold text-orange-600 mt-4 block">Open Chat on WhatsApp →</span>
              </button>

            </div>

            {/* Store Address Card */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white text-[#0B192C] border border-slate-200 flex items-center justify-center shrink-0 shadow-xs">
                <MapPin className="w-5 h-5 text-orange-600" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">Store & Showroom Address</h3>
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                  {STORE_INFO.address}
                </p>
                <p className="text-xs text-slate-600 pt-1 font-medium">
                  Ample parking & easy loading space for transport vehicles.
                </p>
              </div>
            </div>

          </div>

          {/* Interactive Map Visual (Right side) */}
          <div
            onClick={() => {
              window.open(mapUrl, '_blank');
            }}
            className="lg:col-span-6 bg-slate-100 rounded-3xl overflow-hidden border border-slate-200 shadow-md relative h-96 sm:h-[420px] flex flex-col justify-between p-6 cursor-pointer group"
          >
            {/* Google Maps Style Clean Map Background Image */}
            <Image
              src="/images/map-preview.jpg"
              alt="Store Map Location"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            
            {/* Subtle overlay for high contrast of badges and markers */}
            <div className="absolute inset-0 bg-slate-900/10 pointer-events-none"></div>

            {/* Top Map Floating Badge */}
            <div className="relative bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-md border border-slate-200 inline-flex items-center gap-3 self-start">
              <div className="w-8 h-8 rounded-lg bg-orange-600 text-white flex items-center justify-center">
                <Navigation className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">Sri Krishna Traders Showroom</div>
                <div className="text-[11px] text-slate-500">Namakkal - Trichy Road</div>
              </div>
            </div>

            {/* Center Pin Marker */}
            <div className="relative self-center flex flex-col items-center">
              <div className="relative flex items-center justify-center">
                <span className="absolute w-12 h-12 bg-orange-500/30 rounded-full animate-ping"></span>
                <div className="w-12 h-12 rounded-full bg-orange-600 text-white flex items-center justify-center shadow-xl border-2 border-white z-10">
                  <MapPin className="w-6 h-6" />
                </div>
              </div>
              <div className="mt-2 bg-[#0B192C] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                We are Here
              </div>
            </div>

            {/* Bottom Actions Bar */}
            <div className="relative bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-md border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-xs text-slate-600 text-center sm:text-left">
                <span className="font-bold text-slate-900">Open Today: </span> 
                {STORE_INFO.timings.weekdays}
              </div>
              <button
                onClick={() => {
                  window.open(mapUrl, '_blank');
                }}
                className="w-full sm:w-auto bg-[#0B192C] hover:bg-[#1E3E62] text-white text-xs font-semibold py-2.5 px-4 rounded-xl transition flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
              >
                <Navigation className="w-3.5 h-3.5 text-orange-400" />
                <span>Get Driving Directions</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
