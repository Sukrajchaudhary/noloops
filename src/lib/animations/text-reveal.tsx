"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface TextRevealProps {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
  once?: boolean
}

export default function TextReveal({
  children,
  delay = 0,
  duration = 0.8,
  className = "",
  once = true,
}: TextRevealProps) {
  return (
    <div className="overflow-hidden">
      <motion.div
        className={className}
        initial={{ y: "100%" }}
        whileInView={{ y: "0%" }}
        viewport={{ once }}
        transition={{
          duration,
          delay,
          ease: "easeOut",
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}
