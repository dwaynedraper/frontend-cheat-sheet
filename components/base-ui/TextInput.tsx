import React from 'react'
import "../../components/auth/Login.module.css";

type TextInputProps = {
  name: string,
  label: string,
  value: any,
  placeholder?: string,
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

export default function TextInput({ name, label, value, placeholder, handleChange }: TextInputProps) {
  return (
    <>
      <div >
        <input
          type={name}

          id={name}
          placeholder={placeholder}
          style={{ width: "330px" }}
          value={value}
          name={name}
          onChange={handleChange}
        />
        <label htmlFor={name}>{label}</label>
      </div>
    </>
  )
}
