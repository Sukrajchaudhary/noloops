"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface BounceInProps {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
  once?: boolean
}

export default function BounceIn({ children, delay = 0, duration = 0.6, className = "", once = true }: BounceInProps) {
  return (
    <motion.div
      className={className}
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
        damping: 10,
      }}
    >
      {children}
    </motion.div>
  )
}
