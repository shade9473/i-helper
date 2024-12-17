import { clsx } from 'clsx'
import Link from 'next/link'

interface ResourceCardProps {
  title: string
  description: string
  category: string
  link: string
}

export default function ResourceCard({
  title,
  description,
  category,
  link,
}: ResourceCardProps) {
  return (
    <Link
      href={link}
      className={clsx(
        'group relative rounded-lg border p-6 hover:border-zinc-400',
        'transition-all duration-200 hover:shadow-md',
        'bg-white dark:bg-zinc-900'
      )}
    >
      <div className="flex justify-between">
        <div className="flex items-center space-x-3">
          <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">
            {title}
          </h3>
          <span className="rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-800 dark:bg-zinc-800 dark:text-zinc-100">
            {category}
          </span>
        </div>
      </div>
      <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
        {description}
      </p>
      <div className="absolute bottom-6 right-6 text-sm text-zinc-500 dark:text-zinc-400">
        Learn more →
      </div>
    </Link>
  )
}
