import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Link from 'next/link'
import './globals.css'

export const metadata: Metadata = {
  title: 'Artikel Sederhana',
  description: 'Aplikasi artikel dengan Next.js dan Strapi',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <body>
        <header
          style={{
            backgroundColor: 'white',
            borderBottom: '1px solid #ddd',
            padding: '16px 24px',
          }}
        >
          <Link href="/" style={{ fontWeight: 'bold', color: '#2563eb' }}>
            Artikel Sederhana
          </Link>
        </header>
        {children}
      </body>
    </html>
  )
}