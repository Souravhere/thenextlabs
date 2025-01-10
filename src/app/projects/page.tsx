'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ProjectCard } from '@/src/components/projectscomps/project-card'
import { FilterButton } from '@/src/components/projectscomps/filter-button'
import { MeshGradient } from '@/src/components/ui/mesh-gradient'


const projects = [
  {
    title: "AI-Powered Analytics Dashboard",
    description: "Modern analytics platform with real-time data visualization and AI insights.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "React", "TailwindCSS", "AI"],
    category: "SaaS",
    link: "/projects/analytics-dashboard"
  },
  {
    title: "Crypto Trading Platform",
    description: "Secure cryptocurrency trading platform with advanced charting capabilities.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Web3", "Framer Motion"],
    category: "Crypto",
    link: "/projects/crypto-platform"
  },
  {
    title: "E-Learning Management System",
    description: "Comprehensive learning platform with interactive courses and progress tracking.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "PostgreSQL", "TailwindCSS"],
    category: "Education",
    link: "/projects/lms"
  },
  {
    title: "Healthcare Patient Portal",
    description: "Secure patient management system with appointment scheduling and records.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Node.js", "MongoDB"],
    category: "Healthcare",
    link: "/projects/patient-portal"
  },
  {
    title: "E-commerce Product Showcase",
    description: "Dynamic product catalog with 3D product visualization and AR preview.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Three.js", "Next.js", "WebGL"],
    category: "E-commerce",
    link: "/projects/product-showcase"
  },
  {
    title: "Social Media Analytics Tool",
    description: "Comprehensive social media management and analytics platform.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Python", "Data Analysis"],
    category: "SaaS",
    link: "/projects/social-analytics"
  }
]

const categories = ["All", "SaaS", "Crypto", "Education", "Healthcare", "E-commerce"]

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects = projects.filter(project => 
    activeCategory === "All" ? true : project.category === activeCategory
  )

  return (
    <div className="min-h-screen">
      <MeshGradient/>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-3 py-1 mb-4 text-sm font-semibold text-primary border border-primary/20 rounded-full"
            >
              OUR WORK
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Featured Projects
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-muted-foreground"
            >
              Explore our portfolio of innovative web solutions crafted with cutting-edge technologies
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {categories.map((category) => (
              <FilterButton
                key={category}
                category={category}
                isActive={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              />
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                {...project}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}

