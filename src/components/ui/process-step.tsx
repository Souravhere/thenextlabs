'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { type LucideIcon } from 'lucide-react'
import { MeshPattern2 } from './svg-patterns'

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
      className="group relative sm:p-6 p-3 rounded-xl border border-muted/20"
    >
      {/* Hover Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
      
      <div className='bg-transparent opacity-15'>
        <MeshPattern2/>
        </div>
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

