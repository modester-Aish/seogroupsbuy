'use client'

import { Star, Zap, Crown, Info } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const plans = [
  {
    name: 'SMALL PLAN',
    price: '$15',
    period: '/month',
    description: '60+ Tools',
    icon: Star,
    color: 'text-blue-600',
    features: [
      'Access to essential tools',
      'Basic features included',
      'Great for getting started'
    ],
    tools: [
      'SEMRUSH Guru', 'MOZ Pro', 'Majestic', 'Kwfinder', 'Keywordtool io',
      'Ubersuggest', 'SerpState', 'Answer the public', 'Woorank', 'Spyfu',
      'SEOptimer', 'ChatGPT 4', 'Grammarly', 'WordAi', 'Quillbot',
      'Spin Rewriter', 'WordHero', 'WordTune', 'SmartCopy', 'CloserCopy',
      'Copy ai', 'Copymatic ai', 'Jasper Ai', 'WriteSonic', 'Rytr me',
      'Jenni ai', 'CANVA pro', 'Crello', 'Envato Elements', 'Leonardo.AI',
      'Freepik', 'Vecteezy', 'StoryBlocks', 'Designs ai', 'PicsArt',
      'Fotojet', 'IconScout', 'Renderforest', 'GPL Themes/Plugins', 'Netflix',
      'Prime Video', 'Chaupal tv', 'Indexification', 'Ecomhunt', 'Salehoo',
      'Sell the trend', 'Niche Scraper', 'Helium 10', 'Semscoop', 'Buzzsumo',
      'Buzzstream', 'Picmonkey', 'Word Tracker', 'Epidemicsound', 'Slidebean',
      'Motionarray', 'Prezi', 'Udemy', 'Skill Share', 'Turnitin',
      'Linkedin Learning', 'Coursera', 'Scribd Premium'
    ],
    popular: false
  },
  {
    name: 'AHREF$ COMBO',
    price: '$30',
    period: '/month',
    description: '60+ Tools',
    icon: Zap,
    color: 'text-orange-500',
    features: [
      'Full Ahrefs access',
      'Advanced SEO tools',
      'Keyword research & backlink analysis'
    ],
    tools: [
      'AHREFS', 'SEMRUSH Guru', 'MOZ Pro', 'Majestic', 'Kwfinder',
      'Keywordtool io', 'Ubersuggest', 'SerpState', 'Answer the public', 'Woorank',
      'Spyfu', 'SEOptimer', 'ChatGPT 4', 'Bypass GPT', 'Grammarly',
      'Quetext premium', 'WordAi', 'Hix ai', 'Quillbot', 'Spin Rewriter',
      'WordHero', 'WordTune', 'SmartCopy', 'CloserCopy', 'Copymatic ai',
      'Jasper Ai', 'WriteSonic', 'Rytr me', 'Jenni ai', 'CANVA pro',
      'Crello', 'Envato Elements', 'Leonardo.AI', 'Freepik', 'Vecteezy',
      'Designs ai', 'CAPCUT Pro', 'PicsArt', 'Fotojet', 'IconScout',
      'Renderforest', 'Invideo io', 'GPL Themes/Plugins', 'Netflix', 'Prime Video',
      'Chaupal tv', 'Indexification', 'Ecomhunt', 'Sell the trend', 'Niche Scraper',
      'Helium 10', 'Semscoop', 'Buzzsumo', 'Picmonkey', 'Word Tracker',
      'Epidemicsound', 'Slidebean', 'Motionarray', 'Prezi', 'Udemy',
      'Skill Share', 'Turnitin', 'Coursera', 'Scribd Premium'
    ],
    popular: true
  },
  {
    name: 'MEGA PLAN',
    price: '$50',
    period: '/month',
    description: '80+ Tools',
    icon: Crown,
    color: 'text-purple-600',
    features: [
      'All premium tools included',
      'Advanced analytics',
      'Priority support'
    ],
    tools: [
      'AHREFS', 'SEMRUSH Guru', 'MOZ Pro', 'Majestic', 'Kwfinder',
      'Keywordtool io', 'Ubersuggest', 'SerpState', 'Answer the public', 'Woorank',
      'Spyfu', 'SEOptimer', 'SEOSITECHECKUP', 'ChatGPT 4', 'Bypass GPT',
      'Grammarly', 'Quetext premium', 'WordAi', 'You Ai', 'Claude Ai',
      'Hix Ai', 'Copy Ai', 'Jasper Ai', 'Copymatic Ai', 'Stealthwriter Ai',
      'Jenni ai', 'Quillbot', 'Spin Rewriter', 'WordHero', 'WordTune',
      'SmartCopy', 'CloserCopy', 'Writerzen', 'WriteSonic', 'Rytr me',
      'CANVA pro', 'Crello', 'Envato Elements', 'Leonardo.AI', 'Freepik',
      'Vecteezy', 'StoryBlocks', 'Designs ai', 'CAPCUT Pro', 'PicsArt',
      'Fotojet', 'Invideo io', 'IconScout', 'Renderforest', 'GPL Themes/Plugins',
      'Netflix', 'Prime Video', 'Chaupal tv', 'Indexification', 'Ecomhunt',
      'Sell the trend', 'SaleHoo', 'Niche Scraper', 'Helium 10', 'Jungle Scout',
      'Viral Launch', 'Semscoop', 'Buzzsumo', 'Buzzstream', 'Se Ranking',
      'Picmonkey', 'Word Tracker', 'Epidemicsound', 'Slidebean', 'Motionarray',
      'Prezi', 'Udemy', 'Skill Share', 'Turnitin', 'Linkedin Learning',
      'Coursera', 'Scribd Premium'
    ],
    popular: false
  },
  {
    name: 'LITE PLAN',
    price: '$10',
    period: '/month',
    description: 'SEMRUSH Combo, 100+ Tools',
    icon: Star,
    color: 'text-blue-600',
    features: [
      'Essential tools only',
      'Basic features',
      'Perfect for individuals'
    ],
    tools: [
      'SEMRUSH Guru', 'MOZ Pro', 'Ubersuggest', 'Woorank', 'Grammarly',
      'WordAi', 'Quillbot', 'Canva', 'Crello', 'Envato Elements',
      'FotoJet', 'Invideo io', 'Netflix', 'Prime Video', 'Buzzsumo',
      'Picmonkey', 'Motionarray', 'SkillShare', 'Turnitin', 'Linkedin Learning'
    ],
    popular: false
  },
  {
    name: 'WRITER PLAN',
    price: '$15',
    period: '/month',
    description: '30+ Tools',
    icon: Zap,
    color: 'text-orange-500',
    features: [
      'Writing and editing tools',
      'Content optimization',
      'Grammar and style checks'
    ],
    tools: [
      'ChatGPT 4', 'Bypass GPT', 'Grammarly', 'Quetext', 'WordAi',
      'You Ai', 'Claude Ai', 'Hix Ai', 'Copymatic AI', 'Jasper Ai',
      'Copy AI', 'Stealthwriter Ai', 'Jeeni Ai', 'SpinRewriter', 'Quillbot',
      'WordHero', 'SmartCopy', 'WordTune', 'CloserCopy', 'Writerzen',
      'Writesonic', 'Rytr me', 'Canva', 'Crello', 'WordTracker',
      'Motionarray', 'Prezi', 'Turnitin', 'Coursera', 'Leonardo.AI'
    ],
    popular: false
  },
  {
    name: 'DESIGNER PLAN',
    price: '$10',
    period: '/month',
    description: '15+ Tools',
    icon: Crown,
    color: 'text-purple-600',
    features: [
      'Design software access',
      'Creative assets',
      'Collaboration tools'
    ],
    tools: [
      'Canva Pro', 'Crello', 'Envato Elements', 'Freepik', 'Vecteezy',
      'Storyblocks', 'Videoblocks', 'Audioblocks', 'Designs AI', 'CAPCUT Pro',
      'FotoJet', 'Invideo io', 'GPL Themes/Plugins', 'Leonardo.AI', 'Renderforest',
      'IconScout'
    ],
    popular: false
  }
]

