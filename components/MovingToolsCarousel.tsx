'use client'

import { motion } from 'framer-motion'

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
    'Helium 10': 'helium10.com',
    'Udemy': 'udemy.com',
    'Leonardo.AI': 'leonardo.ai',
    'Jasper AI': 'jasper.ai',
    'Grammarly': 'grammarly.com',
    'VistaCreate': 'vistacreate.com',
    'Freepik': 'freepik.com',
    'Motion Array': 'motionarray.com',
    'CapCut': 'capcut.com',
    'Epidemic Sound': 'epidemicsound.com',
    'Linguix': 'linguix.com',
    'Writesonic': 'writesonic.com',
    'Coursera': 'coursera.org',
    'LinkedIn Learning': 'linkedin.com',
    'SkillShare': 'skillshare.com',
    'MasterClass': 'masterclass.com',
    'Pluralsight': 'pluralsight.com',
    'Codecademy': 'codecademy.com',
    'Khan Academy': 'khanacademy.org',
    'edX': 'edx.org',
    'FutureLearn': 'futurelearn.com',
    'JungleScout': 'junglescout.com'
  };
  
  return logoMap[toolName] || toolName.toLowerCase().replace(/[^a-z0-9]/g, '') + '.com';
};

const toolsData = [
  // Row 1 - Premium SEO & Marketing Tools
  [
    { name: 'Ahrefs', logo: 'Ahrefs', color: 'text-orange-500' },
    { name: 'SEMrush', logo: 'SEMrush', color: 'text-purple-600' },
    { name: 'Moz Pro', logo: 'MOZ', color: 'text-teal-500' },
    { name: 'Canva Pro', logo: 'Canva', color: 'text-blue-600' },
    { name: 'ChatGPT Plus', logo: 'ChatGPT', color: 'text-green-600' },
    { name: 'RunwayML', logo: 'RunwayML', color: 'text-blue-600' },
    { name: 'Netflix', logo: 'Netflix', color: 'text-red-600' },
    { name: 'Claude', logo: 'Claude', color: 'text-orange-500' },
    { name: 'Helium 10', logo: 'Helium 10', color: 'text-blue-600' },
    { name: 'Udemy', logo: 'udemy', color: 'text-black' },
  ],
  // Row 2 - AI & Creative Tools
  [
    { name: 'Leonardo.AI', logo: 'Leonardo.Ai', color: 'text-purple-600' },
    { name: 'Jasper AI', logo: 'Jasper', color: 'text-purple-500' },
    { name: 'Grammarly', logo: 'grammarly', color: 'text-green-500' },
    { name: 'VistaCreate', logo: 'vistacreate', color: 'text-blue-600' },
    { name: 'Freepik', logo: 'FREEP!K', color: 'text-blue-600' },
    { name: 'Motion Array', logo: 'Motion Array', color: 'text-purple-600' },
    { name: 'CapCut', logo: 'CapCut', color: 'text-black' },
    { name: 'Epidemic Sound', logo: 'Epidemic Sound', color: 'text-black' },
    { name: 'Linguix', logo: 'Linguix', color: 'text-blue-500' },
    { name: 'Writesonic', logo: 'Writesonic', color: 'text-blue-600' },
  ],
  // Row 3 - Learning & Development Tools
  [
    { name: 'Coursera', logo: 'coursera', color: 'text-blue-600' },
    { name: 'LinkedIn Learning', logo: 'Linked in LEARNING', color: 'text-blue-600' },
    { name: 'SkillShare', logo: 'SKILL share.', color: 'text-black' },
    { name: 'MasterClass', logo: 'MasterClass', color: 'text-black' },
    { name: 'Pluralsight', logo: 'Pluralsight', color: 'text-orange-500' },
    { name: 'Codecademy', logo: 'Codecademy', color: 'text-green-500' },
    { name: 'Khan Academy', logo: 'Khan Academy', color: 'text-blue-600' },
    { name: 'edX', logo: 'edX', color: 'text-blue-600' },
    { name: 'FutureLearn', logo: 'FutureLearn', color: 'text-red-500' },
    { name: 'JungleScout', logo: 'JungleScout', color: 'text-orange-500' },
  ]
]

