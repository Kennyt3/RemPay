import React from 'react'
import Acurr from '@/atoms/acurr'
import acurrdata from '@/data/acurr'

const Acurrcon = () => {
  return (
    <div>
      {acurrdata.map((item, index) => (
        <Acurr {...item} />
      ))}
    </div>
  )
}

export default Acurrcon
