'use client'

import React from 'react'
import { ArrowRight, CheckCircle, Shield } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative py-12 md:py-16 overflow-hidden bg-white">
      {/* Background decoration with animation */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-10 right-10 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-10 left-10 w-48 h-48 bg-primary-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -20, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          {/* Left Content */}
          <motion.div 
            className="text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Main Headline */}
            <motion.h1 
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.span 
                className="block text-text mb-2"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Access Premium
              </motion.span>
              <motion.span 
                className="block text-primary-500"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                SEO Tools
              </motion.span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p 
              className="text-base md:text-lg text-text-600 mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Get unlimited access to <span className="font-bold text-primary-600">100+ premium tools</span> including Ahrefs, SEMrush, Canva Pro & more for just <span className="font-bold text-primary-600">$4.99/month</span>
            </motion.p>

            {/* CTA Button */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.button 
                className="group bg-primary-500 hover:bg-primary-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 text-base flex items-center justify-center gap-2 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button 
                className="bg-transparent text-text font-semibold py-3 px-6 rounded-lg border-2 border-primary-500 hover:bg-primary-50 transition-all duration-300 text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View All Tools
              </motion.button>
            </motion.div>

            {/* Features List */}
            <motion.div 
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {[
                "✓ Instant access to all premium tools",
                "✓ No credit card required for trial",
                "✓ Cancel anytime, no commitments"
              ].map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  <CheckCircle className="w-4 h-4 text-primary-500 flex-shrink-0" />
                  <span className="text-text-600 text-sm">{feature}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Stats Card */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ y: -10 }}
          >
            <motion.div 
              className="bg-white rounded-2xl shadow-xl p-6 relative overflow-hidden border border-gray-100"
              whileHover={{ boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)" }}
              transition={{ duration: 0.3 }}
            >
              {/* Decorative gradient with animation */}
              <motion.div 
                className="absolute top-0 right-0 w-40 h-40 bg-primary-100 rounded-full blur-3xl opacity-30"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              ></motion.div>
              
              <div className="relative">
                {/* Pricing Badge with pulse animation */}
                <motion.div 
                  className="inline-flex items-center gap-2 bg-primary-500 text-white px-3 py-1 rounded-full text-xs font-bold mb-4"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  >
                    <Shield className="w-3 h-3" />
                  </motion.div>
                  <span>95% OFF - Limited Time</span>
                </motion.div>

                <h3 className="text-xl font-bold text-text mb-4">
                  Everything You Need
                </h3>

                {/* Stats Grid with stagger animation */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {[
                    { value: "100+", label: "Premium Tools", delay: 0.4 },
                    { value: "50K+", label: "Happy Users", delay: 0.5 },
                    { value: "24/7", label: "Support", delay: 0.6 },
                    { value: "4.9★", label: "Rating", delay: 0.7 }
                  ].map((stat, index) => (
                    <motion.div 
                      key={index}
                      className="text-center p-3 bg-primary-50 rounded-xl cursor-pointer"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: stat.delay }}
                      whileHover={{ scale: 1.1, backgroundColor: "#dbeafe" }}
                    >
                      <motion.div 
                        className="text-2xl font-bold text-primary-600 mb-1"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: stat.delay + 0.2 }}
                      >
                        {stat.value}
                      </motion.div>
                      <div className="text-xs text-text-600 font-medium">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Price with animation */}
                <motion.div 
                  className="bg-primary-500 rounded-xl p-4 text-white text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <p className="text-xs opacity-90 mb-1">Starting at</p>
                  <motion.p 
                    className="text-3xl font-bold mb-1"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    $4.99<span className="text-lg">/mo</span>
                  </motion.p>
                  <p className="text-xs opacity-90">Save $995 per month</p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Popular Tools Logos */}
        <motion.div
          className="bg-white rounded-xl shadow-lg p-6 max-w-4xl mx-auto mt-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <p className="text-xs font-semibold text-gray-500 mb-4 uppercase tracking-wide text-center">Most Popular Tools Included:</p>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-4 items-center">
            {[
              { name: 'Ahrefs', url: 'ahrefs.com' },
              { name: 'SEMrush', url: 'semrush.com' },
              { name: 'Canva', url: 'canva.com' },
              { name: 'ChatGPT', url: 'openai.com' },
              { name: 'Grammarly', url: 'grammarly.com' },
              { name: 'Netflix', url: 'netflix.com' },
              { name: 'Moz', url: 'moz.com' },
              { name: 'Jasper', url: 'jasper.ai' }
            ].map((tool, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <img 
                  src={`https://logo.clearbit.com/${tool.url}`}
                  alt={tool.name}
                  className="h-6 w-auto object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}