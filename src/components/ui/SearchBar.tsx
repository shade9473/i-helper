'use client'

import { useState } from 'react'
import { clsx } from 'clsx'

interface SearchBarProps {
  onSearch: (query: string) => void
  placeholder?: string
}

export default function SearchBar({
  onSearch,
  placeholder = 'Search resources...',
}: SearchBarProps) {
  const [query, setQuery] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(query)
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className={clsx(
            'w-full px-4 py-3 rounded-lg',
            'border border-zinc-200 dark:border-zinc-700',
            'bg-white dark:bg-zinc-900',
            'text-zinc-900 dark:text-zinc-100',
            'placeholder-zinc-500 dark:placeholder-zinc-400',
            'focus:outline-none focus:ring-2 focus:ring-blue-500'
          )}
        />
        <button
          type="submit"
          className={clsx(
            'absolute right-2 top-1/2 -translate-y-1/2',
            'px-4 py-2 rounded-md',
            'bg-blue-500 hover:bg-blue-600',
            'text-white font-medium',
            'transition-colors duration-200'
          )}
        >
          Search
        </button>
      </div>
    </form>
  )
}
