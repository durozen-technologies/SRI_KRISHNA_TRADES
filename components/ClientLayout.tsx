'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { QuoteProvider } from '@/context/QuoteContext';
import { usePathname } from 'next/navigation';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isGalleryPage = pathname === '/gallery';

  return (
    <QuoteProvider>
      <div className={`min-h-screen flex flex-col ${isGalleryPage ? 'h-screen overflow-hidden bg-black' : 'bg-white overflow-x-hidden'} selection:bg-orange-500 selection:text-white`}>
        {!isGalleryPage && <Navbar />}
        <main className={isGalleryPage ? 'h-full w-full' : 'flex-1'}>
          {children}
        </main>
        {!isGalleryPage && <Footer />}
        {!isGalleryPage && <FloatingWhatsApp />}
      </div>
    </QuoteProvider>
  );
}
