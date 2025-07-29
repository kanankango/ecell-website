"use client"

import { motion } from "framer-motion"

export default function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
    >
      <div className="w-6 h-10 border-2 border-yellow-400 rounded-full flex justify-center">
        <div className="w-1 h-3 bg-yellow-400 rounded-full mt-2"></div>
      </div>
    </motion.div>
  )
}
