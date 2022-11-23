import React from 'react'

type SidebarProps = {
  value: string
}

export default function SidebarItem(props: SidebarProps): JSX.Element {
  return (
    <li className='sidebar-item'>{props.value}</li>
  )
}
