"use client"

import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";

const images = [
  { src: "/IMG_20250404_164342663.jpg", alt: "Gallery 1" },
  { src: "/IMG-20250814-WA0007.jpg", alt: "Gallery 2" },
  { src: "/IMG-20250805-WA0013.jpg", alt: "Gallery 3" },
  { src: "/IMG-20250814-WA0006.jpg", alt: "Gallery 4" },
  { src: "/gallery1.jpg", alt: "Gallery 5" },
  { src: "/IMG-20250814-WA0004.jpg", alt: "Gallery 6" },
  { src: "/IMG-20250814-WA0005.jpg", alt: "Gallery 7" },
  { src: "/gallery4.jpg", alt: "Gallery 8" },
];

const GallerySection: React.FC = () => {
  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <Star className="h-6 w-6 text-golden-300 mr-3 animate-pulse" />
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-golden-300 to-golden-200 bg-clip-text text-transparent glow-golden-text">
              Gallery
            </h2>
            <Star className="h-6 w-6 text-golden-300 ml-3 animate-pulse" />
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-golden-300 to-golden-200 mx-auto mb-6 glow-golden rounded-full"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Capturing moments of innovation, collaboration, and entrepreneurial spirit
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="group cursor-pointer"
            >
              <Card className="bg-black border-2 border-gray-800 hover:border-golden-300 transition-all duration-300 overflow-hidden glow-golden shadow-xl">
                <div className="relative aspect-[4/3] w-full">
                  {img.src ? (
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <div className="absolute inset-0 w-full h-full bg-gray-800 flex items-center justify-center text-white">
                      Coming Soon
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <p className="text-white font-semibold text-center px-4 text-sm">{img.alt}</p>
                  </div>
                  <div className="absolute top-2 right-2 w-6 h-6 bg-golden-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Star className="h-3 w-3 text-black" />
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
              className="bg-gradient-to-r from-golden-300 to-golden-200 text-black hover:from-golden-200 hover:to-golden-300 font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg border-2 border-transparent hover:border-golden-400 glow-golden"
            >
              View All Photos <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
