"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface ScaleOnHoverProps {
  children: ReactNode
  scale?: number
  duration?: number
  className?: string
}

export default function ScaleOnHover({ children, scale = 1.05, duration = 0.3, className = "" }: ScaleOnHoverProps) {
  return (
    <motion.div className={className} whileHover={{ scale }} transition={{ duration, ease: "easeOut" }}>
      {children}
    </motion.div>
  )
}
