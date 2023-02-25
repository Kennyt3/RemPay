import Logo from '@/atoms/logo'
import React from 'react'
import Dropdown from '../dropdown'
import styles from './Navbar.module.css'
import Link from 'next/link'
import { RiMenu2Fill } from 'react-icons/ri'
import { useRouter } from 'next/router'
const Navbar = () => {
  const rout = useRouter()
  return (
    <header className={styles.container}>
      <nav className={styles.navigation}>
        <Logo />
        <ul className={styles.navLinks}>
          <li>
            <Link
              href='/about'
              className={` ${
                rout.pathname === '/about' ? styles.navactive : styles.navLink
              }`}
            >
              Why RemPay
            </Link>
          </li>
          <li>
            <Link
              href='/pricing'
              className={` ${
                rout.pathname === '/pricing' ? styles.navactive : styles.navLink
              }`}
            >
              Pricing
            </Link>
          </li>
          <li>
            <Dropdown />
          </li>
          <li>
            <Link
              href='/about'
              className={` ${
                rout.pathname === '/about' ? styles.navactive : styles.navLink
              }`}
            >
              About
            </Link>
          </li>
        </ul>
        <ul className={styles.leftnavLinks}>
          <li>
            <Link
              href='/login'
              className={` ${
                rout.pathname === '/login' ? styles.navactive : styles.navLink
              }`}
            >
              Sign in
            </Link>
          </li>
          <li>
            <Link href='/demo' className={styles.button}>
              Request a Demo
            </Link>
          </li>
        </ul>
        <RiMenu2Fill className={styles.menubar} />
      </nav>
    </header>
  )
}

export default Navbar
