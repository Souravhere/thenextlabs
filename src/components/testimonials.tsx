'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { TestimonialCard } from './ui/testimonial-card'
// import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { MeshGradient } from './ui/mesh-gradient'

const testimonials = [
  {
    name: "Jeff Lee",
    role: "DIRECTOR | Co-Founder",
    company: "Yellow Labs",
    companyLogo: "/TESTIMONIALS/yellowlabs.png",
    quote: "The Next Labs transformed our vision into reality. Their animated website perfectly captures our brand's innovative spirit.",
    avatar: "/TESTIMONIALS/jeff.png"
  },
  {
    name: "David Kim",
    role: "Product Manager",
    company: "Space Things",
    companyLogo: "/TESTIMONIALS/logo.png",
    quote: "The Next Labs helped us create a website that truly represents our brand. The animations are smooth and purposeful.",
    avatar: "/TESTIMONIALS/kim-david.jpg"
  },
  {
    name: "Jaden Kim",
    role: "DIRECTOR | Co-Founder",
    company: "Eagles",
    companyLogo: "/TESTIMONIALS/yellowlabs.png",
    quote: "As a design professional, I'm impressed by their attention to detail and creative solutions. Outstanding work!",
    avatar: "/TESTIMONIALS/JadenKim.png"
  },
  {
    name: "James Wilson",
    role: "Startup Founder",
    company: "Hash Pet",
    companyLogo: "/placeholder.svg?height=32&width=120",
    quote: "They understood our startup's needs perfectly and delivered a website that helps us stand out in the market.",
    avatar: "/placeholder.svg?height=100&width=100"
  },
  {
    name: "Anna Martinez",
    role: "Head of Growth",
    company: "Hflag",
    companyLogo: "/placeholder.svg?height=32&width=120",
    quote: "The website they built has significantly improved our conversion rates. The animations are both beautiful and functional.",
    avatar: "/placeholder.svg?height=100&width=100"
  },
  {
    name: "Sourav Chhimpa",
    role: "Founder",
    company: "The Next Labs",
    companyLogo: "/placeholder.svg?height=32&width=120",
    quote: "The Next Labs delivered beyond our expectations. Their expertise in animated websites is truly remarkable.",
    avatar: "/placeholder.svg?height=100&width=100"
  }
]

export const Testimonials = () => {
  const [currentPage, setCurrentPage] = useState(0)
  const testimonialsPerPage = 3
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage)

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  return (
    <section className="py-10 overflow-hidden relative">
        <MeshGradient/>
      <div className="container px-4 mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 mb-4 text-sm font-semibold text-primary border border-primary/20 rounded-full"
          >
            TESTIMONIALS
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="max-w-2xl mx-auto text-lg text-muted-foreground"
          >
            Hear from our satisfied clients about their experience working with us
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="relative">
          <motion.div
            animate={{ x: `-${currentPage * 100}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="flex gap-6"
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="w-full md:w-1/3 flex-shrink-0"
              >
                <TestimonialCard
                  {...testimonial}
                  delay={index % testimonialsPerPage * 0.1}
                />
              </div>
            ))}
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-12">
            <span
              onClick={prevPage}
              className="rounded-full border border-muted-foreground/30 p-3" 
            >
              <ChevronLeft className="w-4 h-4" />
            </span>

            {/* Dots */}
            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentPage 
                      ? 'w-8 bg-primary' 
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>

            <span
              onClick={nextPage}
              className="rounded-full border border-muted-foreground/30 p-3" 
            >
              <ChevronRight className="w-4 h-4" />
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

