import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
})

export const metadata: Metadata = {
  title: 'Github finder',
  description: 'Search for github profiles',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        style={montserrat.style}
        className="bg-zinc-800 h-screen w-full text-zinc-100 flex items-center justify-center"
      >
        {children}
      </body>
    </html>
  )
}
