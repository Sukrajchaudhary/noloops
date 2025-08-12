"use client"

import { useEffect, useRef, type ReactNode } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface GSAPFadeUpProps {
  children: ReactNode
  delay?: number
  duration?: number
  distance?: number
  className?: string
  trigger?: string
}

export default function GSAPFadeUp({
  children,
  delay = 0,
  duration = 1,
  distance = 100,
  className = "",
  trigger,
}: GSAPFadeUpProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    gsap.fromTo(
      element,
      { y: distance, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration,
        delay,
        scrollTrigger: {
          trigger: trigger || element,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      },
    )

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [delay, duration, distance, trigger])

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  )
}
