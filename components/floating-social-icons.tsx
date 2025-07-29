"use client"

import { motion } from "framer-motion"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function FloatingSocialIcons() {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ]

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 space-y-4">
      {socialLinks.map((social, index) => (
        <motion.a
          key={index}
          href={social.href}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ scale: 1.2, x: -5 }}
          whileTap={{ scale: 0.9 }}
          className="block w-12 h-12 bg-gray-900 border border-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:text-yellow-400 hover:bg-gray-800 hover:border-yellow-400 transition-all duration-300"
          aria-label={social.label}
        >
          <social.icon className="h-5 w-5" />
        </motion.a>
      ))}
    </div>
  )
}
