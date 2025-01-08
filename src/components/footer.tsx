'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Github, Twitter, Linkedin, Frame } from 'lucide-react'

const footerLinks = {
//   Services: [
//     { name: 'Web Development', href: '/services/web-development' },
//     { name: 'UI/UX Design', href: '/services/design' },
//     { name: 'Animations', href: '/services/animations' },
//     { name: 'Consulting', href: '/services/consulting' },
//   ],
  Company: [
    { name: 'About Us', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ],
  Resources: [
    { name: 'Documentation', href: '/docs' },
    { name: 'Components', href: '/components' },
    { name: 'Help Center', href: '/help' },
    { name: 'Status', href: '/status' },
  ],
  Legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    // { name: 'Cookie Policy', href: '/cookies' },
    // { name: 'License', href: '/license' },
  ],
}

const socialLinks = [
  { name: 'GitHub', icon: Github, href: 'https://github.com' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
]

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-muted/20">
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.02]">
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
            <Link href="/" className="flex items-center gap-2 text-xl font-bold">
              <Frame className="w-6 h-6" />
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

