import React from 'react'
import { homePageType } from '@/types/home'
import styles from './Lino.module.css'
import Image from 'next/image'
const Lino = (props: homePageType) => {
  const { linohead, linopara, linoimage } = props
  return (
    <div className={styles.container}>
      <div className={styles.subcon}>
        <div>
          <h4 className={styles.head}>{linohead}</h4>
          <p className={styles.subheading}>{linopara}</p>
        </div>
        <div className={styles.imagecon}>
          <Image width={300} height={300} src={linoimage} alt='dollar' />
        </div>
      </div>
    </div>
  )
}

export default Lino
