import Head from 'next/head'
import React from 'react'
import NavItem from '../base-ui/NavItem'
import SidebarItem from '../base-ui/SidebarItem'
import NavBar from '../composite/NavBar'
import NavDropdown from '../composite/NavDropdown'

export default function Layout(props: any) {
  return (
    <>
      <Head >

      </Head>
      {/* The navbar and sidebar don't have fully compatible css. Pick one or the other, or make adjustments. */}
      <NavBar>
        <NavItem value='Home' href="/" />
        <NavItem value='Components' href="/components" />
        <NavItem value='Cheat Sheets' href="/cheatsheets" />
        <NavItem value='Canvas API' href="canvas" />
        <NavItem value="Text Effects" href="text-effects" />
        <NavDropdown value='Scroll Effects'>
          <SidebarItem value='Static Parallax' href="/scroll-effects/static-parallax" />
          <SidebarItem value='Multiple Parallax' href="/scroll-effects/multiple-parallax" />
          <SidebarItem value='Animated Scrolling' href="/scroll-effects/animated-scrolling" />
        </NavDropdown>
      </NavBar>
      {props.children}
    </>
  )
}
