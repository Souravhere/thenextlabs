'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Home, ArrowLeft } from 'lucide-react'
import { GlowingStars } from './glowing-stars'

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-background to-background/50">
      {/* Animated background elements */}
      <GlowingStars />
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid" />
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          {/* Animated 404 Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <h1 className="text-8xl md:text-9xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
              404
            </h1>
            <div className="absolute -inset-x-2 top-1/2 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          </motion.div>

          {/* Animated Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-2 max-w-prose"
          >
            <h2 className="text-2xl md:text-3xl font-bold">
              Oops! Page not found
            </h2>
            <p className="text-muted-foreground">
              It seems you've ventured into uncharted territory. The page you're looking for has either moved or doesn't exist.
            </p>
          </motion.div>

          {/* Animated Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mt-8"
          >
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <Home className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-muted/10 hover:bg-muted/20 border border-muted/20 backdrop-blur-sm transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Contact Support
            </Link>
          </motion.div>

          {/* Animated Decorative Elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="absolute inset-0 pointer-events-none"
          >
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="absolute w-[500px] h-[500px] rounded-full"
                style={{
                  background: `radial-gradient(circle, ${i === 0 ? 'rgba(var(--primary), 0.1)' : i === 1 ? 'rgba(var(--secondary), 0.1)' : 'rgba(var(--accent), 0.1)'} 0%, transparent 70%)`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  transform: 'translate(-50%, -50%)',
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