export default function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set())

  const toggleFlip = (index: number) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev)
      if (newSet.has(index)) {
        newSet.delete(index)
      } else {
        newSet.add(index)
      }
      return newSet
    })
  }

  const handleMouseLeave = (index: number) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev)
      newSet.delete(index)
      return newSet
    })
  }

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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {plans.map((plan, index) => {
            const IconComponent = plan.icon
            const isFlipped = flippedCards.has(index)
            
            return (
              <motion.div
                key={plan.name}
                className="relative h-[500px] perspective-1000"
                variants={cardVariants}
                onMouseLeave={() => handleMouseLeave(index)}
                whileHover={{ 
                  y: -5, 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <motion.div 
                    className="absolute -top-3 -right-3 bg-red-500 text-white font-bold px-4 py-2 rounded-lg text-sm z-10"
                    initial={{ opacity: 0, y: -10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                    transition={{ delay: 0.6 + index * 0.2, duration: 0.5 }}
                  >
                    Most Popular
                  </motion.div>
                )}

                {/* Card Container */}
                <div 
                  className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                    isFlipped ? 'rotate-y-180' : ''
                  }`}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Front of Card */}
                  <div 
                    className="absolute inset-0 backface-hidden bg-white rounded-lg border border-gray-300 shadow-lg p-8 flex flex-col"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    {/* Plan Header */}
                    <div className="mb-6 text-center">
                      <div className="w-16 h-16 rounded-full mb-6 flex items-center justify-center border-2 border-red-500 mx-auto">
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
                      <span className="text-4xl font-bold text-red-500">
                        {plan.price}
                      </span>
                      <span className="text-lg text-gray-600 font-medium">
                        {plan.period}
                      </span>
                    </div>

                    {/* Plan Benefits */}
                    <div className="mb-6 text-center">
                      <div className="text-sm text-gray-600 space-y-1">
                        {plan.name === 'SMALL PLAN' && (
                          <>
                            <p>✓ Complete SEO Suite</p>
                            <p>✓ AI Writing Tools</p>
                            <p>✓ Design & Graphics</p>
                          </>
                        )}
                        {plan.name === 'AHREF$ COMBO' && (
                          <>
                            <p>✓ Premium SEO Tools</p>
                            <p>✓ Advanced Analytics</p>
                            <p>✓ Content Creation</p>
                          </>
                        )}
                        {plan.name === 'MEGA PLAN' && (
                          <>
                            <p>✓ All Premium Tools</p>
                            <p>✓ E-commerce Suite</p>
                            <p>✓ Learning Platform</p>
                          </>
                        )}
                        {plan.name === 'LITE PLAN' && (
                          <>
                            <p>✓ Essential SEO</p>
                            <p>✓ Basic Design</p>
                            <p>✓ Entertainment</p>
                          </>
                        )}
                        {plan.name === 'WRITER PLAN' && (
                          <>
                            <p>✓ AI Writing Suite</p>
                            <p>✓ Content Tools</p>
                            <p>✓ Grammar Check</p>
                          </>
                        )}
                        {plan.name === 'DESIGNER PLAN' && (
                          <>
                            <p>✓ Design Software</p>
                            <p>✓ Stock Assets</p>
                            <p>✓ Video Tools</p>
                          </>
                        )}
                      </div>
                    </div>

                    {/* View Included Tools Button */}
                    <div className="mt-auto mb-4 text-center">
                      <button
                        onClick={() => toggleFlip(index)}
                        className="text-red-500 hover:text-red-600 font-medium text-sm underline"
                      >
                        View included tools
                      </button>
                    </div>

                    {/* CTA Button */}
                    <div className="text-center">
                      <motion.a 
                        href="https://members.seotoolsgroupbuy.us/signup"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-full h-12 font-bold text-base rounded-lg transition-all duration-300 flex items-center justify-center ${
                          plan.popular
                            ? 'bg-red-500 text-white hover:bg-red-600'
                            : 'bg-white text-black hover:bg-gray-50 border-2 border-gray-300'
                        }`}
                        whileHover={{ 
                          scale: 1.05, 
                          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Get Instant Access
                      </motion.a>
                    </div>
                  </div>

                  {/* Back of Card */}
                  <div 
                    className="absolute inset-0 backface-hidden bg-white rounded-lg border border-gray-300 shadow-lg p-8 flex flex-col rotate-y-180"
                    style={{ 
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                      pointerEvents: isFlipped ? 'auto' : 'none'
                    }}
                  >
                    {/* Back Header */}
                    <div className="mb-6 text-center">
                      <div className="flex items-center justify-center mb-4">
                        <span className="text-sm text-gray-500">← Hover out to return</span>
                      </div>
                      <h3 className="text-xl font-bold text-black leading-snug">
                        {plan.name} Tools
                      </h3>
                    </div>

                    {/* Tools List - Only scrollable when card is flipped */}
                    <div 
                      className="flex-grow overflow-y-auto overscroll-contain"
                      onWheel={(e) => {
                        // Only handle scroll when card is flipped
                        if (!isFlipped) return
                        
                        const element = e.currentTarget
                        const isScrollable = element.scrollHeight > element.clientHeight
                        
                        if (isScrollable) {
                          const atTop = element.scrollTop === 0
                          const atBottom = element.scrollTop + element.clientHeight >= element.scrollHeight - 1
                          
                          // Stop propagation to prevent page scroll
                          if ((atTop && e.deltaY < 0) || (atBottom && e.deltaY > 0)) {
                            // At boundary, allow page scroll
                            return
                          } else {
                            // Inside scroll area, prevent page scroll
                            e.stopPropagation()
                          }
                        }
                      }}
                      style={{
                        scrollbarWidth: 'thin',
                        scrollbarColor: '#d1d5db #f3f4f6'
                      }}
                    >
                      <div className="grid grid-cols-2 gap-1 text-xs">
                        {plan.tools.map((tool, toolIndex) => (
                          <div key={toolIndex} className="flex items-center gap-1">
                            <span className="text-red-500 font-bold text-xs">✓</span>
                            <span className="text-xs text-gray-700 font-medium leading-tight">
                              {tool}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}
