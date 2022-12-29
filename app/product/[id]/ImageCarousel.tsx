'use client'

import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import styles from './Product.module.scss'
import Image from 'next/image'

const ImageCarousel: React.FC<{ images: string[] }> = ({ images }) => {
  return (
    <Carousel emulateTouch swipeable showThumbs={false} showArrows={false}>
      {images.map((image) => (
        <div key={image} className={styles.product__image}>
          <Image
            key={image}
            src={`${process.env.NEXT_PUBLIC_API_URL}/${image}`}
            alt="Продукт"
            fill
          />
        </div>
      ))}
    </Carousel>
  )
}

export default ImageCarousel
