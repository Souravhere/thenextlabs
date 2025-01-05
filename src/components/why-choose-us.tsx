'use client'

import { motion } from 'framer-motion'
import { Rocket, Zap, Trophy, Clock } from 'lucide-react'
import { TechIcon } from './ui/tech-icon'
import { StatCard } from './ui/stat-card'
import { MeshGradient } from './ui/mesh-gradient'

const technologies = [
  { name: 'React', icon: '/icons/reactjs-icon.svg' },
  { name: 'Next.js', icon: '/icons/nextjs-icon.svg' },
  { name: 'JavaScript', icon: '/icons/js-icon.svg' },
  { name: 'TypeScript', icon: '/icons/typescript-icon.png' },
  { name: 'TailwindCSS', icon: '/icons/tailwind-icon.svg' },
  { name: 'Framer Motion', icon: '/icons/framer-motion.avif' },
]

const features = [
  {
    icon: Rocket,
    title: 'Custom Development',
    description: 'Fully custom builds using modern technologies, no drag-and-drop platforms.',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized for speed with 100% performance scores across all metrics.',
  },
  {
    icon: Trophy,
    title: 'SEO Optimized',
    description: 'Achieve 100% SEO scores to maximize your online visibility.',
  },
  {
    icon: Clock,
    title: '3+ Years Experience',
    description: 'Proven track record of delivering exceptional animated websites.',
  },
]

export const WhyChooseUs = () => {
  return (
    <section className="py-5 overflow-hidden relative">
        <MeshGradient/>
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 mb-4 text-sm font-semibold text-primary border border-primary/20 rounded-full"
          >
            WHY CHOOSE US
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            The Next Generation Standard
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="max-w-2xl mx-auto text-lg text-muted-foreground"
          >
            We leverage cutting-edge technologies and years of expertise to create
            stunning, high-performance websites that drive results.
          </motion.p>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mb-20"
        >
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {technologies.map((tech, index) => (
              <TechIcon
                key={tech.name}
                name={tech.name}
                icon={tech.icon}
                delay={0.1 * index}
              />
            ))}
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <StatCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={0.1 * index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

