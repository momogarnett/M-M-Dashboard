'use client'
import { signOut } from 'next-auth/react'

export default function SignOutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: '/auth/signin' })}
      className="text-sm text-white/70 hover:text-white transition-colors cursor-pointer"
    >
      Sign Out
    </button>
  )
}
