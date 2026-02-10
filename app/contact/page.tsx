import Header from "@/components/header";
import Footer from "@/components/sections/footer";
import type { Metadata } from "next";
import Image from "next/image";
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
    <main className="min-h-screen bg-white">
      <Header />

      {/* HERO */}
      <section className="px-4 pt-24 pb-20 bg-[#F3EEE6]">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl text-[#1F3A44]">
            Contact Us
          </h1>
          <div className="mt-8 flex justify-center">
            <span className="h-[1px] w-32 bg-[#8B4513]/40"></span>
          </div>
        </div>
      </section>

      {/* MAP SECTION */}

      {/* CONTACT DETAILS */}
      <section className="px-4 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            {/* Phone */}
            <div className="rounded-3xl border border-[#8B4513]/20 p-10 hover:shadow-xl transition">
              <Phone className="w-6 h-6 mx-auto text-[#8B4513]" />
              <p className="mt-6 text-xl text-[#1F3A44] font-light">
                +91 90871 73000 <br/>+91 90871 74000
              </p>
            </div>

            {/* Email */}
            <div className="rounded-3xl border border-[#8B4513]/20 p-10 hover:shadow-xl transition">
              <Mail className="w-6 h-6 mx-auto text-[#8B4513]" />
              <p className="mt-6 text-xl text-[#1F3A44] font-light break-all">
                nakshathrapalani@gmail.com
              </p>
            </div>

            {/* Location */}
            <div className="rounded-3xl  border border-[#8B4513]/20 p-10 hover:shadow-xl transition">
              <MapPin className="w-6 h-6 mx-auto text-[#8B4513]" />
              <p className="mt-6 text-xl text-[#1F3A44] font-light">
                Kodaikanal Road, Palani, Tamil Nadu India 624601
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="relative max-w-7xl  mx-auto rounded-3xl h-[300px]">
        <div className="relative w-full h-full min-h-[300px] overflow-hidden rounded-3xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3923.8584287991243!2d77.523839!3d10.432807!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9df4228c617b3%3A0xe36994319f709ff6!2sHotel%20Nakshathra-%20A%20Royal%20Stay!5e0!3m2!1sen!2sin!4v1770721274807!5m2!1sen!2sin"
            className="absolute inset-0 w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>

      {/* FORM */}
      <section className="px-4 py-28 bg-[#FFFFF]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch">
          {/* IMAGE SIDE */}
          <div className="relative w-full h-full min-h-full overflow-hidden rounded-3xl">
            <Image
              src="/about/welcoming-stay.webp" // replace with your image
              alt="Nakshatra Royal Stay Concierge"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[#152A38]/25" />

            <div className="absolute bottom-10 left-10 right-10 text-white">
              <p className="text-xs uppercase tracking-widest text-white/80">
                Nakshatra Royal Stay
              </p>
              <h3 className="font-heading text-3xl mt-2">
                Personalized Assistance
              </h3>
            </div>
          </div>

          {/* FORM SIDE */}
          <div className="max-w-xl mx-auto w-full border border-[#8B4513]/25 rounded-2xl p-10 bg-transparent">
            <h2 className="font-heading text-4xl text-[#1F3A44] mb-6">
              We’d love to hear from you.
            </h2>

            <p className="text-gray-600 text-sm mb-16">
              At Hotel Nakshathra, we strive to make your experience seamless
              and memorable. Reach out to us for bookings, inquiries or any
              assistance, you’ll receive prompt and personalized support.
            </p>

            <form className="space-y-10">
              <div>
                <label className="text-xs uppercase tracking-widest text-gray-500">
                  Full Name
                </label>
                <Input
                  placeholder="Your name"
                  className="mt-3 border-0 border-b border-gray-300 rounded-none bg-transparent focus:border-[#8B4513]"
                />
              </div>

              <div>
                <label className="text-xs uppercase tracking-widest text-gray-500">
                  Email Address
                </label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  className="mt-3 border-0 border-b border-gray-300 rounded-none bg-transparent focus:border-[#8B4513]"
                />
              </div>

              <div>
                <label className="text-xs uppercase tracking-widest text-gray-500">
                  Subject
                </label>
                <Input
                  placeholder="Booking / Inquiry / Support"
                  className="mt-3 border-0 border-b border-gray-300 rounded-none bg-transparent focus:border-[#8B4513]"
                />
              </div>

              <div>
                <label className="text-xs uppercase tracking-widest text-gray-500">
                  Message
                </label>
                <Textarea
                  rows={5}
                  placeholder="Write your message..."
                  className="mt-3 border-0 border-b border-gray-300 rounded-none bg-transparent focus:border-[#8B4513]"
                />
              </div>

              <Button className="w-full mt-10 bg-[#8B4513] hover:bg-[#723610] text-white py-6 text-sm uppercase tracking-widest">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
