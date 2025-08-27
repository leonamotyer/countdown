import React, { useEffect, useRef } from 'react'


interface Position {
  x: number
  y: number
}

interface Velocity {
  x: number
  y: number
}

const BouncingWhip: React.FC = () => {
  const whipRef = useRef<HTMLImageElement>(null)
  const positionRef = useRef<Position>({ x: 100, y: 100 })
  const velocityRef = useRef<Velocity>({ x: 2, y: 2 })
  const animationRef = useRef<number>()

  useEffect(() => {
    const animate = () => {
      const whip = whipRef.current
      if (!whip) return

      const rect = whip.getBoundingClientRect()
      const screenWidth = window.innerWidth
      const screenHeight = window.innerHeight

      // Update position
      positionRef.current.x += velocityRef.current.x
      positionRef.current.y += velocityRef.current.y

      // Bounce off edges
      if (positionRef.current.x <= 0 || positionRef.current.x + rect.width >= screenWidth) {
        velocityRef.current.x = -velocityRef.current.x
        // Ensure it stays within bounds
        positionRef.current.x = Math.max(0, Math.min(screenWidth - rect.width, positionRef.current.x))
      }

      if (positionRef.current.y <= 0 || positionRef.current.y + rect.height >= screenHeight) {
        velocityRef.current.y = -velocityRef.current.y
        // Ensure it stays within bounds
        positionRef.current.y = Math.max(0, Math.min(screenHeight - rect.height, positionRef.current.y))
      }

      // Apply position
      whip.style.left = `${positionRef.current.x}px`
      whip.style.top = `${positionRef.current.y}px`

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <img
      ref={whipRef}
      src="whip.png"
      alt="Bouncing Whip"
      onLoad={() => console.log('Whip image loaded successfully')}
      onError={(e) => console.error('Error loading whip image:', e)}
      style={{
        position: 'fixed',
        width: '480px',
        height: 'auto',
        zIndex: 1,
        pointerEvents: 'none',
        userSelect: 'none',
        left: '100px',
        top: '100px',
        border: '2px solid red',
        backgroundColor: 'rgba(255, 0, 0, 0.1)'
      }}
    />
  )
}

export default BouncingWhip
