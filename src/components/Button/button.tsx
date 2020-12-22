import React from "react"
import classnames from "classnames"

export enum ButtonSize {
  Medium = 'medium',
  Small = 'small',
  Mini = 'mini'
}
export enum ButtonType {
  Primary = "primary",
  Success = 'success',
  Info = 'info',
  Warning = 'warning',
  Danger = "danger",
  Link = "link",
}

interface BaseButtonProps {
  className?: string
  disabled?: boolean
  size?: ButtonSize
  type?: ButtonType
  href?: string
}
const Button: React.FC<BaseButtonProps> = (props) => {
  const { type, disabled, size, children, href } = props

  const classes = classnames("btn", {
    [`btn-${type}`]: type,
    [`btn-${size}`]: size,
    disabled: type === ButtonType.Link && disabled,
  })

  if (type === ButtonType.Link && href) {
    return (
      <a className={classes} href={href}>
        {children}
      </a>
    )
  }
  return (
    <button className={classes} disabled={disabled}>
      {children}
    </button>
  )
}

export default Button
