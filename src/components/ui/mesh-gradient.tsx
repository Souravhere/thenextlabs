'use client'

import { useEffect, useRef } from 'react'

export const MeshGradient = () => {
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

    // Create mesh grid
    const drawMesh = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Grid settings
      const spacing = 50
      const rows = Math.ceil(canvas.height / spacing)
      const cols = Math.ceil(canvas.width / spacing)

      ctx.strokeStyle = 'rgba(129, 140, 248, 0.1)' // Using primary color
      ctx.lineWidth = 0.5

      // Draw vertical lines
      for (let i = 0; i <= cols; i++) {
        ctx.beginPath()
        ctx.moveTo(i * spacing, 0)
        ctx.lineTo(i * spacing, canvas.height)
        ctx.stroke()
      }

      // Draw horizontal lines
      for (let i = 0; i <= rows; i++) {
        ctx.beginPath()
        ctx.moveTo(0, i * spacing)
        ctx.lineTo(canvas.width, i * spacing)
        ctx.stroke()
      }
    }

    drawMesh()
    window.addEventListener('resize', drawMesh)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('resize', drawMesh)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 -z-10" />
}
