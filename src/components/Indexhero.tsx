"use client"

import { useEffect, useRef } from "react"
import { motion, AnimatePresence } from "motion/react"
import Image from "next/image"

export default function IndexHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const setCanvasSize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }
    setCanvasSize()
    window.addEventListener("resize", setCanvasSize)

    const particles: Particle[] = []
    const particleCount = 10 // Increased particle count for more visual interest

    class Particle {
      x: number
      y: number
      speed: number
      size: number
      color: string

      constructor() {
        this.x = Math.random() * (canvas?.width || 0)
        this.y = Math.random() * (canvas?.height || 0)
        this.speed = 0.1 + Math.random() * 0.4
        this.size = 1 + Math.random() * 3
        this.color = `hsl(${Math.random() * 60 + 180}, 100%, ${50 + Math.random() * 50}%)`
      }

      update() {
        this.y -= this.speed
        if (this.y < 0) {
          this.y = (canvas?.height || 0)
          this.x = Math.random() * (canvas?.width || 0)
        }
      }

      draw() {
        if (!ctx) return
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()

        ctx.shadowBlur = 10
        ctx.shadowColor = this.color
        ctx.fill()
        ctx.shadowBlur = 0
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    const animate = () => {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      requestAnimationFrame(animate)
    }

    animate()


    return () => {
      window.removeEventListener("resize", setCanvasSize)
    }
  }, [])

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-b from-[#03031D] to-[#03031df0]">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      <div className="absolute inset-0 flex justify-between px-4">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="w-px h-full bg-gradient-to-b from-transparent via-blue-500/10 to-transparent"
          />
        ))}
      </div>

      <AnimatePresence>
        { (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative z-10 flex flex-col items-center justify-center w-full h-screen p-4 sm:p-8 text-center"
          >
            <Image
                src='/Logos/thenextlabs.svg'
                alt="The Next Labs"
                width={70}
                height={70}
                className="absolute top-6 left-6"
            />
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-xl sm:text-2xl md:text-3xl font-light tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-200 mb-4"
            >
              Coming Soon
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white via-blue-100 to-blue-300 mb-8 leading-tight"
            >
              Build 15x Faster
            </motion.h1>
            {/* <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white via-blue-100 to-gray-300 leading-tight"
            >
              The Next Labs
            </motion.h1> */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 mt-8"
            >
             {/* here is button are added  */}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}

