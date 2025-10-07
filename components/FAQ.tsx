'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Star } from 'lucide-react'

const faqData = [
  {
    id: 1,
    question: "What does Group Buy SEO Tools mean?",
    answer: "Group Buy Means you get a Seo tools access on an affordable price as compared to original price. These accounts are for the medium users of SEO Tools. If you are heavy usage people, please don't purchase."
  },
  {
    id: 2,
    question: "How would I get access?",
    answer: "After successful payment, you will receive login credentials via email within 24 hours. You can then access all premium SEO tools through our secure dashboard."
  },
  {
    id: 3,
    question: "Do you offer Refund?",
    answer: "Yes, we offer a 7-day money-back guarantee. If you're not satisfied with our service, contact our support team for a full refund."
  },
  {
    id: 4,
    question: "What Is Your Account Activation Process?",
    answer: "Account activation is automatic after payment verification. You'll receive your login details within 24 hours of successful payment confirmation."
  },
  {
    id: 5,
    question: "Can I use Proxy/VPN IPs?",
    answer: "Yes, you can use Proxy/VPN IPs with our accounts. We support various IP configurations to ensure compatibility with your setup."
  },
  {
    id: 6,
    question: "Can I share My Accounts?",
    answer: "Account sharing is not recommended as it may lead to account suspension. Each account is intended for individual use to maintain service quality."
  },
  {
    id: 7,
    question: "What would be the Access Mode?",
    answer: "You'll get web-based access to all tools through our secure dashboard. No software installation required - access everything directly from your browser."
  }
]

export default function FAQ() {
  const [openItem, setOpenItem] = useState<number | null>(1)

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id)
  }

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-primary-100/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-secondary-100/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-text-600 max-w-2xl mx-auto">
            Find answers to common questions about our SEO tools group buy service
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <motion.div
              key={item.id}
              className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Main Header */}
              <motion.button
                className="w-full bg-gradient-to-r from-primary-500 to-accent-400 text-white p-6 flex items-center justify-between text-left"
                onClick={() => toggleItem(item.id)}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="flex items-center gap-4">
                  <Star className="w-6 h-6 text-white" />
                  <h3 className="text-lg md:text-xl font-semibold">
                    {item.question}
                  </h3>
                </div>
                <motion.div
                  animate={{ rotate: openItem === item.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-6 h-6 text-white" />
                </motion.div>
              </motion.button>

              {/* Answer Content */}
              <AnimatePresence>
                {openItem === item.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 bg-white border-t border-gray-200">
                      <p className="text-text-600 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.button 
            className="bg-gradient-to-r from-primary-500 to-accent-400 hover:from-primary-600 hover:to-accent-500 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(11, 58, 46, 0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            Still Have Questions? Contact Us
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
