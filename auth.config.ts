import type { NextAuthConfig } from 'next-auth'
import Google from 'next-auth/providers/google'

export const authConfig: NextAuthConfig = {
  providers: [Google],
  trustHost: true,
  session: { strategy: 'jwt' },
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user
      const isAuthPage = nextUrl.pathname.startsWith('/auth')
      const isApiRoute = nextUrl.pathname.startsWith('/api')

      if (isAuthPage || isApiRoute) return true
      if (!isLoggedIn) return false
      return true
    },
  },
}
