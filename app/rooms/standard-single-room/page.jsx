'use client';

import Header from '@/components/header';
import Footer from '@/components/sections/footer';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

const images = [
  '/rooms/standard-single-room/img1.webp',
  '/rooms/standard-single-room/img2.webp',
  '/rooms/standard-single-room/img3.webp',
  '/rooms/standard-single-room/img4.webp',
];

const sections = [
  {
    title: 'Amenities',
    items: [
      'Ample car parking',
      'Wheelchair accessibility',
      'Lift / elevator access',
      'High-speed Wi-Fi (complimentary)',
      'Fine south Indian dining',
    ],
  },
  {
    title: 'Facilities',
    items: [
      'Comfortable bed with premium mattress',
      'Fresh linens & pillows',
      'Bedside table',
      'Wardrobe / Closet with hangers',
      'Writing desk & chair',
      'Luggage rack',
      'LED / Smart TV with satellite channels',
      'Complimentary BreakFast',
      'Complimentary bottled water',
      'Room service menu',
      '24/7 Power Supply ',
    ],
  },
  {
    title: 'Bathroom Facilities',
    items: [
      'Hot & cold running water',
      'Shower ',
      'Bath towels & hand towels',
      'Toiletries (soap, shampoo, conditioner)',
      'Shaving mirror',
    ],
  },
];

export default function StandardSingleRoom() {
  const [activeImage, setActiveImage] = useState(images[0]);
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <main className='min-h-screen bg-white'>
      <Header />
      <div className='w-full bg-[#F8F5F0] '>
        <div className='max-w-6xl mx-auto px-4 py-4'>
          <p className='para'>
            <Link href='/' className='hover:text-[#8F2D2D] transition'>
              Home
            </Link>
            <span className='mx-2 text-gray-400'>/</span>
            <Link href='/rooms' className='hover:text-[#8F2D2D] transition'>
              Rooms
            </Link>
            <span className='mx-2 text-gray-400'>/</span>
            <span className='text-[#640720] font-medium'>
              Standard Single Room
            </span>
          </p>
        </div>
      </div>
      {/* MAIN SECTION */}
      <section className='py-20 px-4 bg-white'>
        <div className='max-w-6xl mx-auto'>
          {/* <p className='para mb-10'>
            <Link href='/' className='hover:text-[#8F2D2D] transition'>
              Home
            </Link>
            {' / '}
            <Link href='/rooms' className='hover:text-[#8F2D2D] transition'>
              Rooms
            </Link>
            {' / '}
            <span className='text-gray-700 font-medium'>Super Deluxe Room</span>
          </p> */}
          <div className='grid lg:grid-cols-2 gap-12'>
            {/* LEFT – IMAGE GALLERY */}
            <div className='flex gap-4'>
              {/* Thumbnails */}
              <div className='flex flex-col gap-3'>
                {images.map((img) => (
                  <button
                    key={img}
                    onClick={() => setActiveImage(img)}
                    className={`relative h-20 w-20 rounded-lg overflow-hidden border cursor-pointer
                    ${activeImage === img ? 'border-[#cc9e32]' : 'border-gray-300'}`}
                  >
                    <Image
                      src={img}
                      alt='Standard Single Room'
                      fill
                      className='object-cover'
                    />
                  </button>
                ))}
              </div>

              {/* Main Image */}
              <div className='relative flex-1 h-[550px] rounded-2xl overflow-hidden bg-gray-200'>
                <Image
                  src={activeImage}
                  alt='Standard Single Room'
                  fill
                  priority
                  className='object-cover'
                />
              </div>
            </div>

            {/* RIGHT – ROOM INFO */}
            <div>
              <h1 className='heading leading-[1.15] mb-4'>Standard Single</h1>
              <div
                className='flex flex-col sm:flex-row 
items-start sm:items-center 
gap-4 '
              >
                <div
                  className='text-sm sm:text-base lg:text-[18px] 
  inline-flex items-center gap-2 sm:gap-3 
  px-4 sm:px-5 py-2 sm:mb-5
  rounded-full 
  bg-[#b3862f] text-white 
  font-semibold'
                >
                  Tariff: ₹1499
                  <span className='text-[18px] font-medium'>
                    + Taxes (₹1574)
                  </span>
                </div>
                <a
                  href='tel:+914562264233'
                  className='inline-flex items-center justify-center gap-2
    px-5 py-2
    rounded-full
    bg-[#640720] text-white
    text-sm sm:text-base lg:text-[18px]
    font-semibold sm:mb-5
    hover:bg-[#b3862f]
    transition'
                >
                  Book Now
                </a>
              </div>
              {/* Tariff */}

              <p className='para mt-5 sm:mt-0'>
                Designed for solo travellers, the standard single room offers a
                cozy and functional space with warm decor that provides comfort
                and relaxation. Ideal for guests seeking simplicity and
                convenience, this room ensures a pleasant and hassle-free stay.
              </p>
              <section className='py-5'>
                <div className='max-w-4xl mx-auto space-y-4'>
                  {sections.map((section, index) => {
                    const isOpen = openIndex === index;

                    return (
                      <div
                        key={section.title}
                        className='rounded-2xl border border-[#E8DCCB] bg-white/70 backdrop-blur transition-all duration-300'
                      >
                        <button
                          onClick={() => setOpenIndex(isOpen ? null : index)}
                          className='w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer'
                        >
                          <div className='flex items-center gap-4'>
                            <span
                              className={`h-8 w-1 rounded-full bg-[#cc9e32] transition-all duration-300 ${
                                isOpen ? 'h-12' : ''
                              }`}
                            />
                            <h3 className='heading leading-[1.15]'>
                              {section.title}
                            </h3>
                          </div>

                          <span
                            className={`text-[#cc9e32] text-lg transition-transform duration-300 ${
                              isOpen ? '-rotate-90' : ''
                            }`}
                          >
                            ›
                          </span>
                        </button>

                        {isOpen && (
                          <div className='px-6 pb-6 pt-2'>
                            <ul className='grid sm:grid-cols-2 gap-y-2 gap-x-6 text-sm text-gray-700'>
                              {section.items.map((item) => (
                                <li
                                  key={item}
                                  className='list flex items-start gap-3 leading-relaxed'
                                >
                                  <span className='mt-1 h-5 w-5 rounded-full bg-[#F3EFE6] flex items-center justify-center flex-shrink-0'>
                                    <span className='h-2 w-2 rounded-full bg-[#cc9e32]' />
                                  </span>

                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILS */}

      <Footer />
    </main>
  );
}
