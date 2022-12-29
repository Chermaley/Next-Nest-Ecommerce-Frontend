'use client'

import { SessionProvider } from 'next-auth/react'
import { PropsWithChildren } from 'react'
import { WebsocketProvider } from '../websocket/WebsocketContextProvider'

export default function Providers({ children }: PropsWithChildren) {
  return (
    <SessionProvider>
      <WebsocketProvider>{children}</WebsocketProvider>
    </SessionProvider>
  )
}
