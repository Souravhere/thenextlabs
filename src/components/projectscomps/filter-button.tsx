'use client'

import { motion } from 'framer-motion'


interface FilterButtonProps {
  category: string
  isActive: boolean
  onClick: () => void
}

export const FilterButton = ({ category, isActive, onClick }: FilterButtonProps) => {
  return (
    <div
      onClick={onClick}
      className="relative"
    >
      {isActive && (
        <motion.div
          layoutId="activeFilter"
          className="absolute inset-0 bg-primary/20 rounded-md"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
      <span className="relative z-10">{category}</span>
    </div>
  )
}

