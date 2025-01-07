'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import Link from 'next/link'

interface AnimatedButtonProps {
  children: ReactNode
  href: string
  variant?: 'primary' | 'secondary'
  className?: string
}

export const AnimatedButton = ({ 
  children, 
  href, 
  variant = 'primary',
  className = '' 
}: AnimatedButtonProps) => {
  return (
    <Link href={href}>
      <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        relative px-8 py-3 rounded-full font-medium transition-all duration-300
        ${variant === 'primary' 
          ? 'bg-gradient-to-r from-primary via-accent to-secondary font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 text-foreground'  
          : 'bg-muted/50 hover:bg-muted/70 text-foreground backdrop-blur-sm border border-muted/20'
        }
        ${className}
      `}
    >
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 blur-xl"
        animate={{
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div className="relative z-10 flex items-center gap-2">
        {children}
      </motion.div>
    </motion.div>
    </Link>
  )
}

