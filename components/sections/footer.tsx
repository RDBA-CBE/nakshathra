import Link from 'next/link';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className='bg-[#FBF6E6] text-[#1F3A44] pt-10 px-4 sm:px-6 overflow-x-hidden'>
      <div className='max-w-[1280px] mx-auto w-full'>

        {/* TOP LINKS */}
        <ul className='pb-10 flex flex-wrap items-center justify-center gap-6 text-base text-[#253743]'>
          {[
            ['About', '/about'],
            ['Rooms', '/rooms'],
            ['Facility', '/facility'],
            ['Gallery', '/gallery'],
            ['Contact', '/contact'],
            ['Explore', '/explore-nearby-places'],
          ].map(([label, href]) => (
            <li key={label} className='footer-list1'>
              <Link
                href={href}
                className='flex items-center gap-2 hover:text-[#8B1C1C]'
              >
                <img src='/stars.svg' alt='star' className='w-4 h-4' />
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* MAIN GRID */}
        <div className='border-t border-[#1f3a44]/20 pt-10 mb-10'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center lg:text-left'>

            {/* COLUMN 1 — LOGO */}
            <div className='min-w-0 lg:pr-8 lg:border-r lg:border-[#1f3a44]/25'>
              <Link href='/'>
                <img
                  src='/footer-logo.png'
                  alt='Hotel Nakshatra Logo'
                  className='h-20 w-auto mb-6 mx-auto lg:mx-0'
                />
              </Link>

              <p className='footer-para max-w-[320px] mx-auto lg:mx-0'>
                Hotel Nakshatra is a reliable business-class stay in Sivakasi,
                offering comfort, modern amenities, and attentive service for
                guests from major cities.
              </p>
            </div>

            {/* COLUMN 2 — CONTACT INFO */}
            <div className='min-w-0'>
              <h4 className='font-semibold mb-6 font-heading text-lg'>
                Contact Info
              </h4>

              <p className='footer-para flex items-start gap-3 justify-center lg:justify-start'>
                <MapPin className='w-4 h-4 text-[#cc9e31] shrink-0 mt-1' />
                <span>
                  Hotel Nakshatra,<br />
                  #1828 PKN Road,<br />
                  Sivakasi
                </span>
              </p>

              <Link
                href='/contact'
                className='inline-flex items-center gap-2 text-[#8F2D2D] mt-4 px-5 py-2 rounded-lg text-base font-medium transition-all duration-300 hover:gap-3'
              >
                Book Now
                <ArrowRight className='h-5 w-5' />
              </Link>
            </div>

            {/* COLUMN 3 — GET IN TOUCH */}
            <div className='min-w-0'>
              <h4 className='font-semibold mb-6 font-heading text-lg'>
                Get In Touch
              </h4>

              <div className='space-y-3 text-sm sm:text-base'>
                <p className='footer-para flex items-center gap-3 justify-center lg:justify-start'>
                  <Phone className='w-4 h-4 text-[#cc9e31] shrink-0' />
                  <a href='tel:+914562264233' className='hover:text-[#8B1C1C]'>
                    +91-4562 264233
                  </a>
                </p>

                <p className='footer-para flex items-center gap-3 justify-center lg:justify-start'>
                  <Mail className='w-4 h-4 text-[#cc9e31] shrink-0' />
                  <a
                    href='mailto:hotelnakshatra33@gmail.com'
                    className='hover:text-[#8B1C1C] break-all'
                  >
                    hotelnakshatra33@gmail.com
                  </a>
                </p>

                <p className='footer-para flex items-center gap-3 justify-center lg:justify-start'>
                  <Mail className='w-4 h-4 text-[#cc9e31] shrink-0' />
                  <a
                    href='mailto:info@nakshatrahotel.com'
                    className='hover:text-[#8B1C1C] break-all'
                  >
                    info@nakshatrahotel.com
                  </a>
                </p>
              </div>
            </div>

            {/* COLUMN 4 — LOCATION */}
            <div className='min-w-0'>
              <h4 className='font-semibold mb-6 font-heading text-lg'>
                Location
              </h4>

              <div className='rounded-xl overflow-hidden shadow-md border border-[#1f3a44]/20'>
                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3935.5997870721044!2d77.805296!3d9.456446999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwMjcnMjMuMiJOIDc3wrA0OCcxOS4xIkU!5e0!3m2!1sen!2sin!4v1771068439471!5m2!1sen!2sin'
                  className='w-full h-[180px] sm:h-[220px] lg:h-[180px]'
                  style={{ border: 0 }}
                  loading='lazy'
                  referrerPolicy='no-referrer-when-downgrade'
                  allowFullScreen
                  title='Hotel Nakshatra Location'
                ></iframe>
              </div>
            </div>

          </div>
        </div>

        {/* COPYRIGHT */}
        <div className='border-t border-[#1f3a44]/20 py-6 text-center text-sm sm:text-base text-[#5C4A42]'>
          <p className='footer-para'>
            Copyright 2026 © Hotel Nakshatra. Concept by{' '}
            <a
              href='https://irepute.in/'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-[#C9A961] underline transition-colors'
            >
              repute
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}
