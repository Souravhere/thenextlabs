'use client'

import { FounderProfile } from '@/src/components/aboutcomps/founder-profile'
import { ProcessStep } from '@/src/components/aboutcomps/process-step'
import CompetitorComparison from '@/src/components/competitor-comparison'
import { Process } from '@/src/components/process'
import { CTAPage } from '@/src/components/servicescomps/services-cta'
import { MeshGradient } from '@/src/components/ui/mesh-gradient'
import { motion } from 'framer-motion'
import { Lightbulb, Code, Palette, Rocket, CheckCircle } from 'lucide-react'

const founderInfo = {
  name: "Sourav Chhimpa",
  title: "Founder & Lead Developer",
  image: "/assets/sourav.jpg",
  expertise: [
    "Web Designer",
    "3+ years Experience",
    "React.js",
    "Next.js",
  ],
  bio: "I'm a passionate web developer from India who turned my freelancing success into something bigger. After years of creating stunning websites for clients, I founded The Next Labs to provide exceptional animated websites that stand out from traditional solutions. My focus is on crafting unique digital experiences that combine creativity with technical excellence.",
  socialLinks: {
    twitter: "https://x.com/SouravChhimpa1",
    website: "https://www.upwork.com/freelancers/~01ce34686d8fbf11d5?mp_source=share"
  }
}

const achievements = [
  {
    title: "50+ Projects",
    description: "Successfully delivered websites across various industries"
  },
  {
    title: "5-Star Rating",
    description: "Maintained perfect client satisfaction on freelancing platforms"
  },
  {
    title: "24/7 Support",
    description: "Dedicated assistance for all our clients"
  },
  {
    title: "Global Reach",
    description: "Worked with clients from over 20 countries"
  }
]

const processSteps = [
  {
    title: "Discovery",
    description: "We start by understanding your business, goals, and target audience to create a tailored strategy.",
    icon: <Lightbulb className="w-6 h-6 text-primary" />
  },
  {
    title: "Design",
    description: "Our designers create stunning, user-centric interfaces that align with your brand and captivate your audience.",
    icon: <Palette className="w-6 h-6 text-primary" />
  },
  {
    title: "Development",
    description: "We bring designs to life using cutting-edge technologies, ensuring smooth animations and optimal performance.",
    icon: <Code className="w-6 h-6 text-primary" />
  },
  {
    title: "Launch & Support",
    description: "We handle the deployment process and provide ongoing support to ensure your website's continued success.",
    icon: <Rocket className="w-6 h-6 text-primary" />
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen relative">
        <MeshGradient/>
      {/* Hero Section */}
      <section className="py-20">
      <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-3 py-1 mb-4 text-sm font-semibold text-primary border border-primary/20 rounded-full"
            >
              ABOUT US
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              About The Next Labs
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-muted-foreground"
            >
              We're a creative web development studio specializing in animated websites for modern businesses. Our mission is to transform your digital presence with cutting-edge technology and stunning design.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-10">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 rounded-xl bg-muted/5 border border-muted/10 backdrop-blur-sm"
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  {achievement.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Process/>

      {/* Meet Our Founder Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <FounderProfile {...founderInfo} />
        </div>
      </section>
      <CompetitorComparison/>
      {/* Our Process Section */}
      <section className="py-20 bg-muted/5">
        <div className="container px-4 mx-auto">
          {/* <SectionHeader title="OUR PROCESS" subtitle="How We Bring Ideas to Life" /> */}
          <div className="grid md:grid-cols-2 gap-12">
            {processSteps.map((step, index) => (
              <ProcessStep key={step.title} step={index + 1} {...step} />
            ))}
          </div>
        </div>
      </section>
      <CTAPage/>
    </div>
  )
}

