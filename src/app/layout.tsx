import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Patrick_Hand, Dancing_Script, Architects_Daughter } from 'next/font/google'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const Navigation = dynamic(
  () => import('@/components/shared/Navigation'),
  { ssr: true }
)

const inter = Inter({ subsets: ['latin'] })
const patrick = Patrick_Hand({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-patrick'
})
const dancing = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-dancing',
})
const architect = Architects_Daughter({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-architect'
})

export const metadata: Metadata = {
  title: 'Rainbow School',
  description: 'A modern and artistic school website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${patrick.variable} ${dancing.variable} ${architect.variable} font-sans antialiased`}>
      <body className={`${inter.className} min-h-screen bg-background`}>
        <Suspense>
          <Navigation />
        </Suspense>
        <main className="relative">
          {children}
        </main>
      </body>
    </html>
  )
} 