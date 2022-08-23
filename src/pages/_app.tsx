import type { AppProps } from "next/app";
import { wrapper } from "../store/store";
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { useEffect } from "react";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { setUser, User } from "../store/reducers/authSlice";
import jwtDecode from "jwt-decode";

function MyApp({ Component, pageProps }: AppProps) {
  const dispatch = useAppDispatch()
  useEffect(() => {
    const token = localStorage.getItem('accessToken')
    if (token) {
      const user: User = jwtDecode(token);
      dispatch(setUser(user))
    }
  }, [dispatch])
  return (
    <>
      <NotificationContainer />
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(MyApp);
