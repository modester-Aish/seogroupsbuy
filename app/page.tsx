'use client'

import React, { useEffect } from 'react'
import Hero from '../components/Hero'
import MovingToolsCarousel from '../components/MovingToolsCarousel'
import IndividualTools from '../components/IndividualTools'
import Features from '../components/Features'
import Pricing from '../components/Pricing'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'
import ChatWidget from '../components/ChatWidget'

export default function Home() {
  // Handle scroll to section after navigation from other pages
  useEffect(() => {
    const scrollToSection = sessionStorage.getItem('scrollToSection')
    if (scrollToSection) {
      sessionStorage.removeItem('scrollToSection')
      
      // Wait for page to fully load
      setTimeout(() => {
        const element = document.getElementById(scrollToSection)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
    }
  }, [])
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'SEO Tools Group Buy Access',
    description: 'Premium SEO tools including Ahrefs, SEMrush, Moz, and 25+ more at affordable prices',
    brand: {
      '@type': 'Brand',
      name: 'SEOGroupsBuy'
    },
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '19',
      highPrice: '99',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      offerCount: '3'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '350'
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <main className="min-h-screen">
        <Hero />
        <IndividualTools />
        <MovingToolsCarousel />
        <Pricing />
        <Features />
        <Testimonials />
        <Footer />
        <ChatWidget />
      </main>
    </>
  )
}
