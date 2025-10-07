'use client'

import React from 'react'
import { Search, BarChart3, Globe, PenTool, Palette, Eye, Zap, Target } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

// Helper function to get proper logo URLs
const getLogoUrl = (toolName: string) => {
  const logoMap: { [key: string]: string } = {
    'Ahrefs': 'ahrefs.com',
    'SEMrush': 'semrush.com',
    'Moz Pro': 'moz.com',
    'Canva Pro': 'canva.com',
    'ChatGPT Plus': 'openai.com',
    'RunwayML': 'runwayml.com',
    'Netflix': 'netflix.com',
    'Claude': 'anthropic.com',
    'Udemy': 'udemy.com',
    'Helium 10': 'helium10.com',
    'Coursera': 'coursera.org',
    'LinkedIn Learning': 'linkedin.com',
    'SkillShare': 'skillshare.com',
    'VistaCreate': 'vistacreate.com',
    'Linguix': 'linguix.com',
    'Epidemic Sound': 'epidemicsound.com',
    'Freepik': 'freepik.com',
    'Leonardo.AI': 'leonardo.ai',
    'Moz': 'moz.com',
    'Wordtune': 'wordtune.com',
    'Jasper': 'jasper.ai',
    'Jenni': 'jenni.ai',
    'JungleScout': 'junglescout.com',
    'Grammarly': 'grammarly.com',
    'Writesonic': 'writesonic.com'
  };
  
  return logoMap[toolName] || toolName.toLowerCase().replace(/[^a-z0-9]/g, '') + '.com';
};

const tools = [
  { 
    name: 'Ahrefs', 
    category: 'SEO & Marketing',
    logo: 'Ahrefs',
    logoColor: 'text-orange-500',
    description: 'Keyword research & backlink analysis'
  },
  { 
    name: 'SEMrush', 
    category: 'SEO & Marketing',
    logo: 'SEMrush',
    logoColor: 'text-purple-600',
    description: 'All-in-one marketing toolkit'
  },
  { 
    name: 'Moz Pro', 
    category: 'SEO & Marketing',
    logo: 'MOZ',
    logoColor: 'text-teal-500',
    description: 'Professional SEO software'
  },
  { 
    name: 'Canva Pro', 
    category: 'Graphic Design',
    logo: 'Canva',
    logoColor: 'text-blue-600',
    description: 'Professional design platform'
  },
  { 
    name: 'ChatGPT Plus', 
    category: 'AI Tools',
    logo: 'ChatGPT',
    logoColor: 'text-green-600',
    description: 'Best text based AI co-pilot'
  },
  { 
    name: 'RunwayML', 
    category: 'AI Tools',
    logo: 'RunwayML',
    logoColor: 'text-blue-600',
    description: 'Best AI video maker'
  },
  { 
    name: 'Netflix', 
    category: 'Entertainment',
    logo: 'Netflix',
    logoColor: 'text-red-600',
    description: 'Entertainment from TV series'
  },
  { 
    name: 'Claude', 
    category: 'AI Tools',
    logo: 'Claude',
    logoColor: 'text-orange-500',
    description: 'AI coding assistant'
  },
  { 
    name: 'Udemy', 
    category: 'Learning',
    logo: 'udemy',
    logoColor: 'text-black',
    description: 'Online courses'
  },
  { 
    name: 'Helium 10', 
    category: 'SEO & Marketing',
    logo: 'Helium 10',
    logoColor: 'text-blue-600',
    description: 'Amazon seller tools'
  },
  { 
    name: 'Coursera', 
    category: 'Learning',
    logo: 'coursera',
    logoColor: 'text-blue-600',
    description: 'Online learning platform'
  },
  { 
    name: 'LinkedIn Learning', 
    category: 'Learning',
    logo: 'Linked in LEARNING',
    logoColor: 'text-blue-600',
    description: 'Professional development'
  },
  { 
    name: 'SkillShare', 
    category: 'Learning',
    logo: 'SKILL share.',
    logoColor: 'text-black',
    description: 'Creative learning'
  },
  { 
    name: 'VistaCreate', 
    category: 'Graphic Design',
    logo: 'vistacreate',
    logoColor: 'text-blue-600',
    description: 'Design platform'
  },
  { 
    name: 'Linguix', 
    category: 'Writing',
    logo: 'Linguix',
    logoColor: 'text-purple-600',
    description: 'Writing assistant'
  },
  { 
    name: 'Epidemic Sound', 
    category: 'Audio',
    logo: 'Epidemic Sound',
    logoColor: 'text-black',
    description: 'Music and sound effects'
  },
  { 
    name: 'Freepik', 
    category: 'Graphic Design',
    logo: 'FREEP!K',
    logoColor: 'text-blue-600',
    description: 'Design resources'
  },
  { 
    name: 'Leonardo.AI', 
    category: 'AI Design',
    logo: 'Leonardo.Ai',
    logoColor: 'text-black',
    description: 'AI art generator'
  },
  { 
    name: 'Moz', 
    category: 'SEO & Marketing',
    logo: 'MOZ',
    logoColor: 'text-blue-400',
    description: 'SEO software'
  },
  { 
    name: 'Wordtune', 
    category: 'Writing',
    logo: 'wordtune',
    logoColor: 'text-purple-600',
    description: 'AI writing assistant'
  },
  { 
    name: 'Jasper', 
    category: 'AI Writing',
    logo: 'Jasper',
    logoColor: 'text-black',
    description: 'AI content generator'
  },
  { 
    name: 'Jenni', 
    category: 'AI Writing',
    logo: 'jenni',
    logoColor: 'text-black',
    description: 'AI writing assistant'
  },
  { 
    name: 'JungleScout', 
    category: 'E-commerce',
    logo: 'JungleScout',
    logoColor: 'text-orange-500',
    description: 'Amazon seller tools'
  },
  { 
    name: 'Grammarly', 
    category: 'Writing',
    logo: 'grammarly',
    logoColor: 'text-green-500',
    description: 'Writing assistant'
  },
  { 
    name: 'Writesonic', 
    category: 'AI Writing',
    logo: 'Writesonic',
    logoColor: 'text-blue-600',
    description: 'AI content generator'
  }
]

