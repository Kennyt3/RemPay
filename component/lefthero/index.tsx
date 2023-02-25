import React from 'react'
import { homePageType } from '@/types/home'
import styles from './Lefthero.module.css'
import Image from 'next/image'

const Lefthero = (props: homePageType) => {
  return (
    <div className={styles.container}>
      <Image
        width={400}
        height={400}
        src='/pics/Hero.png'
        alt='hero Image'
        className={styles.image}
      />
    </div>
  )
}

export default Lefthero
