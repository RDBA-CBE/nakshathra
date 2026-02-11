"use client";
import Header from "@/components/header";
import Footer from "@/components/sections/footer";
import type { Metadata } from "next";
import { Check } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

// export const metadata: Metadata = {
//   title: "Privacy Policy - Hotel Nakshathra",
//   description:
//     "Privacy Policy for Hotel Nakshathra - Your privacy is important to us",
// };
export default function ContactPage() {
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
                  Arulmigu Dhandayuthapani Swamy Temple<br/>
                  <span className="text-[#b3862f]">Pooja Timing</span>{" "}
                </motion.h1>

                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="space-y-6 "
                >
                  
                </motion.div>

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
      <section className="py-20 bg-[#FFFFFF]">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header */}

          {/* Table Wrapper */}
          <div className="overflow-x-auto bg-white rounded-2xl shadow-lg border border-gray-100">
            <table className="min-w-full border-collapse">
              <thead className="bg-[#FBF6E6]">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#152A38]">
                    Pooja Name
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#152A38]">
                    Pooja Time
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#152A38]">
                    Alangaram Name
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#152A38]">
                    Normal Day
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#152A38]">
                    Special Day
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                {[
                  [
                    "Vishwarubha",
                    "05.40 AM",
                    "Vishwarubham Dharsanam",
                    "₹100",
                    "₹200",
                  ],
                  [
                    "Vilaa Pooja",
                    "06.40 AM",
                    "Sanniyasi Alangaram",
                    "₹150",
                    "₹300",
                  ],
                  [
                    "Siru Kall Pooja",
                    "08.00 AM",
                    "Vedan Alangaram",
                    "₹150",
                    "₹300",
                  ],
                  [
                    "Kaala Santhi Pooja",
                    "09.00 AM",
                    "Balasubramaniar Alangaram",
                    "₹150",
                    "₹300",
                  ],
                  [
                    "Utchi Kaala Pooja",
                    "12.00 PM",
                    "Vaitheekal Alangaram",
                    "₹150",
                    "₹300",
                  ],
                  [
                    "Sayaraksha Pooja",
                    "05.30 PM",
                    "Raja Alangaram",
                    "₹150",
                    "₹300",
                  ],
                  [
                    "Iraakkaala Pooja",
                    "08.00 PM",
                    "Pushpa Alangaram",
                    "₹150",
                    "₹300",
                  ],
                ].map(([pooja, time, alangaram, normal, special], index) => (
                  <tr key={index} className="hover:bg-[#FBF6E6] transition">
                    <td className="px-6 py-4 text-[#2C2416] font-medium">
                      {pooja}
                    </td>
                    <td className="px-6 py-4 text-[#5A5A5A]">{time}</td>
                    <td className="px-6 py-4 text-[#5A5A5A]">{alangaram}</td>
                    <td className="px-6 py-4 text-[#5A5A5A]">{normal}</td>
                    <td className="px-6 py-4 text-[#8B4513] font-medium">
                      {special}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
