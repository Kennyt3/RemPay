import Head from 'next/head'
import Navbar from '@/component/navbar'
import styles from '@/styles/Home.module.css'
import Hero from '@/component/hero'
import { homePageData } from '@/data/homedata'
import { homePageType } from '@/types/home'

export default function Home(props: homePageType) {
  return (
    <>
      <Head>
        <title>RemPay</title>
      </Head>
      <Navbar />
      <main className={styles.main}>
        <Hero {...props} />
      </main>
    </>
  )
}

export const getStaticProps = async () => {
  const registerData = await homePageData()

  return {
    props: registerData,
  }
}
