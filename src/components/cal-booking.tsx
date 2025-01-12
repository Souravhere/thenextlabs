'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Calendar, Video, Users, Clock } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const features = [
  {
    icon: <Calendar className="w-5 h-5" />,
    title: 'Smart Scheduling',
    description: 'AI-powered scheduling that adapts to your availability'
  },
  {
    icon: <Video className="w-5 h-5" />,
    title: 'Video Integration',
    description: 'Seamless integration with popular video conferencing tools'
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: 'Team Coordination',
    description: 'Coordinate meetings across different time zones effortlessly'
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: 'Instant Confirmation',
    description: 'Automatic confirmations and calendar updates'
  }
]

const integrations = [
  { name: 'Google Meet', logo: '/placeholder.svg?height=40&width=40' },
  { name: 'Zoom', logo: '/placeholder.svg?height=40&width=40' },
  { name: 'Microsoft Teams', logo: '/placeholder.svg?height=40&width=40' },
  { name: 'Slack', logo: '/placeholder.svg?height=40&width=40' },
  { name: 'Discord', logo: '/placeholder.svg?height=40&width=40' },
  { name: 'Notion', logo: '/placeholder.svg?height=40&width=40' }
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function CalBooking() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/50" />
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div
            variants={item}
            className="inline-block px-3 py-1 mb-4 text-sm font-semibold text-primary border border-primary/20 rounded-full"
          >
            SCHEDULE A MEETING
          </motion.div>
          <motion.h2
            variants={item}
            className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent"
          >
            Book a Strategy Session
          </motion.h2>
          <motion.p
            variants={item}
            className="text-lg text-muted-foreground mb-8"
          >
            Connect with our team to discuss your project and explore how we can help bring your vision to life.
          </motion.p>
          <motion.div
            variants={item}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="https://cal.com/next-labs/strategy-session"
              className="inline-flex items-center px-8 py-4 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Schedule Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={item}
              className="p-6 rounded-xl bg-muted/5 border border-muted/20 backdrop-blur-sm hover:bg-muted/10 transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Integrations */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.h3
            variants={item}
            className="text-xl font-semibold mb-8"
          >
            Seamlessly Integrates With Your Tools
          </motion.h3>
          <motion.div
            variants={item}
            className="flex flex-wrap justify-center gap-8"
          >
            {integrations.map((integration) => (
              <motion.div
                key={integration.name}
                whileHover={{ scale: 1.1 }}
                className="relative w-10 h-10 grayscale hover:grayscale-0 transition-all duration-200"
              >
                <Image
                  src={integration.logo}
                  alt={integration.name}
                  fill
                  className="object-contain"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

