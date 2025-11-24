import Header from "@/components/header"
import Footer from "@/components/sections/footer"
import type { Metadata } from "next"
import { MapPin, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export const metadata: Metadata = {
  title: "Contact Us - Nakshatra Royal Stay",
  description: "Get in touch with Nakshatra Royal Stay",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F3]">
      <Header />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-sm font-medium text-[#8B4513] uppercase tracking-wider mb-3 block">Get in Touch</span>
            <h1 className="font-serif text-4xl lg:text-5xl text-[#2C2416] mb-4">Contact Us</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">We're here to help and answer any question you might have</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-[#8B4513] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-[#8B4513]" />
              </div>
              <h3 className="font-semibold text-[#2C2416] mb-2">Phone</h3>
              <p className="text-gray-600">+91 90871 73000</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-[#8B4513] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-[#8B4513]" />
              </div>
              <h3 className="font-semibold text-[#2C2416] mb-2">Email</h3>
              <p className="text-gray-600">contact@nakshatraroyalstay.com</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-[#8B4513] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-[#8B4513]" />
              </div>
              <h3 className="font-semibold text-[#2C2416] mb-2">Location</h3>
              <p className="text-gray-600">Papum, Arunachal Pradesh</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-[#2C2416] mb-6">Send us a message</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <Input placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <Input type="email" placeholder="your@email.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <Input placeholder="How can we help?" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <Textarea placeholder="Your message..." rows={6} />
              </div>
              <Button className="bg-[#8B4513] hover:bg-[#723610] text-white w-full">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
