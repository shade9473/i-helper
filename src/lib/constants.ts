export const SITE_CONFIG = {
  name: 'AI Resource Library',
  description: 'A comprehensive library of AI resources, guides, prompts, and techniques',
  url: 'https://ai-resource-library.com',
  ogImage: 'https://ai-resource-library.com/og-image.jpg',
  links: {
    github: 'https://github.com/your-username/ai-resource-library',
    twitter: 'https://twitter.com/ai_resource_lib'
  }
}

export const NAVIGATION_ITEMS = [
  { name: 'Guides', href: '/guides' },
  { name: 'Prompts', href: '/prompts' },
  { name: 'Techniques', href: '/techniques' }
] as const

export const META_DEFAULTS = {
  title: SITE_CONFIG.name,
  description: SITE_CONFIG.description,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImage }]
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.ogImage]
  }
}
