"use client";

import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/sections/footer";

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
    <main className="min-h-screen bg-[#FAF9F7]">
      <Header />

      <section className="py-20 sm:py-24">
        <div className="max-w-5xl mx-auto px-4">
          {/* Page Title */}
          <h1 className="heading leading-[1.15] mb-10 sm:mb-12">
            Sitemap
          </h1>

          {/* Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {links.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="group flex items-center justify-between p-5 sm:p-6 rounded-2xl bg-white shadow-sm hover:shadow-lg transition"
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
