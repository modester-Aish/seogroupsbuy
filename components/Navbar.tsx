'use client'

import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-background-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <div className="relative">
                {/* Modern Logo SVG */}
                <svg 
                  width="40" 
                  height="40" 
                  viewBox="0 0 40 40" 
                  className="drop-shadow-lg"
                >
                  {/* Background Circle with Gradient */}
                  <defs>
                    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="50%" stopColor="#8B5CF6" />
                      <stop offset="100%" stopColor="#06B6D4" />
                    </linearGradient>
                    <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FFFFFF" />
                      <stop offset="100%" stopColor="#F0F9FF" />
                    </linearGradient>
                  </defs>
                  
                  {/* Main Circle */}
                  <circle 
                    cx="20" 
                    cy="20" 
                    r="18" 
                    fill="url(#logoGradient)" 
                    stroke="rgba(255,255,255,0.2)" 
                    strokeWidth="1"
                  />
                  
                  {/* SEO Icon - Chart/Graph Symbol */}
                  <g transform="translate(8, 8)">
                    {/* Chart Bars */}
                    <rect x="2" y="16" width="3" height="8" fill="url(#iconGradient)" rx="1"/>
                    <rect x="7" y="12" width="3" height="12" fill="url(#iconGradient)" rx="1"/>
                    <rect x="12" y="8" width="3" height="16" fill="url(#iconGradient)" rx="1"/>
                    <rect x="17" y="4" width="3" height="20" fill="url(#iconGradient)" rx="1"/>
                    
                    {/* Trending Arrow */}
                    <path 
                      d="M6 6 L18 2 L16 8 L20 6" 
                      stroke="url(#iconGradient)" 
                      strokeWidth="2" 
                      fill="none" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </g>
                  
                  {/* Sparkle Effects */}
                  <circle cx="30" cy="10" r="1.5" fill="rgba(255,255,255,0.8)"/>
                  <circle cx="32" cy="28" r="1" fill="rgba(255,255,255,0.6)"/>
                  <circle cx="8" cy="32" r="1.2" fill="rgba(255,255,255,0.7)"/>
                </svg>
              </div>
              <span className="ml-3 text-xl font-bold bg-gradient-to-r from-primary-500 to-accent-400 bg-clip-text text-transparent">
                seogroupsbuy
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="/"
                className="text-text hover:text-primary-500 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Home
              </a>
              <a
                href="/#pricing"
                className="text-text-600 hover:text-primary-500 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Pricing
              </a>
              <a
                href="/tools"
                className="text-text-600 hover:text-primary-500 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Tools
              </a>
              <a
                href="/faq"
                className="text-text-600 hover:text-primary-500 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                FAQ
              </a>
              <a
                href="/#contact"
                className="text-text-600 hover:text-primary-500 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Contact
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a href="https://members.seotoolsgroupbuy.us/signup" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Get Started
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-text-600 hover:text-text focus:outline-none focus:text-text"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-background-200">
              <a
                href="/"
                className="text-text hover:text-primary-500 block px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="/#pricing"
                className="text-text-600 hover:text-primary-500 block px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </a>
              <a
                href="/tools"
                className="text-text-600 hover:text-primary-500 block px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Tools
              </a>
              <a
                href="/faq"
                className="text-text-600 hover:text-primary-500 block px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </a>
              <a
                href="/#contact"
                className="text-text-600 hover:text-primary-500 block px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <div className="pt-4">
                <a href="https://members.seotoolsgroupbuy.us/signup" target="_blank" rel="noopener noreferrer" className="btn-primary w-full block text-center">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
