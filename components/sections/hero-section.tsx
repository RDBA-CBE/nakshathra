"use client"

import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="w-full flex flex-col lg:flex-row items-stretch h-[60vh] lg:h-[70vh] relative">
        {/* LEFT TEXT BLOCK - Cream Background */}
        <div className="w-full lg:w-1/2 bg-[#FBF6E6] flex items-center relative z-10">
          <div className="w-full px-6 sm:px-8 md:px-12 lg:px-14 xl:px-20 py-12 sm:py-16 lg:py-16 xl:py-24 relative z-20">
            <div className="max-w-[580px] mx-auto lg:mx-0">
              {/* Small Uppercase Heading */}
              <p 
                className="uppercase text-[10px] sm:text-xs tracking-[0.2em] font-normal text-[#2C1810] mb-5 sm:mb-6"
                style={{ 
                  fontFamily: 'sans-serif',
                  letterSpacing: '0.2em',
                  lineHeight: '1.5'
                }}
              >
                FIND UNIQUE HOMES IN VIBRANT PLACES.
              </p>

              {/* Large Main Heading */}
              <h1 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[56px] font-normal text-[#2C1810] mb-6 sm:mb-7 leading-[1.15]"
                style={{ 
                  fontFamily: '"Marcellus", serif',
                  fontWeight: 400,
                  letterSpacing: '-0.01em'
                }}
              >
                Experience Comfort<br />Of The City's Stays.
              </h1>

              {/* Description Paragraph */}
              <p 
                className="text-xs sm:text-sm text-[#2C1810] max-w-[540px] leading-[1.65] mb-7 sm:mb-8 whitespace-pre-line"
                style={{ 
                  fontFamily: 'sans-serif',
                  lineHeight: '1.65'
                }}
              >
                At SparkleClean, we believe a clean space is a happy space. With years of experience in residential and commercial cleaning our mission is to deliver top-quality..
              </p>

              {/* Know More Button */}
              <button 
                className="bg-[#8F2D2D] hover:bg-[#742222] text-[#FFFFFF] px-8 py-3 sm:px-10 sm:py-3.5 rounded-lg text-sm sm:text-base inline-flex items-center gap-2 transition-colors duration-200 font-medium"
                style={{ 
                  fontFamily: 'sans-serif'
                }}
              >
                Know More
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* VECTOR IMAGE - Diagonal Separator */}
        <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 z-30 pointer-events-none">
          <img
            src="/vector-icon.png"
            alt="Decorative vector separator"
            className="h-full w-auto"
            style={{ 
              height: '100%',
              width: 'auto',
              objectFit: 'contain',
              objectPosition: 'center'
            }}
          />
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full lg:w-1/2 overflow-hidden relative z-0">
          <div className="h-full w-full">
            <img
              src="/luxury-hotel-bedroom-with-white-pillows-and-warm-l.jpg"
              alt="Luxury hotel bedroom with elegant furnishings"
              className="w-full h-full object-cover object-center lg:object-right"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
