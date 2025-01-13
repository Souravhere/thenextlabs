'use client'

import { motion } from 'framer-motion'
import { Twitter, Linkedin } from 'lucide-react'
import Link from 'next/link'

export function FreelancerInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-xl overflow-hidden bg-muted/5 border border-muted/20 backdrop-blur-sm p-8 text-center"
    >
      <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
        Freelancer Opportunities
      </h2>
      <p className="text-muted-foreground mb-6">
        We hire freelancers on a project-by-project basis. Follow us on social media to stay updated about upcoming opportunities.
      </p>
      <div className="flex justify-center gap-4">
        <Link
          href="https://twitter.com/thenextlabs"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
        >
          <Twitter className="w-4 h-4 mr-2" />
          Follow on X
        </Link>
        <Link
          href="https://linkedin.com/company/thenextlabs"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
        >
          <Linkedin className="w-4 h-4 mr-2" />
          Follow on LinkedIn
        </Link>
      </div>
    </motion.div>
  )
}

