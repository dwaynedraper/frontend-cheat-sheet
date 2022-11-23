import React from 'react'
import Image from 'next/image'
import SidebarItem from '../base-ui/SidebarItem'
import logo from '../../public/logo.png'

export default function Sidebar() {
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
          <SidebarItem value='Nav Item' />
          <SidebarItem value='Nav Item' />
          <SidebarItem value='Nav Item' />
          <SidebarItem value='Nav Item' />
          <SidebarItem value='Nav Item' />
        </ul>
        <div><p className="text-sm text-center p-3 absolute inset-x-0 bottom-0">©Dean Draper 2022</p></div>
      </nav>
    </div>
  )
}
