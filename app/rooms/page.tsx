import Header from "@/components/header"
import Footer from "@/components/sections/footer"
import RoomsSection from "@/components/sections/rooms-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Rooms - Nakshatra Royal Stay",
  description: "Explore our luxury rooms and suites",
}

export default function RoomsPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F3]">
      <Header />
      <div className="pt-32">
        <RoomsSection />
      </div>
      <Footer />
    </main>
  )
}
