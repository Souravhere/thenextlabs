'use client'

import { useEffect, useRef } from 'react'

export const AnimatedGradient = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    let time = 0
    const animate = () => {
      time += 0.002
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Create gradient
      const gradient = ctx.createLinearGradient(
        canvas.width * Math.sin(time), 0,
        canvas.width * Math.cos(time), canvas.height
      )

      gradient.addColorStop(0, 'rgba(129, 140, 248, 0.1)') // primary
      gradient.addColorStop(0.5, 'rgba(249, 168, 212, 0.1)') // secondary
      gradient.addColorStop(1, 'rgba(139, 92, 246, 0.1)') // accent

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      requestAnimationFrame(animate)
    }

    animate()

    return () => window.removeEventListener('resize', resizeCanvas)
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10" />
}

