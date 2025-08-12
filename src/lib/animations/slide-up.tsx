"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface SlideUpProps {
  children: ReactNode
  delay?: number
  duration?: number
  distance?: number
  className?: string
  once?: boolean
}

export default function SlideUp({
  children,
  delay = 0,
  duration = 0.6,
  distance = -10,
  className = "",
  once = true,
}: SlideUpProps) {
  return (
    <motion.div
      className={className}
      initial={{ y: Math.abs(distance), opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      whileHover={{ y: distance }}
    >
      {children}
    </motion.div>
  )
}
