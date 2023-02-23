import React from 'react'
import Image from 'next/image'
import styles from './Logo.module.css'

const Logo = () => {
  return (
    <div className={styles.container}>
      <Image width={20} height={20} src='/pics/logo.png' alt='logo' />
      <h1>
        <span className={styles.Rem}>Rem</span>
        <span className={styles.Pay}>Pay</span>
      </h1>
    </div>
  )
}

export default Logo
