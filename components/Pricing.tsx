'use client'

import { Star, Zap, Crown, Info } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const plans = [
  {
    name: 'SMALL PLAN',
    price: '$15',
    period: '/month',
    description: 'Perfect for small businesses and startups',
    icon: Star,
    color: 'text-blue-600',
    features: [
      'Access to essential tools',
      'Basic features included',
      'Great for getting started'
    ],
    popular: false
  },
  {
    name: 'AHREF$ COMBO',
    price: '$30',
    period: '/month',
    description: 'Complete SEO toolkit with Ahrefs integration',
    icon: Zap,
    color: 'text-orange-500',
    features: [
      'Full Ahrefs access',
      'Advanced SEO tools',
      'Keyword research & backlink analysis'
    ],
    popular: true
  },
  {
    name: 'MEGA PLAN',
    price: '$50',
    period: '/month',
    description: 'Comprehensive solution for large operations',
    icon: Crown,
    color: 'text-purple-600',
    features: [
      'All premium tools included',
      'Advanced analytics',
      'Priority support'
    ],
    popular: false
  },
  {
    name: 'LITE PLAN',
    price: '$10',
    period: '/month',
    description: 'Lightweight solution for basic needs',
    icon: Star,
    color: 'text-blue-600',
    features: [
      'Essential tools only',
      'Basic features',
      'Perfect for individuals'
    ],
    popular: false
  },
  {
    name: 'WRITER PLAN',
    price: '$15',
    period: '/month',
    description: 'Specialized tools for content creators',
    icon: Zap,
    color: 'text-orange-500',
    features: [
      'Writing and editing tools',
      'Content optimization',
      'Grammar and style checks'
    ],
    popular: false
  },
  {
    name: 'DESIGNER PLAN',
    price: '$10',
    period: '/month',
    description: 'Creative tools for designers and artists',
    icon: Crown,
    color: 'text-purple-600',
    features: [
      'Design software access',
      'Creative assets',
      'Collaboration tools'
    ],
    popular: false
  }
]

export default function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="pricing" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gray-50"></div>
      
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
            className="text-3xl md:text-4xl font-bold text-black mb-4"
            variants={itemVariants}
          >
            CUSTOMIZE YOUR TOOLKIT
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            You can select any tools which you need and make a pack.
          </motion.p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {plans.map((plan, index) => {
            const IconComponent = plan.icon
            return (
              <motion.div
                key={plan.name}
                className={`relative p-8 h-full flex flex-col bg-white rounded-2xl border-4 border-black shadow-lg ${
                  index === 0 ? 'transform -rotate-0.5 translate-y-4' : 
                  index === 1 ? 'transform -translate-y-2' :
                  index === 2 ? 'transform rotate-0.5 translate-y-4' : 
                  ''
                }`}
                variants={cardVariants}
                whileHover={{ 
                  y: -5, 
                  scale: 1.02,
                  shadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <motion.div 
                    className="absolute -top-3 -right-3 bg-yellow-400 text-black font-bold px-4 py-2 rounded-lg rotate-12 text-sm border-2 border-black"
                    initial={{ opacity: 0, y: -10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                    transition={{ delay: 0.6 + index * 0.2, duration: 0.5 }}
                  >
                    Popular!
                  </motion.div>
                )}

                {/* Plan Header */}
                <div className="mb-6 text-center">
                  <div className="w-16 h-16 rounded-full mb-6 flex items-center justify-center border-2 border-black mx-auto">
                    <IconComponent className={`w-8 h-8 ${plan.color} stroke-2`} />
                  </div>
                  <h3 className="text-2xl font-bold text-black leading-snug mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed font-medium">
                    {plan.description}
                  </p>
                </div>

                {/* Pricing */}
                <div className="mb-6 text-center">
                  <span className="text-4xl font-bold text-black">
                    {plan.price}
                  </span>
                  <span className="text-lg text-gray-600 font-medium">
                    {plan.period}
                  </span>
                </div>

                {/* Features */}
                <div className="mb-8 flex-grow">
                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <span className="text-orange-500 font-bold text-lg leading-none mt-0.5">•</span>
                        <span className="text-sm text-gray-700 leading-relaxed font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-auto">
                  <motion.a 
                    href="https://members.seotoolsgroupbuy.us/signup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full h-12 font-bold text-base rounded-lg transition-all duration-300 flex items-center justify-center ${
                      plan.popular
                        ? 'bg-yellow-400 text-black hover:bg-yellow-300 border-2 border-black'
                        : 'bg-white text-black hover:bg-gray-50 border-2 border-black'
                    }`}
                    whileHover={{ 
                      scale: 1.05, 
                      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Order Now
                  </motion.a>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}
