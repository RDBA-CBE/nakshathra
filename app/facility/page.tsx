import Header from "@/components/header"
import Footer from "@/components/sections/footer"
import FacilitiesSection from "@/components/sections/facilities-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Facilities - Nakshatra Royal Stay",
  description: "Discover our world-class facilities and amenities",
}

export default function FacilityPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F3]">
      <Header />
      <div className="pt-32">
        <FacilitiesSection />
      </div>
      <Footer />
    </main>
  )
}
