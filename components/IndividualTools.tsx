'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

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
    'Envato': 'envato.com',
    'Storyblocks': 'storyblocks.com',
    'Canva': 'canva.com',
    'Moz': 'moz.com',
    'Brandoverflow': 'brandoverflow.com',
    'SEO Tester Online': 'seotesteronline.com',
    'Mangools': 'mangools.com',
    'Udemy': 'udemy.com',
    'Coursera': 'coursera.org',
    'LinkedIn Learning': 'linkedin.com',
    'SkillShare': 'skillshare.com',
    'Prezi': 'prezi.com',
    'VistaCreate': 'vistacreate.com',
    'Vecteezy': 'vecteezy.com',
    'Dream': 'dream.com',
    'Designs.AI': 'designs.ai',
    'Creatopy': 'creatopy.com',
    'Snapied': 'snapied.com',
    'PicMonkey': 'picmonkey.com',
    'Katalist': 'katalist.com',
    'Slidebean': 'slidebean.com',
    'LOVO': 'lovo.ai',
    'Motion Array': 'motionarray.com',
    'Writesonic': 'writesonic.com',
    'Grammarly': 'grammarly.com',
    'Closers Copy': 'closerscopy.com',
    'HyperWrite': 'hyperwrite.ai',
    'INK': 'inkforall.com',
  };
  
  return logoMap[toolName] || toolName.toLowerCase().replace(/[^a-z0-9]/g, '') + '.com';
};

// Helper function to calculate pricing for different durations
const getDefaultPricing = (monthlyPrice: number) => ({
  '1': monthlyPrice,
  '3': Math.round(monthlyPrice * 2.8 * 100) / 100,  // ~7% discount
  '6': Math.round(monthlyPrice * 5.4 * 100) / 100,  // ~10% discount  
  '12': Math.round(monthlyPrice * 10.4 * 100) / 100  // ~13% discount
});

const individualTools = [
  {
    name: 'AHREF$',
    logo: 'Ahrefs',
    logoColor: 'text-orange-500',
    price: '$30',
    pricing: {
      '1': 30,
      '3': 85,
      '6': 165,
      '12': 320
    },
    icon: '🔍'
  },
  {
    name: 'SEMRU$H',
    logo: 'SEMrush',
    logoColor: 'text-purple-600',
    price: '$4.99',
    pricing: {
      '1': 4.99,
      '3': 14,
      '6': 27,
      '12': 52
    },
    icon: '📊'
  },
  {
    name: 'Moz Pro',
    logo: 'MOZ',
    logoColor: 'text-teal-500',
    price: '$4.99',
    pricing: {
      '1': 4.99,
      '3': 14,
      '6': 27,
      '12': 52
    },
    icon: '🔗'
  },
  {
    name: 'Canva Pro',
    logo: 'Canva',
    logoColor: 'text-blue-600',
    price: '$4.99',
    pricing: {
      '1': 4.99,
      '3': 14,
      '6': 27,
      '12': 52
    },
    icon: '🎨'
  },
  {
    name: 'ChatGPT Plus',
    logo: 'ChatGPT Plus',
    logoColor: 'text-green-600',
    price: '$4.99',
    pricing: {
      '1': 4.99,
      '3': 14,
      '6': 27,
      '12': 52
    },
    icon: '🤖'
  },
  {
    name: 'RunwayML',
    logo: 'RunwayML',
    logoColor: 'text-blue-600',
    price: '$4.99',
    pricing: {
      '1': 4.99,
      '3': 14,
      '6': 27,
      '12': 52
    },
    icon: '🎬'
  },
  {
    name: 'Netflix',
    logo: 'Netflix',
    logoColor: 'text-red-600',
    price: '$4.99',
    pricing: {
      '1': 4.99,
      '3': 14,
      '6': 27,
      '12': 52
    },
    icon: '📺'
  },
  {
    name: 'Claude',
    logo: 'Claude',
    logoColor: 'text-orange-500',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🧠'
  },
  {
    name: 'Envato',
    logo: 'envato',
    logoColor: 'text-green-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '⚡'
  },
  {
    name: 'Storyblocks',
    logo: 'Storyblocks',
    logoColor: 'text-black',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '$'
  },
  {
    name: 'Canva',
    logo: 'Canva',
    logoColor: 'text-transparent bg-gradient-to-r from-blue-500 via-green-500 to-purple-500 bg-clip-text',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: ''
  },
  {
    name: 'SEMRU$H',
    logo: 'SEMRUSH',
    logoColor: 'text-black',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🔥'
  },
  {
    name: 'Moz',
    logo: 'MOZ',
    logoColor: 'text-blue-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: ''
  },
  {
    name: 'Brandoverflow',
    logo: 'brandoverflow',
    logoColor: 'text-blue-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: ''
  },
  {
    name: 'SEO Tester Online',
    logo: 'SEO TESTER ONLINE',
    logoColor: 'text-blue-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '→'
  },
  {
    name: 'Mangools',
    logo: 'Mangools',
    logoColor: 'text-black',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '●'
  },
  {
    name: 'Udemy',
    logo: 'udemy',
    logoColor: 'text-black',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '↑'
  },
  {
    name: 'Coursera',
    logo: 'coursera',
    logoColor: 'text-blue-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: ''
  },
  {
    name: 'LinkedIn Learning',
    logo: 'Linked in LEARNING',
    logoColor: 'text-blue-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: 'in'
  },
  {
    name: 'SkillShare',
    logo: 'SKILL share.',
    logoColor: 'text-black',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '●'
  },
  {
    name: 'Prezi',
    logo: 'Prezi',
    logoColor: 'text-blue-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '○'
  },
  {
    name: 'VistaCreate',
    logo: 'vistacreate',
    logoColor: 'text-black',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '▲'
  },
  {
    name: 'Vecteezy',
    logo: 'Vecteezy',
    logoColor: 'text-orange-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: 'V'
  },
  {
    name: 'Dream',
    logo: 'dream',
    logoColor: 'text-blue-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '⭐'
  },
  {
    name: 'Designs.AI',
    logo: 'DESIGNS.AI',
    logoColor: 'text-gray-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: 'N'
  },
  {
    name: 'Creatopy',
    logo: 'Creatopy',
    logoColor: 'text-gray-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: 'C'
  },
  {
    name: 'Snapied',
    logo: 'Snapied',
    logoColor: 'text-pink-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '◆'
  },
  {
    name: 'PicMonkey',
    logo: 'PicMonkey',
    logoColor: 'text-orange-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🐵'
  },
  {
    name: 'Katalist',
    logo: 'Katalist',
    logoColor: 'text-pink-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: 'K'
  },
  {
    name: 'Slidebean',
    logo: 'Slidebean',
    logoColor: 'text-pink-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: 'S'
  },
  {
    name: 'LOVO',
    logo: 'LOVO',
    logoColor: 'text-blue-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '█'
  },
  {
    name: 'Motion Array',
    logo: 'Motion Array',
    logoColor: 'text-blue-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: ''
  },
  {
    name: 'Writesonic',
    logo: 'Writesonic',
    logoColor: 'text-blue-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: 'ws'
  },
  {
    name: 'GRAAMMAARRLY',
    logo: 'grammarly',
    logoColor: 'text-green-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: 'G'
  },
  {
    name: 'Closers Copy',
    logo: 'CLOSERS COPY',
    logoColor: 'text-black',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '✒'
  },
  {
    name: 'HyperWrite',
    logo: 'HyperWrite',
    logoColor: 'text-teal-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: 'H'
  },
  {
    name: 'INK',
    logo: 'INK_',
    logoColor: 'text-pink-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: ''
  },
]

