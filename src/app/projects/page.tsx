'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ProjectCard } from '@/src/components/projectscomps/project-card'
import { FilterButton } from '@/src/components/projectscomps/filter-button'
import { MeshGradient } from '@/src/components/ui/mesh-gradient'


const projects = [
  {
    title: "Yellow Labs",
    description: "Yellow Labs is a leading Web3 consulting firm specializing in blockchain, cryptocurrency, and digital innovation.",
    image: "/projects/yellow-labs.png",
    tags: ["Next.js", "TailwindCSS", "Framer Motion", "Figma"],
    category: "SaaS",
    link: "https://yellowlabs.vercel.app/"
  },
  {
    title: "Space Things",
    description: "Space Things optimizes business environments and improves customer experience by providing advanced technology solutions.",
    image: "/projects/spacethings.png",
    tags: ["Next.js", "TailwindCSS", "Framer Motion"],
    category: "Crypto",
    link: "https://spacethings.vercel.app/"
  },
  {
    title: "Eagles",
    description: "Join the EAGLES revolution! Soar high with the meme coin that combines community, fun, and financial freedom on Solana.",
    image: "/projects/eagles.png",
    tags: ["Next.js", "Figma", "TailwindCSS"],
    category: "Education",
    link: "/projects/lms"
  },
  {
    title: "Hash Pet",
    description: "Next-generation digital WEB3.0 platform beyond providing simple existing services.",
    image: "/projects/hashpet.png",
    tags: ["React", "Node.js", "MongoDB"],
    category: "Healthcare",
    link: "https://hashpet.vercel.app/"
  },
  {
      title: "E-commerce Product Showcase",
      description: "Dynamic product catalog with 3D product visualization and AR preview.",
      image: "/projects/hflag.png",
      tags: ["Three.js", "Next.js", "WebGL"],
      category: "E-commerce",
      link: "/projects/product-showcase"
    },
    {
        title: "Social Media Analytics Tool",
        description: "Comprehensive social media management and analytics platform.",
        image: "/projects/veggiesmart.png",
        tags: ["React", "Python", "Data Analysis"],
        category: "SaaS",
        link: "/projects/social-analytics"
    },
    {
      title: "E-commerc",
      description: "Dynamic product catalog with 3D product visualization and AR preview.",
      image: "/projects/facevibe.png",
      tags: ["Three.js", "Next.js", "WebGL"],
      category: "E-commerce",
      link: "/projects/product-showcase"
    },
]

const categories = ["All", "SaaS", "Crypto", "Tools", "Agency"]

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

