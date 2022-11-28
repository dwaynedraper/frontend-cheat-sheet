import React from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import SidebarItem from '../base-ui/SidebarItem'

type NavDropdownProps = {
  value: string
  children: React.ReactNode
}

export default function NavDropdown(props: NavDropdownProps) {
  return (
    <li>
      <div className='dropdown hover:bg-slate-500 p-3'>
        <label tabIndex={0}>Scroll Effects <ChevronDownIcon className='h-4 w-4 inline stroke-2' /></label>
        <ul tabIndex={0} className="dropdown-content menu shadow bg-slate-800 w-52">
          {props.children}
        </ul>
      </div>
    </li>
  )
}
