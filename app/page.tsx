import HeroSection from "@/components/sections/hero-section"
import AboutSection from "@/components/sections/about-section"
import RoomsSection from "@/components/sections/rooms-section"
import FacilitiesSection from "@/components/sections/facilities-section"
import LuxuryBanner from "@/components/sections/luxury-banner"
import DiningSection from "@/components/sections/dining-section"
import TestimonialsSection from "@/components/sections/testimonials-section"
import CTASection from "@/components/sections/cta-section"
import ExperienceSection from "@/components/sections/experience-section"
import GallerySection from "@/components/sections/gallery-section"
import Footer from "@/components/sections/footer"
import Header from "@/components/header"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF8F3]">
      <Header />
      <HeroSection />
      <AboutSection />
      <RoomsSection />
      <FacilitiesSection />
      <LuxuryBanner />
      <DiningSection />
      <ExperienceSection />
      <GallerySection />
      <TestimonialsSection />
      <CTASection />
      {/* End of section reordering */}
      <Footer />
    </main>
  )
}
