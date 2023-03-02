import React from 'react'
import { datt } from '@/data/datts'
import styles from './Links.module.css'

const Links = (props: any) => {
  return (
    <div className={styles.container}>
      {datt.map((item: any) => (
        <div>
          <h4 className={styles.head}>{item.head}</h4>
          {item.bod.map((item: any, index: any) => (
            <p className={styles.text} key={index}>
              {item}
            </p>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Links
