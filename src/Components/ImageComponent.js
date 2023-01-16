/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image'
import React from 'react'

export default function ImageComponent({children, ...props}) {
  return (
    <div className='image-wrapper'>
      <Image {...props} alt={'Pirverli'}  />
    </div>
  )
}
