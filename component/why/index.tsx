import React from 'react'
import styles from './Why.module.css'
import Image from 'next/image'
import cardata from '@/data/cardata'
import Card from '@/atoms/card'
import { homePageType } from '@/types/home'
const Why = (props: homePageType) => {
  const { dollar, bitcoin, whyhead, whypara } = props
  return (
    <div className={styles.container}>
      <div className={styles.subcon}>
        <div className={styles.dollar}>
          <Image width={70} height={70} src={dollar} alt='dollar' />
        </div>
        <div className={styles.textdiv}>
          <h4 className={styles.head}>{whyhead}</h4>
          <p className={styles.para}>{whypara}</p>
        </div>
        <div className={styles.bitcoin}>
          <Image width={200} height={200} src={bitcoin} alt='bitcoin' />
        </div>
      </div>
      <div className={styles.cardcon}>
        {cardata.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </div>
  )
}

export default Why
