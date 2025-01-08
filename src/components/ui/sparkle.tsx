'use client'

import { motion } from 'framer-motion'

interface SparkleProps {
  className?: string
  delay?: number
}

export const Sparkle = ({ className = '', delay = 0 }: SparkleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: [0, 1, 0],
        scale: [0, 1, 0],
        rotate: [0, 45, 0]
      }}
      transition={{
        duration: 2,
        delay,
        repeat: Infinity,
        repeatDelay: 3
      }}
      className={`absolute w-8 h-8 ${className}`}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <path
          d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"
          className="fill-primary"
        />
      </svg>
    </motion.div>
  )
}

