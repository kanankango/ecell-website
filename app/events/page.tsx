"use client"

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import AnnouncementsSection from "@/components/sections/announcements-section";
import UpcomingEventsSection from "@/components/sections/upcoming-events-section";
import EventsOrganizedSection from "@/components/sections/events-organized-section";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="pt-24 pb-10 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center justify-center gap-3 mb-4">
              <Calendar className="h-8 w-8 text-golden-300" />
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-golden-300 to-golden-200 bg-clip-text text-transparent">
                Events
              </h1>
            </div>
            <div className="w-24 h-1 bg-golden-300 mx-auto rounded-full"></div>
            <p className="mt-6 text-gray-300 max-w-3xl mx-auto">
              Explore announcements, upcoming events, and highlights from events organized by E-Cell CGC COE.
            </p>
          </motion.div>
        </div>
      </section>

      <AnnouncementsSection />
      <UpcomingEventsSection />
      <EventsOrganizedSection />

      <Footer />
    </div>
  );
}
