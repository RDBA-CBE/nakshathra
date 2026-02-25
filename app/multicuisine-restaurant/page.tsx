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
            <h2 className='heading text-center !mb-0'>
              Multicuisine Restaurant
            </h2>
          </div>
        </div>
      </div>

      {/* MAIN SECTION */}
      {/* MAIN SECTION */}
      <section className='py-20 bg-white'>
        <div className='max-w-6xl mx-auto px-4'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            {/* Left Side - Image */}
            <div className='relative w-full h-[350px] md:h-[450px] lg:h-[500px] rounded-xl overflow-hidden'>
              <Image
                src='/home/banner4.webp'
                alt='Multicusine Restaurant'
                fill
                className='object-cover'
                priority
              />
            </div>

            {/* Right Side - Content */}
            <div className='space-y-6'>
              <p className='para'>
                Experience refined dining at our elegantly curated Multicuisine
                Restaurant, where culinary artistry meets authentic flavour. Our
                menu presents a sophisticated selection of{' '}
                <span className='text-[#b3862f] font-medium'>Chinese</span>,{' '}
                <span className='text-[#b3862f] font-medium'>North Indian</span>
                ,{' '}
                <span className='text-[#b3862f] font-medium'>
                  South Indian cuisines
                </span>
                , thoughtfully prepared using the finest ingredients and
                time-honoured techniques.
              </p>

              <p className='para'>
                From delicately balanced Chinese specialties to the richness of{' '}
                <span className='text-[#b3862f] font-medium'>
                  North Indian classics
                </span>{' '}
                and the comforting authenticity of{' '}
                <span className='text-[#b3862f] font-medium'>
                  South Indian favourites
                </span>
                , every dish is crafted to deliver depth, aroma, and
                distinction.
              </p>

              <p className='para'>
                Set within a graceful ambience complemented by attentive
                service, our restaurant offers the perfect setting for{' '}
                <span className='text-[#b3862f] font-medium'>
                  intimate dinners
                </span>
                ,{' '}
                <span className='text-[#b3862f] font-medium'>
                  corporate gatherings
                </span>
                , and{' '}
                <span className='text-[#b3862f] font-medium'>
                  memorable celebrations
                </span>
                .
              </p>
              <p className='para'>
                 <span className='text-[#b3862f] font-bold'>Kindly Note:</span> Tandoor preparations are not part of the menu.
              </p>

              {/* <Link href='/facility'>
                <button className='inline-flex items-center gap-2 bg-[#8F2D2D] hover:bg-[#742222] text-white px-5 py-3 rounded-lg text-[16px] font-medium transition cursor-pointer'>
                  Back
                </button>
              </Link> */}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
