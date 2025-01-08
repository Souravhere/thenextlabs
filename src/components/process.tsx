'use client'

import { motion } from 'framer-motion'
import { Search,Figma, Code, BarChart } from 'lucide-react'
import { ProcessStep } from './ui/process-step'
import { MeshGradient } from './ui/mesh-gradient'

const steps = [
  {
    title: "Research",
    description: "Understanding your services, products, and target audience",
    icon: Search
  },
  {
    title: "Figma",
    description: "Delivering polished designs for your approval",
    icon: Figma
  },
  {
    title: "Development",
    description: "Building with Next.js and React.js frameworks",
    icon: Code
  },
  {
    title: "SEO Support",
    description: "Maximizing your site's reach with technical improvements.",
    icon: BarChart
  }
]

export const Process = () => {
  return (
    <section className="py-10 overflow-hidden relative">
        <MeshGradient/>
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
            OUR PROCESS
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            How we works?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="max-w-2xl mx-auto text-lg text-muted-foreground"
          >
            We follow a streamlined process to bring your vision to life, ensuring quality and efficiency at every step.
          </motion.p>
        </motion.div>
      <div className="container px-4 mx-auto">
        {/* Process Steps Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {steps.map((step, index) => (
            <ProcessStep
              key={step.title}
              title={step.title}
              description={step.description}
              icon={step.icon}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

