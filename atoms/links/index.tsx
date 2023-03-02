import React from 'react'
import { datt } from '@/data/datts'

const Links = (props: any) => {
  return (
    <div>
      {datt.map((item: any) => (
        <div>
          <h4>{item.head}</h4>
          {item.bod.map((item: any, index: any) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Links
