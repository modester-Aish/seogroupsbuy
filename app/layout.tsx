import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'

const siteUrl = 'https://seogroupsbuy.com'
const siteName = 'SEOGroupsBuy'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'SEOGroupsBuy - Premium SEO Tools at the Lowest Price',
    template: '%s | SEOGroupsBuy'
  },
  description: 'Access Ahrefs, SEMrush, Moz, and 25+ top SEO tools for a fraction of the cost. Group buy access instantly!',
  keywords: ['SEO tools', 'group buy', 'Ahrefs', 'SEMrush', 'Moz', 'affordable SEO', 'premium SEO tools', 'SEO tools group buy', 'cheap SEO tools', 'Screaming Frog', 'Majestic SEO', 'SpyFu', 'Ubersuggest', 'SE Ranking'],
  authors: [{ name: 'SEOGroupsBuy' }],
  creator: 'SEOGroupsBuy',
  publisher: 'SEOGroupsBuy',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: siteName,
    title: 'SEOGroupsBuy - Premium SEO Tools at the Lowest Price',
    description: 'Access Ahrefs, SEMrush, Moz, and 25+ top SEO tools for a fraction of the cost. Group buy access instantly!',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SEOGroupsBuy - Premium SEO Tools',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEOGroupsBuy - Premium SEO Tools at the Lowest Price',
    description: 'Access Ahrefs, SEMrush, Moz, and 25+ top SEO tools for a fraction of the cost. Group buy access instantly!',
    images: ['/twitter-image.jpg'],
    creator: '@seogroupsbuy',
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
  category: 'SEO Tools',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'SEOGroupsBuy',
    url: siteUrl,
    description: 'Access Ahrefs, SEMrush, Moz, and 25+ top SEO tools for a fraction of the cost. Group buy access instantly!',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteUrl}/tools?search={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }

  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'SEOGroupsBuy',
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    description: 'Premium SEO tools at affordable prices through group buy access',
    sameAs: [
      'https://twitter.com/seogroupsbuy',
      'https://facebook.com/seogroupsbuy',
    ],
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="font-inter">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
