'use client'

import { LegalLayout } from '@/src/components/ui/legal-layout'
import { motion } from 'framer-motion'

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      subtitle="Your privacy is important to us. Learn how we collect, use, and protect your information."
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <section>
          <h2 className="text-2xl font-bold mb-4">Introduction</h2>
          <p>Welcome to The Next Labs! Your privacy is very important to us, and we are committed to protecting your personal information. This Privacy Policy explains what information we collect, how we use it, and how we keep it secure.</p>
          <p className="mt-2">By using our services, you agree to the terms outlined here. If you have any questions, feel free to reach out to us at thenextlabs@gmail.com.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
          <p>We collect only the information we need to provide you with amazing services. This includes:</p>
          <h3 className="text-xl font-semibold mt-4 mb-2">Personal Information</h3>
          <p>Name, email address, phone number, and company details when you sign up, inquire, or book a call with us.</p>
          <h3 className="text-xl font-semibold mt-4 mb-2">Usage Data</h3>
          <p>Information about how you interact with our website, like pages visited, time spent, and browser type.</p>
          <h3 className="text-xl font-semibold mt-4 mb-2">Project Information</h3>
          <p>Details you share about your project goals, features, and requirements.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Deliver services and fulfill project requirements.</li>
            <li>Communicate with you about updates, deadlines, and special offers.</li>
            <li>Improve our website and services based on your feedback.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">How We Protect Your Information</h2>
          <p>We take your privacy seriously and implement strict measures to safeguard your data, including:</p>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Using encrypted connections (SSL).</li>
            <li>Limiting access to personal data only to authorized team members.</li>
            <li>Regularly reviewing and updating our security practices.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Cookies</h2>
          <p>Our website uses cookies to provide a better experience. Cookies help us remember your preferences and optimize website performance. You can adjust your browser settings to block cookies if you prefer.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Sharing Your Information</h2>
          <p>We never sell or share your personal information with third parties except:</p>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>When required by law.</li>
            <li>To trusted partners who assist in delivering our services (e.g., hosting providers).</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
          <p>You have the right to:</p>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Access, update, or delete your personal information.</li>
            <li>Opt-out of any marketing communications.</li>
          </ul>
          <p className="mt-2">To exercise these rights, contact us at privacy@thenextlabs.com.</p>
        </section>
      </motion.div>
    </LegalLayout>
  )
}

