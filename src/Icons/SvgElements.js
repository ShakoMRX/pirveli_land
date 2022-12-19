import React from 'react'
import { BirdBottom, BirdTop } from './Birds'

export default function SvgElements() {
  return (
    <svg visibility={'hidden'} width={0} height={0}>
      <BirdTop />
      <BirdBottom />
    </svg>
  )
}
