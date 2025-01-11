'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  link: string
  index: number
}

export const ProjectCard = ({
  title,
  description,
  image,
  tags,
  link,
  index
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <Link href={link} target='_blank' className="block">
        <div className="relative overflow-hidden rounded-xl bg-muted/5 border border-muted/20 backdrop-blur-sm">
          {/* Image */}
          <div className="relative aspect-[16/9] overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title & Description */}
            <div className="space-y-2">
              <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                {title}
              </h3>
              <p className="text-muted-foreground">
                {description}
              </p>
            </div>

            {/* Arrow Icon */}
            <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

