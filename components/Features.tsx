'use client'

import { DollarSign, Clock, Headphones, Shield, Zap, Users, Award, Lock } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const features = [
  {
    icon: DollarSign,
    title: 'Affordable Plans',
    description: 'Save up to 95% on premium SEO tools with our group buy pricing. Access $10,000+ worth of tools for just a fraction of the cost.',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Clock,
    title: '99.9% Uptime',
    description: 'Reliable access to all tools with industry-leading uptime. Your SEO work never stops with our stable infrastructure.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Get help whenever you need it with our dedicated support team. We\'re here to ensure your success with every tool.',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: Shield,
    title: 'Secure Access',
    description: 'Your data and accounts are protected with enterprise-grade security. Safe, encrypted access to all premium tools.',
    color: 'from-red-500 to-red-600'
  },
  {
    icon: Zap,
    title: 'Instant Activation',
    description: 'Get started immediately after signup. No waiting periods or complex setup processes. Access tools in seconds.',
    color: 'from-yellow-500 to-yellow-600'
  },
  {
    icon: Users,
    title: 'Community Access',
    description: 'Join thousands of SEO professionals sharing tips, strategies, and success stories in our exclusive community.',
    color: 'from-indigo-500 to-indigo-600'
  },
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'Access the exact same premium tools used by top agencies and enterprises. No watered-down versions or limitations.',
    color: 'from-pink-500 to-pink-600'
  },
  {
    icon: Lock,
    title: 'Privacy Protected',
    description: 'Your personal information and usage data are never shared. Complete privacy and confidentiality guaranteed.',
    color: 'from-gray-500 to-gray-600'
  }
]

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const cardVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary-50/30 to-background"></div>
      <div className="absolute top-20 left-20 w-96 h-96 bg-primary-100/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-secondary-100/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-text mb-4"
            variants={itemVariants}
          >
            Why Choose seogroupsbuy?
          </motion.h2>
          <motion.p 
            className="text-xl text-text-600 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            We provide the most reliable, affordable, and comprehensive access to premium SEO tools in the market
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <motion.div
                key={feature.title}
                className="card p-6 text-center group"
                variants={cardVariants}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div 
                  className={`w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center`}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.3 }
                  }}
                >
                  <IconComponent className="h-8 w-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-semibold text-text mb-4">
                  {feature.title}
                </h3>
                <p className="text-text-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}