export default function IndividualTools() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [showAll, setShowAll] = useState(false)

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

  // Show only 16 tools initially (4 rows × 4 columns)
  const displayedTools = showAll ? individualTools : individualTools.slice(0, 16)

  return (
    <section id="tools" className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-accent-100/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-primary-100/20 rounded-full blur-3xl"></div>
      
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
            className="text-3xl md:text-4xl font-bold text-text mb-4 relative"
            variants={itemVariants}
          >
            Our Individual Best Tools
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-secondary-400 rounded-full"></div>
          </motion.h2>
        </motion.div>

        {/* Tools Grid */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {displayedTools.map((tool, index) => {
            return (
              <motion.div
                key={tool.name}
                className="bg-white border-2 border-accent-400 rounded-lg overflow-hidden"
                variants={cardVariants}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
                }}
              >
                {/* Top Section - Logo and Name */}
                <div className="bg-white p-4 relative h-24 flex items-center justify-center">
                  {/* Company Logo and Name */}
                  <div className="flex flex-col items-center justify-center h-12 space-y-1">
                    <img 
                      src={`https://logo.clearbit.com/${getLogoUrl(tool.logo)}`}
                      alt={`${tool.name} logo`}
                      className="max-h-6 max-w-16 object-contain"
                      onError={(e) => {
                        // Fallback to text if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = 'block';
                      }}
                    />
                    <span className={`font-black text-lg ${tool.logoColor} text-center`}>
                      {tool.name}
                    </span>
                    <div className="hidden">
                      <span className={`font-bold text-lg ${tool.logoColor}`}>
                        {tool.name}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Middle Section - Price */}
                <div className="bg-white px-4 py-3 flex items-center justify-center">
                  <div className="relative w-full">
                    <select className="w-full bg-white border-2 border-accent-400 rounded px-3 py-2 text-center font-medium text-text-600 appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent-400">
                      {tool.pricing ? (
                        <>
                          <option value="1">${tool.pricing['1']} / 1 Month</option>
                          <option value="3">${tool.pricing['3']} / 3 Months</option>
                          <option value="6">${tool.pricing['6']} / 6 Months</option>
                          <option value="12">${tool.pricing['12']} / 12 Months</option>
                        </>
                      ) : (
                        <option value={tool.price}>{tool.price}</option>
                      )}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg className="w-4 h-4 text-text-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Bottom Section - Buy Now Button */}
                <div className="bg-white p-4">
                  <motion.a
                    href="https://members.seotoolsgroupbuy.us/signup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-cta hover:bg-accent-500 text-white font-medium py-3 px-4 rounded flex items-center justify-center transition-colors duration-200"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                    </svg>
                    <span className="text-sm">Buy Now</span>
                  </motion.a>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* See More Button */}
        {individualTools.length > 16 && (
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <motion.a
              href="/tools"
              className="inline-block bg-gradient-to-r from-primary-500 to-accent-400 hover:from-primary-600 hover:to-accent-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 text-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              See More Tools
            </motion.a>
          </motion.div>
        )}
      </div>
    </section>
  )
}
