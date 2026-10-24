import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SocietalPro — Honest societies. Honest country.',
  description: 'A society management platform that helps put payments, decisions and everyday work on record. Start building the habit of transparency in your society.',
  openGraph: {
    title: 'SocietalPro — Honest societies. Honest country.',
    description: 'Nothing hidden. Everything sorted.',
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700&family=Source+Serif+4:opsz,wght@8..60,400;8..60,500&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
