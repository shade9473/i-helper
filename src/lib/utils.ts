import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string | Date) {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

export function createMetadata({
  title,
  description,
  path = '',
}: {
  title: string
  description: string
  path?: string
}) {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: path,
    },
    twitter: {
      title,
      description,
    },
  }
}
