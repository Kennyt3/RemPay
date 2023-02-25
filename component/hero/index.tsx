import React from 'react'
import styles from './Hero.module.css'
import { homePageType } from '@/types/home'
import Lefthero from '../lefthero'
import Righthero from '../righthero'

const Hero = (props: homePageType) => {
  return (
    <div className={styles.container}>
      <div className={styles.right}>
        <Righthero {...props} />
      </div>
      <div className={styles.left}>
        <Lefthero {...props} />
      </div>
    </div>
  )
}

export default Hero
