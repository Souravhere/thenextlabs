'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { MeshGradient } from './ui/mesh-gradient'
import { AnimatedButton } from './ui/animated-button'

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <MeshGradient />


      {/* Main Content */}
      <div className="container w-full mx-auto text-center relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="space-y-8 text-center"
        >
      {/* Top Banner */}
    <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="absolute -top-6 transform px-3 md:px-0 w-full flex justify-center items-center"
    >
        <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-3 px-4 py-2 md:px-6 md:py-3 rounded-full bg-gradient-to-r from-muted/50 to-muted/20 backdrop-blur-sm border border-muted/20 shadow-lg shadow-black/10"
        >
            <Sparkles className="w-4 h-4 text-secondary" />
            <span className="text-xs md:text-sm font-medium bg-gradient-to-r from-foreground/90 to-foreground/70 bg-clip-text text-transparent">
                Transforming Ideas Into Animated Experiences
            </span>
            <ArrowRight className="w-4 h-4 text-foreground/70" />
        </motion.div>
    </motion.div>
          {/* Heading */}
          <div className="space-y-4 text-center">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight relative">
              <span className="relative">
                <span className="absolute inset-0 text-white opacity-30 blur-lg">
                  The Next Labs for
                </span>
                <span className="relative">
                  The Next Labs for
                </span>
              </span>
              <br />
              <span className="bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent">
                Modern Websites
              </span>
            </h1>
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
              <span className="relative text-xl font-semibold bg-primary bg-clip-text text-transparent">
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
            className="flex flex-wrap gap-6 justify-center px-2"
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

