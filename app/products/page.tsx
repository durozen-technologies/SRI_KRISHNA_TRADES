'use client';

import React, { useState } from 'react';
import CategoriesSection from '@/components/CategoriesSection';
import FeaturedProducts from '@/components/FeaturedProducts';
import HavellsFlagshipSection from '@/components/HavellsFlagshipSection';
import HavellsFanGuide from '@/components/HavellsFanGuide';
import BrandsSection from '@/components/BrandsSection';
import CTASection from '@/components/CTASection';
import { useQuote } from '@/context/QuoteContext';
import { useRouter } from 'next/navigation';

export default function ProductsPage() {
  const { openQuote, openProductDetail } = useQuote();
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>();
  const [selectedBrand, setSelectedBrand] = useState<string | undefined>('havells');

  const handleCategorySelect = (categorySlug: string) => {
    setSelectedCategory(categorySlug);
    setSelectedBrand(undefined);
    const elem = document.getElementById('products');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  const handleBrandSelect = (brandSlug: string) => {
    setSelectedBrand(brandSlug);
    setSelectedCategory(undefined);
    const elem = document.getElementById('products');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  const handleHavellsSelect = () => {
    setSelectedBrand('havells');
    setSelectedCategory(undefined);
    const elem = document.getElementById('products');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Prime Flagship Brand Spotlight: Havells */}
      <HavellsFlagshipSection
        onSelectHavellsFilter={handleHavellsSelect}
        onEnquireProduct={(prod) => openProductDetail(prod)}
        onOpenQuote={() => openQuote()}
      />

      {/* Havells LOOK UP Fan Collection & Interactive Sizing Guide */}
      <HavellsFanGuide onEnquireProduct={(prod) => openProductDetail(prod)} />

      {/* Product Categories */}
      <CategoriesSection onSelectCategory={handleCategorySelect} />

      {/* Featured Products Catalog with Category & Brand Filtering */}
      <FeaturedProducts 
        onEnquireProduct={(prod) => openProductDetail(prod)}
        selectedCategoryFilter={selectedCategory}
        selectedBrandFilter={selectedBrand}
      />

      {/* Authorized Brands Showcase: Havells, Crompton, Finolex, V-Guard, RR Kābel, Kundan */}
      <BrandsSection onSelectBrandFilter={handleBrandSelect} />

      {/* Call To Action */}
      <CTASection
        onOpenQuote={() => openQuote()}
        onContactClick={() => router.push('/contact')}
      />
    </>
  );
}

