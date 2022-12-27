import React from 'react'
import { BirdBigger, BirdBottom, BirdPath, BirdTop } from './Birds'

export default function SvgElements() {
  return (
    <svg width={0} height={0}>
      <svg width={0} height={0}>
        <BirdPath />
      </svg>
      <svg visibility={'hidden'} width={0} height={0}>
        <BirdTop />
        <BirdBottom />
        <BirdBigger />
        <svg id="yumi_burger" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_5191_5041)">
            <path d="M4 8H20" stroke="#383838" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 16H20" stroke="#383838" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <defs>
            <clipPath id="clip0_5191_5041">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>

      </svg>
    </svg>
  )
}
