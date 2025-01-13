'use client'

import { BlogCard } from '@/src/components/blogcomps/blog-card'
import { FeaturedPost } from '@/src/components/blogcomps/featured-post'
import { motion } from 'framer-motion'

// This would be fetched from Hashnode API in production
const featuredPost = {
  title: "Building Scalable Web Applications with Next.js",
  excerpt: "Learn how to leverage Next.js features to build performant and scalable web applications that can handle millions of users.",
  coverImage: "/placeholder.svg?height=400&width=800",
  date: "Jan 12, 2024",
  readTime: "8 min read",
  slug: "building-scalable-web-applications"
}

const posts = [
  {
    title: "The Future of Web Development",
    excerpt: "Exploring upcoming trends and technologies that will shape the future of web development.",
    coverImage: "/placeholder.svg?height=400&width=600",
    date: "Jan 10, 2024",
    readTime: "5 min read",
    slug: "future-of-web-development"
  },
  {
    title: "Mastering React Server Components",
    excerpt: "A comprehensive guide to understanding and implementing React Server Components.",
    coverImage: "/placeholder.svg?height=400&width=600",
    date: "Jan 8, 2024",
    readTime: "6 min read",
    slug: "mastering-react-server-components"
  },
  {
    title: "AI in Modern Web Applications",
    excerpt: "How to integrate AI capabilities into your web applications for enhanced user experience.",
    coverImage: "/placeholder.svg?height=400&width=600",
    date: "Jan 6, 2024",
    readTime: "7 min read",
    slug: "ai-in-modern-web-applications"
  }
]

export default function BlogPage() {
  return (
    <main className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-3 py-1 mb-4 text-sm font-semibold text-primary border border-primary/20 rounded-full"
          >
            OUR BLOG
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Latest Insights & News
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-muted-foreground"
          >
            Stay updated with our latest thoughts on technology, development, and innovation.
          </motion.p>
        </motion.div>

        <div className="space-y-12">
          <FeaturedPost {...featuredPost} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, index) => (
              <BlogCard key={post.slug} {...post} index={index} />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

