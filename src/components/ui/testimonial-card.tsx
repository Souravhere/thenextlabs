'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface TestimonialCardProps {
  name: string
  role: string
  company: string
  companyLogo: string
  quote: string
  avatar: string
  delay?: number
}

export const TestimonialCard = ({
  name,
  role,
  company,
  companyLogo,
  quote,
  avatar,
  delay = 0
}: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <div className="h-full rounded-2xl bg-gradient-to-b from-muted/10 via-muted/5 to-transparent border border-muted/20 p-8 backdrop-blur-sm relative overflow-hidden">
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Content */}
        <div className="relative">
          {/* Profile */}
          <div className="flex items-center gap-4 mb-6">
            <div className="relative w-14 h-14 rounded-full overflow-hidden">
              <Image
                src={avatar}
                alt={name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h4 className="font-semibold text-lg">{name}</h4>
              <p className="text-sm text-muted-foreground">{role}</p>
            </div>
          </div>

          {/* Quote */}
          <blockquote className="mb-8">
            <p className="text-muted-foreground leading-relaxed">
              "{quote}"
            </p>
          </blockquote>

          {/* Company Logo */}
          <div className="h-8 relative">
            <Image
              src={companyLogo}
              alt={company}
              width={120}
              height={32}
              className="object-contain filter grayscale opacity-50 group-hover:opacity-75 transition-opacity"
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}
