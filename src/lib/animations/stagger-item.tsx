"use client"

import { motion, easeOut } from "framer-motion"
import type { ReactNode } from "react"

interface StaggerItemProps {
  children: ReactNode
  direction?: "up" | "down" | "left" | "right"
  duration?: number
  distance?: number
  className?: string
}

export default function StaggerItem({
  children,
  direction = "up",
  duration = 0.6,
  distance = 50,
  className = "",
}: StaggerItemProps) {
  const directionVariants = {
    up: { y: distance, opacity: 0 },
    down: { y: -distance, opacity: 0 },
    left: { x: distance, opacity: 0 },
    right: { x: -distance, opacity: 0 },
  }

  const itemVariants = {
    hidden: directionVariants[direction],
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration,
        ease: easeOut,
      },
    },
  }

  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  )
}
