import classNames from 'classnames'
import React from 'react'
import styles from '../../styles/components/Button.module.scss'

export default function Button({
  variant = 'simple',
  size = 'normal',
  className,
  text,
  children,
  reset,
  ...props
}) {
  return (
    <div className={styles.btn}>
      <button className={classNames('btn btn--wrap', {
        [`variant-${variant}`]: variant,
        [`size-${size}`]: size,
        [`reset`]: reset,
      }, className)}>
        {text ? text : children}
      </button>
    </div>
  )
}
