import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../../public/horizon-nav.png'
import NavItem from '../base-ui/NavItem'
import SidebarItem from '../base-ui/SidebarItem'
import { HiOutlineLockClosed, HiPhone } from 'react-icons/hi'
import { RxHamburgerMenu } from 'react-icons/rx'

export function MyHorizonNav() {
  return (
    <header>
      <div className='hidden md:nav bg-gray-100'>
        <div className='flex items-center'>
          <HiPhone className="w-5 h-5 mr-1 ml-4 my-3 blue-600" />
          <span className='pt-2'>800-555-5555</span>
        </div>
        <div>
          <span className='pr-4'>ABOUT US</span>
          <span className='pr-4'>LOCATIONS</span>
        </div>
      </div>
      <div className='divider bg-gray-200'></div>
      <nav className='nav bg-grey-300'>
        <button>
          <RxHamburgerMenu className="w-10 h-5 mr-1 md:hidden" />
        </button>
        <ul className='hidden md:flex flex-col md:flex-row md:items-center'>
          <NavItem href={"/my-horizon"} value={"Home"} />
          <NavItem href={"/my-horizon"} value={"About"} />
          <NavItem href={"/my-horizon"} value={"Contact"} />
          <NavItem href={"/my-horizon"} value={"Blog"} />
        </ul>
        <Link href={"/my-horizon"}><Image src={logo} alt="MyHorizon Logo" height={60} /></Link>
        <button className="hidden md:flex items-center mr-8 px-6 py-1 h-12 tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-800 hover:bg-blue-900 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
          <HiOutlineLockClosed className="w-5 h-5 mr-1" />
          <span className="mx-1">LOG IN</span>
        </button>
        <button className='md:hidden px-4'>Log In</button>

        {/* navbar toggler */}

      </nav>
    </header>
  )
}
