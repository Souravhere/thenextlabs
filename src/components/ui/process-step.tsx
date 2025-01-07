'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { type LucideIcon } from 'lucide-react'

interface ProcessStepProps {
  title: string
  description: string
  icon: LucideIcon
  delay?: number
}

export const ProcessStep = ({ 
  title, 
  description, 
  icon: Icon,
  delay = 0
}: ProcessStepProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
      className="group relative p-6"
    >
      {/* Hover Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/0 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
      
      {/* Content */}
      <div className="relative space-y-4">
        {/* Icon */}
        <div className="w-12 h-12 rounded-lg bg-muted/10 flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
          <Icon className="w-6 h-6 text-primary/80 group-hover:text-primary transition-colors duration-300" />
        </div>

        {/* Text Content */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-foreground">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

