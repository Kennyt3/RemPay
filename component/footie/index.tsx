import { homePageType } from '@/types/home'
import React from 'react'
import styles from './Footie.module.css'

const Footie = (props: homePageType) => {
  const { iehead, iesub } = props
  return (
    <div className={styles.container}>
      <div className={styles.kos}>
        <div className={styles.subcon}>
          <h3 className={styles.head}>{iehead}</h3>
          <p className={styles.para}>{iesub}</p>
        </div>
      </div>
    </div>
  )
}

export default Footie
