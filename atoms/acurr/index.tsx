import React from 'react'
import { AcurrType } from '@/types/acurr'
import styles from './Acurr.module.css'
import Image from 'next/image'
const Acurr = (props: AcurrType) => {
  const { rp, head, subhead, name } = props
  return (
    <div className={styles.container}>
      <div className={styles.imagecon}>
        <Image
          width={30}
          height={30}
          alt={name}
          src={rp}
          className={styles.image}
        />
      </div>
      <div className={styles.textcon}>
        <h4>{head}</h4>
        <p>{subhead}</p>
      </div>
    </div>
  )
}

export default Acurr
