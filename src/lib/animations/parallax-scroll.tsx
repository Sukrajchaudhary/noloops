"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { type ReactNode, useRef } from "react"

interface ParallaxScrollProps {
  children: ReactNode
  speed?: number
  direction?: "up" | "down"
  className?: string
}

export default function ParallaxScroll({
  children,
  speed = 0.5,
  direction = "up",
  className = "",
}: ParallaxScrollProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    direction === "up" ? ["0%", `${-speed * 100}%`] : ["0%", `${speed * 100}%`],
  )

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  )
}
