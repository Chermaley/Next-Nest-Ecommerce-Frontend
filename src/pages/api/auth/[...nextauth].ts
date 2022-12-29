import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { NextApiRequest, NextApiResponse } from 'next'
import { Tokens } from '../../../services/models'
import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})

export const authOptions: NextAuthOptions = {
  session: { strategy: 'jwt', maxAge: 60 * 60 * 24 * 10 },
  secret: process.env.SECRET,
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        if (credentials) {
          const signInResponse = await axiosInstance.post<Tokens>(
            '/auth/local/signin',
            {
              email: credentials.email,
              password: credentials.password,
            }
          )
          if (signInResponse.data) {
            const userResponse = await axiosInstance.get(`/users/me`, {
              headers: {
                Authorization: `${process.env.ACCESS_TOKEN_PREFIX} ${signInResponse.data.accessToken}`,
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
}

export default (req: NextApiRequest, res: NextApiResponse) => {
  return NextAuth(req, res, authOptions)
}
