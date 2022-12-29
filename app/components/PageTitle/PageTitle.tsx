import React from 'react'
import styles from './PageTitle.module.scss'
import Image from 'next/image'

const PageTitle: React.FC<{ children: any; onBack?: () => void }> = ({
  children,
  onBack,
}) => {
  return (
    <div className={styles.wrapper}>
      {onBack ? (
        <Image
          className={styles.back}
          src={'/backIcon.svg'}
          alt="back"
          width={24}
          height={24}
          onClick={onBack}
        />
      ) : null}
      <h1 className={styles.title}>{children}</h1>
    </div>
  )
}

export default PageTitle
