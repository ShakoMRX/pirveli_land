import classNames from 'classnames'
import React from 'react'
import styles from '../../styles/components/Button.module.scss'

export default function Button({
	avatar,
	pulse,
	variant = 'simple',
	size = 'normal',
	className,
	text,
	children,
	reset,
	...props
}){
	return (
			<div className={styles.btn}>
				<button
						style={{
							borderRadius:avatar ? "24px" : "12px",
						}}
						className={classNames(`btn btn--wrap  ${pulse && 'pulse'}`,{
							[`variant-${variant}`]:variant,
							[`size-${size}`]:size,
							[`reset`]:reset,
						},className)}
						{...props}
				>
					{text ? text : children}
				</button>
			</div>
	)
}
