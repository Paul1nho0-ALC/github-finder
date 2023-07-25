import { UserContextProvider } from '@/contexts/UserContext'
import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
})

export const metadata: Metadata = {
  title: 'Github Finder',
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
        className="bg-slate-950 h-screen w-full text-slate-50 flex justify-center"
      >
        <UserContextProvider>{children}</UserContextProvider>
      </body>
    </html>
  )
}
