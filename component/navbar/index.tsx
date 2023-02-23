import Logo from '@/atoms/logo'
import React from 'react'
import Dropdown from '../dropdown'
import styles from './Navbar.module.css'
import Link from 'next/link'
import { RiMenu2Fill } from 'react-icons/ri'
const Navbar = () => {
  return (
    <header className={styles.container}>
      <nav className={styles.navigation}>
        <Logo />
        <ul className={styles.navLinks}>
          <li>
            <Link href='/about' className={styles.navLink}>
              Why RemPay
            </Link>
          </li>
          <li>
            <Link href='/pricing' className={styles.navLink}>
              Pricing
            </Link>
          </li>
          <li>
            <Dropdown />
          </li>
          <li>
            <Link href='/about' className={styles.navLink}>
              About
            </Link>
          </li>
        </ul>
        <ul className={styles.leftnavLinks}>
          <li>
            <Link href='/login' className={styles.navLink}>
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
