import React from 'react'
import Image from 'next/image'
import SidebarItem from '../base-ui/SidebarItem'
import logo from '../../public/logo.png'

type SidebarProps = {
  items: string[]
}

/**
 * *Sidebar is a fixed, full-height sidebar that is always visible.
 * NOTE: This component is not yet compatible with the NavBar component.
 * NOTE: This SidebarItem component doesn't have links yet.
 * @param props - An array of items to generate links for.
 * @returns JSX.Element
 */
export default function Sidebar(props: SidebarProps): JSX.Element {
  return (
    <div className='h-screen flex flex-col ' style={{ width: "30%", minWidth: "200px", maxWidth: "300px" }}>
      <nav className='bg-gradient-to-b from-slate-900 via-slate-700 to-slate-800 text-slate-300
        md:h-full md:flex md:flex-col items-center fixed'>
        <Image
          src={logo}
          alt='Frontend Cheat Sheet Logo'
          width={300}
          height={125}
          className='mb-5'
        />
        <ul className='flex flex-col w-full'>
          {props.items.map((item) => (
            <SidebarItem key={item} value={item} />
          ))}
        </ul>
        <div><p className="text-sm text-center p-3 absolute inset-x-0 bottom-0">©Dean Draper 2022</p></div>
      </nav>
    </div>
  )
}
