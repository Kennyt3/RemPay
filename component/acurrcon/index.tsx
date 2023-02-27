import React from 'react'
import Acurr from '@/atoms/acurr'
import acurrdata from '@/data/acurr'
import styles from './Acurrcon.module.css'
import Image from 'next/image'
import { homePageType } from '@/types/home'

const Acurrcon = (props: homePageType) => {
  const { acurr, acurrimg } = props
  return (
    <div className={styles.container}>
      <div className={styles.rightcon}>
        {acurrdata.map((item, index) => (
          <Acurr {...item} />
        ))}
      </div>
      <div className={styles.leftcon}>
        <Image width={200} height={200} alt={acurr} src={acurrimg} />
      </div>
    </div>
  )
}

export default Acurrcon
