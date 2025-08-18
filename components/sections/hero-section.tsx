"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
 

export default function HeroSection() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <motion.div className="absolute inset-0 bg-black" style={{ y }} />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 grid grid-cols-1 items-center min-h-screen">
        {/* Content */}
        <div className="text-left py-16 lg:py-0">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-8 space-y-4 md:space-y-5 max-w-xl"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold mb-10 text-white">
              <span className="inline-block">
                Entrepreneurship Cell <span className="inline-block text-yellow-400" style={{ textShadow: "0 0 6px rgba(255,215,0,0.35), 0 0 14px rgba(255,193,7,0.25), 0 0 28px rgba(255,140,0,0.18)" }}>CGC-COE</span>
                <span className="block h-px bg-yellow-400 rounded-full mt-4"></span>
              </span>
            </h1>
            <h2 className="text-xl md:text-3xl font-light text-gray-300 mt-5 leading-relaxed">Fueling Ideas into Impact</h2>
            <p className="text-lg md:text-xl text-gray-400 mt-2 leading-relaxed">Empowering the Entrepreneurs of Tomorrow at CGC-COE</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-6 md:mt-8"
          >
            <Link href="/mission" className="inline-flex items-center text-yellow-400 font-semibold hover:underline">
              Join our mission <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </div>

      
    </section>
  )
}
