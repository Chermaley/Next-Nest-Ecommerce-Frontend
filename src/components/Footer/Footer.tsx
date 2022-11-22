import React from "react";
import styles from "../../layouts/MainLayout.module.scss";

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <div>
        <div className={styles.footerLogo}>LOGO</div>
        <div className={styles.footerInfo}>тел: 9 999 999 99</div>
        <div className={styles.footerInfo}>E-mail: slimix23@gmail.com</div>
      </div>
      <div>
        <div className={styles.footerTitleLink}>ИНТЕРНЕТ МАГАЗИН</div>
        <div className={styles.footerLink}>Каталог товаров</div>
        <div className={styles.footerLink}>Как сделать заказ</div>
        <div className={styles.footerLink}>Способы оплаты</div>
        <div className={styles.footerLink}>Доставка</div>
      </div>
      <div>
        <div className={styles.footerTitleLink}>ЛИЧНЫЙ КАБИНЕТ</div>
        <div className={styles.footerLink}>Политика конфеденциальности</div>
        <div className={styles.footerLink}>Публичная оферта</div>
      </div>
      <div>
        <div className={styles.footerTitleLink}>О КОМПАНИИ</div>
        <div className={styles.footerLink}>Связаться с нами</div>
        <div className={styles.footerLink}>Реквизиты компании</div>
      </div>
    </div>
  )
}

export 