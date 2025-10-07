'use client'

export default function Footer() {
  return (
    <footer id="contact" className="bg-primary-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Company Info */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="ml-2 text-xl font-bold">
                seogroupsbuy
              </span>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Access premium SEO tools at unbeatable prices. Join thousands of satisfied users 
              saving money while growing their businesses.
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a href="https://m.me/483405115505983" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary-700 rounded-lg flex items-center justify-center text-white/80 hover:text-secondary-400 hover:bg-primary-600 transition-all duration-200">
                <span className="text-sm font-bold">f</span>
              </a>
              <a href="#" className="w-10 h-10 bg-primary-700 rounded-lg flex items-center justify-center text-white/80 hover:text-secondary-400 hover:bg-primary-600 transition-all duration-200">
                <span className="text-sm font-bold">t</span>
              </a>
              <a href="#" className="w-10 h-10 bg-primary-700 rounded-lg flex items-center justify-center text-white/80 hover:text-secondary-400 hover:bg-primary-600 transition-all duration-200">
                <span className="text-sm font-bold">in</span>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-start">
                <svg className="w-5 h-5 text-secondary-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+15205636362" className="text-white/80 hover:text-secondary-400 transition-colors">
                  +1 (520) 563‑6362
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <svg className="w-5 h-5 text-secondary-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:Admin@seogroupsbuy.com" className="text-white/80 hover:text-secondary-400 transition-colors">
                  Admin@seogroupsbuy.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/60 text-sm mb-4 md:mb-0">
              © 2024 seogroupsbuy. All rights reserved.
            </div>
            <div className="text-white/60 text-sm">
              Made with ❤️ for SEO professionals
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
