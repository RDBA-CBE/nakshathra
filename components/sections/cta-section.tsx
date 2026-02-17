'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    const el = document.getElementById('cta-section');
    if (el) observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id='cta-section'
      className='relative pb-20 flex justify-center items-center'
    >
      <div className='container bg-[#f2f1ef] mx-auto px-4 py-16 '>
        <div
          className={`text-center space-y-10 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {/* TOP SMALL TEXT */}
          <p className='subtitle'>
            Best Rates. No hidden Costs
          </p>

          {/* MAIN HEADING EXACT AS IMAGE */}
          <h2 className='heading leading-[1.15] mt-5'>
            Make your Reservation and Look Forward to a Peaceful,
            <br />
            Well-connected and Memorable Stay
          </h2>

          {/* BUTTON EXACT STYLE */}
          <div>
            <Link
              href='/contact'
              className='inline-flex items-center gap-2 bg-[#8F2D2D] hover:bg-[#742222] text-white px-5 py-3 rounded-lg text-[16px] font-medium transition'
            >
              Make Reservation
              <ArrowRight className='ml-2 h-5 w-5' />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
