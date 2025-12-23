import type { Metadata } from 'next'
import { Merriweather, Lato } from 'next/font/google'
import './globals.css'
import Header from '@/components/header/header'

const lato = Lato({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['400', '700', '900'],
})

const merriweather = Merriweather({
  variable: '--font-serif',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Akita One Japan | Your Discovery Partner',
  description: 'Travel With Us, Your Discovery Partner',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${lato.variable} ${merriweather.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
