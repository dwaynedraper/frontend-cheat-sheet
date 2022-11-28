import React from 'react'
import Link from 'next/link'

type NavItemProps = {
  value: string
  href: string
}

export default function NavItem(props: NavItemProps): JSX.Element {
  return (
    <li className='nav-item'><Link href={props.href}>{props.value}</Link></li>
  )
}
