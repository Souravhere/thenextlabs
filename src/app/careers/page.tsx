'use client'

import { motion } from 'framer-motion'
import { JobCard } from '@/components/careers/job-card'
import { FreelancerInfo } from '@/components/careers/freelancer-info'

const jobs = [
  {
    title: "Senior Frontend Developer",
    type: "Project-based",
    location: "Remote",
    duration: "3-6 months",
    description: "We're looking for an experienced frontend developer with expertise in React and Next.js to help build scalable web applications.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    slug: "senior-frontend-developer"
  },
  {
    title: "UI/UX Designer",
    type: "Project-based",
    location: "Remote",
    duration: "2-4 months",
    description: "Seeking a creative UI/UX designer to help design intuitive and beautiful user interfaces for our clients.",
    skills: ["Figma", "UI Design", "UX Research", "Prototyping"],
    slug: "ui-ux-designer"
  },
  {
    title: "Full Stack Developer",
    type: "Project-based",
    location: "Remote",
    duration: "4-8 months",
    description: "Looking for a full stack developer with experience in modern web technologies to build end-to-end solutions.",
    skills: ["Next.js", "Node.js", "PostgreSQL", "AWS"],
    slug: "full-stack-developer"
  }
]

export default function CareersPage() {
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
            CAREERS
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Join Our Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-muted-foreground"
          >
            Work with us to build innovative solutions and shape the future of web development.
          </motion.p>
        </motion.div>

        <div className="space-y-12">
          <FreelancerInfo />

          <div className="space-y-6">
            {jobs.map((job, index) => (
              <JobCard key={job.slug} {...job} index={index} />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

