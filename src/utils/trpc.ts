import {
  createWSClient,
  httpBatchLink,
  loggerLink,
  splitLink,
  wsLink,
} from '@trpc/client'
import { createTRPCNext } from '@trpc/next'
import { type inferRouterInputs, type inferRouterOutputs } from '@trpc/server'
import superjson from 'superjson'
import { type AppRouter } from '../server/trpc/router/_app'
import { NextPageContext } from 'next'

const getBaseUrl = () => {
  if (typeof window !== 'undefined') return '' // browser should use relative url
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}` // SSR should use vercel url
  return `http://localhost:${process.env.PORT ?? 3000}` // dev SSR should use localhost
}

const baseTrpcUrl = `${getBaseUrl()}/api/trpc`

function getEndingLink(ctx: NextPageContext | undefined) {
  const ws = () => {
    if (typeof window === 'undefined') {
      return httpBatchLink({
        url: baseTrpcUrl,
        headers() {
          if (ctx?.req) {
            // on ssr, forward client's headers to the server
            return {
              ...ctx.req.headers,
              'x-ssr': '1',
            }
          }
          return {}
        },
      })
    }
    const client = createWSClient({
      url: process.env.NEXT_PUBLIC_WS_URL ?? '',
    })
    return wsLink<AppRouter>({
      client,
    })
  }
  return splitLink({
    condition(op) {
      return op.path.includes('chat')
    },
    true: ws(),
    false: httpBatchLink({ url: baseTrpcUrl }),
  })
}

export const trpc = createTRPCNext<AppRouter>({
  config({ ctx }) {
    return {
      transformer: superjson,
      links: [
        loggerLink({
          enabled: (opts) =>
            process.env.NODE_ENV === 'development' ||
            (opts.direction === 'down' && opts.result instanceof Error),
        }),
        getEndingLink(ctx),
      ],
    }
  },
  ssr: true,
})

/**
 * Inference helper for inputs
 * @example type HelloInput = RouterInputs['example']['hello']
 **/
export type RouterInputs = inferRouterInputs<AppRouter>
/**
 * Inference helper for outputs
 * @example type HelloOutput = RouterOutputs['example']['hello']
 **/
export type RouterOutputs = inferRouterOutputs<AppRouter>
