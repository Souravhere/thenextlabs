'use client'

import { motion } from 'framer-motion'
import { ServiceCard } from '../ui/service-card'

const services = [
  {
    title: "Landing Pages for SaaS",
    description: "High-performing, visually engaging landing pages that convert visitors into customers.",
    image: "/assets/Thumb.png"
  },
  {
    title: "Crypto & Web3 Platforms",
    description: "Modern websites for blockchain and cryptocurrency initiatives with Web3 integration.",
    image: "/assets/crypto.png"
  },
  {
    title: "Product Showcases",
    description: "Interactive product demonstrations that highlight your offerings effectively.",
    image: "/assets/Product.png"
  },
]

export const ServicesGridPage = () => {
  return (
    <section className="py-20 relative overflow-hidden">
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
            OUR SERVICES
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

