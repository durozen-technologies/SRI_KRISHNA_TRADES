'use client';

import React, { useState } from 'react';
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
  const [selectedBrand, setSelectedBrand] = useState<string | undefined>();

  const handleBrandSelect = (brandSlug: string) => {
    setSelectedBrand(brandSlug);
    const elem = document.getElementById('products');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Main Hero Section */}
      <Hero onOpenQuote={() => openQuote()} />

      {/* Product Categories */}
      <CategoriesSection onSelectCategory={() => router.push('/products')} />

      {/* Split Why Choose Us Section */}
      <WhyChooseUs onContactClick={() => router.push('/contact')} />

      {/* Featured Products with Category & Brand Tabs */}
      <FeaturedProducts 
        onEnquireProduct={(prod) => openProductDetail(prod)}
        selectedBrandFilter={selectedBrand}
      />

      {/* Authorized Brands Section: Havells, Crompton, Finolex, V-Guard, RR Kābel, Kundan */}
      <BrandsSection onSelectBrandFilter={handleBrandSelect} />

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

