import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#FBF6E6] text-[#1F3A44] pt-16 px-4 sm:px-6 overflow-x-hidden">
      <div className="max-w-[1280px] mx-auto w-full">
        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,380px)_1px_minmax(0,1fr)] gap-12 mb-16">
          {/* LEFT */}
          <div className="text-center md:text-left min-w-0">
            <img
              src="/footer-logo.png"
              alt="Hotel Nakshatra Logo"
              className="w-40 mb-6 mx-auto md:mx-0"
            />

            <p className="para max-w-[320px] mx-auto md:mx-0">
              Nakshathra Royal Stay, a smart business class hotel situated in
              Palani with a promise 'Hey we are different' from existing hotels
              in the region with a vow to delight you.
            </p>
          </div>

          {/* DIVIDER */}
          <div className="hidden md:flex justify-center">
            <div className="w-px bg-[#C9A961]/30 h-full"></div>
          </div>

          {/* RIGHT */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 min-w-0 text-center sm:text-left">
            {/* QUICK LINKS */}
            <div className="min-w-0">
              <h4 className="font-semibold mb-6 font-heading text-lg">
                Quick Links
              </h4>
              <ul className="space-y-3 text-base text-[#5C4A42]">
                <li className="list">
                  <Link href="/about" className="hover:text-[#8B1C1C]">
                    About
                  </Link>
                </li>
                <li className="list">
                  <Link href="/rooms" className="hover:text-[#8B1C1C]">
                    Rooms
                  </Link>
                </li>
                <li className="list">
                  <Link href="/facility" className="hover:text-[#8B1C1C]">
                    Facility
                  </Link>
                </li>
                <li className="list">
                  <Link href="/gallery" className="hover:text-[#8B1C1C]">
                    Gallery
                  </Link>
                </li>
                <li className="list">
                  <Link href="/contact" className="hover:text-[#8B1C1C]">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* EXPLORE */}
            <div className="min-w-0">
              <h4 className="font-semibold mb-6 font-heading text-lg">
                Explore Pages
              </h4>
              <ul className="space-y-3 text-base text-[#5C4A42]">
                <li className="list">
                  <Link href="/privacy-policy" className="hover:text-[#8B1C1C]">
                    Privacy Policy
                  </Link>
                </li>
                <li className="list">
                  <Link
                    href="/terms-and-conditions"
                    className="hover:text-[#8B1C1C]"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li className="list">
                  <Link href="/refund-policy" className="hover:text-[#8B1C1C]">
                    Refund Policy
                  </Link>
                </li>
                {/* <li className="list">
                  <Link href="/site-map" className="hover:text-[#8B1C1C]">
                    Sitemap
                  </Link>
                </li> */}
                <li className="list">
                  <Link href="/pooja-time" className="hover:text-[#8B1C1C]">
                    Pooja Time
                  </Link>
                </li>
              </ul>
            </div>

            {/* CONTACT */}
            <div className="min-w-0">
              <h4 className="font-semibold mb-6 font-heading text-lg">
                Contact Us
              </h4>

              <p className="para">
                Kodaikanal Road,
                <br />
                Palani, Tamil Nadu,
                <br />
                India 624601
              </p>

              <div className="mt-4 space-y-2 text-base">
                <p className="para">
                  <a href="tel:+919087173000" className="hover:text-[#8B1C1C]">
                    +91 90871 73000
                  </a>
                </p>
                <p className="para" >
                  <a href="tel:+919087174000" className="hover:text-[#8B1C1C]">
                    +91 90871 74000
                  </a>
                </p>
                <p className="pt-2 para break-all">
                  <a
                    href="mailto:nakshathrapalani@gmail.com"
                    className="hover:text-[#8B1C1C]"
                  >
                    nakshathrapalani@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-[#C9A961]/20 py-6 text-center text-sm sm:text-base text-[#5C4A42]">
          <p className="para">
            Copyright 2026 © Nakshatra Royal Stay. Concept by{" "}
            <a
              href="https://irepute.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C9A961] underline transition-colors"
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
