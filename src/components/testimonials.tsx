'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
    companyLogo: "/TESTIMONIALS/eagles.png",
    quote: "As a design professional, I'm impressed by their attention to detail and creative solutions. Outstanding work!",
    avatar: "/TESTIMONIALS/JadenKim.png"
  },
  {
    name: "Anna Martinez",
    role: "Head of Growth",
    company: "Hflag",
    companyLogo: "/TESTIMONIALS/hflag.png",
    quote: "The website they built has significantly improved our conversion rates. The animations are both beautiful and functional.",
    avatar: "/assets/memoji2.avif"
  },
  {
    name: "Sourav Chhimpa",
    role: "Founder",
    company: "The Next Labs",
    companyLogo: "/TESTIMONIALS/thenextlabs.png",
    quote: "The Next Labs delivered beyond our expectations. Their expertise in animated websites is truly remarkable.",
    avatar: "/assets/memoji3.avif"
  }
]

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0
  })
}

export const Testimonials = () => {
  const [[page, direction], setPage] = useState([0, 0])
  const [isAutoScrollPaused, setIsAutoScrollPaused] = useState(false)
  
  // Responsive settings
  const [isMobile, setIsMobile] = useState(false)
  const testimonialsPerPage = isMobile ? 1 : 3
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage)
  
  // Handle window resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Auto-scroll functionality
  useEffect(() => {
    let interval: NodeJS.Timeout

    if (!isAutoScrollPaused) {
      interval = setInterval(() => {
        paginate(1)
      }, 3000)
    }

    return () => clearInterval(interval)
  }, [isAutoScrollPaused])

  const paginate = (newDirection: number) => {
    setPage(([current]) => {
      const newPage = (current + newDirection + totalPages) % totalPages
      return [newPage, newDirection]
    })
  }

  // Get visible testimonials based on current page
  const getVisibleTestimonials = () => {
    const start = page * testimonialsPerPage
    return testimonials.slice(start, start + testimonialsPerPage)
  }

  return (
    <section className="py-10 overflow-hidden relative">
      <MeshGradient />
      <div className="container px-4 mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
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
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Hear from our satisfied clients about their experience working with us
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div 
          className="relative min-h-[400px]"
          onMouseEnter={() => setIsAutoScrollPaused(true)}
          onMouseLeave={() => setIsAutoScrollPaused(false)}
        >
          <AnimatePresence initial={false} custom={direction}>
            <motion.div 
              key={page}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="absolute w-full"
            >
              <div className={`grid gap-6 ${
                isMobile 
                  ? 'grid-cols-1' 
                  : 'grid-cols-3'
              }`}>
                {getVisibleTestimonials().map((testimonial, index) => (
                  <div key={`${testimonial.name}-${page}-${index}`}>
                    <TestimonialCard
                      {...testimonial}
                      delay={index * 0.1}
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex items-center gap-4">
            <button
              onClick={() => paginate(-1)}
              className="rounded-full border border-muted-foreground/30 p-3 hover:bg-primary/10 transition-colors"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setPage([index, index > page ? 1 : -1])}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === page 
                      ? 'w-8 bg-primary' 
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => paginate(1)}
              className="rounded-full border border-muted-foreground/30 p-3 hover:bg-primary/10 transition-colors"
              aria-label="Next testimonials"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}