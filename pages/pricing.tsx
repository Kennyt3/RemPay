import React from 'react'
import Head from 'next/head'
import Navbar from '@/component/navbar'
import styles from '@/styles/Home.module.css'
const Pricing = () => {
  return (
    <>
      <Head>
        <title>RemPay</title>
      </Head>
      <Navbar />
      <main className={styles.main}></main>
    </>
  )
}

export default Pricing
