'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChartNoAxesColumn, X,ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import { AnimatedButton } from './ui/animated-button'

const menuItems = [
  { title: 'Home', href: '/' },
  { title: 'About', href: '/about' },
  { title: 'Services', href: '/services' },
  { title: 'Team', href: '/team' },
  { title: 'Contact', href: '/contact' },
]

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navbarVariants = {
    top: { width: '100%', borderRadius: '0px' },
    scrolled: { width: '90%', borderRadius: '9999px', marginTop: '10px' }
  }

  const mobileMenuVariants = {
    closed: { height: 0, opacity: 0 },
    open: { height: 'auto', opacity: 1 }
  }

  const linkVariants = {
    initial: { y: -20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 20, opacity: 0 }
  }

  return (
    <>
      <motion.nav
        initial="top"
        animate={isScrolled ? "scrolled" : "top"}
        variants={navbarVariants}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-1/2 -translate-x-1/2 z-50 max-w-[1580px] ${
          isScrolled ? 'backdrop-blur-md bg-black/50 shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center transition-colors duration-300 hover:text-yellow-600">
                <Image src="/Logos/thenextlabs.svg" alt="Yellow Labs" width={40} height={40} />
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-6">
                {menuItems.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className={`relative text-lg font-medium transition-colors duration-300 ${
                      pathname === item.href
                        ? 'text-yellow-400 border-b-2 border-yellow-400'
                        : 'text-white hover:text-yellow-400'
                    }`}
                  >
                    {item.title}
                    {pathname === item.href && (
                      <span className="absolute inset-0 rounded-md bg-yellow-500 opacity-20 blur-lg"></span>
                    )}
                  </Link>
                ))}
              </div>
            </div>
              <AnimatedButton href="/contact" variant="primary" className='h-10 sm:flex hidden items-center justify-center'>
               Book a Call <ArrowUpRight className="w-6 h-6" />
            </AnimatedButton>
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-yellow-500 focus:outline-none transition-colors duration-300"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="block h-8 w-8" aria-hidden="true" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChartNoAxesColumn className="block h-8 w-8 text-white -rotate-90" aria-hidden="true" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden fixed w-[90%] mx-auto rounded-lg mt-2 border border-yellow-400 inset-x-0 top-20 z-40 bg-black/95 backdrop-blur-md overflow-hidden"
          >
            <div className="px-4 pt-2 pb-3 space-y-1">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  variants={linkVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className={`block px-3 py-4 rounded-md text-center text-xl font-medium transition-colors duration-300 ${
                      pathname === item.href
                        ? 'text-yellow-500 bg-gray-800/40'
                        : 'text-white hover:text-yellow-500 hover:bg-gray-800/60'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
