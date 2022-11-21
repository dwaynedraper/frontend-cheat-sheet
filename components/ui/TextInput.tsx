import React from 'react'

type TextInputProps = {
  value: string
  onChange: (value: string) => void
  label?: string
  placeholder?: string
  type?: string
  className?: string
}

export default function TextInput(props: TextInputProps): JSX.Element {
  const type = props.type || 'text';
  const placeholder = props.placeholder || props.label || '';
  return (
    <>
      <input type={type} placeholder={placeholder} className={props.className} value={props.value} onChange={(e) => props.onChange(e.target.value)} />
    </>
  )
}
