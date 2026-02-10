import Header from "@/components/header";
import Footer from "@/components/sections/footer";
import type { Metadata } from "next";
import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const metadata: Metadata = {
  title: "Contact Us - Nakshatra Royal Stay",
  description: "Get in touch with Nakshatra Royal Stay",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="py-20 bg-[#FFFFFF]">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading text-[#152A38] mb-4">
              Arulmigu Dhandayuthapani Swamy Temple
              <br /> Pooja Timing
            </h1>
          </div>

          {/* Table Wrapper */}
          <div className="overflow-x-auto bg-white rounded-2xl shadow-lg border border-gray-100">
            <table className="min-w-full border-collapse">
              <thead className="bg-[#F3EEE6]">
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
                  <tr key={index} className="hover:bg-[#FAF9F7] transition">
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
