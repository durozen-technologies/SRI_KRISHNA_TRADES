'use client';

import React from 'react';
import WhyChooseUs from '@/components/WhyChooseUs';
import CTASection from '@/components/CTASection';
import { useQuote } from '@/context/QuoteContext';
import { useRouter } from 'next/navigation';

export default function ServicesPage() {
  const { openQuote } = useQuote();
  const router = useRouter();

  return (
    <>
      {/* The Sri Krishna Advantage */}
      <WhyChooseUs onContactClick={() => router.push('/contact')} />

      {/* Call To Action */}
      <CTASection
        onOpenQuote={() => openQuote()}
        onContactClick={() => router.push('/contact')}
      />
    </>
  );
}
