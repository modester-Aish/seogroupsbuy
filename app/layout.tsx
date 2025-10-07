import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SEOGroupBuyTools - Premium SEO Tools at the Lowest Price',
  description: 'Access Ahrefs, SEMrush, Moz, and 25+ top SEO tools for a fraction of the cost. Group buy access instantly!',
  keywords: 'SEO tools, group buy, Ahrefs, SEMrush, Moz, affordable SEO, premium tools',
  authors: [{ name: 'SEOGroupBuyTools' }],
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-inter">
        {children}
      </body>
    </html>
  )
}
