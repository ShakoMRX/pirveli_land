import React, { forwardRef } from 'react'

// eslint-disable-next-line react/display-name
export default forwardRef(({ children, ...props }, ref) => {
  return (
    <div ref={ref} {...props}>
      {children}
    </div>
  )
})
