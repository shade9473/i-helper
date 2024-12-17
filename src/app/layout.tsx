import { Inter } from 'next/font/google'
import { META_DEFAULTS } from '@/lib/constants'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = META_DEFAULTS

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="relative min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <div className="container py-6">{children}</div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
