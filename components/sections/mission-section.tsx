"use client"

import { motion } from "framer-motion"
import { Target, Lightbulb, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function MissionSection() {
  const missions = [
    {
      icon: Target,
      title: "Vision",
      description:
        "To be the leading entrepreneurship hub in North India, nurturing innovation and creating sustainable businesses.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Encouraging creative thinking and providing platforms for students to transform their ideas into reality.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "Maintaining the highest standards in mentorship, resources, and support for our entrepreneurial community.",
    },
  ]

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-yellow-400 bg-clip-text text-transparent">
            Our Mission
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            To foster an entrepreneurial ecosystem that transforms innovative ideas into successful ventures, creating
            the next generation of business leaders and change-makers.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {missions.map((mission, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <Card className="bg-gray-900 border-gray-800 hover:border-yellow-400 transition-all duration-300 h-full">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <mission.icon className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{mission.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{mission.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
