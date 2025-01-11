'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ExternalLink } from 'lucide-react'

interface FounderProfileProps {
  name: string
  title: string
  image: string
  bio: string
  expertise: string[]
  socialLinks: {
    twitter: string
    website: string
  }
}

export const FounderProfile = ({
  name,
  title,
  image,
  bio,
  expertise,
  socialLinks
}: FounderProfileProps) => {
  return (
    <div className="grid md:grid-cols-2 gap-12 items-center">
      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative aspect-[4/5] md:aspect-auto md:h-[600px] rounded-2xl overflow-hidden bg-gradient-to-br from-muted/10 to-muted/5"
      >
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover object-center grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
      </motion.div>

      {/* Content Section */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <div>
          <h3 className="text-lg font-medium text-primary mb-2">Meet the Founder</h3>
          <div className="flex items-center gap-3">
            <h2 className="text-4xl font-bold">{name}</h2>
            <span className="text-3xl">✌️</span>
          </div>
        </div>

        {/* Expertise Tags */}
        <div className="flex flex-wrap gap-3">
          {expertise.map((item) => (
            <motion.span
              key={item}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="px-4 py-2 rounded-full bg-muted/10 text-sm font-medium border border-muted/20"
            >
              {item}
            </motion.span>
          ))}
        </div>

        {/* Bio */}
        <p className="text-lg text-muted-foreground leading-relaxed">
          {bio}
        </p>

        {/* Social Links */}
        <div className="flex gap-4 pt-4">
          <motion.a
            href={socialLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/10 hover:bg-muted/20 border border-muted/20 transition-colors"
          >
             𝕏
            <span>@souravchhimpa1</span>
          </motion.a>
          <motion.a
            href={socialLinks.website}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 hover:bg-primary/20 border border-primary/20 transition-colors text-primary"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Hire on Upwork</span>
          </motion.a>
        </div>
      </motion.div>
    </div>
  )
}

