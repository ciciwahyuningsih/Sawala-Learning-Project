import Link from 'next/link'
import type { ReactNode } from 'react'

interface ButtonProps {
  href: string
  children: ReactNode
  variant?: 'primary' | 'secondary'
}

export default function Button({ href, children, variant = 'primary' }: ButtonProps) {
  const isPrimary = variant === 'primary'

  return (
    <Link
      href={href}
      style={{
        display: 'inline-block',
        padding: '8px 16px',
        borderRadius: '6px',
        fontSize: '14px',
        backgroundColor: isPrimary ? '#2563eb' : 'white',
        color: isPrimary ? 'white' : '#2563eb',
        border: '1px solid #2563eb',
      }}
    >
      {children}
    </Link>
  )
}