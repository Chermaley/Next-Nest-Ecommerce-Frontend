import React, { useState } from "react";
import styles from "./MainLayout.module.scss";
import Link from "next/link";
import Head from "next/head";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useTypedSelector } from "../hooks/useTypedSelectors";
import Image from "next/image";
import SearchInput from "../components/SearchInput/SearchInput";

type MainLayoutProps = {
  children: React.ReactNode;
  title: string;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children, title }) => {
  const [isSearchInputShown, setIsSearchInputShown] = useState(false);
  const basket = useTypedSelector((state) => state.basket.basket);
  const toggleInput = () => setIsSearchInputShown(!isSearchInputShown);

  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={styles.mainLayout}>
        <TopHeader onSearchButtonPressed={toggleInput} />
        <NavHeader />
        <div className={styles.content}>{children}</div>
        <div className={styles.footer}>
          <div className={styles.footerCol}>
            <div className={styles.footerLogo}>
              <Image src="/logo.png" width={245} height={87} />
            </div>
            <div className={styles.footerInfo}>тел: 8 (383) 375-94-22</div>
            <div className={styles.footerInfo}>
              Адрес: 630559, Новосибирская обл., р.п. Кольцово, пр. Академика
              Сандахчиева, зд.13
            </div>
            <div className={styles.footerInfo}>E-mail: info@angiofarm.com</div>
          </div>
          <div className={styles.footerCol}>
            <div className={styles.footerTitleLink}>ИНТЕРНЕТ МАГАЗИН</div>
            <div className={styles.footerLink}>Каталог товаров</div>
            <div className={styles.footerLink}>Как сделать заказ</div>
            <div className={styles.footerLink}>Способы оплаты</div>
            <div className={styles.footerLink}>Доставка</div>
          </div>
          <div className={styles.footerCol}>
            <div className={styles.footerTitleLink}>ЛИЧНЫЙ КАБИНЕТ</div>
            <div className={styles.footerLink}>Политика конфеденциальности</div>
            <div className={styles.footerLink}>Публичная оферта</div>
          </div>
          <div className={styles.footerCol}>
            <div className={styles.footerTitleLink}>О КОМПАНИИ</div>
            <div className={styles.footerLink}>Связаться с нами</div>
            <div className={styles.footerLink}>Реквизиты компании</div>
          </div>
        </div>
        {isSearchInputShown && <SearchInput onCloseRequested={toggleInput} />}
      </div>
      <style global jsx>
        {`
          html,
          body {
            font-family: "Alike", serif;
          }
        `}
      </style>
    </div>
  );
};

export default MainLayout;

