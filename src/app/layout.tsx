import type { Metadata } from 'next'
import './globals.css'
import '../styles/components.css'

export const metadata: Metadata = {
  title: 'VKM Traders - Yarn Suppliers to Manufacturers',
  description: 'VKM Traders specializes in the bulk supply of high quality yarns including acrylic, filament, and poly viscose yarns to manufacturers.',
  keywords: 'yarn suppliers, acrylic yarn, filament yarn, poly viscose, yarn manufacturers, bulk yarn supply',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}