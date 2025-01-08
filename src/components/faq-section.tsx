'use client'

import { motion } from 'framer-motion'
import { Code, Palette, Zap, Users, FileCode, DollarSign } from 'lucide-react'
import { FAQCard } from './ui/faq-card'
import { MeshGradient } from './ui/mesh-gradient'

const faqs = [
        {
          question: "What technologies power your animated websites?",
          answer: "We specialize in cutting-edge technologies like Next.js, React.js, and TailwindCSS. These ensure our websites are fast, responsive, SEO-optimized, and rich with stunning animations.",
          icon: <Code className="w-6 h-6 text-primary" />
        },
        {
          question: "How do you approach the design process?",
          answer: "Our process begins with in-depth research on your brand and goals. We then create wireframes and final prototypes in Figma, ensuring every design is visually stunning and aligns perfectly with your vision.",
          icon: <Palette className="w-6 h-6 text-primary" />
        },
        {
          question: "How long does it take to complete a project?",
          answer: "Our streamlined process allows us to complete most projects within a week, delivering high-quality results without compromising creativity or functionality.",
          icon: <Zap className="w-6 h-6 text-primary" />
        },
        {
          question: "Do you provide post-launch support?",
          answer: "Absolutely! We offer ongoing support, including technical maintenance, SEO optimization, and updates to ensure your website stays at the top of its game.",
          icon: <Users className="w-6 h-6 text-primary" />
        },
        {
          question: "Can you upgrade or redesign my current website?",
          answer: "Yes, we can optimize, redesign, or even rebuild your existing website to elevate its performance, aesthetics, and user experience.",
          icon: <FileCode className="w-6 h-6 text-primary" />
        },
        {
          question: "What is your pricing structure?",
          answer: "Our pricing is tailored to the scope and complexity of each project. Reach out to us for a personalized quote that meets your needs and budget.",
          icon: <DollarSign className="w-6 h-6 text-primary" />
        }
      
]

export const FAQSection = () => {
  return (
    <section className="py-20 overflow-hidden relative">
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

