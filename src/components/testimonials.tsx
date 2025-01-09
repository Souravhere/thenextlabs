'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { TestimonialCard } from './ui/testimonial-card'
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
    companyLogo: "/TESTIMONIALS/spacethings.png",
    quote: "The Next Labs helped us create a website that truly represents our brand. The animations are smooth and purposeful.",
    avatar: "/TESTIMONIALS/kim-david.jpg"
  },
  {
    name: "James Wilson",
    role: "Startup Founder",
    company: "Hash Pet",
    companyLogo: "/TESTIMONIALS/hashpet.webp",
    quote: "They understood our startup's needs perfectly and delivered a website that helps us stand out in the market.",
    avatar: "/assets/memoji1.avif"
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
    name: "Anna Martinez",
    role: "Head of Growth",
    company: "Hflag",
    companyLogo: "/TESTIMONIALS/hflag.webp",
    quote: "The website they built has significantly improved our conversion rates. The animations are both beautiful and functional.",
    avatar: "/assets/memoji2.avif"
  },
  {
    name: "Sourav Chhimpa",
    role: "Founder",
    company: "The Next Labs",
    companyLogo: "/Logos/thenextlabs.svg",
    quote: "The Next Labs delivered beyond our expectations. Their expertise in animated websites is truly remarkable.",
    avatar: "/assets/memoji3.avif"
  }
]

export const Testimonials = () => {
  const [currentPage, setCurrentPage] = useState(0)
  const [isAutoScrollPaused, setIsAutoScrollPaused] = useState(false)
//   const controls = useAnimation()
  
  // Adjust testimonials per page based on screen size
  const getTestimonialsPerPage = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768 ? 1 : 3
    }
    return 3
  }
  
  const [testimonialsPerPage, setTestimonialsPerPage] = useState(getTestimonialsPerPage())
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage)

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setTestimonialsPerPage(getTestimonialsPerPage())
    }
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Auto-scroll functionality
  useEffect(() => {
    let interval: NodeJS.Timeout

    if (!isAutoScrollPaused) {
      interval = setInterval(() => {
        setCurrentPage((prev) => (prev + 1) % totalPages)
      }, 3000) // Change slide every 5 seconds
    }

    return () => clearInterval(interval)
  }, [totalPages, isAutoScrollPaused])

  const nextPage = () => {
    setIsAutoScrollPaused(true)
    setCurrentPage((prev) => (prev + 1) % totalPages)
    // Resume auto-scroll after 5 seconds of inactivity
    setTimeout(() => setIsAutoScrollPaused(false), 5000)
  }

  const prevPage = () => {
    setIsAutoScrollPaused(true)
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
    // Resume auto-scroll after 5 seconds of inactivity
    setTimeout(() => setIsAutoScrollPaused(false), 5000)
  }

  const goToPage = (page: number) => {
    setIsAutoScrollPaused(true)
    setCurrentPage(page)
    // Resume auto-scroll after 5 seconds of inactivity
    setTimeout(() => setIsAutoScrollPaused(false), 5000)
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

        {/* Testimonials Carousel */}
        <div 
          className="relative"
          onMouseEnter={() => setIsAutoScrollPaused(true)}
          onMouseLeave={() => setIsAutoScrollPaused(false)}
        >
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
            <button
              onClick={prevPage}
              className="rounded-full border border-muted-foreground/30 p-3 hover:bg-primary/10 transition-colors" 
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToPage(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentPage 
                      ? 'w-8 bg-primary' 
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextPage}
              className="rounded-full border border-muted-foreground/30 p-3 hover:bg-primary/10 transition-colors" 
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}