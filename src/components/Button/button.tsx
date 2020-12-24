import React from "react"
import classnames from "classnames"
import { PREFIXCLASS, noop } from '../../util/constant'
import { tuple  } from '../../util/type'

const ButtonTypes = tuple('default','primary', 'success', 'info', 'warning', 'danger', 'link')
type ButtonType = typeof ButtonTypes[number]

const ButtonSizes = tuple('medium', 'small', 'mini')
type ButtonSize = typeof ButtonSizes[number]


interface BaseButtonProps {
  className?: string
  disabled?: boolean
  size?: ButtonSize
  type?: ButtonType
  href?: string,
  onClick?: ()=> void,
  round?: boolean,
  circle?: boolean
}
const Button: React.FC<BaseButtonProps> = (props) => {
  const { type, disabled, size, children, href, round, circle } = props
  const { onClick } = props

  const classes = classnames(`${PREFIXCLASS}-btn`, {
    [`${PREFIXCLASS}-btn--${type}`]: type,
    [`${PREFIXCLASS}-btn--${size}`]: size,
    [`${PREFIXCLASS}-btn--round`]: round,
    [`${PREFIXCLASS}-btn--circle`]: circle,
    [`${PREFIXCLASS}-btn--disabled`]: disabled,
  })

  if (href) {
    return (
      <a className={classes} href={href} onClick={onClick}>
        {children}
      </a>
    )
  }
  return (
    <button className={classes} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  )
}


Button.defaultProps = {
  onClick: noop,
  type: 'default'
}

export default Button