export default function ToolsShowcase() {
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
    <section id="tools" className="py-20 bg-background-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-background-100 via-background to-background-200"></div>
      <div className="absolute top-10 right-10 w-64 h-64 bg-primary-100/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-secondary-100/20 rounded-full blur-3xl"></div>
      
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
            Premium Tools Access
          </motion.h2>
          <motion.p 
            className="text-xl text-text-600 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Access 25+ premium tools across SEO, Marketing, Design, Learning, and Video Editing
          </motion.p>
        </motion.div>

        {/* Tools Grid */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {tools.map((tool, index) => {
            return (
              <motion.div
                key={tool.name}
                className="bg-background border border-accent-400 rounded-2xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-lg transition-shadow duration-300 h-48"
                variants={cardVariants}
                whileHover={{ 
                  y: -5, 
                  scale: 1.02,
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Top Section - Logo and Category */}
                <div className="bg-background p-4 relative h-24 flex items-center justify-center">
                  {/* Category Tag */}
                  <div className="absolute top-2 right-2">
                    <span className="bg-accent-400 text-white text-xs font-medium px-2 py-1 rounded-full">
                      {tool.category}
                    </span>
                  </div>
                  
                  {/* Company Logo */}
                  <div className="flex items-center justify-center h-16">
                    <img 
                      src={`https://logo.clearbit.com/${getLogoUrl(tool.name)}`}
                      alt={`${tool.name} logo`}
                      className="max-h-12 max-w-20 object-contain"
                      onError={(e) => {
                        // Fallback to a generic logo or text if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = 'flex';
                      }}
                    />
                    <div className="flex items-center justify-center" style={{display: 'none'}}>
                      <span className="text-gray-600 font-bold text-sm">{tool.name}</span>
                    </div>
                  </div>
                </div>

                {/* Accent Separator Line */}
                <div className="h-1 bg-accent-400"></div>

                {/* Middle Section - Company Name with Checkmark */}
                <div className="bg-background px-3 py-2 flex items-center justify-center">
                  <div className="flex items-center">
                    <span className="text-text font-bold text-sm">
                      {tool.name}
                    </span>
                    <div className="w-4 h-4 bg-primary-500 rounded-full flex items-center justify-center ml-2">
                      <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Bottom Section - Access Now Button */}
                <div className="bg-background p-3">
                  <motion.button 
                    className="w-full bg-primary-500 hover:bg-primary-600 text-white font-medium py-2 px-3 rounded-lg flex items-center justify-center transition-colors duration-200"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="text-sm">Access Now</span>
                    <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                  </motion.button>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Additional Tools */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="relative">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 via-secondary-400/5 to-accent-400/5 rounded-3xl"></div>
            
            <motion.div 
              className="relative bg-background rounded-2xl p-8 max-w-5xl mx-auto shadow-xl border border-background-200/10"
              whileHover={{ 
                y: -5, 
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.1)",
                scale: 1.01
              }}
            >
              {/* Header */}
              <motion.div 
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 1.0, duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-accent-400 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  <span>🚀</span>
                  <span>Complete Toolkit</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-text mb-4">
                  Plus <span className="bg-gradient-to-r from-primary-500 to-accent-400 bg-clip-text text-transparent">25+ More Tools</span>
                </h3>
                <p className="text-lg text-text-600 max-w-2xl mx-auto">
                  Get access to our complete collection of premium SEO, marketing, and productivity tools
                </p>
              </motion.div>

              {/* Tools Grid */}
              <motion.div 
                className="grid grid-cols-4 md:grid-cols-6 gap-4 mb-8"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                {[
                  { name: "Majestic", logo: "majestic.com" },
                  { name: "Mangools", logo: "mangools.com" },
                  { name: "Answer The Public", logo: "answerthepublic.com" },
                  { name: "Long Tail Pro", logo: "longtailpro.com" },
                  { name: "Keyword Tool", logo: "keywordtool.io" },
                  { name: "SpyFu", logo: "spyfu.com" },
                  { name: "BuzzSumo", logo: "buzzsumo.com" },
                  { name: "Serpstat", logo: "serpstat.com" },
                  { name: "Ubersuggest", logo: "ubersuggest.com" },
                  { name: "Screaming Frog", logo: "screamingfrog.co.uk" },
                  { name: "GTmetrix", logo: "gtmetrix.com" },
                  { name: "Hotjar", logo: "hotjar.com" }
                ].map((tool, index) => (
                  <motion.div 
                    key={tool.name}
                    className="group relative"
                    variants={itemVariants}
                    whileHover={{ y: -3, scale: 1.05 }}
                  >
                    <div className="bg-gradient-to-br from-background to-background-100 border border-background-200/10 rounded-xl p-4 text-center group-hover:border-primary-500/30 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary-500/10">
                      {/* Logo */}
                      <motion.div 
                        className="w-12 h-12 mx-auto mb-3 bg-white rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm"
                        whileHover={{ rotate: 2 }}
                      >
                        <img 
                          src={`https://logo.clearbit.com/${tool.logo}`}
                          alt={`${tool.name} logo`}
                          className="max-h-8 max-w-8 object-contain group-hover:scale-110 transition-transform duration-200"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const fallback = target.nextElementSibling as HTMLElement;
                            if (fallback) fallback.style.display = 'flex';
                          }}
                        />
                        <div className="hidden w-6 h-6 bg-gradient-to-r from-primary-500 to-secondary-400 rounded flex items-center justify-center">
                          <span className="text-white font-bold text-xs">📊</span>
                        </div>
                      </motion.div>
                      
                      {/* Tool Name */}
                      <h4 className="text-xs font-semibold text-text group-hover:text-primary-500 transition-colors duration-300">
                        {tool.name}
                      </h4>
                    </div>
                    
                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-secondary-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 1.3, duration: 0.6 }}
              >
                <motion.button 
                  className="group relative bg-gradient-to-r from-primary-500 to-accent-400 hover:from-primary-600 hover:to-accent-500 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 text-base overflow-hidden shadow-lg"
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 20px 40px rgba(11, 58, 46, 0.4)" 
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <span>Explore All Tools</span>
                    <motion.span
                      animate={{ x: [0, 3, 0] }}
                      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    >
                      →
                    </motion.span>
                  </span>
                  
                  {/* Button Background Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
