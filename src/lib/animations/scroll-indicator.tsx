"use client"

import { motion } from "framer-motion"

interface ScrollIndicatorProps {
  className?: string
}

export default function ScrollIndicator({ className = "" }: ScrollIndicatorProps) {
  return (
    <motion.div
      className={`w-6 h-10 border-2 border-white rounded-full flex justify-center ${className}`}
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
    >
      <motion.div
        className="w-1 h-3 bg-white rounded-full mt-2"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      />
    </motion.div>
  )
}
