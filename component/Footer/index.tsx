import React from 'react'
import styles from './Footer.module.css'
import { datt } from '@/data/datts.js'
import Links from '@/atoms/links'
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.subcon}></div>
      {/* {datt.map((item: any, index: any) => ( */}
      <Links />
      {/* ))} */}
    </div>
  )
}

export default Footer
