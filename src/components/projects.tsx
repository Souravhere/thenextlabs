'use client'

import { motion } from 'framer-motion'
import { ServiceCard } from './ui/service-card'
import { MeshGradient } from './ui/mesh-gradient'

const services = [
    {
        title: "Yellow Labs",
        description: "Modern websites for blockchain and cryptocurrency initiatives with Web3 integration.",
        image: "/projects/yellow-labs.png"
    },
    {
        title: "Product Showcases",
        description: "Interactive product demonstrations that highlight your offerings effectively.",
        image: "/assets/Product.png"
    },
    {
      title: "Spacethings",
      description: "High-performing, visually engaging landing pages that convert visitors into customers.",
      image: "/projects/spacethings.png"
    },
]

export const ProjectGrid = () => {
  return (
    <section className="py-16 relative overflow-hidden">
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
            OUR PROJECTS
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            What We Offer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="max-w-2xl mx-auto text-lg text-muted-foreground"
          >
            From simple landing pages to complex web applications, we create
            stunning digital experiences that drive results.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

