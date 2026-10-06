'use client';

import React from 'react';
import Hero from '@/components/Hero';
import CategoriesSection from '@/components/CategoriesSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import FeaturedProducts from '@/components/FeaturedProducts';
import BrandsSection from '@/components/BrandsSection';
import About from '@/components/About';
import LocationSection from '@/components/LocationSection';
import CTASection from '@/components/CTASection';
import { useQuote } from '@/context/QuoteContext';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const { openQuote, openProductDetail } = useQuote();
  const router = useRouter();

  return (
    <>
      {/* Main Hero Section */}
      <Hero onOpenQuote={() => openQuote()} />

      {/* Product Categories */}
      <CategoriesSection onSelectCategory={() => router.push('/products')} />

      {/* Split Why Choose Us Section */}
      <WhyChooseUs onContactClick={() => router.push('/contact')} />

      {/* Featured Products with Category Tabs */}
      <FeaturedProducts onEnquireProduct={(prod) => openProductDetail(prod)} />

      {/* Dedicated Santé Bath Fittings Brand Section */}
      <BrandsSection />

      {/* About Section */}
      <About />

      {/* Store Location, Hours & Map Section */}
      <LocationSection />

      {/* Full-width Call To Action Section */}
      <CTASection
        onOpenQuote={() => openQuote()}
        onContactClick={() => router.push('/contact')}
      />
    </>
  );
}
