'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

interface TabsProps {
  tabs: { label: string; content: React.ReactNode }[]
}

export const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="w-full">
      <div className="flex space-x-2 mb-6 w-full items-center justify-center">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-4 py-2 rounded-md transition-all duration-200 ${
              activeTab === index
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted/10 text-muted-foreground hover:bg-muted/20'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {tabs[activeTab].content}
      </motion.div>
    </div>
  )
}
