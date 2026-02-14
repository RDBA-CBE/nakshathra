'use client';

import Header from '@/components/header';
import Footer from '@/components/sections/footer';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import {
  Wifi,
  BedDouble,
  Coffee,
  Car,
  MapPin,
  Phone,
  Hospital,
  ShieldCheck,
  CalendarCheck,
  ConciergeBell,
  Gem,
} from 'lucide-react';

// export const metadata: Metadata = {
//   title: "Facilities - Nakshatra Royal Stay",
//   description: "Discover our world-class facilities and amenities",
// };

const facilities = [
  {
    title: 'Prime Location in the Heart of Palani',
    desc: 'Easy access to local transportation, shopping areas and key landmarks makes commuting effortless and convenient.',
    icon: MapPin,
  },
  {
    title: 'Complimentary High-Speed Wi-Fi',
    desc: 'Stay connected for work, study or leisure with fast, reliable internet throughout the hotel.',
    icon: Wifi,
  },
  {
    title: 'Business-Class Luxury at Exceptional Value',
    desc: 'Modern rooms, refined interiors and premium services ensure a comfortable stay without compromise.',
    icon: Gem,
  },
  {
    title: 'Best Rates Guaranteed on Online Bookings',
    desc: 'Enjoy competitive pricing and exclusive online offers when you book directly with us.',
    icon: CalendarCheck,
  },
  {
    title: 'Modern Amenities with Elegant Interiors',
    desc: 'Each room is thoughtfully designed with contemporary decor, ergonomic furnishings and intuitive features for your convenience.',
    icon: ConciergeBell,
  },
  {
    title: 'Strict Safety, Hygiene and Cleanliness Protocols',
    desc: 'Our high standards ensure a safe and healthy environment for every guest.',
    icon: ShieldCheck,
  },
  {
    title: 'Warm, Personalized Indian Hospitality',
    desc: 'Our attentive staff and bespoke services create a welcoming atmosphere that makes every stay truly special.',
    icon: Hospital,
  },
];

export default function FacilityPage() {
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
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className='space-y-6 '
                >
                  <p className='subtitle'>Stay Connected. Stay Comfortable</p>
                </motion.div>
                {/* Main Heading */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className='heading leading-[1.15]'
                >
                  Facilities Designed for <br />
                  <span className='text-[#b3862f]'>Modern Lifestyle</span>
                </motion.h1>

                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className='space-y-6 '
                >
                  <p className='para'>
                    At Hotel Nakshathra, we combine modern convenience with
                    authentic Indian hospitality to ensure every stay is
                    seamless, comfortable and memorable. From smooth check-ins
                    to impeccably maintained spaces, we cater to the needs of
                    business travellers, pilgrims and families. Every room and
                    common area is equipped with modern amenities, creating an
                    environment where you can relax and stay productive.
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
              alt='Hotel Nakshathra Elegant Interior'
              fill
              className='object-cover object-center'
              priority
            />

            {/* Image Overlay Content */}
          </div>
        </div>
      </section>
      <section className='py-20 px-4 bg-[#FFFFFF]'>
        <div className='max-w-7xl mx-auto space-y-20 md:space-y-24'>
          {/* HERO IMAGE SECTION */}

          {/* WHY CHOOSE US */}
          <div className='w-full max-w-7xl mx-auto space-y-16'>
            {/* Heading */}
            <div className='text-center'>
              <h2 className='heading leading-[1.15]'>
                Why Choose Hotel Nakshathra?
              </h2>
            </div>

            {/* Facilities */}
            <div className='mt-16 relative'>
              <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={24}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                pagination={{
                  clickable: true,
                  renderBullet: (index, className) =>
                    `<span class="${className} custom-bullet"></span>`,
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1.1,
                    centeredSlides: true,
                  },
                  640: {
                    slidesPerView: 2,
                    centeredSlides: true,
                  },
                  1024: {
                    slidesPerView: 4,
                    centeredSlides: false,
                  },
                }}
                className='!pb-16'
              >
                {facilities.map((item) => (
                  <SwiperSlide key={item.title} className='flex justify-center'>
                    {/* CARD */}
                    <div
                      className='
            group flex flex-col
            w-[100%] sm:w-full
            rounded-2xl border border-[#8B4513]/20 bg-white p-8
            transition hover:shadow-md

            h-[340px]
            sm:h-[320px]
            lg:h-[360px]
          '
                    >
                      {/* ICON */}
                      <div className='flex justify-center'>
                        <div className='w-16 h-16 rounded-full bg-[#8B4513]/10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110'>
                          <item.icon className='w-8 h-8 text-[#8B4513]' />
                        </div>
                      </div>

                      {/* CONTENT */}
                      <div className='mt-6 text-center flex flex-col flex-grow'>
                        <h3 className='heading leading-[1.15] mb-2'>
                          {item.title}
                        </h3>

                        <p className='para flex-grow'>{item.desc}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      <section className='relative py-32 overflow-hidden'>
        {/* Background Container */}
        <div className='absolute inset-0'>
          {/* Background Image - Full Size & Fit */}
          <div
            className='absolute inset-0 bg-cover bg-center'
            style={{
              backgroundImage: "url('/home/dining.webp')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          {/* Light Overlay for Better Readability */}
          <div className='absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/55' />
        </div>
        <div className='relative max-w-4xl mx-auto px-4'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Glass Card */}
            <div className='relative overflow-hidden rounded-3xl bg-white/85 backdrop-blur-md shadow-2xl border border-white/30'>
              {/* Decorative Border Elements */}
              <div className='absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-[#8B4513]/20 rounded-tl-lg' />
              <div className='absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-[#8B4513]/20 rounded-br-lg' />

              <div className='relative z-10 text-center space-y-8 px-6 sm:px-12 py-16'>
                {/* Main Content */}
                <div className='space-y-8'>
                  <div className='text-3xl sm:text-4xl md:text-5xl font-heading text-[#b3862f] mb-6'>
                    At Hotel Nakshathra
                  </div>

                  <p className='para'>
                    every is curated to provide comfort, convenience and care,
                    making it your ideal choice for{' '}
                    <span className='text-[#b3862f] font-medium'>Business</span>
                    ,{' '}
                    <span className='text-[#b3862f] font-medium'>Leisure</span>{' '}
                    or{' '}
                    <span className='text-[#b3862f] font-medium'>
                      Spiritual visits &nbsp;
                    </span>
                    in Palani.
                  </p>
                  {/* Bottom Divider */}
                  <div className='absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#8B4513]/25 to-transparent' />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
