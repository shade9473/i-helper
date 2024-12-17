import Link from 'next/link'
import { NAVIGATION_ITEMS, SITE_CONFIG } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by{' '}
            <Link
              href={SITE_CONFIG.links.twitter}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              AI Resource Library
            </Link>
            . The source code is available on{' '}
            <Link
              href={SITE_CONFIG.links.github}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </Link>
            .
          </p>
        </div>
        <nav className="flex items-center space-x-6 text-sm font-medium">
          {NAVIGATION_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  )
}
