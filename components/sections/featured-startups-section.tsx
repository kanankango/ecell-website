"use client"

import { motion } from "framer-motion"
import { ChevronRight, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import ParallaxSection from "@/components/parallax-section"

export default function FeaturedStartupsSection() {
  const startups = [
    {
      name: "TechVenture",
      category: "EdTech",
      description: "Revolutionary learning platform for skill development",
      status: "Series A",
    },
    {
      name: "GreenSolutions",
      category: "Sustainability",
      description: "Eco-friendly products for sustainable living",
      status: "Seed Funded",
    },
    {
      name: "HealthTech Pro",
      category: "Healthcare",
      description: "AI-powered healthcare diagnostics platform",
      status: "Pre-Series A",
    },
  ]

  return (
    <ParallaxSection className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-yellow-400 bg-clip-text text-transparent">
            Featured Startups
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the innovative startups incubated by our entrepreneurship cell
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {startups.map((startup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="group cursor-pointer"
            >
              <Card className="bg-gray-900 border-gray-800 hover:border-yellow-400 transition-all duration-300 h-full">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-yellow-400 text-black text-sm font-semibold rounded-full">
                      {startup.category}
                    </span>
                    <Star className="h-5 w-5 text-yellow-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-yellow-400 transition-colors">
                    {startup.name}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">{startup.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{startup.status}</span>
                    <ChevronRight className="h-5 w-5 text-yellow-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </ParallaxSection>
  )
}
