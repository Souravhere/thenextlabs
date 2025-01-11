'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BarChartIcon as ChartNoAxesColumn, X, ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import { AnimatedButton } from './ui/animated-button'

const menuItems = [
  { title: 'Home', href: '/' },
  { title: 'Projects', href: '/projects' },
  { title: 'Services', href: '/services' },
  { title: 'About Us', href: '/about' },
]

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navbarVariants = {
    top: { 
      width: '100%', 
      borderRadius: '0px',
      y: 0
    },
    scrolled: { 
      width: '90%', 
      borderRadius: '24px', 
      y: 10,
    }
  }

  const mobileMenuVariants = {
    closed: { 
      height: 0, 
      opacity: 0,
      scale: 0.95
    },
    open: { 
      height: 'auto', 
      opacity: 1,
      scale: 1
    }
  }

  const linkVariants = {
    initial: { 
      y: -20, 
      opacity: 0 
    },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    exit: { 
      y: 20, 
      opacity: 0 
    }
  }

  return (
    <div className="fixed top-0 w-full flex justify-center z-50">
      <motion.nav
        initial="top"
        animate={isScrolled ? "scrolled" : "top"}
        variants={navbarVariants}
        transition={{ 
          duration: 0.6, 
          type: "spring",
          stiffness: 200,
          damping: 25
        }}
        className={`w-full max-w-[1580px] ${
          isScrolled 
            ? 'bg-gradient-to-r from-background/80 via-muted/50 to-background/80 backdrop-blur-xl shadow-lg shadow-primary/5 border border-muted/20' 
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Rest of the navbar content remains the same */}
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center transition-all duration-300 hover:scale-105"
            >
              <Image 
                src="/Logos/thenextlabs.svg" 
                alt="The Next Labs" 
                width={60} 
                height={60} 
                className="relative z-10"
              />
              <motion.div
                className="absolute w-12 h-12 bg-primary/20 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-6">
                {menuItems.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="relative px-3 py-2"
                    onMouseEnter={() => setHoveredItem(item.title)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <motion.span
                      className={`relative z-10 text-lg font-medium ${
                        pathname === item.href
                          ? 'text-primary'
                          : 'text-foreground hover:text-primary'
                      }`}
                    >
                      {item.title}
                    </motion.span>
                    {(pathname === item.href || hoveredItem === item.title) && (
                      <motion.span
                        layoutId="navHighlight"
                        className="absolute inset-0 bg-primary/10 rounded-xl -z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <AnimatedButton 
              href="/contact" 
              variant="primary" 
              className='h-10 sm:flex hidden items-center justify-center text-center'
            >
              Book a Call <ArrowUpRight className="w-5 h-5 ml-1" />
            </AnimatedButton>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-xl bg-primary/10 hover:bg-primary/20 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                      <X className="w-6 h-6 text-primary" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                      <ChartNoAxesColumn className="w-6 h-6 text-primary -rotate-90" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            transition={{ 
              type: "spring",
              stiffness: 300,
              damping: 30
            }}
            className="md:hidden fixed w-[90%] mx-auto rounded-2xl mt-2 border border-primary/20 inset-x-0 top-20 z-40 bg-gradient-to-b from-background/95 to-muted/95 backdrop-blur-xl overflow-hidden shadow-xl shadow-primary/10"
          >
            <div className="px-4 pt-2 pb-3 space-y-1">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  variants={linkVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className={`block px-4 py-3 rounded-xl text-center text-lg font-medium transition-all duration-300 ${
                      pathname === item.href
                        ? 'text-primary bg-primary/10'
                        : 'text-foreground hover:text-primary hover:bg-primary/5'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                variants={linkVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ delay: menuItems.length * 0.1 }}
                className="pt-2"
              >
                <AnimatedButton 
                  href="/contact" 
                  variant="primary" 
                  className='w-full flex justify-center items-center'
                >
                  Book a Call <ArrowUpRight className="w-5 h-5 ml-1" />
                </AnimatedButton>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Navbar