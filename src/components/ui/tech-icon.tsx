'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface TechIconProps {
  name: string
  icon: string
  delay?: number
}

export const TechIcon = ({ name, icon, delay = 0 }: TechIconProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: delay
      }}
      whileHover={{ scale: 1.1 }}
      className="flex flex-col items-center gap-2 group"
    >
      <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-muted/20 backdrop-blur-sm flex items-center justify-center border border-muted/20">
        <div className="absolute inset-0 rounded-full bg-gradient-radial from-primary/20 via-transparent to-transparent blur-md group-hover:from-primary/30 transition-all duration-300" />
        <Image
          src={icon}
          alt={name}
          width={32}
          height={32}
          className="relative z-10 w-8 h-8 md:w-10 md:h-10"
        />
      </div>
      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
        {name}
      </span>
    </motion.div>
  )
}

