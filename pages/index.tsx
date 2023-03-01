import Head from 'next/head'
import Navbar from '@/component/navbar'
import styles from '@/styles/Home.module.css'
import Hero from '@/component/hero'
import { homePageData } from '@/data/homedata'
import { homePageType } from '@/types/home'
import Leading from '@/component/leading'
import Why from '@/component/why'
import Lino from '@/component/lino'
import Acurrcon from '@/component/acurrcon'

export default function Home(props: homePageType) {
  return (
    <>
      <Head>
        <title>RemPay</title>
      </Head>
      <Navbar />
      <main className={styles.main}>
        <Hero {...props} />
        <Leading {...props} />
        <Why {...props} />
        <Lino {...props} />
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
