'use client';

import React from 'react';
import Image from 'next/image';
import { MapPin, ArrowRight, Building, CheckCircle2 } from 'lucide-react';

interface ProjectSupply {
  id: string;
  title: string;
  type: string;
  location: string;
  materials: string;
  image: string;
}

const SUPPLIES_DATA: ProjectSupply[] = [
  {
    id: 'supp-1',
    title: 'Luxury Villa Sanitary & CPVC Supply',
    type: 'Brass Fittings & CPVC',
    location: 'Greenfield Enclave',
    materials: 'Complete Bath Suite & High-Pressure Plumbing Lines',
    image: '/images/finolex-pipes-range.jpg'
  },
  {
    id: 'supp-2',
    title: 'Residential Complex Water System',
    type: 'Overhead Tanks & Drainage',
    location: 'Royal Heights',
    materials: '4x 2000L Multi-Layer Tanks + Heavy Duty PVC Drainage',
    image: '/images/store-plumbing-fittings-rack.jpg'
  },
  {
    id: 'supp-3',
    title: 'Commercial Complex Electrical Wiring',
    type: 'FR-LSH Electrical Cables',
    location: 'Central Plaza',
    materials: 'Fire-Retardant Copper Cables & Modular Switch Gear',
    image: '/images/havells-cable-range.jpg'
  },
  {
    id: 'supp-4',
    title: 'Independent House Bathroom Suite',
    type: 'Sanitary & Rain Showers',
    location: 'Shanti Nagar',
    materials: 'Ceramic Tabletop Basins & Concealed Diverter Valves',
    image: '/images/store-pvc-bends-shelving.jpg'
  }
];

interface ProjectShowcaseProps {
  onOpenQuote: () => void;
}

export default function ProjectShowcase({ onOpenQuote }: ProjectShowcaseProps) {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider mb-2">
              <Building className="w-3.5 h-3.5 text-orange-600" />
              <span>Project Deliveries & Fulfillment</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B192C] tracking-tight">
              Real Materials. Trusted Sites.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-1">
              Supplying dependable hardware, plumbing, and electrical solutions to homes & builders.
            </p>
          </div>

          <button
            onClick={onOpenQuote}
            className="text-xs sm:text-sm font-semibold text-orange-600 hover:text-orange-700 flex items-center gap-1 self-start sm:self-auto cursor-pointer"
          >
            <span>Request Site Estimation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SUPPLIES_DATA.map((item) => (
            <div
              key={item.id}
              className="group bg-slate-50 hover:bg-white rounded-2xl overflow-hidden border border-slate-200/80 hover:border-slate-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative h-44 w-full overflow-hidden bg-slate-200">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2.5 left-2.5 bg-[#0B192C]/90 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                  {item.type}
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base leading-snug group-hover:text-orange-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-xs mt-1.5 leading-relaxed">
                    {item.materials}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center gap-1 truncate">
                    <MapPin className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                    <span className="truncate">{item.location}</span>
                  </div>
                  <div className="w-6 h-6 rounded-full bg-slate-200 group-hover:bg-orange-600 group-hover:text-white flex items-center justify-center transition-colors">
                    <ArrowRight className="w-3 h-3 text-slate-600 group-hover:text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
