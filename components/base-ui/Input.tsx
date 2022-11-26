import React from 'react'
import PeopleIcon from '../icons/PeopleIcon'

type InputProps = {
  name: string
  type: string
  placeholder: string
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  icon?: JSX.Element
}

/**
 * This variant of the input includes an icon inside the input, on the left side.
 * @param {InputProps} props The props for the Input component
 * @returns {JSX.Element} The Input component with embedded icon
 */
export default function InputLeftIcon(props: InputProps): JSX.Element {
  return (
    <div className="relative flex items-center mt-4">
      <span className="absolute">
        {props.icon}
      </span>

      <input
        name={props.name}
        type={props.type}
        className="block w-full py-3 text-gray-700 bg-white border rounded-md px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
        placeholder={props.placeholder}
        onChange={props.handleChange}
      />
    </div>
  )
}
