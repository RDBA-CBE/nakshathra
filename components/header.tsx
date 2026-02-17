'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Smartphone, Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Rooms', href: '/rooms' },
  { name: 'Facility', href: '/facility' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // ✅ Smooth scroll detection (no shaking)
  useEffect(() => {
    let lastState = false;

    const handleScroll = () => {
      const current = window.scrollY > 60;

      if (current !== lastState) {
        lastState = current;
        setIsScrolled(current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className='w-full bg-white sticky top-0 z-50 transition-shadow duration-300'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12'>
        {/* ⭐ FIXED HEIGHT — ONLY SCALE INSIDE */}
        <div
          className={`flex items-center justify-between py-5 lg:py-6
            transition-transform duration-300 origin-top ${
              isScrolled ? 'scale-[0.95]' : 'scale-100'
            }`}
        >
          {/* Logo */}
          <Link href='/' className='flex items-center flex-shrink-0 z-10'>
            <img
              src='/header-logo.png'
              alt='Hotel Nakshatra Logo'
              className='h-auto w-auto max-h-16 sm:max-h-14 lg:max-h-20 xl:max-h-22'
            />
          </Link>

          {/* Desktop Navigation */}
          <div
            className='hidden lg:flex items-center gap-10 xl:gap-12
              bg-[#F5F1ED] rounded-xl flex-1 justify-center
              max-w-5xl mx-auto px-10 xl:px-16 py-4 xl:py-6
              transition-all duration-300'
          >
            <nav className='flex items-center gap-6 xl:gap-10'>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-[18px] transition-colors ${
                    pathname === item.href
                      ? 'text-[#8B4513]'
                      : 'text-[#1F3A44] hover:text-[#8B4513]'
                  }`}
                  style={{ fontFamily: '"Marcellus", serif' }}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className='w-px h-8 bg-gray-300' />

            <div className='flex items-center gap-2.5'>
              <Smartphone className='w-8 h-8 text-[#8B4513]' />
              <div className='flex flex-col leading-tight'>
                <p className='para whitespace-nowrap'>
                  Reserve Your Stay Today
                </p>
                <a href='tel:+914562264233' className='header-contact'>
                  +91-45622 64233
                </a>
              </div>
            </div>
          </div>

          {/* Mobile Hamburger */}
          <button
            className='lg:hidden z-50'
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label='Toggle menu'
          >
            {mobileOpen ? (
              <X className='w-6 h-6 text-[#1F3A44]' />
            ) : (
              <Menu className='w-6 h-6 text-[#1F3A44]' />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className='lg:hidden mt-2 bg-white border-t border-gray-200 mb-4 shadow-md rounded-b-xl'>
            <nav className='flex flex-col gap-4 p-4'>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-base ${
                    pathname === item.href
                      ? 'text-[#8B4513] font-medium'
                      : 'text-[#1F3A44]'
                  }`}
                  style={{ fontFamily: '"Marcellus", serif' }}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className='flex items-center gap-3 mt-2 border-t border-gray-200 bg-[#F5F5F5] px-4 py-3 rounded-b-xl'>
              <Smartphone className='w-6 h-6 text-[#8B4513]' />
              <div className='flex flex-col'>
                <span className='text-xs text-[#666] leading-tight'>
                  Reserve Your Stay Today
                </span>
                <span className='text-sm font-semibold text-[#1F3A44] leading-tight'>
                  +91-45622 64233
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
