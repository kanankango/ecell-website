"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function NewsletterSection() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-yellow-400 bg-clip-text text-transparent">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-300 mb-8">Get the latest updates on events, startups, and opportunities</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-gray-900 border-gray-700 text-white placeholder-gray-400 focus:border-yellow-400 flex-1"
            />
            <Button className="bg-yellow-400 text-black hover:bg-yellow-500 font-semibold px-8">Subscribe</Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
