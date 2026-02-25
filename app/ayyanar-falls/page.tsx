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
           <div className='max-w-6xl mx-auto px-4 py-2'>
            <h2 className='heading text-center !mb-0'>Ayyanar Falls</h2>
          </div>
        </div>
      </div>

      {/* MAIN SECTION */}
      <section className='py-20 bg-white'>
        <div className='max-w-6xl mx-auto px-4'>
          {/* Big Image */}
          <div className='relative w-full h-[450px] md:h-[550px] rounded-xl overflow-hidden mb-10'>
            <Image
              src='/nearby/ayyanar-falls.webp' // replace with your image
              alt='Ayyanar Falls'
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
              Guests staying at Hotel Nakshatra in Sivakasi can experience a
              refreshing getaway to the picturesque Ayyanar Falls, located
              approximately 45–50 km away, with a scenic drive of around 1 to
              1.5 hours. The journey takes travelers through charming
              countryside landscapes and gradually into the lush foothills of
              the Western Ghats, offering a beautiful transition from urban
              surroundings to serene natural beauty.
            </p>
            <p className='para'>
              Surrounded by dense greenery and cool mountain air, Ayyanar Falls
              is a popular destination for nature lovers and adventure seekers
              looking to unwind amid cascading waters and peaceful forest
              ambience. The soothing sound of the falls, combined with the
              refreshing environment, creates an ideal setting for relaxation,
              photography, and leisurely exploration. Its accessible distance
              from Hotel Nakshatra makes it a perfect day excursion, allowing
              guests to combine comfort, nature, and memorable outdoor
              experiences during their stay in the Sivakasi region.
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
