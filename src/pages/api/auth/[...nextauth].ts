import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { NextApiRequest, NextApiResponse } from 'next'
import config from '../../../../config'
import { $api } from '../../../services/api'
import { Tokens } from '../../../services/models'

export const authOptions = (
  req: NextApiRequest,
  res: NextApiResponse
): NextAuthOptions => ({
  session: { strategy: 'jwt', maxAge: 60 * 60 * 24 * 10 },
  secret: config.secret,
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        if (credentials) {
          const signInResponse = await $api.post<Tokens>(`/auth/local/signin`, {
            email: credentials.email,
            password: credentials.password,
          })
          if (signInResponse.data) {
            const userResponse = await $api.get(`/users/me`, {
              headers: {
                Authorization: `${config.accessTokenPrefix} ${signInResponse.data.accessToken}`,
              },
            })
            return {
              ...userResponse.data,
              accessToken: signInResponse.data.accessToken,
            }
          }
        }
        return null
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user, profile }) => {
      user && (token.user = user)
      return token
    },
    session: async ({ session, token }) => {
      session.user = token.user
      return session
    },
  },
})

export default (req: NextApiRequest, res: NextApiResponse) => {
  return NextAuth(req, res, authOptions(req, res))
}
