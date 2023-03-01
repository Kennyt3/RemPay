import React from 'react'
import { homePageType } from '@/types/home'
import styles from './Lino.module.css'
import Image from 'next/image'
import Acurrcon from '../acurrcon'
const Lino = (props: homePageType) => {
  const { linohead, acurr, acurrimg, linopara, linoimage } = props
  return (
    <div className={styles.container}>
      <div className={styles.subcon}>
        <div className={styles.leftcon}>
          <h4 className={styles.head}>{linohead}</h4>
          <p className={styles.subheading}>{linopara}</p>
          <Acurrcon {...props} />
        </div>
        <div className={styles.rightcon}>
          <Image width={300} height={300} src={linoimage} alt='graph' />
          <Image width={400} height={400} alt={acurr} src={acurrimg} />
        </div>
      </div>
    </div>
  )
}

export default Lino
