'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

interface FeaturedPostProps {
  title: string
  excerpt: string
  coverImage: string
  date: string
  readTime: string
  slug: string
}

export function FeaturedPost({
  title,
  excerpt,
  coverImage,
  date,
  readTime,
  slug,
}: FeaturedPostProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative rounded-xl overflow-hidden bg-muted/5 border border-muted/20 backdrop-blur-sm"
    >
      <div className="grid md:grid-cols-2 gap-6">
        <div className="relative aspect-[16/9] md:aspect-auto">
          <Image
            src={coverImage}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6 flex flex-col justify-center">
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {readTime}
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
            {title}
          </h2>
          <p className="text-muted-foreground mb-6">{excerpt}</p>
          <Link
            href={`/blog/${slug}`}
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
          >
            Read More <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </motion.article>
  )
}

