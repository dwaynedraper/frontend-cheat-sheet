import React from 'react'
import NavItem from '../ui/NavItem'
import NavDropdown from './NavDropdown'

export default function NavBar() {
  return (
    <div className='w-screen'>
      {/* The first nav is strictly for the purpose of occupying space, as the actual fixed */}
      {/* navbar is out of the flow of the document, and other content was ending up beneath it */}
      <nav className='w-screen invisible'>
        <ul className='flex'>
          <NavItem value='None' />
        </ul>
      </nav>
      {/* This is the actual navbar */}
      <nav className='bg-slate-800 flex pl-10 w-screen fixed z-10 top-0'>
        <ul className='flex space-x-3'>
          <NavItem value='Home' />
          <NavItem value='Components' />
          <NavItem value='Cheat Sheets' />
          <NavItem value='Canvas API' />
          <NavDropdown value='Scroll Effects' dropownOptions={['Static Parallax', 'Multiple Parallax', 'Animated Scrolling']} />
        </ul>
      </nav>
    </div>
  )
}
