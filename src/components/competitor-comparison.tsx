'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Check, X, Zap, ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import { MeshGradient } from './ui/mesh-gradient'
import { AnimatedButton } from './ui/animated-button'

interface Competitor {
  name: string;
  logo: string;
  features: boolean[];
}

interface FeatureRowProps {
  feature: string;
  index: number;
  theNextLabs: boolean;
  competitors: Competitor[];
}

interface FeatureCheckProps {
  checked: boolean;
  isNextLabs?: boolean;
}

const features: string[] = [
  "Custom Design",
  "Responsive Development",
  "SEO Optimization",
  "24/7 Support",
  "Performance Optimization",
  "Unlimited Revisions"
]

const competitors: Competitor[] = [
  {
    name: "Generic Agency",
    logo: "/placeholder.svg?height=40&width=40",
    features: [true, true, false, false, true, false]
  },
  {
    name: "Budget Builders",
    logo: "/placeholder.svg?height=40&width=40",
    features: [false, true, false, false, false, false]
  }
]

const FeatureRow: React.FC<FeatureRowProps> = ({ feature, index, competitors }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="grid grid-cols-4 gap-4 py-4 border-b border-muted/20 items-center"
    >
      <span className="text-sm md:text-base font-medium">{feature}</span>
      <FeatureCheck checked={true} isNextLabs={true} />
      {competitors.map((competitor, i) => (
        <FeatureCheck key={i} checked={competitor.features[index]} />
      ))}
    </motion.div>
  )
}

const FeatureCheck: React.FC<FeatureCheckProps> = ({ checked, isNextLabs = false }) => {
  return (
    <div className="flex justify-center">
      {checked ? (
        <motion.div
          whileHover={{ scale: 1.2 }}
          className={`p-1 rounded-full ${isNextLabs ? 'bg-primary text-primary-foreground' : 'bg-green-500/20 text-green-500'}`}
        >
          <Check className="w-4 h-4" />
        </motion.div>
      ) : (
        <motion.div
          whileHover={{ scale: 1.2 }}
          className="p-1 rounded-full bg-destructive/20 text-destructive"
        >
          <X className="w-4 h-4" />
        </motion.div>
      )}
    </div>
  )
}

const CompetitorComparison: React.FC = () => {
  return (
    <section className="py-20 overflow-hidden relative">
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
            className="inline-block px-4 py-1 mb-4 text-sm font-semibold text-primary border border-primary/20 rounded-full"
          >
            OUR COMPETITOR
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Why Choose The Next Labs?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="max-w-2xl mx-auto text-lg text-muted-foreground"
          >
             See how we stack up against the competition and why we&#39;re the best choice for your project.
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-muted/5 rounded-3xl" />

          {/* Comparison Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative bg-background/50 backdrop-blur-xl rounded-3xl border border-muted/20 shadow-xl p-6 md:p-10 overflow-hidden"
          >
            {/* Table Header */}
            <div className="grid grid-cols-4 gap-4 mb-6 items-center">
              <div className="text-lg font-semibold">Features</div>
              <div className="flex items-center justify-center">
                <Image
                  src="/Logos/thenextlabs.svg"
                  alt="The Next Labs"
                  width={40}
                  height={40}
                  className="mb-2"
                />
                <span className="text-lg font-semibold">The Next Labs</span>
              </div>
              {competitors.map((competitor, index) => (
                <div key={index} className="flex flex-col items-center justify-center">
                  <span className="text-lg font-semibold">{competitor.name}</span>
                </div>
              ))}
            </div>

            {/* Feature Rows */}
            {features.map((feature, index) => (
              <FeatureRow
                key={index}
                feature={feature}
                index={index}
                theNextLabs={true}
                competitors={competitors}
              />
            ))}

            {/* Interactive Element */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-10 p-6 bg-muted/30 rounded-xl border border-muted/20"
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Zap className="w-6 h-6 text-primary mr-2" />
                The Next Labs Advantage
              </h3>
              <p className="text-muted-foreground mb-4">
                Experience the difference with our cutting-edge technology and dedicated team. 
                We don&#39;t just meet expectations; we exceed them.
              </p>
              {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="inline-block px-2"
          >
            <AnimatedButton href="/contact" variant="primary">
               Book a Call <ArrowUpRight className="w-6 h-6" />
            </AnimatedButton>
          </motion.div>
            </motion.div>
          </motion.div>

          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-20 h-20 bg-primary/10 rounded-full blur-2xl" />
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  )
}

export default CompetitorComparison