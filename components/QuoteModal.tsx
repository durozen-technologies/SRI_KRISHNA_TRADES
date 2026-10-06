'use client';

import React, { useState } from 'react';
import { X, Send, CheckCircle2, Phone, Building2, Package, MapPin } from 'lucide-react';
import { STORE_INFO, CATEGORIES_DATA } from '@/data/storeData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: string;
  initialProduct?: string;
}

export default function QuoteModal({ isOpen, onClose, initialCategory = '', initialProduct = '' }: QuoteModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    projectType: 'Home Renovation',
    category: initialCategory || 'Bathroom & Sanitary Ware',
    requirement: initialProduct ? `Inquiry regarding: ${initialProduct}` : '',
    deliveryRequired: true
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Auto close or keep confirmation
    }, 3000);
  };

  const handleWhatsAppInquiry = () => {
    const text = encodeURIComponent(
      `Hello Sri Krishna Traders, I would like to request a quote.\n\nName: ${formData.name || 'Customer'}\nCategory: ${formData.category}\nRequirement: ${formData.requirement || 'General Project Material'}\nDelivery: ${formData.deliveryRequired ? 'Yes (On-Site)' : 'Store Pickup'}`
    );
    const rawNumber = STORE_INFO.whatsapp.replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${rawNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#0B192C] text-white px-6 py-5 flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-orange-400">Quick Estimate</span>
            <h3 className="text-xl font-bold">Request a Project Quote</h3>
          </div>
          <button
            onClick={onClose}
            className="text-slate-300 hover:text-white p-1.5 rounded-lg hover:bg-slate-800 transition"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900">Quote Request Received!</h4>
              <p className="text-slate-600 text-sm max-w-sm mx-auto">
                Thank you, <span className="font-semibold text-slate-800">{formData.name}</span>. Our project desk will review your requirements and call you at <span className="font-semibold text-slate-800">{formData.phone}</span> shortly with best pricing and stock availability.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={handleWhatsAppInquiry}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2.5 px-5 rounded-xl transition text-sm flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Connect via WhatsApp Now
                </button>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium py-2.5 px-5 rounded-xl transition text-sm"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs text-slate-500 mb-2">
                Share your materials list or project specs. We coordinate direct quotes and on-site delivery dispatch.
              </p>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Your Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Kumar"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 text-slate-800"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 98765 00000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 text-slate-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Project Type</label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 text-slate-800 bg-white"
                  >
                    <option value="Home Renovation">Home Renovation</option>
                    <option value="New Construction">New Construction</option>
                    <option value="Contractor / Bulk Order">Contractor / Bulk Order</option>
                    <option value="Plumbing / Electrical Repair">Plumbing / Electrical Repair</option>
                    <option value="Commercial Site">Commercial Site</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Primary Category</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 text-slate-800 bg-white"
                >
                  {CATEGORIES_DATA.map((cat) => (
                    <option key={cat.id} value={cat.name}>{cat.name}</option>
                  ))}
                  <option value="Multiple Categories">Multiple Categories / Full Material List</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Materials / Requirement Details</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Specify items, pipe sizes, sanitary fittings, tank capacities, or brand preferences..."
                  value={formData.requirement}
                  onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                  className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 text-slate-800 resize-none"
                />
              </div>

              <div className="flex items-center gap-2 py-1">
                <input
                  type="checkbox"
                  id="deliveryCheckbox"
                  checked={formData.deliveryRequired}
                  onChange={(e) => setFormData({ ...formData, deliveryRequired: e.target.checked })}
                  className="w-4 h-4 text-orange-600 rounded border-slate-300 focus:ring-orange-500"
                />
                <label htmlFor="deliveryCheckbox" className="text-xs text-slate-700 font-medium cursor-pointer">
                  Request on-site delivery to project address
                </label>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-xl transition shadow-lg shadow-orange-600/20 flex items-center justify-center gap-2 text-sm cursor-pointer"
                >
                  Submit Quote Request
                </button>
                <button
                  type="button"
                  onClick={handleWhatsAppInquiry}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-4 rounded-xl transition flex items-center justify-center gap-2 text-sm cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  WhatsApp
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
