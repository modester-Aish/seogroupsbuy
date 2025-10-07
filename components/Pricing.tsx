'use client'

import { Check, Star, Zap, Crown } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const plans = [
  {
    name: 'Basic',
    price: '$29',
    period: '/month',
    description: 'Perfect for individuals and small projects',
    icon: Zap,
    color: 'from-gray-500 to-gray-600',
    features: [
      'Canva Pro',
      'Netflix',
      'Grammarly',
      'ChatGPT Plus',
      'Claude',
      'Envato',
      'Storyblocks',
      'Udemy',
      '5+ More Tools'
    ],
    popular: false
  },
  {
    name: 'Standard',
    price: '$49',
    period: '/month',
    description: 'Most popular for growing businesses',
    icon: Star,
    color: 'from-primary-500 to-primary-600',
    features: [
      'SEMRU$H',
      'Moz Pro',
      'Canva Pro',
      'ChatGPT Plus',
      'RunwayML',
      'Netflix',
      'Claude',
      'Envato',
      'Storyblocks',
      'Udemy',
      'Coursera',
      '10+ More Tools'
    ],
    popular: true
  },
  {
    name: 'Premium',
    price: '$79',
    period: '/month',
    description: 'For agencies and large teams',
    icon: Crown,
    color: 'from-yellow-500 to-yellow-600',
    features: [
      'AHREF$ ($30)',
      'SEMRU$H',
      'Moz Pro',
      'ChatGPT Plus',
      'Canva Pro',
      'GRAAMMAARRLY',
      'RunwayML',
      'Claude',
      'Envato',
      'Storyblocks',
      'Udemy',
      'Coursera',
      'LinkedIn Learning',
      'SkillShare',
      'VistaCreate',
      '15+ More Tools'
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
    <section id="pricing" className="py-20 bg-background-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-background-100 via-background to-background-200"></div>
      <div className="absolute top-10 left-10 w-80 h-80 bg-primary-100/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary-100/20 rounded-full blur-3xl"></div>
      
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
            Simple, Transparent Pricing
          </motion.h2>
          <motion.p 
            className="text-xl text-text-600 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Choose the plan that fits your needs. All plans include instant access and no hidden fees.
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
                className={`card p-8 relative flex flex-col ${
                  plan.popular 
                    ? 'ring-2 ring-primary-500' 
                    : ''
                }`}
                variants={cardVariants}
                whileHover={{ 
                  y: plan.popular ? -5 : -10, 
                  scale: plan.popular ? 1.02 : 1.05,
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <motion.div 
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                    initial={{ opacity: 0, y: -10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                    transition={{ delay: 0.6 + index * 0.2, duration: 0.5 }}
                  >
                    <motion.span 
                      className="bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-medium"
                      whileHover={{ scale: 1.05 }}
                    >
                      Most Popular
                    </motion.span>
                  </motion.div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-8">
                  <motion.div 
                    className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r ${plan.color} flex items-center justify-center`}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, -5, 5, 0],
                      transition: { duration: 0.3 }
                    }}
                  >
                    <IconComponent className="h-8 w-8 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-text mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-text-600 mb-4">
                    {plan.description}
                  </p>
                </div>

                {/* Features */}
                <div className="flex-1 mb-8">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li 
                        key={featureIndex} 
                        className="flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: 0.8 + index * 0.2 + featureIndex * 0.05, duration: 0.3 }}
                        whileHover={{ x: 5, scale: 1.02 }}
                      >
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Check className="h-4 w-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        </motion.div>
                        <span className="text-text-600 text-sm">
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Pricing */}
                <div className="text-center mb-6 mt-auto">
                  <motion.div 
                    className="flex items-baseline justify-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-4xl font-bold text-text">
                      {plan.price}
                    </span>
                    <span className="text-text-600 ml-1">
                      {plan.period}
                    </span>
                  </motion.div>
                </div>

                {/* CTA Button */}
                <motion.button 
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ripple ${
                    plan.popular
                      ? 'bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white'
                      : 'bg-background-200 hover:bg-background-300 text-text'
                  }`}
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: plan.popular 
                      ? "0 20px 40px rgba(59, 130, 246, 0.3)" 
                      : "0 20px 40px rgba(0, 0, 0, 0.1)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {plan.popular ? 'Get Started' : 'Choose Plan'}
                </motion.button>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom Section */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 1.0, duration: 0.6 }}
        >
          <motion.div 
            className="card p-8 max-w-4xl mx-auto"
            whileHover={{ y: -5, boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)" }}
          >
            <motion.h3 
              className="text-2xl font-bold text-text mb-4"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              Save Even More with Annual Plans
            </motion.h3>
            <motion.p 
              className="text-text-600 mb-6"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1.3, duration: 0.6 }}
            >
              Get 2 months free when you pay annually. That's up to $158 in savings!
            </motion.p>
            <motion.div 
              className="flex flex-wrap justify-center gap-4 text-sm text-text-600"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {[
                "2 months free", "Priority support", "Exclusive features", "30-day money back guarantee"
              ].map((benefit, index) => (
                <motion.div 
                  key={benefit}
                  className="flex items-center"
                  variants={itemVariants}
                  whileHover={{ x: 5, scale: 1.05 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                  </motion.div>
                  <span>{benefit}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
