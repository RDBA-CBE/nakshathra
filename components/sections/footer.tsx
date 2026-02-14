import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='bg-[#FBF6E6] text-[#1F3A44] pt-10 px-4 sm:px-6 overflow-x-hidden'>
      <div className='max-w-[1280px] mx-auto w-full'>
        <ul className='pb-10 flex flex-wrap items-center justify-center gap-6 text-base text-[#5C4A42]'>
          <li className='footer-list1'>
            <Link
              href='/about'
              className='flex items-center gap-2 hover:text-[#8B1C1C]'
            >
              <img src='/stars.svg' alt='star' className='w-4 h-4' />
              About
            </Link>
          </li>

          <li className='footer-list1'>
            <Link
              href='/rooms'
              className='flex items-center gap-2 hover:text-[#8B1C1C]'
            >
              <img src='/stars.svg' alt='star' className='w-4 h-4' />
              Rooms
            </Link>
          </li>
          <li className='footer-list1'>
            <Link
              href='/facility'
              className='flex items-center gap-2 hover:text-[#8B1C1C]'
            >
              <img src='/stars.svg' alt='star' className='w-4 h-4' />
              Facility
            </Link>
          </li>
          <li className='footer-list1'>
            <Link
              href='/gallery'
              className='flex items-center gap-2 hover:text-[#8B1C1C]'
            >
              <img src='/stars.svg' alt='star' className='w-4 h-4' />
              Gallery
            </Link>
          </li>
          <li className='footer-list1'>
            <Link
              href='/contact'
              className='flex items-center gap-2 hover:text-[#8B1C1C]'
            >
              <img src='/stars.svg' alt='star' className='w-4 h-4' />
              Contact
            </Link>
          </li>
        </ul>
        {/* MAIN GRID */}
        <div className='border-t border-[#1f3a44]/20 pt-10 grid grid-cols-1 md:grid-cols-[minmax(0,380px)_1px_minmax(0,1fr)] gap-12 mb-10'>
          {/* LEFT */}
          <div className='text-center md:text-left min-w-0'>
            <Link href='/'>
              <img
                src='/footer-logo.png'
                alt='Hotel Nakshatra Logo'
                className='w-40 mb-6 mx-auto md:mx-0'
              />
            </Link>
            <p className='footer-para max-w-[320px] mx-auto md:mx-0'>
              Hotel Nakshatra is a reliable business-class stay in Sivakasi,
              offering comfort, modern amenities, and attentive service for
              guests from major cities.
            </p>
          </div>

          {/* DIVIDER */}
          <div className='hidden md:flex justify-center'>
            <div className='w-px bg-[#1f3a44]/30 h-full'></div>
          </div>

          {/* RIGHT */}
          <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 min-w-0 text-center sm:text-left'>
            {/* QUICK LINKS */}
            <div className='min-w-0'>
              <h4 className='font-semibold mb-6 font-heading text-lg'>
                Contact Info
              </h4>
              <p className='footer-para'>
                HOTEL NAKSHATRA,
                <br />
                #1828 PKN ROAD,
                <br />
                SIVAKASI
              </p>
            </div>

            {/* CONTACT */}
            <div className='min-w-0'>
              <h4 className='font-semibold mb-6 font-heading text-lg'>
                Get In Touch
              </h4>

              <div className='mt-4 space-y-2 text-base'>
                <p className='footer-para'>
                  <a href='tel:+914562264233' className='hover:text-[#8B1C1C]'>
                    +91-4562264233
                  </a>
                </p>
                <p className='pt-2 footer-para break-all'>
                  <a
                    href='mailto:hotelnakshatra33@gmail.com'
                    className='hover:text-[#8B1C1C]'
                  >
                    hotelnakshatra33@gmail.com
                  </a>
                </p>
                <p className='pt-2 footer-para break-all'>
                  <a
                    href='mailto:info@hotelnakshatra.com'
                    className='hover:text-[#8B1C1C]'
                  >
                    info@hotelnakshatra.com
                  </a>
                </p>
              </div>
            </div>
            <div className='min-w-0'>
              <h4 className='font-semibold mb-6 font-heading text-lg'>
                Location
              </h4>

              <div className='rounded-xl overflow-hidden shadow-md border border-[#1f3a44]/20'>
                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3935.5997870721044!2d77.805296!3d9.456446999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwMjcnMjMuMiJOIDc3wrA0OCcxOS4xIkU!5e0!3m2!1sen!2sin!4v1771068439471!5m2!1sen!2sin'
                  className='w-full h-[220px] sm:h-[250px] lg:h-[220px]'
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
            Copyright 2026 © Nakshatra Royal Stay. Concept by{' '}
            <a
              href='https://irepute.in/'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-[#C9A961] underline transition-colors'
            >
              repute
            </a>
          </p>
          .
        </div>
      </div>
    </footer>
  );
}
