'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    subtitle: 'FIND UNIQUE HOMES IN VIBRANT PLACES.',
    title: "Experience Comfort Of The City's Stays",
    description:
      'At SparkleClean, we believe a clean space is a happy space. With years of experience in residential and commercial cleaning our mission is to deliver top-quality ..',
    image: '/luxury-hotel-bedroom-with-white-pillows-and-warm-l.jpg',
    alt: 'Luxury Hotel Room',
  },
  {
    id: 2,
    subtitle: 'FIND UNIQUE HOMES IN VIBRANT PLACES.',
    title: 'Redefining Stays with Warmth and Elegance',
    description:
      'Experience unparalleled comfort and luxury in our meticulously designed rooms. Each space is crafted to provide you with the perfect blend of modern amenities and traditional hospitality.',
    image: '/elegant-hotel-suite-with-modern-furniture.jpg',
    alt: 'Elegant Hotel Suite',
  },
  {
    id: 3,
    subtitle: 'FIND UNIQUE HOMES IN VIBRANT PLACES.',
    title: 'Your Home Away From Home',
    description:
      'Discover a sanctuary of tranquility where every detail is designed for your comfort. Our dedication to excellence ensures an unforgettable stay that exceeds expectations.',
    image: '/cozy-hotel-room-with-ambient-lighting.jpg',
    alt: 'Cozy Hotel Room',
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentSlide]);

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  const goToSlide = (index: number) => {
    if (!isAnimating && index !== currentSlide) {
      setIsAnimating(true);
      setCurrentSlide(index);
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  const currentSlideData = slides[currentSlide];

  return (
    <section className='relative pt-[12.25rem] bg-white overflow-hidden'>
      <div className='w-full bg-[#FAF8F3]'>
        <div className='grid lg:grid-cols-2 gap-0 h-full'>
          {/* Left side - Text content */}
          <div className='flex items-center px-6 sm:px-10 lg:px-16 banner'>
            <div key={`text-${currentSlide}`} className='animate-fade-in-up'>
              <p className='text-[#4A5568] text-xs font-medium mb-4 tracking-wider uppercase'>
                {currentSlideData.subtitle}
              </p>
              <h1 className='font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#2C1810] mb-6 leading-tight text-balance'>
                {currentSlideData.title}
              </h1>
              <p className='text-[#4A5568] mb-8 leading-relaxed max-w-lg text-sm'>
                {currentSlideData.description}
              </p>
              <Button className='bg-[#8B4513] hover:bg-[#6B3410] text-white px-8 py-3 rounded-sm group transition-all'>
                Know More
                <ArrowRight className='ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform' />
              </Button>
            </div>
          </div>

          {/* Right side - Image */}
          <div className='relative h-full'>
            <div
              key={`image-${currentSlide}`}
              className='absolute inset-0 animate-fade-in'
            >
              <img
                src={currentSlideData.image || '/placeholder.svg'}
                alt={currentSlideData.alt}
                className='w-full object-cover'
              />
            </div>

            <button
              onClick={prevSlide}
              className='absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all z-10'
              aria-label='Previous slide'
            >
              <ChevronLeft className='w-6 h-6 text-[#2C1810]' />
            </button>
            <button
              onClick={nextSlide}
              className='absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all z-10'
              aria-label='Next slide'
            >
              <ChevronRight className='w-6 h-6 text-[#2C1810]' />
            </button>

            <div className='absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10'>
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentSlide
                      ? 'w-8 bg-white'
                      : 'w-2 bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
