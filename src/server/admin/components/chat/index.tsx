import * as React from 'react'
import Chat from './components/Chat'
import ChatList from './components/ChatList'
import { Box } from '@adminjs/design-system'
import styled from 'styled-components'
import { QueryClient } from '@tanstack/query-core'
import { useState } from 'react'
import { QueryClientProvider } from '@tanstack/react-query'
import { createTRPCReact } from '@trpc/react-query'
import { AppRouter } from '../../../trpc/router/_app'
import { createWSClient, wsLink } from '@trpc/client'
import { Consultation } from '@prisma/client'
import superjson from 'superjson'

export const trpcReact = createTRPCReact<AppRouter>()

function Dashboard() {
  const [activeConsultation, setActiveConsultation] =
    useState<Consultation | null>(null)
  const resetActiveConsultation = () => setActiveConsultation(null)
  const [queryClient] = useState(() => new QueryClient())
  const [trpcClient] = useState(() =>
    trpcReact.createClient({
      transformer: superjson,
      links: [
        wsLink<AppRouter>({
          client: createWSClient({
            url: process.env.NEXT_PUBLIC_WS_URL ?? '',
          }),
        }),
      ],
    })
  )
  const onJoinConsultation = (consultation: Consultation) => {
    setActiveConsultation(consultation)
  }

  return (
    <trpcReact.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <Container variant="grey">
          <ChatList onJoin={onJoinConsultation} />
          {activeConsultation ? (
            <Chat
              onClose={resetActiveConsultation}
              activeConsultation={activeConsultation}
            />
          ) : null}
        </Container>
      </QueryClientProvider>
    </trpcReact.Provider>
  )
}

export default Dashboard

const Container = styled(Box)`
  width: 100%;
  max-height: 90vh;
  gap: 10px;
  display: grid;
  grid-template-columns: 2fr 4fr;
  padding-bottom: 24px;
`
