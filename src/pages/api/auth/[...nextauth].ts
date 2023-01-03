import NextAuth, { NextAuthOptions, User } from 'next-auth'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { prisma } from '../../../server/db/client'
import Credentials from 'next-auth/providers/credentials'

export const authOptions: NextAuthOptions = {
  session: { strategy: 'jwt', maxAge: 60 * 60 * 24 * 10 },
  secret: process.env.SECRET,
  adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      name: 'credentials',
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        if (credentials) {
          const user = await prisma.user.findUnique({
            where: {
              email: credentials.email,
            },
          })
          if (user) {
            return {
              id: user.id,
              email: user.email,
              isAdmin: user.roles.some((role) => role === 'ADMIN'),
            }
          }
        }
        return null
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.user = user
      }

      return token
    },
    session: async ({ session, token }) => {
      session.user = token.user
      return session
    },
  },
}

export default NextAuth(authOptions)
