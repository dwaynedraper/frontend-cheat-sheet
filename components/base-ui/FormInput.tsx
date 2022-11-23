import React from 'react'

type FormInputProps = {
  value: string
  handleChange: (value: string) => void
  label: string
  placeholder?: string
  type?: string
  className?: string
}

/**
 * A form input component
 * @param {string} props.value - The current value of the input
 * @param {function} props.handleChange - function to handle change of the input
 * @param {string} props.label - The label of the input
 * @param {string} props.placeholder - Optional- placeholder of the input
 * @param {string} props.type - Optional- type of the input
 * @param {string} props.className - Optional- className of the input 
 * @returns 
 */
export default function FormInput(props: FormInputProps): JSX.Element {
  const type = props.type || 'text';
  const placeholder = props.placeholder || props.label || '';
  const label = props.label || '';
  return (
    <>
      <label htmlFor={label}>{label}</label>
      <input type={type} id={label} placeholder={placeholder} className={props.className ? props.className : ''} value={props.value} onChange={(e) => props.handleChange(e.target.value)} />
    </>
  )
}
