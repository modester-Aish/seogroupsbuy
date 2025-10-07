import React from 'react'
import Navbar from '../../components/Navbar'
import FAQ from '../../components/FAQ'
import Footer from '../../components/Footer'
import ChatWidget from '../../components/ChatWidget'

export default function FAQPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <FAQ />
      <Footer />
      <ChatWidget />
    </main>
  )
}

