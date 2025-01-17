'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Github, Linkedin } from 'lucide-react'
import Image from 'next/image'

const footerLinks = {
  Company: [
    { name: 'About Us', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ],
  Tools: [
    { name: 'The Next UI', href: 'https://ui.thenextlabs.com/' },
    { name: 'Veggie Smart', href: 'https://souravhere.github.io/Veggie-Smart/' },
    { name: 'EZ Module', href: 'https://ez-modules.vercel.app' },
    { name: 'Face Vibe', href: 'https://facevibe.vercel.app/' },
  ],
  Legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ],
}

const socialLinks = [
  { name: 'GitHub', icon: Github, href: 'https://github.com/Souravhere' },
  { 
    name: 'X', 
    icon: () => <span className="text-2xl block font-bold -mt-1">𝕏</span>,
    href: 'https://x.com/thenextlabs_' 
  },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/company/the-next-labs/' },
]

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-muted/20">
      {/* Background Text */}
      <div className="absolute inset-0 sm:flex hidden items-center justify-center pointer-events-none select-none opacity-[0.02]">
        <span className="text-[18vw] font-bold tracking-tighter">
          NEXT LABS
        </span>
      </div>

      <div className="container px-4 mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <Link href="/" className="flex items-center text-xl font-semibold">
              <Image src="/Logos/thenextlabs.svg" alt="The Next Labs" width={50} height={50} />
              <span>The Next Labs</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Creating stunning animated websites for modern businesses. Transform your online presence with our expert web development services.
            </p>
          </motion.div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([section, links], sectionIndex) => (
            <motion.div
              key={section}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * sectionIndex }}
            >
              <h3 className="font-semibold mb-4 text-lg">{section}</h3>
              <ul className="space-y-2">
                {links.map((link, linkIndex) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 * linkIndex }}
                  >
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col md:flex-row justify-between items-center py-6 border-t border-muted/20 gap-4"
        >
          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} The Next Labs. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <span className="sr-only">{social.name}</span>
                  <Icon className="w-5 h-5" />
                </motion.a>
              )}
            )}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}