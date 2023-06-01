import type { Metadata } from 'next'
import ttNorms from './lib/fonts'
import SiteHeader from './components/SiteHeader'
import './styles/globals.scss'

export const metadata: Metadata = {
  title: {
    template: '%s | Helix',
    default: 'Helix',
  },
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={ttNorms.variable}>
        {/* @ts-expect-error Async Server Component */}
        <SiteHeader />
        {children}
      </body>
    </html>
  )
}
