'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    const form = e.currentTarget
    const formData = new FormData(form)
    
    // Convert FormData to JSON object
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
      _subject: "New Contact Form Submission"
    }

    try {
      const response = await fetch('https://formspree.io/f/xovvynro', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })

      if (response.ok) {
        setSubmitStatus('success')
        form.reset()
      } else {
        const responseData = await response.json()
        console.error('Form submission error:', responseData)
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2 text-muted-foreground">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-3 rounded-md bg-muted/10 border border-muted focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
          placeholder="Your full name"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2 text-muted-foreground">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3 rounded-md bg-muted/10 border border-muted focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
          placeholder="your@email.com"
        />
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-2 text-muted-foreground">Subject</label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          className="w-full px-4 py-3 rounded-md bg-muted/10 border border-muted focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
          placeholder="What's this about?"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2 text-muted-foreground">Message</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="w-full px-4 py-3 rounded-md bg-muted/10 border border-muted focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
          placeholder="Your message here..."
        ></textarea>
      </div>
      <motion.button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </motion.button>
      {submitStatus === 'success' && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-green-500 text-sm mt-2 text-center"
        >
          Thank you for your message. We&#39;ll get back to you soon!
        </motion.p>
      )}
      {submitStatus === 'error' && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-red-500 text-sm mt-2 text-center"
        >
          There was an error sending your message. Please try again.
        </motion.p>
      )}
    </motion.form>
  )
}