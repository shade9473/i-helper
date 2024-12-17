import Link from 'next/link'
import { NAVIGATION_ITEMS } from '@/lib/constants'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center space-y-12 text-center">
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Welcome to AI Resource Library
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Discover comprehensive guides, prompts, and techniques for AI development. 
            Your one-stop resource for mastering artificial intelligence.
          </p>
        </div>
      </section>

      <section className="container space-y-6 py-8 md:py-12 lg:py-24">
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          {NAVIGATION_ITEMS.map((item) => (
            <div
              key={item.href}
              className="relative overflow-hidden rounded-lg border bg-background p-2"
            >
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <div className="space-y-2">
                  <h3 className="font-bold">{item.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {getDescription(item.name)}
                  </p>
                </div>
                <Link
                  href={item.href}
                  className="inline-flex items-center rounded-lg bg-primary px-3 py-2 text-sm font-medium text-primary-foreground"
                >
                  Learn more
                  <svg
                    className="ml-2 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
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
