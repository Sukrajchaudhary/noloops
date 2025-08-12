"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface FloatingElementProps {
  children: ReactNode
  duration?: number
  yRange?: number
  xRange?: number
  rotationRange?: number
  delay?: number
  className?: string
}

export default function FloatingElement({
  children,
  duration = 4,
  yRange = 20,
  xRange = 10,
  rotationRange = 5,
  delay = 0,
  className = "",
}: FloatingElementProps) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [-yRange, yRange, -yRange],
        x: [-xRange, xRange, -xRange],
        rotate: [-rotationRange, rotationRange, -rotationRange],
      }}
      transition={{
        duration,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
        delay,
      }}
    >
      {children}
    </motion.div>
  )
}
