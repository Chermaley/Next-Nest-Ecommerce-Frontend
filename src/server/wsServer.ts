import { createContext } from './trpc/context'
import { appRouter } from './trpc/router/_app'
import { applyWSSHandler } from '@trpc/server/adapters/ws'
import fetch from 'node-fetch'
import ws from 'ws'

if (!global.fetch) {
  ;(global as any).fetch = fetch
}
const wss = new ws.Server({
  port: 5600,
})

const handler = applyWSSHandler({
  wss,
  router: appRouter,
  createContext,
})

wss.on('connection', (ws) => {
  console.log(`➕➕ Connection (${wss.clients.size})`)
  ws.once('close', () => {
    console.log(`➖➖ Connection (${wss.clients.size})`)
  })
})
console.log('✅ WebSocket Server listening on ws://localhost:5600')

process.on('SIGTERM', () => {
  console.log('SIGTERM')
  handler.broadcastReconnectNotification()
  wss.close()
})
