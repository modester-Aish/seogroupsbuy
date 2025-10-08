import React from 'react'
import FAQ from '../../components/FAQ'
import Footer from '../../components/Footer'
import ChatWidget from '../../components/ChatWidget'

export default function FAQPage() {
  return (
    <main className="min-h-screen">
      <FAQ />
      <Footer />
      <ChatWidget />
    </main>
  )
}

