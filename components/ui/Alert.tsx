import React from 'react'
import { AlertType } from '../../types/alerts'

type AlertProps = {
  type?: AlertType,
  strongText?: string
  message: string
}

export default function Alert(props: AlertProps) {
  const type = props.type || 'info'
  let classNameString;
  switch (type) {
    case 'success':
      classNameString = 'alert-success'
      break
    case 'error':
      classNameString = 'alert-error'
      break
    case 'warning':
      classNameString = 'alert-warning'
      break
    case 'info':
      classNameString = 'alert-info'
      break
    default:
      classNameString = 'alert-info'
  }
  console.log(classNameString);

  return (
    <div className={classNameString} role="alert">
      {props.strongText && <strong className='font-bold'>{props.strongText} </strong>}
      <span className='block sm:inline'>  {props.message}</span>
    </div>
  )
}