export default function MovingToolsCarousel() {
  return (
    <section className="py-20 bg-gradient-to-br from-background-100 via-background to-background-200 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-primary-100/30 rounded-full blur-3xl"></div>
      <div className="absolute top-10 right-10 w-64 h-64 bg-secondary-100/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-80 h-80 bg-accent-100/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
            Checkout Our Best Selling Tools Here
          </h2>
          <p className="text-xl text-text-600 max-w-4xl mx-auto">
            Explore Our Collection of Best-Selling Digital Tools, Handpicked to Enhance Your Workflow, Creativity, and Overall Efficiency—Check Them Out Today!
          </p>
        </div>

        {/* Moving Cards Container */}
        <div className="space-y-8">
          {toolsData.map((row, rowIndex) => (
            <div key={rowIndex} className="relative overflow-hidden">
              {/* Duplicate the tools array to create seamless loop */}
              <motion.div
                className="flex space-x-6"
                animate={{
                  x: [0, -100 * row.length]
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 20 + rowIndex * 5, // Different speeds for each row
                    ease: "linear",
                  },
                }}
                style={{ width: `${row.length * 2 * 100}%` }}
              >
                {/* First set of cards */}
                {row.map((tool, index) => (
                  <motion.div
                    key={`${rowIndex}-${index}-1`}
                    className="flex-shrink-0 w-56 h-40 bg-white rounded-xl shadow-xl border border-gray-200 flex items-center justify-center group cursor-pointer relative"
                    whileHover={{ 
                      y: -5, 
                      scale: 1.05,
                      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="text-center">
                      <div className="mb-2 flex justify-center">
                        <img 
                          src={`https://logo.clearbit.com/${getLogoUrl(tool.name)}`}
                          alt={`${tool.name} logo`}
                          className="max-h-12 max-w-20 object-contain group-hover:scale-105 transition-transform duration-200"
                          onError={(e) => {
                            // Fallback to text if image fails to load
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const fallback = target.nextElementSibling as HTMLElement;
                            if (fallback) fallback.style.display = 'block';
                          }}
                        />
                        <div className="hidden">
                          <span className={`font-bold text-sm ${tool.color}`}>
                            {tool.name}
                          </span>
                          </div>
                      </div>
                      <div className="text-xs text-gray-600 font-semibold bg-gray-50 px-3 py-1 rounded-lg">
                        {tool.name}
                      </div>
                    </div>
                  </motion.div>
                ))}
                
                {/* Second set of cards for seamless loop */}
                {row.map((tool, index) => (
                  <motion.div
                    key={`${rowIndex}-${index}-2`}
                    className="flex-shrink-0 w-56 h-40 bg-white rounded-xl shadow-xl border border-gray-200 flex items-center justify-center group cursor-pointer relative"
                    whileHover={{ 
                      y: -5, 
                      scale: 1.05,
                      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="text-center">
                      <div className="mb-2 flex justify-center">
                        <img 
                          src={`https://logo.clearbit.com/${getLogoUrl(tool.name)}`}
                          alt={`${tool.name} logo`}
                          className="max-h-12 max-w-20 object-contain group-hover:scale-105 transition-transform duration-200"
                          onError={(e) => {
                            // Fallback to text if image fails to load
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const fallback = target.nextElementSibling as HTMLElement;
                            if (fallback) fallback.style.display = 'block';
                          }}
                        />
                        <div className="hidden">
                          <span className={`font-bold text-sm ${tool.color}`}>
                            {tool.name}
                          </span>
                          </div>
                      </div>
                      <div className="text-xs text-gray-600 font-semibold bg-gray-50 px-3 py-1 rounded-lg">
                        {tool.name}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <motion.button 
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(220, 38, 38, 0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            Get Access to All Tools
          </motion.button>
        </div>
      </div>
    </section>
  )
}
