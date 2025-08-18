import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'E-Cell Empowering the Entrepreneurs',
  description: 'E-Cell CGC COE',
  generator: 'E-Cell',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${GeistSans.className} ${GeistMono.variable}`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon_logo.png" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  )
}
