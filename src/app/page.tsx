'use client'

import { useState } from 'react'
import Link from 'next/link'
import ResourceCard from '@/components/ui/ResourceCard'
import SearchBar from '@/components/ui/SearchBar'

const DEMO_RESOURCES = [
  {
    title: 'Getting Started Guide',
    description: 'Learn the basics of using our AI resource library',
    category: 'Guide',
    link: '/guides/getting-started',
  },
  {
    title: 'Prompt Engineering',
    description: 'Master the art of writing effective prompts',
    category: 'Tutorial',
    link: '/tutorials/prompt-engineering',
  },
  {
    title: 'Best Practices',
    description: 'Learn industry best practices for AI development',
    category: 'Best Practices',
    link: '/guides/best-practices',
  },
]

export default function Home() {
  const [filteredResources, setFilteredResources] = useState(DEMO_RESOURCES)

  const handleSearch = (query: string) => {
    const filtered = DEMO_RESOURCES.filter(
      (resource) =>
        resource.title.toLowerCase().includes(query.toLowerCase()) ||
        resource.description.toLowerCase().includes(query.toLowerCase()) ||
        resource.category.toLowerCase().includes(query.toLowerCase())
    )
    setFilteredResources(filtered)
  }

  return (
    <div className="space-y-8">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-4">
          AI Resource Library
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
          Your gateway to AI development resources and knowledge
        </p>
        <SearchBar onSearch={handleSearch} />
      </section>

      <section className="py-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredResources.map((resource) => (
            <ResourceCard key={resource.link} {...resource} />
          ))}
        </div>
        {filteredResources.length === 0 && (
          <div className="text-center py-12 text-zinc-600 dark:text-zinc-400">
            No resources found. Try a different search term.
          </div>
        )}
      </section>
    </div>
  )
}

function getDescription(name: string): string {
  switch (name) {
    case 'Guides':
      return 'Comprehensive tutorials and best practices for AI development'
    case 'Prompts':
      return 'Effective prompting strategies and examples for various AI models'
    case 'Techniques':
      return 'Advanced AI techniques and methodologies for better results'
    default:
      return ''
  }
}
