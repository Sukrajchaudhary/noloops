"use client"

import { useEffect, useRef, type ReactNode } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface GSAPParallaxProps {
  children: ReactNode
  speed?: number
  direction?: "up" | "down"
  className?: string
}

export default function GSAPParallax({ children, speed = 0.5, direction = "up", className = "" }: GSAPParallaxProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const yPercent = direction === "up" ? -speed * 100 : speed * 100

    gsap.to(element, {
      yPercent,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [speed, direction])

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  )
}
