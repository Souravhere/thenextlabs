'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export const Spotlight = ({ className = '' }: { className?: string }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: [0.5, 0.6, 0.5],
        scale: [0.8, 1, 0.8],
        x: mousePosition.x - 400,
        y: mousePosition.y - 400,
      }}
      transition={{ 
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className={`absolute w-[800px] h-[800px] bg-gradient-radial from-primary/30 via-primary/10 to-transparent rounded-full blur-[100px] ${className}`}
    >
      <motion.div
        animate={{ 
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.2, 1],
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute inset-0 bg-gradient-conic from-secondary/30 via-accent/20 to-transparent rounded-full blur-[80px]"
      />
    </motion.div>
  )
}
