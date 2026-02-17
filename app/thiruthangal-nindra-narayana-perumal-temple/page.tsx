'use client';

import Header from '@/components/header';
import Footer from '@/components/sections/footer';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function StandardSingleRoom() {
  return (
    <main className='min-h-screen bg-white'>
      <Header />

      {/* Breadcrumb Strip */}
      <div className='w-full bg-[#F8F5F0]'>
        <div className='max-w-6xl mx-auto px-4 py-2'>
          <p className='para'>
            <h2 className='heading text-center !mb-0'>
              Thiruthangal Nindra Narayana Perumal Temple
            </h2>
          </p>
        </div>
      </div>

      {/* MAIN SECTION */}
      {/* MAIN SECTION */}
      <section className='py-20 bg-white'>
        <div className='max-w-6xl mx-auto px-4'>
          {/* Big Image */}
          <div className='relative w-full h-[450px] md:h-[550px] rounded-xl overflow-hidden mb-10'>
            <Image
              src='/nearby/thiruthangal.webp' // replace with your image
              alt='Attakatti and Loam’s View Point'
              fill
              className='object-cover'
              priority
            />
          </div>

          {/* Content Section */}
          <div className='space-y-6'>
            {/* Title */}
            {/* <h2 className='heading'>
              Masani Amman Temple Pollachi
            </h2> */}
            {/* Description Paragraphs */}
            <p className='para'>
              Guests staying at Hotel Nakshatra in Sivakasi can effortlessly
              discover the timeless charm of the sacred Ninra Narayana Perumal
              Temple, located just a short 10–15 minute drive away in the serene
              town of Thiruthangal. Nestled atop a gentle granite hill, this
              ancient temple offers a peaceful retreat where spirituality,
              heritage, and natural beauty come together in perfect harmony. 
            </p>
            <p className='para'>
              The
              journey itself is calm and scenic, leading visitors from the
              vibrant energy of the city into an atmosphere of quiet devotion
              and cultural richness. Surrounded by tranquil views and steeped in
              centuries of tradition, the temple invites travelers to slow down,
              reflect, and experience the spiritual soul of Tamil Nadu. Whether
              you seek cultural exploration, architectural beauty, or a moment
              of inner peace, a visit to this revered sanctuary adds a
              meaningful and memorable dimension to your stay at Hotel
              Nakshatra.
            </p>
            
            <Link href='/explore-nearby-places'>
              <button className='inline-flex items-center gap-2 bg-[#8F2D2D] hover:bg-[#742222] text-white px-5 py-3 rounded-lg text-[16px] font-medium transition cursor-pointer'>
                Back
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
