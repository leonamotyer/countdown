import React, { useEffect, useRef } from 'react'

interface ConfettiPiece {
  x: number
  y: number
  rotation: number
  scale: number
  color: string
  speed: number
  wobble: number
}

const Confetti: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Confetti colors
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ff8000', '#8000ff']

    // Create confetti pieces
    const confetti: ConfettiPiece[] = []
    const confettiCount = 300

    for (let i = 0; i < confettiCount; i++) {
      confetti.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height, // Start above screen
        rotation: Math.random() * 360,
        scale: Math.random() * 0.5 + 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        speed: Math.random() * 2 + 1,
        wobble: Math.random() * 2 - 1
      })
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      confetti.forEach((piece) => {
        // Update position
        piece.y += piece.speed
        piece.rotation += piece.wobble
        piece.x += Math.sin(piece.rotation * 0.01) * 0.5

        // Reset if off screen
        if (piece.y > canvas.height) {
          piece.y = -10
          piece.x = Math.random() * canvas.width
        }

        // Draw confetti piece
        ctx.save()
        ctx.translate(piece.x, piece.y)
        ctx.rotate(piece.rotation * Math.PI / 180)
        ctx.scale(piece.scale, piece.scale)

        ctx.fillStyle = piece.color
        ctx.fillRect(-2, -2, 4, 4)

        ctx.restore()
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 5
      }}
    />
  )
}

export default Confetti
