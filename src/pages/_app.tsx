import type { AppProps } from 'next/app'
import { wrapper } from '../store/store'
import { NotificationContainer } from 'react-notifications'
import 'react-notifications/lib/notifications.css'
import { SessionProvider } from 'next-auth/react'
import '../styles/global.css'
import 'moment/locale/ru'
import moment from 'moment/moment'

moment.locale('ru')

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <NotificationContainer />
      <Component {...pageProps} />
      <NotificationContainer />
    </SessionProvider>
  )
}

export default wrapper.withRedux(App)
