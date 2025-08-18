"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import ScrollIndicator from "@/components/scroll-indicator"

export default function HeroSection() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <motion.div className="absolute inset-0 bg-black" style={{ y }} />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-screen">
        {/* Left Half - Photo */}
        <div className="flex items-center justify-center h-full min-h-[400px] lg:min-h-screen -mx-4 lg:mx-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-full h-full bg-gray-800 flex items-center justify-center"
          >
            <img src="/cgc.jpg" alt="E-CELL CGC Team" className="w-full h-full object-cover" />
          </motion.div>
        </div>

        {/* Right Half - Content */}
        <div className="text-left py-16 lg:py-0">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">E-CELL CGC</h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="h-1 bg-white mb-8"
            />
            <h2 className="text-xl md:text-3xl font-light mb-8 text-white">Fueling Ideas into Impact</h2>
            <p className="text-lg md:text-xl text-white mb-12">Empowering the Entrepreneurs of Tomorrow at CGC-COE</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-200 text-lg px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Join Our Mission <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </div>

      <ScrollIndicator />
    </section>
  )
}
