import type { AppProps } from 'next/app'
import 'react-notifications/lib/notifications.css'
import { SessionProvider } from 'next-auth/react'
import '../styles/global.css'
import 'moment/locale/ru'
import moment from 'moment/moment'
import { trpc } from '../utils/trpc'

moment.locale('ru')

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
      {/*<NotificationContainer />*/}
    </SessionProvider>
  )
}

export default trpc.withTRPC(App)
