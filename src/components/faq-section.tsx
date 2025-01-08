'use client'

import { motion } from 'framer-motion'
import { Code, Palette, Zap, Users, FileCode, DollarSign } from 'lucide-react'
import { FAQCard } from './ui/faq-card'

const faqs = [
  {
    question: "What technologies do you use for development?",
    answer: "We specialize in modern web technologies including Next.js, React.js, and TailwindCSS. Our stack ensures fast, responsive, and SEO-optimized websites with stunning animations.",
    icon: <Code className="w-6 h-6 text-primary" />
  },
  {
    question: "How do you handle design processes?",
    answer: "Our design process starts with understanding your brand, followed by creating wireframes and interactive prototypes in Figma. We ensure each design is unique and aligns with your vision.",
    icon: <Palette className="w-6 h-6 text-primary" />
  },
  {
    question: "What's your typical project timeline?",
    answer: "Most projects are completed within 1-2 weeks. We maintain efficiency without compromising quality through our streamlined development process.",
    icon: <Zap className="w-6 h-6 text-primary" />
  },
  {
    question: "Do you offer support after launch?",
    answer: "Yes, we provide comprehensive post-launch support including technical maintenance, SEO optimization, and content updates to ensure your website performs optimally.",
    icon: <Users className="w-6 h-6 text-primary" />
  },
  {
    question: "Can you help with existing websites?",
    answer: "We can help optimize, redesign, or completely rebuild existing websites to improve performance, user experience, and visual appeal.",
    icon: <FileCode className="w-6 h-6 text-primary" />
  },
  {
    question: "What are your pricing models?",
    answer: "We offer flexible pricing based on project scope and requirements. Contact us for a detailed quote tailored to your specific needs.",
    icon: <DollarSign className="w-6 h-6 text-primary" />
  }
]

export const FAQSection = () => {
  return (
    <section className="py-20 overflow-hidden">
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
            GOT QUESTIONS?
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="max-w-2xl mx-auto text-lg text-muted-foreground"
          >
            Find answers to common questions about our services, process, and pricing
          </motion.p>
        </motion.div>

        {/* FAQ Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <FAQCard
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              icon={faq.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

