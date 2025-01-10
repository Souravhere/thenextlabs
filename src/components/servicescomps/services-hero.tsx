'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { AnimatedButton } from '../ui/animated-button'

const ServicesHero = () => {
  return (
    <section className="relative overflow-hidden  md:py-32 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Elevate your digital presence with our cutting-edge web solutions
          </p>
          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0, duration: 0.8 }}
            className="flex flex-wrap gap-6 justify-center px-2"
          >
            <AnimatedButton href="/contact" variant="primary">
               Book a Call <ArrowUpRight className="w-6 h-6" />
            </AnimatedButton>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          rotate: [0, 90, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
          rotate: [0, -90, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
      />
    </section>
  )
}

export default ServicesHero

