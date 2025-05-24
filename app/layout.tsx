import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bloom & Root | Boutique Plant Shop',
  description: 'Bring life into your home with our curated selection of plants',
  icons: {
    icon: '/favicon.ico', // or '/favicon.png'
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} bg-gray-50`}>
        {children}
      </body>
    </html>
  )
}