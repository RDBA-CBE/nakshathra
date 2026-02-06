import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#FAF8F3]text-[#2C1810] py-16 px-6">
      <div className="max-w-[1400px] mx-auto">
        
        {/* GRID EXACT LIKE IMAGE */}
        <div className="grid md:grid-cols-[420px_1px_1fr] gap-12 mb-16">
          
          {/* LEFT LOGO & TEXT */}
          <div>
            <img
              src="/footer-logo.png"
              alt="Hotel Nakshatra Logo"
              className="w-44 mb-6"
            />

            <p className="text-[#5C4A42] text-base leading-relaxed max-w-[330px]">
              Nakshathra Royal Stay, a smart business class hotel situated in
              Palani with a promise 'Hey we are different' from existing hotels
              in the region with a vow to delight you...
            </p>
          </div>

          {/* VERTICAL LINE */}
          <div className="hidden md:flex justify-center">
            <div className="w-px bg-[#C9A961]/30 h-full"></div>
          </div>

          {/* RIGHT 3 COLUMNS EXACTLY LIKE IMAGE */}
          <div className="grid md:grid-cols-3 gap-12">
            
            {/* QUICK LINKS */}
            <div>
              <h4 className="font-semibold mb-6 text-lg">Quick Links</h4>
              <ul className="space-y-3 text-base  text-[#5C4A42]">
                <li><Link href="/about" className="hover:text-[#8B1C1C]">About</Link></li>
                <li><Link href="/rooms" className="hover:text-[#8B1C1C]">Rooms</Link></li>
                <li><Link href="/facility" className="hover:text-[#8B1C1C]">Facility</Link></li>
                <li><Link href="/gallery" className="hover:text-[#8B1C1C]">Gallery</Link></li>
                <li><Link href="/contact" className="hover:text-[#8B1C1C]">Contact</Link></li>
              </ul>
            </div>

            {/* EXPLORE PAGES */}
            <div>
              <h4 className="font-semibold mb-6 text-lg">Explore Pages</h4>
              <ul className="space-y-3 text-base text-[#5C4A42]">
                <li><Link href="/privacy-policy" className="hover:text-[#8B1C1C]">Privacy Policy</Link></li>
                <li><Link href="/terms-and-conditions" className="hover:text-[#8B1C1C]">Terms and Conditions</Link></li>
                <li><Link href="/refund-policy" className="hover:text-[#8B1C1C]">Refund Policy</Link></li>
                <li><Link href="/sitemap" className="hover:text-[#8B1C1C]">Sitemap</Link></li>
                <li><Link href="/pooja-time" className="hover:text-[#8B1C1C]">Pooja Time</Link></li>
              </ul>
            </div>

            {/* CONTACT US */}
            <div>
              <h4 className="font-semibold mb-6 text-lg">Contact Us</h4>

              <p className="text-bse text-[#5C4A42] leading-relaxed">
                Kodaikanal Road,<br />
                Palani, Tamil Nadu,<br />
                India 624601
              </p>

              <div className="mt-4 space-y-2 text-[#5C4A42] text-base">
                <p><a href="tel:+919087173000" className="hover:text-[#8B1C1C]">+91 90871 73000</a></p>
                <p><a href="tel:+919087174000" className="hover:text-[#8B1C1C]">+91 90871 74000</a></p>
                <p className="pt-2">
                  <a href="mailto:nakshathrapalani@gmail.com" className="hover:text-[#8B1C1C]">
                    nakshathrapalani@gmail.com
                  </a>
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-[#C9A961]/20 pt-6 text-center text-base text-[#5C4A42]">
          Copyright 2025 © Nakshatra Royal Stay. Concept by Repute.
        </div>
      </div>
    </footer>
  );
}
