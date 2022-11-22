import React from 'react'
import MainLayout from '../layouts/MainLayout'
import Image from 'next/image'
import styles from './Home.module.scss'

const Index = () => {
  return (
    <MainLayout title="Домашняя страница">
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus,
        dolor dolorum eveniet magni omnis perspiciatis quasi repudiandae saepe
        tenetur. Ab aut error explicabo nemo nulla placeat quidem quo rerum.
      </p>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus,
        dolor dolorum eveniet magni omnis perspiciatis quasi repudiandae saepe
        tenetur. Ab aut error explicabo nemo nulla placeat quidem quo rerum.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus,
        dolor dolorum eveniet magni omnis perspiciatis quasi repudiandae saepe
        tenetur. Ab aut error explicabo nemo nulla placeat quidem quo rerum.
      </p>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus,
        dolor dolorum eveniet magni omnis perspiciatis quasi repudiandae saepe
        tenetur. Ab aut error explicabo nemo nulla placeat quidem quo rerum.
      </p>
      <div className={styles.benefits}>
        <div className={styles.benefit}>
          <Image src="/starIcon.svg" width={43} height={43} />
          <p>Бесплатная доставка при заказе от 3000 рублей</p>
        </div>
        <div className={styles.benefit}>
          <Image src="/consultIcon.svg" width={43} height={43} />
          <p>Бесплатная консультация косметолога</p>
        </div>
        <div className={styles.benefit}>
          <Image src="/friendIcon.svg" width={43} height={43} />
          <p>Дружественная система лоялности</p>
        </div>
      </div>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab blanditiis
        distinctio eaque est et fugiat impedit laboriosam magni molestiae natus
        omnis porro praesentium quaerat quas quasi tenetur ut voluptatibus,
        voluptatum.
        <span className={styles.more}>Подробней...</span>
      </p>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab blanditiis
        distinctio eaque est et fugiat impedit laboriosam magni molestiae natus
        omnis porro praesentium quaerat quas quasi tenetur ut voluptatibus,
        voluptatum.
        <span className={styles.more}>Зарегестрировать промо-код...</span>
      </p>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab blanditiis
        voluptatum.
        <span className={styles.more}>Подробнее...</span>
      </p>
    </MainLayout>
  )
}

export default Index
