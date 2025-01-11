'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export const BookCallForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    const form = e.currentTarget
    const formData = new FormData(form)
    
    // Handle multiple checkbox values
    const requirements = formData.getAll('requirements')
    
    // Create data object for submission
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      company: formData.get('company'),
      projectType: formData.get('projectType'),
      budget: formData.get('budget'),
      timeline: formData.get('timeline'),
      projectDescription: formData.get('projectDescription'),
      requirements: requirements,
      _subject: "New Project Consultation Request"
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
        // Reset checkboxes - Fixed type casting
        const checkboxes = form.querySelectorAll<HTMLInputElement>('input[type="checkbox"]')
        checkboxes.forEach((checkbox) => {
          checkbox.checked = false
        })
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
        <label htmlFor="company" className="block text-sm font-medium mb-2 text-muted-foreground">Company</label>
        <input
          type="text"
          id="company"
          name="company"
          required
          className="w-full px-4 py-3 rounded-md bg-muted/10 border border-muted focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
          placeholder="Your company name"
        />
      </div>
      <div>
        <label htmlFor="projectType" className="block text-sm font-medium mb-2 text-muted-foreground">Project Type</label>
        <select
          id="projectType"
          name="projectType"
          required
          className="w-full px-4 py-3 rounded-md bg-muted/10 border border-muted focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
        >
          <option value="">Select a project type</option>
          <option value="website">Landing Pages</option>
          <option value="webapp">Crypto & Web3 Web</option>
          <option value="ecommerce">Product Showcases</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="budget" className="block text-sm font-medium mb-2 text-muted-foreground">Budget Range</label>
        <select
          id="budget"
          name="budget"
          required
          className="w-full px-4 py-3 rounded-md bg-muted/10 border border-muted focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
        >
          <option value="">Select a budget range</option>
          <option value="0-5000">$100 - $500</option>
          <option value="5000-10000">$500 - $1,000</option>
          <option value="10000-20000">$1,000 - $1,500</option>
          <option value="20000+">$2,000+</option>
        </select>
      </div>
      <div>
        <label htmlFor="timeline" className="block text-sm font-medium mb-2 text-muted-foreground">Timeline</label>
        <select
          id="timeline"
          name="timeline"
          required
          className="w-full px-4 py-3 rounded-md bg-muted/10 border border-muted focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
        >
          <option value="">Select timeline</option>
          <option value="1-2months">1-2 Weeks</option>
          <option value="3-6months">3-6 Weeks</option>
          <option value="6+months">6+ Weeks</option>
        </select>
      </div>
      <div>
        <label htmlFor="projectDescription" className="block text-sm font-medium mb-2 text-muted-foreground">Project Description</label>
        <textarea
          id="projectDescription"
          name="projectDescription"
          rows={4}
          required
          className="w-full px-4 py-3 rounded-md bg-muted/10 border border-muted focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
          placeholder="Tell us about your project goals, features, and any specific requirements..."
        ></textarea>
      </div>
      <div>
        <label className="block text-sm font-medium mb-2 text-muted-foreground">Project Requirements</label>
        <div className="space-y-2">
          {['Responsive Design', 'Custom Animations', 'Content Management System', 'SEO Optimization', 'Analytics Integration', 'Maintenance & Support'].map((requirement) => (
            <label key={requirement} className="flex items-center">
              <input
                type="checkbox"
                name="requirements"
                value={requirement}
                className="mr-2 rounded border-muted focus:ring-primary"
              />
              <span className="text-sm text-muted-foreground">{requirement}</span>
            </label>
          ))}
        </div>
      </div>
      <motion.button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {isSubmitting ? 'Submitting...' : 'Book a Call'}
      </motion.button>
      {submitStatus === 'success' && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-green-500 text-sm mt-2 text-center"
        >
          Thank you for your interest. We&#39;ll contact you soon to schedule a call!
        </motion.p>
      )}
      {submitStatus === 'error' && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-red-500 text-sm mt-2 text-center"
        >
          There was an error submitting your request. Please try again.
        </motion.p>
      )}
    </motion.form>
  )
}