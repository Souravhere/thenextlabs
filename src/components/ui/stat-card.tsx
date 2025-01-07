'use client'

import { motion } from 'framer-motion'
import { type LucideIcon } from 'lucide-react'
import { MeshPattern2 } from './svg-patterns'

interface StatCardProps {
  icon: LucideIcon
  title: string
  description: string
  delay?: number
}

export const StatCard = ({ icon: Icon, title, description, delay = 0 }: StatCardProps) => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.4 }}
      className="relative group"
    >
       
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
      <div className="relative p-6 rounded-xl border border-muted/20 bg-muted/5 backdrop-blur-sm">
        <div className='bg-transparent opacity-10'>
        <MeshPattern2/>
        </div>
        <div className="mb-4 p-3 rounded-full bg-muted/20 w-fit relative">
            <Icon className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
          {title}
        </h3>
        <p className="text-border">
          {description}
        </p>
      </div>
    </motion.div>
  )
}

