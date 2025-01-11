'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Phone, Mail, Clock, Loader2 } from 'lucide-react'

const contactInfo = [
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Phone",
    details: "+1 (555) 123-4567",
    subtitle: "Mon-Fri 9am-6pm IST"
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email",
    details: "hello@thenextlabs.com",
    subtitle: "Online support"
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Working Hours",
    details: "Monday - Friday",
    subtitle: "9:00 AM - 6:00 PM IST"
  }
]

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

const bookingFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  company: z.string().min(2, 'Company name must be at least 2 characters'),
  projectType: z.string().min(1, 'Please select a project type'),
  budget: z.string().min(1, 'Please select a budget range'),
  timeline: z.string().min(1, 'Please select a timeline'),
  description: z.string().min(50, 'Please provide more details (min. 50 characters)'),
  requirements: z.array(z.string()).min(1, 'Please select at least one requirement'),
})

const projectTypes = ['Landing Page', 'Corporate Website', 'Web Application', 'E-commerce', 'Other']
const budgetRanges = ['$5,000 - $10,000', '$10,000 - $20,000', '$20,000 - $50,000', '$50,000+']
const timelines = ['1-2 weeks', '2-4 weeks', '1-2 months', '2+ months']
const requirements = [
  { id: 'responsive', label: 'Responsive Design' },
  { id: 'animations', label: 'Custom Animations' },
  { id: 'cms', label: 'Content Management System' },
  { id: 'seo', label: 'SEO Optimization' },
  { id: 'analytics', label: 'Analytics Integration' },
  { id: 'maintenance', label: 'Maintenance & Support' },
]

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState('contact')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const contactForm = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  })

  const bookingForm = useForm<z.infer<typeof bookingFormSchema>>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      projectType: '',
      budget: '',
      timeline: '',
      description: '',
      requirements: [],
    },
  })

  const onSubmitContact = async (values: z.infer<typeof contactFormSchema>) => {
    setIsSubmitting(true)
    try {
      const response = await fetch('https://formspree.io/f/your-form-id', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })
      
      if (response.ok) {
        setIsSuccess(true)
        contactForm.reset()
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    }
    setIsSubmitting(false)
  }

  const onSubmitBooking = async (values: z.infer<typeof bookingFormSchema>) => {
    setIsSubmitting(true)
    try {
      const response = await fetch('https://formspree.io/f/your-form-id', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })
      
      if (response.ok) {
        setIsSuccess(true)
        bookingForm.reset()
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    }
    setIsSubmitting(false)
  }

  return (
    <div className="min-h-screen py-20 bg-[#0a0a0a] text-white">
      <div className="container px-4 mx-auto mb-20">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#3a86ff] via-[#ff006e] to-[#fb5607] text-transparent bg-clip-text"
          >
            Let's Build Something Amazing Together
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-300"
          >
            Have a project in mind? We'd love to discuss how we can help bring your vision to life.
          </motion.p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl border border-gray-800 bg-gray-900 bg-opacity-50 backdrop-blur-sm text-center"
            >
              <div className="w-12 h-12 rounded-full bg-[#3a86ff] bg-opacity-10 text-[#3a86ff] flex items-center justify-center mx-auto mb-4">
                {info.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
              <p className="text-[#3a86ff] font-medium mb-1">{info.details}</p>
              <p className="text-sm text-gray-400">{info.subtitle}</p>
            </motion.div>
          ))}
        </div>

        {/* Contact Forms */}
        <div className="w-full max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <button
              onClick={() => setActiveTab('contact')}
              className={`px-6 py-2 text-lg font-medium rounded-l-full ${
                activeTab === 'contact'
                  ? 'bg-[#3a86ff] text-white'
                  : 'bg-gray-800 text-gray-300'
              }`}
            >
              Contact Us
            </button>
            <button
              onClick={() => setActiveTab('booking')}
              className={`px-6 py-2 text-lg font-medium rounded-r-full ${
                activeTab === 'booking'
                  ? 'bg-[#3a86ff] text-white'
                  : 'bg-gray-800 text-gray-300'
              }`}
            >
              Book a Call
            </button>
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl border border-gray-800 bg-gray-900 bg-opacity-50 backdrop-blur-sm p-6 md:p-8"
          >
            {activeTab === 'contact' ? (
              <form onSubmit={contactForm.handleSubmit(onSubmitContact)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                    <input
                      {...contactForm.register('name')}
                      id="name"
                      type="text"
                      className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#3a86ff]"
                      placeholder="John Doe"
                    />
                    {contactForm.formState.errors.name && (
                      <p className="mt-1 text-sm text-red-500">{contactForm.formState.errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                    <input
                      {...contactForm.register('email')}
                      id="email"
                      type="email"
                      className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#3a86ff]"
                      placeholder="john@example.com"
                    />
                    {contactForm.formState.errors.email && (
                      <p className="mt-1 text-sm text-red-500">{contactForm.formState.errors.email.message}</p>
                    )}
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">Subject</label>
                  <input
                    {...contactForm.register('subject')}
                    id="subject"
                    type="text"
                    className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#3a86ff]"
                    placeholder="What's this about?"
                  />
                  {contactForm.formState.errors.subject && (
                    <p className="mt-1 text-sm text-red-500">{contactForm.formState.errors.subject.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                  <textarea
                    {...contactForm.register('message')}
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#3a86ff]"
                    placeholder="Tell us about your project..."
                  ></textarea>
                  {contactForm.formState.errors.message && (
                    <p className="mt-1 text-sm text-red-500">{contactForm.formState.errors.message.message}</p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 text-lg font-medium text-white bg-[#3a86ff] rounded-md hover:bg-[#2563eb] focus:outline-none focus:ring-2 focus:ring-[#3a86ff] focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="inline-block w-4 h-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            ) : (
              <form onSubmit={bookingForm.handleSubmit(onSubmitBooking)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                    <input
                      {...bookingForm.register('name')}
                      id="name"
                      type="text"
                      className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#3a86ff]"
                      placeholder="John Doe"
                    />
                    {bookingForm.formState.errors.name && (
                      <p className="mt-1 text-sm text-red-500">{bookingForm.formState.errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                    <input
                      {...bookingForm.register('email')}
                      id="email"
                      type="email"
                      className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#3a86ff]"
                      placeholder="john@example.com"
                    />
                    {bookingForm.formState.errors.email && (
                      <p className="mt-1 text-sm text-red-500">{bookingForm.formState.errors.email.message}</p>
                    )}
                  </div>
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">Company</label>
                  <input
                    {...bookingForm.register('company')}
                    id="company"
                    type="text"
                    className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#3a86ff]"
                    placeholder="Your Company Name"
                  />
                  {bookingForm.formState.errors.company && (
                    <p className="mt-1 text-sm text-red-500">{bookingForm.formState.errors.company.message}</p>
                  )}
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-gray-300 mb-1">Project Type</label>
                    <select
                      {...bookingForm.register('projectType')}
                      id="projectType"
                      className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#3a86ff]"
                    >
                      <option value="">Select type</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                    {bookingForm.formState.errors.projectType && (
                      <p className="mt-1 text-sm text-red-500">{bookingForm.formState.errors.projectType.message}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-1">Budget Range</label>
                    <select
                      {...bookingForm.register('budget')}
                      id="budget"
                      className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#3a86ff]"
                    >
                      <option value="">Select budget</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                    {bookingForm.formState.errors.budget && (
                      <p className="mt-1 text-sm text-red-500">{bookingForm.formState.errors.budget.message}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-300 mb-1">Timeline</label>
                    <select
                      {...bookingForm.register('timeline')}
                      id="timeline"
                      className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#3a86ff]"
                    >
                      <option value="">Select timeline</option>
                      {timelines.map((timeline) => (
                        <option key={timeline} value={timeline}>{timeline}</option>
                      ))}
                    </select>
                    {bookingForm.formState.errors.timeline && (
                      <p className="mt-1 text-sm text-red-500">{bookingForm.formState.errors.timeline.message}</p>
                    )}
                  </div>
                </div>
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-1">Project Description</label>
                  <textarea
                    {...bookingForm.register('description')}
                    id="description"
                    rows={4}
                    className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#3a86ff]"
                    placeholder="Tell us about your project goals, features, and any specific requirements..."
                  ></textarea>
                  {bookingForm.formState.errors.description && (
                    <p className="mt-1 text-sm text-red-500">{bookingForm.formState.errors.description.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Project Requirements</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {requirements.map((item) => (
                      <div key={item.id} className="flex items-center">
                        <input
                          {...bookingForm.register('requirements')}
                          type="checkbox"
                          id={item.id}
                          value={item.id}
                          className="w-4 h-4 text-[#3a86ff] bg-gray-800 border-gray-700 rounded focus:ring-[#3a86ff] focus:ring-2"
                        />
                        <label htmlFor={item.id} className="ml-2 text-sm text-gray-300">
                          {item.label}
                        </label>
                      </div>
                    ))}
                  </div>
                  {bookingForm.formState.errors.requirements && (
                    <p className="mt-1 text-sm text-red-500">{bookingForm.formState.errors.requirements.message}</p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 text-lg font-medium text-white bg-[#3a86ff] rounded-md hover:bg-[#2563eb] focus:outline-none focus:ring-2 focus:ring-[#3a86ff] focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="inline-block w-4 h-4 mr-2 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    'Book Consultation Call'
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

