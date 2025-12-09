import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='bg-[#F5F0E8] text-[#2C1810] py-16 px-6'>
      <div className='container mx-auto'>
        <div className='grid md:grid-cols-[1fr_auto_2fr] gap-8 md:gap-12 mb-12'>
          {/* Logo and Description */}
          <div className='max-w-md'>
            <div className='mb-6'>
              {/* Logo */}
              <div className='flex items-center gap-3 mb-4'>
                <img
                  src='/footer-logo.png'
                  alt='Hotel Nakshatra Logo'
                  className='w-40 h-auto'
                />
              </div>
            </div>
            <p className='text-[#5C4A42] leading-relaxed text-sm'>
              Nakshathra Royal Stay, a smart business class hotel situated in
              Palani with a promise 'Hey we are different' from existing hotels
              in the region with a vow to delight you...
            </p>
          </div>

          {/* Vertical Separator */}
          <div className='hidden md:block w-px bg-[#C9A961]/30'></div>

          {/* Three Columns */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12'>
            {/* Quick Links */}
            <div>
              <h4 className='font-semibold mb-6 text-[#2C1810] text-lg'>
                Quick Links
              </h4>
              <ul className='space-y-3 text-sm'>
                <li>
                  <Link
                    href='/about'
                    className='text-[#5C4A42] hover:text-[#8B1C1C] transition-colors'
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href='/rooms'
                    className='text-[#5C4A42] hover:text-[#8B1C1C] transition-colors'
                  >
                    Rooms
                  </Link>
                </li>
                <li>
                  <Link
                    href='/facility'
                    className='text-[#5C4A42] hover:text-[#8B1C1C] transition-colors'
                  >
                    Facility
                  </Link>
                </li>
                <li>
                  <Link
                    href='/gallery'
                    className='text-[#5C4A42] hover:text-[#8B1C1C] transition-colors'
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    href='/contact'
                    className='text-[#5C4A42] hover:text-[#8B1C1C] transition-colors'
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Explore Pages */}
            <div>
              <h4 className='font-semibold mb-6 text-[#2C1810] text-lg'>
                Explore Pages
              </h4>
              <ul className='space-y-3 text-sm'>
                <li>
                  <Link
                    href='/privacy-policy'
                    className='text-[#5C4A42] hover:text-[#8B1C1C] transition-colors'
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href='/terms-and-conditions'
                    className='text-[#5C4A42] hover:text-[#8B1C1C] transition-colors'
                  >
                    Terms and Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href='/refund-policy'
                    className='text-[#5C4A42] hover:text-[#8B1C1C] transition-colors'
                  >
                    Refund Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href='/sitemap'
                    className='text-[#5C4A42] hover:text-[#8B1C1C] transition-colors'
                  >
                    Sitemap
                  </Link>
                </li>
                <li>
                  <Link
                    href='/pooja-time'
                    className='text-[#5C4A42] hover:text-[#8B1C1C] transition-colors'
                  >
                    Pooja Time
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h4 className='font-semibold mb-6 text-[#2C1810] text-lg'>
                Contact Us
              </h4>
              <ul className='space-y-3 text-sm text-[#5C4A42]'>
                <li>
                  <p className='leading-relaxed'>
                    Kodaikanal Road,
                    <br />
                    Palani, Tamil Nadu,
                    <br />
                    India 624601
                  </p>
                </li>
                <li className='pt-2'>
                  <a
                    href='tel:+919087173000'
                    className='hover:text-[#8B1C1C] transition-colors'
                  >
                    +91 90871 73000
                  </a>
                </li>
                <li>
                  <a
                    href='tel:+919087174000'
                    className='hover:text-[#8B1C1C] transition-colors'
                  >
                    +91 90871 74000
                  </a>
                </li>
                <li className='pt-2'>
                  <a
                    href='mailto:nakshathrapalani@gmail.com'
                    className='hover:text-[#8B1C1C] transition-colors'
                  >
                    nakshathrapalani@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className='border-t border-[#C9A961]/20 pt-6 text-center text-sm text-[#5C4A42]'>
          <p>Copyright 2025 © Nakshatra Royal Stay. Concept by Repute.</p>
        </div>
      </div>
    </footer>
  );
}
