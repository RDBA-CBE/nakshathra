'use client';

import Header from '@/components/header';
import Footer from '@/components/sections/footer';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import NearByPlaces from '@/components/sections/near-by-places';

export default function StandardSingleRoom() {
  return (
    <main className='min-h-screen bg-white'>
      <Header />

      {/* Breadcrumb Strip */}
      <div className='w-full bg-[#F8F5F0]'>
        <div className='max-w-7xl mx-auto px-4 py-2'>
           <div className='max-w-6xl mx-auto px-4 py-2'>
            <h2 className='heading text-center !mb-0'>
              Explore Near By Places
            </h2>
          </div>
        </div>
      </div>

      <NearByPlaces />
      <Footer />
    </main>
  );
}
