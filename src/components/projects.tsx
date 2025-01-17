'use client'

import { motion } from 'framer-motion'
import { MeshGradient } from './ui/mesh-gradient'
import { AnimatedButton } from './ui/animated-button'
import { ArrowUpRight } from 'lucide-react'
import { ProjectCard } from './ui/projects-cards'

const services = [
    {
        title: "Yellow Labs",
        description: "Yellow Labs is a leading Web3 consulting firm specializing in blockchain, cryptocurrency, and digital innovation.",
        image: "/projects/yellow-labs.png",
        link: "https://yellowlabs.vercel.app/"
    },
    {
        title: "Space Things",
        description: "Space Things optimizes business environments and improves customer experience by providing advanced technology solutions.",
        image: "/projects/spacethings.png",
        link: "https://spacethings.vercel.app/"
    },
    {
        title: "Eagles",
        description: "Join the EAGLES revolution! Soar high with the meme coin that combines community, fun, and financial freedom on Solana.",
        image: "/projects/eagles.png",
        link: "https://eagles.wtf/"
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
            className="inline-block px-4 py-1 mb-4 text-sm font-semibold text-primary border border-primary/20 rounded-full"
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
            Our Build
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="max-w-2xl mx-auto text-lg text-muted-foreground"
          >
            From simple landing pages to complex animated web, we create
            stunning digital experiences that drive results.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ProjectCard
              key={service.title}
              {...service}
              index={index}
            />
          ))}
        </div>
      </div>
      <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='w-full flex items-center justify-center py-7'
          >
           <AnimatedButton href="/projects" variant="secondary" className='border-primary/20'>
                More Projects <ArrowUpRight className="w-6 h-6" />
            </AnimatedButton>
          </motion.div>
    </section>
  )
}

