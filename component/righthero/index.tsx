import React from 'react'
import { homePageType } from '@/types/home'
import styles from './Righthero.module.css'
import Image from 'next/image'
const Righthero = (props: homePageType) => {
  const { Heading, subHeading1, subHeading2, arrow } = props
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>{Heading}</h1>
      <p className={styles.subheading1}>{subHeading1}</p>
      <p className={styles.subheading2}>{subHeading2}</p>
      <button className={styles.btn}>Get Started</button>
      <div className={styles.imgcon}>
        <Image
          width={50}
          height={50}
          src={arrow}
          alt='arrow'
          className={styles.image}
        />
      </div>
    </div>
  )
}

export default Righthero
