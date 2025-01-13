'use client'

import { LegalLayout } from '@/src/components/ui/legal-layout'
import { motion } from 'framer-motion'


export default function TermsOfServicePage() {
  return (
    <LegalLayout
      title="Terms of Service"
      subtitle="Please read these terms carefully before using our services."
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <section>
          <h2 className="text-2xl font-bold mb-4">Welcome to The Next Labs</h2>
          <p>By accessing or using our services, you agree to the following Terms of Service. Please read them carefully. If you don&#39;t agree, you&#39;re welcome to reach out, but you may not use our services.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Using Our Services</h2>
          <h3 className="text-xl font-semibold mt-4 mb-2">Eligibility</h3>
          <p>You must be at least 18 years old to use our services.</p>
          <h3 className="text-xl font-semibold mt-4 mb-2">Account Responsibility</h3>
          <p>If you create an account with us, keep your login details secure. You are responsible for all activities under your account.</p>
          <h3 className="text-xl font-semibold mt-4 mb-2">Project Scope</h3>
          <p>We deliver custom projects based on agreed-upon terms. Any changes or additions may require a revised timeline or cost.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Payments</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Payments are due as outlined in your project agreement.</li>
            <li>Late payments may incur a fee or delay project delivery.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
          <h3 className="text-xl font-semibold mt-4 mb-2">Ownership</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>You retain full ownership of your content and assets provided for the project.</li>
            <li>The Next Labs retains ownership of the custom code, animations, or designs until payment is complete.</li>
          </ul>
          <h3 className="text-xl font-semibold mt-4 mb-2">License</h3>
          <p>Once payment is finalized, you receive a non-exclusive license to use the project as agreed.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Cancellations & Refunds</h2>
          <h3 className="text-xl font-semibold mt-4 mb-2">Cancellation by Client</h3>
          <p>Projects canceled mid-way may incur fees for work already completed.</p>
          <h3 className="text-xl font-semibold mt-4 mb-2">Cancellation by Us</h3>
          <p>We reserve the right to cancel a project if terms are violated. Refunds will be provided for unfulfilled work.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
          <p>We aim to deliver the best, but we are not liable for:</p>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Indirect damages or losses.</li>
            <li>Third-party issues, like hosting outages or software errors.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Updates to These Terms</h2>
          <p>We may update these terms occasionally to reflect new practices or regulations. The latest version will always be available on our website.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p>Got questions or concerns? Reach out anytime at contact@thenextlabs.com.</p>
          <p className="mt-2">We&#39;re committed to providing transparent and trustworthy services while keeping things simple and straightforward. Thanks for trusting The Next Labs!</p>
        </section>
      </motion.div>
    </LegalLayout>
  )
}

