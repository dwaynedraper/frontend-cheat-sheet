import React from 'react'

type NavItemProps = {
  value: string
}

export default function NavItem(props: NavItemProps): JSX.Element {
  return (
    <li className='nav-item'>{props.value}</li>
  )
}
