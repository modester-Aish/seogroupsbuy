import React from 'react'
import { Metadata } from 'next'
import FAQ from '../../components/FAQ'
import Footer from '../../components/Footer'
import ChatWidget from '../../components/ChatWidget'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description: 'Find answers to common questions about SEO tools group buy, pricing, access, and support. Get instant access to premium SEO tools at affordable prices.',
  keywords: ['SEO tools FAQ', 'group buy questions', 'SEO tools support', 'Ahrefs FAQ', 'SEMrush FAQ', 'premium SEO tools help'],
  openGraph: {
    title: 'Frequently Asked Questions | SEOGroupsBuy',
    description: 'Find answers to common questions about SEO tools group buy, pricing, access, and support.',
    url: 'https://seogroupsbuy.com/faq',
  },
  twitter: {
    title: 'Frequently Asked Questions | SEOGroupsBuy',
    description: 'Find answers to common questions about SEO tools group buy, pricing, access, and support.',
  },
  alternates: {
    canonical: 'https://seogroupsbuy.com/faq',
  },
}

export default function FAQPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What does Group Buy SEO Tools mean?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Group Buy Means you get a Seo tools access on an affordable price as compared to original price. These accounts are for the medium users of SEO Tools. If you are heavy usage people, please don\'t purchase.'
        }
      },
      {
        '@type': 'Question',
        name: 'How would I get access?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'After successful payment, you will receive login credentials via email within 24 hours. You can then access all premium SEO tools through our secure dashboard.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do you offer Refund?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we offer a 7-day money-back guarantee. If you\'re not satisfied with our service, contact our support team for a full refund.'
        }
      },
      {
        '@type': 'Question',
        name: 'What Is Your Account Activation Process?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Account activation is automatic after payment verification. You\'ll receive your login details within 24 hours of successful payment confirmation.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can I use Proxy/VPN IPs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, you can use Proxy/VPN IPs with our accounts. We support various IP configurations to ensure compatibility with your setup.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can I share My Accounts?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Account sharing is not recommended as it may lead to account suspension. Each account is intended for individual use to maintain service quality.'
        }
      },
      {
        '@type': 'Question',
        name: 'What would be the Access Mode?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You\'ll get web-based access to all tools through our secure dashboard. No software installation required - access everything directly from your browser.'
        }
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <main className="min-h-screen">
        <FAQ />
        <Footer />
        <ChatWidget />
      </main>
    </>
  )
}

