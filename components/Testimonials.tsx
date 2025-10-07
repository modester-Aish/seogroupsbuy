'use client'

import { Star, Quote } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'SEO Manager',
    company: 'Digital Marketing Pro',
    avatar: 'SJ',
    rating: 5,
    text: 'seogroupsbuy has been a game-changer for our agency. We\'re saving over $2,000 monthly while accessing all the premium tools we need. The uptime is excellent and support is always responsive.',
    savings: '$2,000/month'
  },
  {
    name: 'Michael Chen',
    role: 'Freelance SEO Consultant',
    company: 'Chen SEO Services',
    avatar: 'MC',
    rating: 5,
    text: 'As a freelancer, I couldn\'t afford individual subscriptions to all these tools. This group buy service gives me access to everything I need to compete with larger agencies. Highly recommended!',
    savings: '$1,500/month'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Marketing Director',
    company: 'TechStart Inc.',
    avatar: 'ER',
    rating: 5,
    text: 'The quality of tools and service is outstanding. We\'ve been using this for 8 months now and never had any issues. The community support is also fantastic for learning new strategies.',
    savings: '$3,200/month'
  }
]

export default function Testimonials() {
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
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary-50/20 to-background"></div>
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary-100/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-secondary-100/10 rounded-full blur-3xl"></div>
      
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
            What Our Users Say
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Join thousands of satisfied customers who are saving money while accessing premium SEO tools
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="card p-8 relative"
              variants={cardVariants}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Quote Icon */}
              <motion.div 
                className="absolute top-6 right-6"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <Quote className="h-8 w-8 text-primary-200" />
              </motion.div>

              {/* Rating */}
              <motion.div 
                className="flex items-center mb-4"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: 0.6 + index * 0.2, duration: 0.5 }}
              >
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ delay: 0.8 + index * 0.2 + i * 0.1, duration: 0.3 }}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                  >
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  </motion.div>
                ))}
              </motion.div>

              {/* Testimonial Text */}
              <motion.p 
                className="text-gray-600 mb-6 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.7 + index * 0.2, duration: 0.6 }}
              >
                "{testimonial.text}"
              </motion.p>

              {/* Savings Badge */}
              <motion.div 
                className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-6 inline-block"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ delay: 0.9 + index * 0.2, duration: 0.4 }}
                whileHover={{ scale: 1.05 }}
              >
                Saves {testimonial.savings}
              </motion.div>

              {/* User Info */}
              <motion.div 
                className="flex items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 1.0 + index * 0.2, duration: 0.5 }}
              >
                <motion.div 
                  className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-semibold mr-4"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  {testimonial.avatar}
                </motion.div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.role}
                  </p>
                  <p className="text-sm text-primary-600">
                    {testimonial.company}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="card-glass p-8"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          whileHover={{ y: -5, boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)" }}
        >
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {[
              { number: "10,000+", label: "Happy Users" },
              { number: "$2.5M+", label: "Saved Annually" },
              { number: "4.9/5", label: "User Rating" },
              { number: "99.9%", label: "Uptime" }
            ].map((stat, index) => (
              <motion.div 
                key={stat.label}
                className="text-center"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div 
                  className="text-3xl md:text-4xl font-bold text-primary-600 mb-2"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 1.4 + index * 0.1, duration: 0.5, ease: "easeOut" }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 1.6, duration: 0.6 }}
        >
          <motion.h3 
              className="text-2xl font-bold text-text mb-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1.8, duration: 0.6 }}
          >
            Ready to Join Our Community?
          </motion.h3>
          <motion.p 
            className="text-gray-600 mb-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1.9, duration: 0.6 }}
          >
            Start saving money on premium SEO tools today
          </motion.p>
          <motion.button 
            className="btn-primary ripple"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 2.0, duration: 0.6 }}
          >
            Get Started Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
