import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'M&M Dashboard | Mind and Machine DFW',
  description: 'Dashboard for Mind and Machine DFW networking group',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-mm-light text-mm-dark">
        <div className="min-h-screen flex flex-col">
          {/* Navigation placeholder */}
          <nav className="bg-mm-blue text-white px-6 py-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              <div className="text-xl font-bold">M&M Dashboard</div>
              <div className="text-sm">Mind and Machine DFW</div>
            </div>
          </nav>

          {/* Main content */}
          <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-8">
            {children}
          </main>

          {/* Footer placeholder */}
          <footer className="bg-mm-dark text-white text-center py-4 mt-12">
            <p className="text-sm">© 2026 Mind and Machine DFW. All rights reserved.</p>
          </footer>
        </div>
      </body>
    </html>
  )
}
