import type { AppProps } from 'next/app'
import { wrapper } from '../store/store'
import { SessionProvider } from 'next-auth/react'
import '../styles/global.css'
import 'moment/locale/ru'
import moment from 'moment/moment'
import { NotificationContainer } from '../components/Notification'

moment.locale('ru')

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
      <NotificationContainer />
    </SessionProvider>
  )
}

export default wrapper.withRedux(App)
