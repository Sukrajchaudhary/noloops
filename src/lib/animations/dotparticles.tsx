import React, { useState, useEffect } from 'react'
interface Particle {
  id: number
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
}

interface DotparticlesProps {
  particleCount?: number
}

const Dotparticles: React.FC<DotparticlesProps> = ({ particleCount = 50 }) => {
  const [particles, setParticles] = useState<Particle[]>([])
  const [showParticles, setShowParticles] = useState(false)

  // Initialize particles
  useEffect(() => {
    const initParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 2, // velocity x (-1 to 1)
      vy: (Math.random() - 0.5) * 2, // velocity y (-1 to 1)
      size: Math.random() * 4 + 2, // size between 2-6px
      opacity: Math.random() * 0.7 + 0.3, // opacity between 0.3-1
    }))
    setParticles(initParticles)
  }, [particleCount])

  // Delay showing particles
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowParticles(true)
    }, 2000)

    return () => clearTimeout(timeoutId)
  }, [])
  useEffect(() => {
    const handleResize = () => {
      setParticles(prev =>
        prev.map(particle => ({
          ...particle,
          x: Math.min(particle.x, window.innerWidth),
          y: Math.min(particle.y, window.innerHeight),
        }))
      )
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Animate particles
  useEffect(() => {
    if (particles.length === 0 || !showParticles) return

    const animate = () => {
      setParticles(prev =>
        prev.map(particle => {
          let newX = particle.x + particle.vx
          let newY = particle.y + particle.vy
          let newVx = particle.vx
          let newVy = particle.vy

          // Bounce off edges
          if (newX <= 0 || newX >= window.innerWidth) {
            newVx = -particle.vx
            newX = Math.max(0, Math.min(window.innerWidth, newX))
          }
          if (newY <= 0 || newY >= window.innerHeight) {
            newVy = -particle.vy
            newY = Math.max(0, Math.min(window.innerHeight, newY))
          }

          return {
            ...particle,
            x: newX,
            y: newY,
            vx: newVx,
            vy: newVy,
          }
        })
      )
    }

    const intervalId = setInterval(animate, 16) // ~60fps
    return () => clearInterval(intervalId)
  }, [particles.length, showParticles])

  return (
    <div className='absolute inset-0 pointer-events-none z-0 overflow-hidden'>
      {showParticles &&
        particles.map(particle => (
          <div
            key={particle.id}
            className='absolute bg-white rounded-full shadow-lg'
            style={{
              left: `${particle.x}px`,
              top: `${particle.y}px`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
              transform: 'translate(-50%, -50%)',
              boxShadow: `0 0 ${particle.size * 2}px rgba(255, 255, 255, 0.5)`,
            }}
          />
        ))}
    </div>
  )
}

export default Dotparticles
