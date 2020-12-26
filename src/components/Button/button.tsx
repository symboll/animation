import React, { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react"
import classnames from "classnames"
import { PREFIXCLASS } from '../../util/constant'
import { tuple  } from '../../util/type'

const ButtonTypes = tuple('default','primary', 'success', 'info', 'warning', 'danger', 'link')
type ButtonType = typeof ButtonTypes[number]

const ButtonSizes = tuple('medium', 'small', 'mini')
type ButtonSize = typeof ButtonSizes[number]


interface BaseButtonProps {
  size?: ButtonSize,
  type?: ButtonType,
  className?: string,
  disabled?: boolean,
  href?: string,
  round?: boolean,
  circle?: boolean,
  children: React.ReactNode,
  // onClick?: React.MouseEventHandler<HTMLElement>
}

type NativeButtonProps = BaseButtonProps & Omit<ButtonHTMLAttributes<any>, 'type' >
type AnchorButtonProps = BaseButtonProps & Omit<AnchorHTMLAttributes<any>, 'type' >
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>


const Button: React.FC<ButtonProps> = (props) => {
  const { size, type, className, disabled, href, round, circle, children, onClick, ...restProps } = props

  const classes = classnames(`${PREFIXCLASS}-btn`, `${className}`,{
    [`${PREFIXCLASS}-btn--${type}`]: type,
    [`${PREFIXCLASS}-btn--${size}`]: size,
    [`${PREFIXCLASS}-btn--round`]: round,
    [`${PREFIXCLASS}-btn--circle`]: circle,
    [`${PREFIXCLASS}-btn--disabled`]: disabled,
  })

  if (href) {
    return (
      <a className={classes} href={href} {...restProps}>
        {children}
      </a>
    )
  }
  return (
    <button className={classes} disabled={disabled} {...restProps}>
      {children}
    </button>
  )
}


Button.defaultProps = {
  type: 'default',
  disabled: false
}

export default Button
