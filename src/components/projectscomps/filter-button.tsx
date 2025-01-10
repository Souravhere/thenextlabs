'use client'

import { motion } from 'framer-motion'

interface FilterButtonProps {
  category: string
  isActive: boolean
  onClick: () => void
}

export const FilterButton = ({ category, isActive, onClick }: FilterButtonProps) => {
  return (
    <motion.button
      onClick={onClick}
      className={`
        relative px-4 py-2 rounded-md text-sm font-medium
        transition-colors duration-200
        focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background
        ${isActive 
          ? 'text-primary-foreground' 
          : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
        }
      `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {isActive && (
        <motion.div
          layoutId="activeFilter"
          className="absolute inset-0 bg-primary rounded-md"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
      <span className="relative z-10">{category}</span>
    </motion.button>
  )
}

