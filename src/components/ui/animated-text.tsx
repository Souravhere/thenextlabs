'use client'

import { motion, Variants } from 'framer-motion'

interface AnimatedTextProps {
  text: string
  className?: string
  gradient?: boolean
}

export const AnimatedText = ({ text, className = '', gradient = false }: AnimatedTextProps) => {
  const words = text.split(' ')

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  }

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  }

  return (
    <motion.div
      style={{ overflow: 'hidden', display: 'flex', flexWrap: 'wrap' }}
      variants={container}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {words.map((word, i) => (
        <motion.span
          variants={child}
          key={i}
          className={`mr-2 ${
            gradient 
              ? 'bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent'
              : ''
          }`}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}

