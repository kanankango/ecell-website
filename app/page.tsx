"use client"
import { useScroll, useTransform } from "framer-motion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import HeroSection from "@/components/sections/hero-section"
import StatsSection from "@/components/sections/stats-section"
import MissionSection from "@/components/sections/mission-section"
import GallerySection from "@/components/sections/gallery-section"
import BlogSection from "@/components/sections/blog-section"
import UpcomingEventsSection from "@/components/sections/upcoming-events-section"
import NewsletterSection from "@/components/sections/newsletter-section"
import FloatingSocialIcons from "@/components/floating-social-icons"

export default function HomePage() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <MissionSection />
      <GallerySection />
      <BlogSection />
      <UpcomingEventsSection />
      <NewsletterSection />
      <FloatingSocialIcons />
      <Footer />
    </div>
  )
}
