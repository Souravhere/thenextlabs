'use client'

import { BookCallForm } from '@/src/components/contactcomps/book-call-form'
import { ContactForm } from '@/src/components/contactcomps/contact-form'
import { motion } from 'framer-motion'

export default function ContactPage() {
  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to learn more about our services? We're here to help!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
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
    </div>
  )
}

