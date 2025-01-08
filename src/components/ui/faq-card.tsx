'use client'

import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { useState } from 'react'

interface FAQCardProps {
  question: string
  answer: string
  icon: React.ReactNode
  index: number
}

export const FAQCard = ({ question, answer, icon, index }: FAQCardProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-6 rounded-xl border border-muted/20 bg-muted/5 backdrop-blur-sm relative overflow-hidden"
      >
        <div className="flex items-start gap-6">
          {/* Icon */}
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
            {icon}
          </div>

          <div className="space-y-4 flex-1">
            {/* Question */}
            <div className="flex items-center justify-between gap-4">
              <h3 className="font-semibold text-lg pr-8">
                {question}
              </h3>
              <motion.div
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
                className="shrink-0"
              >
                <ChevronRight className="w-5 h-5 text-primary" />
              </motion.div>
            </div>

            {/* Answer */}
            <motion.div
              initial={false}
              animate={{
                height: isOpen ? 'auto' : 0,
                opacity: isOpen ? 1 : 0
              }}
              transition={{
                duration: 0.3,
                ease: 'easeInOut'
              }}
              className="overflow-hidden"
            >
              <p className="text-muted-foreground pb-2">
                {answer}
              </p>
            </motion.div>

            {/* "The Answer" Link - Only shown when closed */}
            <motion.div
              initial={false}
              animate={{
                opacity: isOpen ? 0 : 1,
                height: isOpen ? 0 : 'auto'
              }}
              className="text-primary flex items-center gap-1 font-medium"
            >
              the answer
              <ChevronRight className="w-4 h-4" />
            </motion.div>
          </div>
        </div>
      </button>
    </motion.div>
  )
}

