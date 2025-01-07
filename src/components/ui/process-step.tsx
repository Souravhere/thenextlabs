'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface ProcessStepProps {
  step: number
  title: string
  description: string
  icon: React.ReactNode
  isLast?: boolean
  isActive?: boolean
  onComplete?: () => void
}

export const ProcessStep = ({ 
  step, 
  title, 
  description, 
  icon, 
  isLast = false,
  isActive = false,
  onComplete
}: ProcessStepProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // Notify parent when this step's animation is complete
  const handleAnimationComplete = () => {
    if (isInView && onComplete) {
      onComplete()
    }
  }

  return (
    <div ref={ref} className="relative flex-1">
      {/* Background Circle - Aligned to the right on even numbers */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 0.05 } : { scale: 0, opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className={`absolute top-0 w-[200px] h-[200px] rounded-full bg-primary/10 blur-3xl
          ${step % 2 === 0 ? 'right-0' : 'left-0'}`}
      />

      {/* Connecting Line - Hidden on mobile */}
      {!isLast && (
        <div className="absolute top-8 left-[50%] w-full h-[2px] bg-muted/20 hidden md:block">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isActive ? { scaleX: 1 } : { scaleX: 0 }}
            onAnimationComplete={handleAnimationComplete}
            transition={{ duration: 1, delay: 0.2 }}
            className="origin-left h-full bg-gradient-to-r from-primary via-secondary to-accent"
          />
        </div>
      )}

      {/* Step Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative flex flex-col items-center text-center px-4"
      >
        {/* Icon Circle */}
        <div className="relative mb-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
            className={`w-16 h-16 rounded-full flex items-center justify-center relative z-10
              ${isActive ? 'bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20' : 'bg-muted/10'}`}
          >
            {/* Glow Effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isActive ? { opacity: 1 } : { opacity: 0.5 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 blur-xl"
            />
            
            {/* Icon */}
            <motion.div
              animate={isActive ? {
                scale: [1, 1.1, 1],
                transition: { duration: 0.5, repeat: Infinity, repeatType: "reverse" }
              } : {}}
              className={`relative text-2xl ${isActive ? 'text-primary' : 'text-muted-foreground'}`}
            >
              {icon}
            </motion.div>
          </motion.div>
          
          {/* Step Number */}
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ delay: 0.4 }}
            className={`absolute -top-2 -right-2 w-6 h-6 rounded-full text-primary-foreground text-sm flex items-center justify-center
              ${isActive ? 'bg-primary' : 'bg-muted'}`}
          >
            {step}
          </motion.div>
        </div>

        {/* Text Content */}
        <motion.h3
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.6 }}
          className={`text-lg font-semibold mb-2 ${isActive ? 'text-foreground' : 'text-muted-foreground'}`}
        >
          {title}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8 }}
          className="text-sm text-muted-foreground"
        >
          {description}
        </motion.p>
      </motion.div>
    </div>
  )
}
