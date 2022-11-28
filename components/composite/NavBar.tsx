import React from 'react'
import NavItem from '../base-ui/NavItem'
import NavDropdown from './NavDropdown'
import FECS from '../../public/FECS.svg'

type NavBarProps = {
  children: React.ReactNode
}

/**
 * *NavBar is a fixed, full-width navbar that is always visible.
 * NOTE: This component is not yet compatible with the Sidebar component.
 *  If you use items other than the recommended ones, edit the invisible bar to match height.
 * @param props - NavItem, NavDropdown, or Search components.
 * @returns JSX.Element
 */
export default function NavBar(props: NavBarProps): JSX.Element {
  return (
    <div className='w-screen'>
      {/* The first nav is strictly for the purpose of occupying space, as the actual fixed */}
      {/* navbar is out of the flow of the document, and other content was ending up beneath it */}
      <nav className='w-screen invisible'>
        <ul className='flex'>
          <NavItem value='None' href="#" />
        </ul>
      </nav>
      {/* This is the actual navbar */}
      <nav className='bg-slate-800 flex pl-10 w-screen fixed z-10 top-0'>
        <ul className='flex space-x-3 pl-8 items-center'>
          {props.children}
        </ul>
      </nav>
    </div>
  )
}
