'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { MeshGradient } from './ui/mesh-gradient'
import { Spotlight } from './ui/spotlight'
import { AnimatedText } from './ui/animated-text'
import { AnimatedButton } from './ui/animated-button'

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <MeshGradient />
      <Spotlight className="-top-40 -left-40" />
      <Spotlight className="-top-40 -right-40" />

      {/* Top Banner */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="absolute top-6 left-1/2 -translate-x-1/2"
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-muted/50 to-muted/20 backdrop-blur-sm border border-muted/20 shadow-lg shadow-black/10"
        >
          <Sparkles className="w-4 h-4 text-secondary" />
          <span className="text-sm font-medium bg-gradient-to-r from-foreground/90 to-foreground/70 bg-clip-text text-transparent">
            Keep more of what you earn. 0% fees until product-market fit
          </span>
          <ArrowRight className="w-4 h-4 text-foreground/70" />
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <div className="container px-4 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          {/* Heading */}
          <div className="space-y-4">
            <AnimatedText
              text="The Next Labs for"
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
            />
            <AnimatedText
              text="Modern Websites"
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
              gradient
            />
          </div>

          {/* Description */}
          <div className="space-y-4 max-w-3xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl md:text-2xl text-foreground/80 font-medium"
            >
              Crafting animated websites for cutting-edge industries
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-lg text-foreground/60"
            >
              Custom development from scratch using Next.js and React.js
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 1 }}
              className="relative"
            >
              <span className="relative text-xl font-semibold bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent">
                Zero Compromises.
              </span>
              <motion.span
                className="absolute inset-0 blur-sm bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent"
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                Zero Compromises.
              </motion.span>
            </motion.div>
          </div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="flex flex-wrap gap-6 justify-center"
          >
            <AnimatedButton href="#get-started" variant="primary">
              Get started for free <Sparkles className="w-4 h-4" />
            </AnimatedButton>
            <AnimatedButton href="#contact" variant="secondary">
              Contact us <ArrowRight className="w-4 h-4" />
            </AnimatedButton>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

