import React, { FC } from 'react'

interface BaseInputProps {
  value?: string | number,
  // type?: string,
  onFocus?: (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
  onChange ?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
}

const Input: FC<BaseInputProps> = (props) =>  {
  const { value } = props
  const { onFocus, onChange } = props
  return (
    <input 
      type="text" 
      value={value} 
      onFocus= {onFocus} 
      onChange= {onChange}
    />
  )
}

Input.defaultProps = {
  value: '',
  onChange: () => {},
  onFocus: () => {}
}

export default Input