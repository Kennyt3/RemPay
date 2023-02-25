import React from 'react'
import Image from 'next/image'
import styles from './Logo.module.css'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link href='/' className={styles.container}>
      <Image width={20} height={20} src='/pics/logo.png' alt='logo' />
      <h1>
        <span className={styles.Rem}>Rem</span>
        <span className={styles.Pay}>Pay</span>
      </h1>
    </Link>
  )
}

export default Logo
