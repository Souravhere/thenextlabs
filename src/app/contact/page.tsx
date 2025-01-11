'use client'

import CompetitorComparison from '@/src/components/competitor-comparison'
import { BookCallForm } from '@/src/components/contactcomps/book-call-form'
import { ContactForm } from '@/src/components/contactcomps/contact-form'
import { MeshGradient } from '@/src/components/ui/mesh-gradient'
import { motion } from 'framer-motion'

export default function ContactPage() {
  return (
    <div className="min-h-screen py-20 relative">
        <MeshGradient/>
      <div className="container mx-auto px-4">
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
              CONTACT US
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Let&#39;s Build Something Amazing Together
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-muted-foreground"
            >
              Have a project in mind? We&#39;d love to discuss how we can help bring your vision to life.
            </motion.p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mt-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-muted/5 backdrop-blur-sm rounded-lg p-8 border border-muted/20"
          >
            <h2 className="text-3xl font-semibold mb-6 text-primary">Contact Us</h2>
            <ContactForm />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-muted/5 backdrop-blur-sm rounded-lg p-8 border border-muted/20"
          >
            <h2 className="text-3xl font-semibold mb-6 text-primary">Book a Call</h2>
            <BookCallForm />
          </motion.div>
        </div>
      </div>
      <CompetitorComparison/>
    </div>
  )
}

