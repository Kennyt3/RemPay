import Head from 'next/head'
import Navbar from '@/component/navbar'
import styles from '@/styles/Home.module.css'

export default function Home() {
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
