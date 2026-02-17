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
              Srivilliputhur Andal Temple
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
              src='/nearby/srivilliputhur.webp' // replace with your image
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
              Guests staying at Hotel Nakshatra in Sivakasi can enjoy a
              meaningful cultural excursion to the renowned Srivilliputhur Andal
              Temple, located approximately 20–21 km away, with a comfortable
              drive of around 25–30 minutes. The journey takes visitors through
              scenic stretches of rural Tamil Nadu, offering a pleasant
              transition from the lively atmosphere of Sivakasi to the spiritual
              charm of Srivilliputhur. 
            </p>
            <p className='para'>
              Famous for its iconic Rajagopuram a
              symbol deeply associated with Tamil heritage the temple welcomes
              travelers into a world of devotion, magnificent Dravidian
              architecture, and centuries-old traditions. The convenient
              distance from Hotel Nakshatra makes this sacred destination an
              ideal half-day outing, allowing guests to experience both cultural
              richness and peaceful surroundings without extensive travel.
              Whether visiting for spiritual blessings, architectural
              appreciation, or a serene cultural experience, a trip to
              Srivilliputhur Andal Temple adds depth, elegance, and authenticity
              to your stay in the region.
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
