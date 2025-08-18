"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function GallerySection() {
  const galleryImages = [
    { src: "/gallery1.jpg", alt: "Gallery Image 1", title: "Gallery Highlight 1" },
    { src: "/gallery2.jpg", alt: "Gallery Image 2", title: "Gallery Highlight 2" },
    { src: "/gallery3.jpg", alt: "Gallery Image 3", title: "Gallery Highlight 3" },
    { src: "/gallery4.jpg", alt: "Gallery Image 4", title: "Gallery Highlight 4" },
    { src: "/gallery5.jpg", alt: "Gallery Image 5", title: "Gallery Highlight 5" },
    { src: "/gallery6.jpg", alt: "Gallery Image 6", title: "Gallery Highlight 6" },
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
          <div className="mb-8 flex justify-center">
            <span className="inline-block">
              <h2 className="text-4xl md:text-6xl font-bold text-white">Gallery</h2>
              <span className="block h-1 bg-yellow-400 rounded-full mt-3"></span>
            </span>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Capturing moments of innovation, collaboration, and entrepreneurial spirit
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12">
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
                <div className="relative aspect-[4/3] w-full">
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
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
