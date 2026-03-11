import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Cormorant_Garamond, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Providers } from '@/components/providers'
import { Preloader } from '@/components/preloader'
import { CustomCursor } from '@/components/custom-cursor'
import { ScrollToTop } from '@/components/scroll-to-top'
import './globals.css'

const geistSans = Geist({ subsets: ["latin"], variable: '--font-sans' });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: '--font-mono' });
const dmSans = DM_Sans({ subsets: ["latin"], variable: '--font-sans', weight: ['400', '500', '700'] });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], variable: '--font-serif', weight: ['400', '500', '600', '700'] });

export const metadata: Metadata = {
  title: 'MNS Bank Bhopal | Premium Banking Solutions',
  description: 'Mahanagar Nagrik Sahakari Bank - Trusted cooperative banking since 1996. Premium personal and business banking solutions in Bhopal.',
  keywords: 'bank, Bhopal, savings account, loans, cooperative banking, MNS Bank',
  generator: 'v0.app',
  openGraph: {
    title: 'MNS Bank Bhopal | Premium Banking Solutions',
    description: 'Trusted cooperative banking solutions for personal and business customers',
    type: 'website',
    url: 'https://mnsbankbhopal.com',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#faf9f7' },
    { media: '(prefers-color-scheme: dark)', color: '#16203e' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html 
      lang="en" 
      className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} ${dmSans.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased">
        <Providers>
          <Preloader />
          <CustomCursor />
          {children}
          <ScrollToTop />
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}
