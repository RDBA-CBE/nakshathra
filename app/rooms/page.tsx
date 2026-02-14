'use client';

import Header from '@/components/header';
import Footer from '@/components/sections/footer';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
// export const metadata: Metadata = {
//   title: "Rooms - Nakshatra Royal Stay",
//   description: "Explore our luxury rooms and suites",
// };

const rooms = [
  {
    id: '01',
    title: 'Standard Single',
    price: '₹1499 + 5% tax (₹1574)',
    description:
      'Designed for solo travellers, the standard single room offers a cozy and functional space with warm decor that provides comfort and relaxation.',
    image: '/rooms/standard-single.webp',
    link: '/rooms/standard-single-room',
  },
  {
    id: '02',
    title: 'Standard Double',
    price: '₹1999 + 5% tax (₹2099)',
    description:
      'The Standard Double Room is a spacious and well-appointed accommodation offering enhanced comfort, privacy and modern amenities.',
    image: '/rooms/standard-double.webp',
    link: '/rooms/standard-double-room',
  },
  {
    id: '03',
    title: 'Deluxe Room',
    price: '₹2399 + 5% tax (₹2519)',
    description:
      'The Deluxe Room offers enhanced space with elegant interiors and premium comforts, creating a refined yet inviting atmosphere.',
    image: '/rooms/deluxe-room.webp',
    link: '/rooms/deluxe-room',
  },
  {
    id: '04',
    title: 'Super Deluxe Room',
    price: '₹3999 + 5% tax (₹4199)',
    description:
      'The Super Deluxe Room is the most spacious category at Hotel Nakshatra, featuring refined decor, superior amenities and exceptional comfort. ',
    image: '/rooms/super-deluxe-room.webp',
    link: '/rooms/super-deluxe-room',
  },
];

export default function RoomsPage() {
  return (
    <main className='min-h-screen bg-white'>
      <Header />
      {/* Hero Banner with Elegant Typography */}
      <section className='relative w-full overflow-hidden'>
        <div className='relative flex flex-col lg:flex-row  w-full'>
          {/* LEFT CONTENT - Light Background */}
          <div className='relative z-10 w-full lg:w-1/2 bg-gradient-to-br from-[#F8F4E9] to-[#F1ECE0] flex items-center'>
            <div className='w-full px-6 sm:px-10 lg:px-16 xl:px-20 py-16 lg:py-20'>
              <div>
                {/* Eyebrow / Subtitle */}
                {/* <p className="subtitle">Stay Connected. Stay Comfortable</p> */}
                {/* Main Heading */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className='heading leading-[1.15]'
                >
                  Rooms
                </motion.h1>

                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className='space-y-6 '
                >
                  <p className='para'>
                    Discover thoughtfully designed rooms that reflects warmth
                    and comfort. Each room features calming interiors,
                    functional layouts and contemporary amenities, crafted to
                    provide a peaceful and convenient stay. Whether you’re
                    visiting for a short stop or an extended stay, our rooms
                    offer the perfect balance of simplicity, comfort and
                    elegance.
                  </p>
                </motion.div>

                {/* Decorative Line */}

                {/* Features */}
              </div>
            </div>
          </div>

          {/* DIAGONAL SEPARATOR */}
          <div className='hidden lg:block absolute left-1/2 top-0 h-full -translate-x-1/2 z-20 pointer-events-none'>
            <div className='relative h-full w-px'>
              <div className='absolute inset-y-0 left-1/2 transform -translate-x-1/2 w-[2px]'>
                <div className='h-full bg-gradient-to-b from-[#8B4513]/20 via-[#8B4513]/40 to-[#8B4513]/20'></div>
              </div>
              <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-[#FBF6E6] border-2 border-[#8B4513]/30 rounded-full'></div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className='w-full lg:w-1/2 relative'>
            <div className='absolute inset-0 bg-gradient-to-t from-black/10 to-transparent z-10'></div>
            <Image
              src='/facilities/intro.webp'
              alt='Hotel Nakshatra Elegant Interior'
              fill
              className='object-cover object-center'
              priority
            />

            {/* Image Overlay Content */}
          </div>
        </div>
      </section>
      <section className='py-20 px-4 bg-[#FFFFFF]'>
        <div className='max-w-6xl mx-auto'>
          {/* Heading */}

          {/* Rooms Grid */}
          <div className='grid gap-10 sm:grid-cols-2 lg:grid-cols-2'>
            {rooms.map((room) => (
              <div
                key={room.id}
                className='bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden'
              >
                {/* Image */}
                <div className='relative h-auto overflow-hidden'>
                  <Link
                    href={room.link}
                    className='inline-flex items-center gap-2 hover:text-[#9C8468] transition'
                  >
                    <img
                      src={room.image}
                      alt={room.title}
                      className='h-full w-full object-cover transition-transform duration-500 hover:scale-105'
                    />
                  </Link>
                </div>

                {/* Content */}
                <div className='p-6 relative'>
                  {/* Room Number */}
                  <span className='absolute top-6 right-6 text-5xl font-light text-gray-200'>
                    {room.id}
                  </span>

                  {/* Icon */}
                  <Link
                    href={room.link}
                    className='inline-flex items-center gap-2 hover:text-[#9C8468] transition'
                  >
                    <h3 className='heading leading-[1.15] mb-2'>
                      {room.title}
                    </h3>
                  </Link>

                  <p className='text-sm font-semibold text-[#b3862f] mb-3'>
                    {room.price}
                  </p>

                  <p className='para'>{room.description}</p>

                  <div className='mt-4 flex items-center justify-between w-full'>
                    {/* Read More - LEFT */}
                    <Link
                      href={room.link}
                      className='inline-flex text-[#b3862f] items-center gap-2 hover:text-[#9C8468] transition'
                    >
                      Read More <span>→</span>
                    </Link>

                    {/* Book Now - RIGHT */}
                    <a
                      href='tel:+91-4562264233'
                      className='px-4 py-2 rounded-md bg-[#640720] text-[#FFFFFF] text-sm font-medium hover:bg-[#6f3610] transition'
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
