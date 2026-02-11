"use client";
import Header from "@/components/header";
import Footer from "@/components/sections/footer";
import type { Metadata } from "next";
import { Check } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

// export const metadata: Metadata = {
//   title: "Privacy Policy - Hotel Nakshathra",
//   description:
//     "Privacy Policy for Hotel Nakshathra - Your privacy is important to us",
// };

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Rooms", href: "/rooms" },
  { name: "Facility", href: "/facility" },
  { name: "Gallery", href: "/gallery" },
  { name: "Blogs", href: "/blogs" },
  { name: "Contact", href: "/contact" },
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms and Conditions", href: "/terms-and-conditions" },
  { name: "Sitemap", href: "/sitemap" },
  { name: "Pooja Time", href: "/pooja-time" },
];

export default function SitemapPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="relative w-full overflow-hidden">
        <div className="relative flex flex-col lg:flex-row  w-full">
          {/* LEFT CONTENT - Light Background */}
          <div className="relative z-10 w-full lg:w-1/2 bg-gradient-to-br from-[#F8F4E9] to-[#F1ECE0] flex items-center">
            <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 py-16 lg:py-20">
              <div>
                {/* Eyebrow / Subtitle */}

                {/* Main Heading */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="heading leading-[1.15] "
                >
                  Site Map
                  
                </motion.h1>

                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="space-y-6 "
                ></motion.div>

                {/* Decorative Line */}

                {/* Features */}
              </div>
            </div>
          </div>

          {/* DIAGONAL SEPARATOR */}
          <div className="hidden lg:block absolute left-1/2 top-0 h-full -translate-x-1/2 z-20 pointer-events-none">
            <div className="relative h-full w-px">
              <div className="absolute inset-y-0 left-1/2 transform -translate-x-1/2 w-[2px]">
                <div className="h-full bg-gradient-to-b from-[#8B4513]/20 via-[#8B4513]/40 to-[#8B4513]/20"></div>
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-[#FBF6E6] border-2 border-[#8B4513]/30 rounded-full"></div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent z-10"></div>
            <Image
              src="/facilities/intro.webp"
              alt="Hotel Nakshathra Elegant Interior"
              fill
              className="object-cover object-center"
              priority
            />
            {/* Image Overlay Content */}
          </div>
        </div>
      </section>
      <section className="py-20 sm:py-24">
        <div className="max-w-5xl mx-auto px-4">
          {/* Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {links.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="bg-[#FBF6E6] group flex items-center justify-between p-5 sm:p-6 rounded-2xl shadow-sm hover:shadow-lg transition"
              >
                <span className="text-base sm:text-lg text-[#152A38] group-hover:text-[#8B4513] transition">
                  {link.name}
                </span>

                <span className="text-[#8B4513] text-xl transform group-hover:translate-x-1 transition">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
