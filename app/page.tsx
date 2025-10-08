import React from 'react'
import Hero from '../components/Hero'
import MovingToolsCarousel from '../components/MovingToolsCarousel'
import IndividualTools from '../components/IndividualTools'
import Features from '../components/Features'
import Pricing from '../components/Pricing'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'
import ChatWidget from '../components/ChatWidget'

export default function Home() {
  return (
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
  )
}
