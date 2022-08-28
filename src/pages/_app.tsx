import type { AppProps } from "next/app";
import { wrapper } from "../store/store";
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { useEffect } from "react";
import { chatActions } from "../store/reducers/chatSlice";
import { useAppDispatch } from "../hooks/useAppDispatch";

function MyApp({ Component, pageProps }: AppProps) {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(chatActions.startConnecting())
  }, [dispatch])

  return (
    <>
      <NotificationContainer />
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(MyApp);
