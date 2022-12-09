import 'next-auth'
import { ThunkDispatch } from '@reduxjs/toolkit'

declare module 'next-auth' {
  interface Session {
    user: { id: string; email: string; roles: Role[]; accessToken: string }
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    user: import('./services/models/User').User
  }
}
