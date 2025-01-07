'use client'

import { motion } from 'framer-motion'
import { Search, Palette, Figma, Code, BarChart } from 'lucide-react'
import { ProcessStep } from './ui/process-step'
import { useState } from 'react'

const steps = [
  {
    title: "Research",
    description: "Understanding your services, products, and target audience",
    icon: <Search className="w-8 h-8" />,
  },
  {
    title: "Sample Designs",
    description: "Developing draft concepts that align with your vision",
    icon: <Palette className="w-8 h-8" />,
  },
  {
    title: "Figma",
    description: "Delivering polished designs for your approval",
    icon: <Figma className="w-8 h-8" />,
  },
  {
    title: "Development",
    description: "Building with Next.js and React.js frameworks",
    icon: <Code className="w-8 h-8" />,
  },
  {
    title: "SEO Support",
    description: "Maximizing your site's reach with technical improvements",
    icon: <BarChart className="w-8 h-8" />,
  },
]

export const Process = () => {
  const [activeStep, setActiveStep] = useState(0)

  const handleStepComplete = (index: number) => {
    if (index < steps.length - 1) {
      setActiveStep(index + 1)
    }
  }

  return (
    <section className="py-20 overflow-hidden">
      <div className="container px-4 mx-auto">
        {/* Section Header */}
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative inline-block"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              How it works?
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="max-w-2xl mx-auto text-lg text-muted-foreground"
          >
            We follow a streamlined process to bring your vision to life,
            ensuring quality and efficiency at every step.
          </motion.p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent blur-2xl" />
          
          {/* Steps Container */}
          <div className="relative flex flex-col md:flex-row gap-8 md:gap-4">
            {steps.map((step, index) => (
              <ProcessStep
                key={step.title}
                step={index + 1}
                title={step.title}
                description={step.description}
                icon={step.icon}
                isLast={index === steps.length - 1}
                isActive={index <= activeStep}
                onComplete={() => handleStepComplete(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

