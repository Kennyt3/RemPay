import React from 'react'
import styles from './Leading.module.css'
import Image from 'next/image'
import { homePageType } from '@/types/home'
const Leading = (props: homePageType) => {
  const { leading, tech4dev, Triplec, Reina, kodafrica, Blackulture } = props
  return (
    <div className={styles.container}>
      <div className={styles.subcontainer}>
        <h4 className={styles.head}>{leading}</h4>
        <div className={styles.imageCon}>
          <Image
            width={60}
            height={60}
            src={tech4dev}
            alt='hero Image'
            className={styles.image}
          />
          <Image
            width={60}
            height={60}
            src={Triplec}
            alt='hero Image'
            className={styles.image}
          />
          <Image
            width={60}
            height={60}
            src={Reina}
            alt='hero Image'
            className={styles.image}
          />
          <Image
            width={60}
            height={60}
            src={kodafrica}
            alt='hero Image'
            className={styles.image}
          />
          <Image
            width={60}
            height={60}
            src={Blackulture}
            alt='hero Image'
            className={styles.image}
          />
        </div>
      </div>
    </div>
  )
}

export default Leading
