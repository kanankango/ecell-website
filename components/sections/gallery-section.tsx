"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function GallerySection() {
  const galleryImages = [
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Entrepreneurship Workshop",
      title: "Innovation Workshop 2024",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Startup Pitch",
      title: "Startup Pitch Competition",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Mentorship Session",
      title: "Mentorship Session",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Networking Event",
      title: "Networking Event",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Hackathon",
      title: "Tech Hackathon 2024",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Business Plan",
      title: "Business Plan Presentation",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Guest Speaker",
      title: "Industry Expert Talk",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Team Building",
      title: "Team Building Activity",
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
            Gallery
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Capturing moments of innovation, collaboration, and entrepreneurial spirit
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="group cursor-pointer"
            >
              <Card className="bg-gray-900 border-gray-800 hover:border-yellow-400 transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-white font-semibold text-center px-4">{image.title}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/gallery">
            <Button
              size="lg"
              className="bg-yellow-400 text-black hover:bg-yellow-500 font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              View All Photos <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
