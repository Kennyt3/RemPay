import React from 'react'
import { cardProps } from '@/types/card'
import Image from 'next/image'
import styles from './Card.module.css'

const Card = (props: cardProps) => {
  const { image, subheading, heading, name } = props
  return (
    <div className={styles.container}>
      <div className={styles.imageCon}>
        <Image
          width={70}
          height={70}
          src={image}
          alt={name}
          className={styles.image}
        />
      </div>
      <h4 className={styles.head}>{heading}</h4>
      <p className={styles.para}>{subheading}</p>
    </div>
  )
}

export default Card
