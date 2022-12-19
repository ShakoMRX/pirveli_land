import React from 'react'

export default function Layout({
  children
}) {
  return (
    <div className='app-layout app-layout--wrap'>
      {children}
    </div>
  )
}
