import type { Metadata } from 'next'
import { League_Spartan } from 'next/font/google'
import './globals.css'

const leagueSpartan = League_Spartan({
  subsets: ['latin'],
  variable: '--font-league-spartan',
})

export const metadata: Metadata = {
  title: 'M&M Dashboard | Mind and Machine DFW',
  description: 'Dashboard for Mind and Machine DFW networking group',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${leagueSpartan.variable} font-sans bg-mm-light text-mm-dark`}>
        {children}
      </body>
    </html>
  )
}
