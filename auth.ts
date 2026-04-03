import NextAuth from 'next-auth'
import Google from 'next-auth/providers/google'
import { prisma } from '@/lib/prisma'

export const { handlers, signIn, signOut, auth } = NextAuth({
  secret: process.env.AUTH_SECRET,
  trustHost: true,
  session: { strategy: 'jwt' },
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      if (!user.email) return false
      try {
        // Create user if they don't exist
        await prisma.user.upsert({
          where: { email: user.email },
          update: { name: user.name ?? undefined, image: user.image ?? undefined },
          create: {
            email: user.email,
            name: user.name ?? null,
            image: user.image ?? null,
            role: 'READ_ONLY',
            approved: false,
          },
        })
        return true
      } catch (e) {
        console.error('signIn error:', e)
        return false
      }
    },
    async jwt({ token, user }) {
      if (user?.email) {
        const dbUser = await prisma.user.findUnique({
          where: { email: user.email },
          select: { id: true, role: true, approved: true },
        })
        if (dbUser) {
          token.id = dbUser.id
          token.role = dbUser.role
          token.approved = dbUser.approved
        }
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string
        session.user.role = token.role as string
        session.user.approved = token.approved as boolean
      }
      return session
    },
  },
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
  },
})
