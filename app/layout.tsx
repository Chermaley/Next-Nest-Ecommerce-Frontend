'use client'

import React, { useState, useEffect } from 'react'
import styles from './layout.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import Head from './head'
import { SearchInput } from '../src/components/SearchInput'
import moment from 'moment'
import Providers from './providers'
import { useWebsocketStore } from '../websocket/WebsocketContextProvider'
import 'moment/locale/ru'
import '../styles/global.css'

moment.locale('ru')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isSearchInputShown, setIsSearchInputShown] = useState(false)
  const toggleInput = () => setIsSearchInputShown(!isSearchInputShown)

  return (
    <html lang="ru">
      <Head />
      <body>
        <Providers>
          <div className={styles.mainLayout}>
            <div className={styles.mainLayout__header}>
              <TopHeader onSearchButtonPressed={toggleInput} />
              <NavHeader />
            </div>
            <main className={styles.mainLayout__content}>{children}</main>
            {isSearchInputShown && (
              <SearchInput onCloseRequested={toggleInput} />
            )}
          </div>
          {/*<NotificationContainer />*/}
        </Providers>
      </body>
    </html>
  )
}

const NavHeader: React.FC = () => {
  return (
    <header>
      <nav className={styles.navHeader}>
        <Link href="/">
          <div className={styles.navHeader__button}>Главная</div>
        </Link>
        <Link href="/catalog">
          <div className={styles.navHeader__button}>Каталог продукции</div>
        </Link>
        <Link href="/consult">
          <div className={styles.navHeader__button}>Консультации</div>
        </Link>
        <Link href="/personal">
          <div className={styles.navHeader__button}>Личный кабинет</div>
        </Link>
      </nav>
    </header>
  )
}

const TopHeader: React.FC<{ onSearchButtonPressed: () => void }> = ({
  onSearchButtonPressed,
}) => {
  const session = useSession()
  const user = session.data?.user
  const accessToken = user?.accessToken
  const [_, setWebsocketStore] = useWebsocketStore()
  // const skip = useTypedSelector((state) => state.auth.skip)
  // const { data: basket } = useFetchBasketQuery(undefined, {
  //   skip,
  // })
  // const productsInBasketCount = useMemo(
  //   () =>
  //     basket?.products.reduce((count, product) => count + product.quantity, 0),
  //   [basket]
  // )
  //
  useEffect(() => {
    if (accessToken) {
      setWebsocketStore({ accessToken })
    }
  }, [setWebsocketStore, accessToken])

  return (
    <nav className={styles.topHeader}>
      <div className={styles.topHeader__logo}>LOGO</div>
      <div className={styles.topHeader__buttons}>
        <Image
          src={'/searchIcon.svg'}
          width={30}
          height={30}
          onClick={onSearchButtonPressed}
          className={styles.topHeader__button}
          alt="search"
          priority
        />
        <Link href="/personal">
          <Image
            src={'/personIcon.svg'}
            width={30}
            height={30}
            className={styles.topHeader__button}
            alt="personal"
            priority
          />
        </Link>
        <div>
          {/*{productsInBasketCount ? (*/}
          {/*  <div className={styles.badge}>{productsInBasketCount}</div>*/}
          {/*) : null}*/}
          <Link href="/basket">
            <Image
              src={'/basketIcon.svg'}
              width={30}
              height={30}
              className={styles.topHeader__button}
              alt="basket"
              priority
            />
          </Link>
        </div>
      </div>
    </nav>
  )
}
