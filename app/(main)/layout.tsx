import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import SignOutButton from '@/components/SignOutButton'

export default async function MainLayout({ children }: { children: React.ReactNode }) {
  const session = await auth()
  if (!session?.user) redirect('/auth/signin')
  if (!session.user.approved) redirect('/auth/pending')
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-mm-blue text-white px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo-clean.svg" alt="M&M" className="w-8 h-8 object-contain" />
            <span className="text-xl font-bold">M&M Dashboard</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-sm text-white/70">{session.user.name ?? session.user.email}</span>
            <SignOutButton />
          </div>
        </div>
      </nav>
      <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-8">
        {children}
      </main>
      <footer className="bg-mm-dark text-white text-center py-4 mt-12">
        <p className="text-sm">© 2026 Mind and Machine DFW. All rights reserved.</p>
      </footer>
    </div>
  )
}
