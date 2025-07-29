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
      <motion.div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" style={{ y }} />

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-400 to-white bg-clip-text text-transparent">
            E-CELL CGC
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto mb-8"
          />
          <h2 className="text-2xl md:text-4xl font-light mb-8 text-gray-300">Fueling Ideas into Impact</h2>
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
            Empowering the Entrepreneurs of Tomorrow at CGC-COE
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex justify-center items-center"
        >
          <Button
            size="lg"
            className="bg-yellow-400 text-black hover:bg-yellow-500 text-lg px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Join Our Mission <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>

      <ScrollIndicator />
    </section>
  )
}
