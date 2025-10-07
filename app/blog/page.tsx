"use client"

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import BlogSection from "@/components/sections/blog-section";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />

      <section className="pt-24 pb-8 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center justify-center gap-3 mb-4">
              <BookOpen className="h-8 w-8 text-yellow-400" />
              <h1 className="text-5xl md:text-7xl font-bold">Blog</h1>
            </div>
            <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full"></div>
            <p className="mt-6 text-black/70 max-w-3xl mx-auto">
              Read insights, stories, and resources from the E-Cell CGC COE community.
            </p>
          </motion.div>
        </div>
      </section>

      <BlogSection />

      <Footer />
    </div>
  );
}
