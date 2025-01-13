'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Clock, MapPin, Briefcase } from 'lucide-react'
import Link from 'next/link'

interface JobCardProps {
  title: string
  type: string
  location: string
  duration: string
  description: string
  skills: string[]
  slug: string
  index: number
}

export function JobCard({
  title,
  type,
  location,
  duration,
  description,
  skills,
  slug,
  index
}: JobCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="rounded-xl overflow-hidden bg-muted/5 border border-muted/20 backdrop-blur-sm hover:bg-muted/10 transition-colors p-6">
        <div className="flex flex-wrap gap-4 items-start justify-between mb-4">
          <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
            {title}
          </h3>
          <Link
            href={`/careers/${slug}`}
            className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors text-sm"
          >
            View Details
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
          <span className="flex items-center gap-1">
            <Briefcase className="w-4 h-4" />
            {type}
          </span>
          <span className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            {location}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {duration}
          </span>
        </div>

        <p className="text-muted-foreground mb-4">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

