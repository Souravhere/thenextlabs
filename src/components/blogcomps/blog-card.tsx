'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, ArrowUpRight } from 'lucide-react'

interface BlogCardProps {
  title: string
  excerpt: string
  coverImage: string
  date: string
  readTime: string
  slug: string
  index: number
}

export function BlogCard({
  title,
  excerpt,
  coverImage,
  date,
  readTime,
  slug,
  index,
}: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <Link href={`/blog/${slug}`}>
        <div className="rounded-xl overflow-hidden bg-muted/5 border border-muted/20 backdrop-blur-sm hover:bg-muted/10 transition-colors">
          <div className="relative aspect-[16/9] overflow-hidden">
            <Image
              src={coverImage}
              alt={title}
              fill
              className="object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          </div>
          <div className="p-6">
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
            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-muted-foreground">{excerpt}</p>
            <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}

