'use client'

import { motion } from 'framer-motion'
import { Sparkle } from './ui/sparkle'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { MeshGradient } from './ui/mesh-gradient'
import { AnimatedButton } from './ui/animated-button'

const avatars = [
    '/assets/memoji2.avif',
    '/assets/memoji1.avif',
  '/assets/memoji3.avif'
]

export const CTA = () => {
  return (
    <section className="py-10 overflow-hidden relative">
        <MeshGradient/>
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto text-center"
        >
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 blur-3xl" />

          {/* Decorative Elements */}
          <Sparkle className="-top-4 left-0 text-primary" delay={0} />
          <Sparkle className="top-1/2 -right-4 text-secondary" delay={0.5} />
          <Sparkle className="bottom-0 left-1/4 text-accent" delay={1} />

          {/* Content */}
          <div className="relative space-y-8 py-12">
            {/* Avatars */}
            <div className="flex justify-center -space-x-4">
              {avatars.map((avatar, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative w-16 h-16 bg-slate-300 rounded-full border-4 border-background overflow-hidden"
                >
                  <Image
                    src={avatar}
                    alt={`Client ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              ))}
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-6xl font-bold tracking-tight"
              >
                Your Digital Presence
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-xl text-muted-foreground"
              >
                Trusted by 20+ clients worldwide to deliver creativity, speed, and results.
              </motion.p>
            </div>

            {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="flex flex-wrap gap-6 justify-center px-2"
          >
            <AnimatedButton href="/contact" variant="primary">
               Book a Call <ArrowUpRight className="w-6 h-6" />
            </AnimatedButton>
          </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

