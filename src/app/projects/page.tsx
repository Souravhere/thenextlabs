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
    category: "Agency",
    link: "https://yellowlabs.vercel.app/"
  },
  {
    title: "Space Things",
    description: "Space Things optimizes business environments and improves customer experience by providing advanced technology solutions.",
    image: "/projects/spacethings.png",
    tags: ["Next.js", "TailwindCSS", "Framer Motion"],
    category: "SaaS",
    link: "https://spacethings.vercel.app/"
  },
  {
    title: "Eagles",
    description: "Join the EAGLES revolution! Soar high with the meme coin that combines community, fun, and financial freedom on Solana.",
    image: "/projects/eagles.png",
    tags: ["Next.js", "Figma", "TailwindCSS"],
    category: "Crypto",
    link: "https://eagles.wtf/"
  },
  {
    title: "Hash Pet",
    description: "Next-generation digital WEB3.0 platform beyond providing simple existing services.",
    image: "/projects/hashpet.png",
    tags: ["React", "Framer Motion", "Figma"],
    category: "Crypto",
    link: "https://www.hashpet.io/"
  },
  {
      title: "Hflag",
      description: "Discover a global marketplace for halal-certified products, built on transparency, innovation, and ethical choices.",
      image: "/projects/hflag.png",
      tags: ["React", "Framer Motion", "Figma"],
      category: "Crypto",
      link: "https://www.hflag.io/"
    },
    {
        title: "Veggie Smart",
        description: "A tool to calculate vegetable prices, recipe costs, and more. Updated regularly with new features.",
        image: "/projects/veggiesmart.png",
        tags: ["JS", "Three js", "Pdf.js","SEO"],
        category: "Tools",
        link: "https://souravhere.github.io/Veggie-Smart/"
    },
    {
      title: "Byyte Digital",
      description: "At Byyte Digital, we craft visually stunning websites, captivating designs, and data-driven marketing strategies to elevate your brand.",
      image: "/projects/byyte.png",
      tags: ["React", "Framer Motion","React Router"],
      category: "Agency",
      link: "https://www.byyte.in/"
    },
    {
      title: " EZ Module",
      description: "EZModule is a versatile and open-source React component library, offering reusable UI and feature components for developers seeking to enhance their web projects efficiently.",
      image: "/projects/ezmodule.png",
      tags: ["React", "Framer Motion","npm"],
      category: "Tools",
      link: "https://ez-modules.vercel.app"
    },
    {
      title: "Face Vibe",
      description: "At Face Vibe, our goal is to explore the capabilities of face-api.js and discover the amazing projects that can be built with user interaction.",
      image: "/projects/facevibe.png",
      tags: ["React", "Face-API.js", "Framer Motion","particles.js"],
      category: "Tools",
      link: "https://facevibe.vercel.app/"
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

