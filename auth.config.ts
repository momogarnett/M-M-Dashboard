import type { NextAuthConfig } from 'next-auth'
import Google from 'next-auth/providers/google'

// Lightweight config for Edge Runtime (middleware)
// No database adapter — uses JWT for session checks
export const authConfig: NextAuthConfig = {
  providers: [Google],
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user
      const isApproved = auth?.user?.approved === true
      const isAuthPage = nextUrl.pathname.startsWith('/auth')
      const isApiRoute = nextUrl.pathname.startsWith('/api')

      if (isAuthPage || isApiRoute) return true
      if (!isLoggedIn) return false
      if (!isApproved) {
        return Response.redirect(new URL('/auth/pending', nextUrl))
      }
      return true
    },
  },
}
