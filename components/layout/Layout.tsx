import Head from 'next/head'
import React from 'react'
import NavItem from '../base-ui/NavItem'
import NavBar from '../complex/NavBar'
import NavDropdown from '../complex/NavDropdown'

export default function Layout(props: any) {
  return (
    <>
      <Head >

      </Head>
      {/* The navbar and sidebar don't have fully compatible css. Pick one or the other, or make adjustments. */}
      <NavBar>
        <NavItem value='Home' />
        <NavItem value='Components' />
        <NavItem value='Cheat Sheets' />
        <NavItem value='Canvas API' />
        <NavDropdown value='Scroll Effects' dropownOptions={['Static Parallax', 'Multiple Parallax', 'Animated Scrolling']} />
      </NavBar>
      {props.children}
    </>
  )
}
