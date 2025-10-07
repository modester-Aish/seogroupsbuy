'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Phone, Mail, Facebook } from 'lucide-react'
import { useState } from 'react'

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)

  const chatOptions = [
    {
      name: 'WhatsApp',
      icon: Phone,
      color: 'bg-green-500 hover:bg-green-600',
      href: 'https://wa.me/15205636362',
      description: 'Chat on WhatsApp'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      color: 'bg-blue-600 hover:bg-blue-700',
      href: 'https://m.me/483405115505983',
      description: 'Message on Facebook'
    },
    {
      name: 'Gmail',
      icon: Mail,
      color: 'bg-red-500 hover:bg-red-600',
      href: 'mailto:Admin@seogroupsbuy.com',
      description: 'Send us an email'
    }
  ]

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Chat Options Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute bottom-20 right-0 bg-white rounded-2xl shadow-2xl border border-gray-200 p-4 min-w-[280px]"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Contact Us</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-4 h-4 text-gray-500" />
              </button>
            </div>

            {/* Chat Options */}
            <div className="space-y-3">
              {chatOptions.map((option, index) => (
                <motion.a
                  key={option.name}
                  href={option.href}
                  target={option.href.startsWith('http') ? '_blank' : '_self'}
                  rel={option.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  className={`flex items-center p-3 rounded-xl text-white transition-all duration-200 hover:scale-105 ${option.color}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <option.icon className="w-5 h-5 mr-3" />
                  <div>
                    <div className="font-semibold">{option.name}</div>
                    <div className="text-xs opacity-90">{option.description}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Footer */}
            <div className="mt-4 pt-3 border-t border-gray-200">
              <p className="text-xs text-gray-500 text-center">
                We're here to help! Choose your preferred way to contact us.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Chat Button */}
      <motion.button
        className={`relative w-16 h-16 rounded-full shadow-lg transition-all duration-300 ${
          isOpen 
            ? 'bg-gray-600 hover:bg-gray-700' 
            : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700'
        }`}
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ 
          scale: 1.1,
          boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)"
        }}
        whileTap={{ scale: 0.95 }}
        animate={{
          boxShadow: isOpen 
            ? "0 10px 30px rgba(0, 0, 0, 0.2)"
            : [
                "0 10px 30px rgba(59, 130, 246, 0.3)",
                "0 15px 35px rgba(59, 130, 246, 0.4)",
                "0 10px 30px rgba(59, 130, 246, 0.3)"
              ]
        }}
        transition={{
          boxShadow: {
            duration: 2,
            repeat: isOpen ? 0 : Infinity,
            ease: "easeInOut"
          }
        }}
      >
        {/* Ripple Effect */}
        <motion.div
          className="absolute inset-0 rounded-full bg-white/20"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 0, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Icon */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <MessageCircle className="w-6 h-6 text-white" />
            )}
          </motion.div>
        </div>

        {/* Notification Badge */}
        {!isOpen && (
          <motion.div
            className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center"
            animate={{
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </motion.div>
        )}
      </motion.button>
    </div>
  )
}
