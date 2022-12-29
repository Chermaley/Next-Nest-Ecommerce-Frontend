import React from 'react'
import styles from './home.module.scss'
import { PageTitle } from './components/PageTitle'

const Index = () => {
  return (
    <div>
      <PageTitle>Главная</PageTitle>
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
    </div>
  )
}

export default Index
