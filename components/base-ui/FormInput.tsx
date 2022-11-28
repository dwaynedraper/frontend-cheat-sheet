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
    <section className="bg-white dark:bg-gray-900">
      <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
        <form className="w-full max-w-md">
          <div className="relative flex items-center mt-4">
            {/* <label htmlFor={label}>{label}</label> */}
            <input type={type} id={label} placeholder={placeholder} className={props.className ? props.className : "block w-full py-3 text-gray-700 bg-white border rounded-md px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"} value={props.value} onChange={(e) => props.handleChange(e.target.value)} />
          </div>
        </form>
      </div>
    </section>
  )
}
