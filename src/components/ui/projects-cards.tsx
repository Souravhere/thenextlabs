'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { AnimatedButton } from './animated-button'
import { ArrowUpRight } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  image: string
  index: number
  link: string
}

export const ProjectCard = ({ title, description, image, index, link }: ProjectCardProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        type: "spring",
        damping: 20
      }}
      className="group relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative p-6 rounded-xl border border-muted/20 bg-muted/5 backdrop-blur-sm overflow-hidden">
        {/* Glow orb */}
        <div className="absolute -right-20 -top-20 w-40 h-40 bg-primary/30 rounded-full blur-[100px] group-hover:bg-primary/40 transition-colors duration-500" />
        
        <div className="relative z-10">
          <div className="aspect-[4/2] relative mb-6 rounded-lg overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            {title}
          </h3>
          <p className="text-muted-foreground">
            {description}
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='w-full flex items-center justify-start pt-3'
          >
           <AnimatedButton href={link} variant="secondary" className='border-primary/20'>
                Open <ArrowUpRight className="w-6 h-6" />
            </AnimatedButton>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

