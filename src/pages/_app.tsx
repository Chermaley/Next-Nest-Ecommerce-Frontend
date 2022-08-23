import type { AppProps } from "next/app";
import { wrapper } from "../store/store";
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NotificationContainer />
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(MyApp);
