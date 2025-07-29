"use client"

import { motion } from "framer-motion"
import { Users, Calendar } from "lucide-react"
import AnimatedCounter from "@/components/animated-counter"
import ParallaxSection from "@/components/parallax-section"

export default function StatsSection() {
  const stats = [
    {
      icon: Users,
      value: 100,
      label: "Active Members",
    },
    {
      icon: Calendar,
      value: 30,
      label: "Events Organized",
    },
  ]

  return (
    <ParallaxSection className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center max-w-2xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto">
                <stat.icon className="h-8 w-8 text-black" />
              </div>
              <AnimatedCounter
                end={stat.value}
                duration={2}
                className="text-4xl md:text-5xl font-bold text-yellow-400"
              />
              <p className="text-gray-400 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </ParallaxSection>
  )
}
