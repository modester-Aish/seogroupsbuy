import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'SEOGroupsBuy - Premium SEO Tools',
    short_name: 'SEOGroupsBuy',
    description: 'Access Ahrefs, SEMrush, Moz, and 25+ top SEO tools for a fraction of the cost',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0B3A2E',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}

