import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SEO Tools Collection',
  description: 'Browse our extensive collection of 50+ premium SEO tools including Ahrefs, SEMrush, Moz, Screaming Frog, Majestic, SpyFu, and more. Get group buy access at the lowest prices.',
  keywords: ['SEO tools list', 'premium SEO tools', 'Ahrefs access', 'SEMrush access', 'Moz access', 'SEO tools collection', 'group buy SEO tools', 'cheap SEO software'],
  openGraph: {
    title: 'SEO Tools Collection | SEOGroupsBuy',
    description: 'Browse our extensive collection of 50+ premium SEO tools at the lowest prices.',
    url: 'https://seogroupsbuy.com/tools',
  },
  twitter: {
    title: 'SEO Tools Collection | SEOGroupsBuy',
    description: 'Browse our extensive collection of 50+ premium SEO tools at the lowest prices.',
  },
  alternates: {
    canonical: 'https://seogroupsbuy.com/tools',
  },
}

export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

