import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'),
  title: {
    default: 'E-Cell | CGC COE',
    template: '%s | E-Cell CGC COE',
  },
  description: 'E-Cell CGC COE',
  applicationName: 'E-Cell CGC COE',
  generator: 'E-Cell',
  keywords: ['E-Cell', 'CGC', 'COE', 'Entrepreneurship', 'Startup', 'Innovation', 'College'],
  authors: [{ name: 'E-Cell CGC COE' }],
  openGraph: {
    title: 'E-Cell | CGC COE',
    description: 'E-Cell CGC COE',
    url: '/',
    siteName: 'E-Cell CGC COE',
    images: [
      {
        url: '/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'E-Cell CGC COE',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'E-Cell | CGC COE',
    description: 'E-Cell CGC COE',
    images: ['/logo.jpg'],
  },
  icons: {
    icon: '/favicon_logo.png',
    shortcut: '/favicon_logo.png',
    apple: '/favicon_logo.png',
  },
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
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
