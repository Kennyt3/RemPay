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
      {acurrdata.map((item, index) => (
        <Acurr key={index} {...item} />
      ))}
    </div>
  )
}

export default Acurrcon
