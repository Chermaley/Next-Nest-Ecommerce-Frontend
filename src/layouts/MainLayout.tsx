import React, { useEffect, useMemo, useState, ReactNode } from 'react'
import styles from './MainLayout.module.scss'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import SearchInput from '../components/SearchInput/SearchInput'
import { useSession } from 'next-auth/react'
import { useAppDispatch } from '../hooks/useAppDispatch'
import { chatActions } from '../store/reducers/chatSlice'
import { authActions } from '../store/reducers/authSlice'
import { useFetchBasketQuery } from '../services/BasketService'
import { useTypedSelector } from '../hooks/useTypedSelectors'

type MainLayoutProps = {
  children: ReactNode
  title: string
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, title }) => {
  const session = useSession()
  const user = session.data?.user
  const accessToken = user?.accessToken
  const [isSearchInputShown, setIsSearchInputShown] = useState(false)
  const toggleInput = () => setIsSearchInputShown(!isSearchInputShown)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (accessToken) {
      dispatch(chatActions.startConnecting({ accessToken }))
      dispatch(authActions.setAccessToken(accessToken))
    }
  }, [dispatch, accessToken])

  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={styles.mainLayout}>
        <div className={styles.mainLayout__header}>
          <TopHeader onSearchButtonPressed={toggleInput} />
          <NavHeader />
        </div>
        <main className={styles.mainLayout__content}>{children}</main>
        {isSearchInputShown && <SearchInput onCloseRequested={toggleInput} />}
      </div>
    </div>
  )
}

export default MainLayout

const TopHeader: React.FC<{ onSearchButtonPressed: () => void }> = ({
  onSearchButtonPressed,
}) => {
  const skip = useTypedSelector((state) => state.auth.skip)
  const { data: basket } = useFetchBasketQuery(undefined, {
    skip,
  })
  const productsInBasketCount = useMemo(
    () =>
      basket?.products.reduce((count, product) => count + product.quantity, 0),
    [basket]
  )

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
        {!skip ? (
          <div>
            {productsInBasketCount ? (
              <div className={styles.badge}>{productsInBasketCount}</div>
            ) : null}
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
        ) : null}
      </div>
    </nav>
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
