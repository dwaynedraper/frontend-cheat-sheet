import React from 'react'
import { useFormState } from '../../hooks/useFormState'
import FormInput from '../base-ui/FormInput'


type FormProps = {
  handleSubmit: (values: any) => void
  formState: object
  children: JSX.Element | JSX.Element[]
}


export default function Form(props: FormProps): JSX.Element {
  const [formState, setFormState] = useFormState({
    ...props.formState
  })
  const keysOfFormState = Object.keys(props.formState)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('submit')
  }
  return (
    <div>
      <div>
        <h1></h1>
        <form onSubmit={handleSubmit}>
          {props.children}
        </form>
      </div>
    </div>
  )
}