const TopHeader: React.FC<{ onSearchButtonPressed: () => void }> = ({
  onSearchButtonPressed,
}) => {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.topHeader}>
      <div className={styles.logo}>
        OneLab
        <br />
        Cosmetology
      </div>
      <div className={styles.topHeaderButtons}>
        <svg
          onClick={onSearchButtonPressed}
          className={styles.topHeaderButton}
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_72_43)">
            <path
              d="M25.2 22.368C27.3287 19.5232 28.3007 15.9777 27.9204 12.445C27.5401 8.91239 25.8356 5.65496 23.1502 3.32847C20.4648 1.00198 16.9977 -0.220848 13.4469 -0.0938581C9.89612 0.0331322 6.52526 1.50051 4.01287 4.0129C1.50048 6.52529 0.0331017 9.89615 -0.0938886 13.4469C-0.220879 16.9977 1.00195 20.4648 3.32844 23.1502C5.65493 25.8357 8.91236 27.5401 12.445 27.9204C15.9776 28.3008 19.5232 27.3287 22.368 25.2L29.168 32L32 29.1733L25.2 22.368ZM14 24C12.0222 24 10.0888 23.4135 8.44428 22.3147C6.79979 21.2159 5.51807 19.6541 4.76119 17.8269C4.00431 15.9996 3.80628 13.9889 4.19213 12.0491C4.57798 10.1093 5.53039 8.32747 6.92892 6.92895C8.32744 5.53042 10.1093 4.57801 12.0491 4.19216C13.9889 3.80631 15.9996 4.00434 17.8268 4.76122C19.6541 5.5181 21.2159 6.79982 22.3147 8.44431C23.4135 10.0888 24 12.0222 24 14C23.9975 16.6514 22.9432 19.1935 21.0683 21.0684C19.1935 22.9432 16.6514 23.9975 14 24Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_72_43">
              <rect width="32" height="32" fill="white" />
            </clipPath>
          </defs>
        </svg>

        <Link href="/personal">
          <svg
            className={styles.topHeaderButton}
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_72_40)">
              <path
                d="M28 32H24V25.3334C24 24.6261 23.719 23.9478 23.219 23.4477C22.7189 22.9476 22.0406 22.6667 21.3333 22.6667H10.6667C9.95942 22.6667 9.28115 22.9476 8.78105 23.4477C8.28095 23.9478 8 24.6261 8 25.3334V32H4V25.3334C4.00212 23.5659 4.70518 21.8714 5.95496 20.6216C7.20474 19.3719 8.89921 18.6688 10.6667 18.6667H21.3333C23.1008 18.6688 24.7953 19.3719 26.045 20.6216C27.2948 21.8714 27.9979 23.5659 28 25.3334V32Z"
                fill="black"
              />
              <path
                d="M16 16C14.4178 16 12.871 15.5308 11.5554 14.6518C10.2398 13.7727 9.21447 12.5233 8.60897 11.0615C8.00347 9.59966 7.84504 7.99113 8.15372 6.43928C8.4624 4.88743 9.22433 3.46197 10.3431 2.34315C11.462 1.22433 12.8874 0.462403 14.4393 0.153721C15.9911 -0.15496 17.5997 0.00346629 19.0615 0.608967C20.5233 1.21447 21.7727 2.23985 22.6518 3.55544C23.5308 4.87104 24 6.41775 24 8C23.9979 10.1211 23.1544 12.1547 21.6545 13.6545C20.1547 15.1544 18.1211 15.9979 16 16ZM16 4C15.2089 4 14.4355 4.2346 13.7777 4.67413C13.1199 5.11365 12.6072 5.73837 12.3045 6.46927C12.0017 7.20017 11.9225 8.00444 12.0769 8.78036C12.2312 9.55629 12.6122 10.269 13.1716 10.8284C13.731 11.3878 14.4437 11.7688 15.2196 11.9231C15.9956 12.0775 16.7998 11.9983 17.5307 11.6955C18.2616 11.3928 18.8864 10.8801 19.3259 10.2223C19.7654 9.56449 20 8.79113 20 8C20 6.93914 19.5786 5.92172 18.8284 5.17158C18.0783 4.42143 17.0609 4 16 4Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_72_40">
                <rect width="32" height="32" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </Link>
        <Link href="/basket">
          <svg
            className={styles.topHeaderButton}
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_72_45)">
              <path
                d="M9.33332 32C10.8061 32 12 30.8061 12 29.3334C12 27.8606 10.8061 26.6667 9.33332 26.6667C7.86056 26.6667 6.66666 27.8606 6.66666 29.3334C6.66666 30.8061 7.86056 32 9.33332 32Z"
                fill="black"
              />
              <path
                d="M22.6667 32C24.1394 32 25.3333 30.8061 25.3333 29.3334C25.3333 27.8606 24.1394 26.6667 22.6667 26.6667C21.1939 26.6667 20 27.8606 20 29.3334C20 30.8061 21.1939 32 22.6667 32Z"
                fill="black"
              />
              <path
                d="M30.6667 4H28V1.33333C28 0.979711 27.8595 0.640573 27.6095 0.390524C27.3594 0.140476 27.0203 0 26.6667 0C26.3131 0 25.9739 0.140476 25.7239 0.390524C25.4738 0.640573 25.3333 0.979711 25.3333 1.33333V4H22.6667C22.3131 4 21.9739 4.14048 21.7239 4.39052C21.4738 4.64057 21.3333 4.97971 21.3333 5.33333C21.3333 5.68696 21.4738 6.02609 21.7239 6.27614C21.9739 6.52619 22.3131 6.66667 22.6667 6.66667H25.3333V9.33333C25.3333 9.68696 25.4738 10.0261 25.7239 10.2761C25.9739 10.5262 26.3131 10.6667 26.6667 10.6667C27.0203 10.6667 27.3594 10.5262 27.6095 10.2761C27.8595 10.0261 28 9.68696 28 9.33333V6.66667H30.6667C31.0203 6.66667 31.3594 6.52619 31.6095 6.27614C31.8595 6.02609 32 5.68696 32 5.33333C32 4.97971 31.8595 4.64057 31.6095 4.39052C31.3594 4.14048 31.0203 4 30.6667 4Z"
                fill="black"
              />
              <path
                d="M29.028 12.968C28.8556 12.9357 28.6785 12.938 28.507 12.9747C28.3355 13.0114 28.173 13.0818 28.0289 13.1817C27.8848 13.2817 27.7619 13.4093 27.6675 13.557C27.573 13.7048 27.5088 13.8699 27.4787 14.0427C27.3124 14.9655 26.8271 15.8007 26.1077 16.4021C25.3883 17.0036 24.4804 17.3332 23.5427 17.3333H7.224L5.97067 6.66667H17.3333C17.687 6.66667 18.0261 6.52619 18.2761 6.27614C18.5262 6.02609 18.6667 5.68695 18.6667 5.33333C18.6667 4.97971 18.5262 4.64057 18.2761 4.39052C18.0261 4.14048 17.687 4 17.3333 4H5.656L5.6 3.53067C5.4851 2.55813 5.01741 1.66154 4.28558 1.01081C3.55375 0.360072 2.60863 0.000417115 1.62933 0L1.33333 0C0.979711 0 0.640573 0.140476 0.390524 0.390524C0.140476 0.640573 0 0.979711 0 1.33333C0 1.68696 0.140476 2.02609 0.390524 2.27614C0.640573 2.52619 0.979711 2.66667 1.33333 2.66667H1.62933C1.95591 2.66671 2.27112 2.78661 2.51516 3.00362C2.75921 3.22063 2.91512 3.51966 2.95333 3.844L4.788 19.444C4.97847 21.0664 5.75797 22.5624 6.97854 23.648C8.19912 24.7336 9.77581 25.3334 11.4093 25.3333H25.3333C25.687 25.3333 26.0261 25.1929 26.2761 24.9428C26.5262 24.6928 26.6667 24.3536 26.6667 24C26.6667 23.6464 26.5262 23.3072 26.2761 23.0572C26.0261 22.8071 25.687 22.6667 25.3333 22.6667H11.4093C10.582 22.6668 9.77502 22.4105 9.09948 21.9329C8.42394 21.4553 7.9131 20.78 7.63733 20H23.5427C25.1055 20.0002 26.6188 19.4512 27.8181 18.4491C29.0173 17.447 29.8264 16.0553 30.104 14.5173C30.1351 14.3449 30.132 14.1681 30.0948 13.9969C30.0576 13.8258 29.987 13.6636 29.887 13.5197C29.7871 13.3758 29.6598 13.253 29.5124 13.1584C29.365 13.0637 29.2004 12.999 29.028 12.968Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_72_45">
                <rect width="32" height="32" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </Link>
      </div>
    </div>
  );
};

const NavHeader: React.FC = () => {
  return (
    <header>
      <nav className={styles.navHeader}>
        <Link href="/">
          <a className={styles.navHeaderButton}>Главная</a>
        </Link>
        <Link href="/catalog">
          <a className={styles.navHeaderButton}>Каталог продукции</a>
        </Link>
        <Link href="/info">
          <a className={styles.navHeaderButton}>О компании</a>
        </Link>
        <Link href="/consult">
          <a className={styles.navHeaderButton}>Консультация косметолога</a>
        </Link>
        <Link href="/personal">
          <a className={styles.navHeaderButton}>Личный кабинет</a>
        </Link>
        {/*<Link href='/support'>*/}
        {/*    <a className={styles.navHeaderButton}>Обратная связь</a>*/}
        {/*</Link>*/}
      </nav>
    </header>
  );
};
