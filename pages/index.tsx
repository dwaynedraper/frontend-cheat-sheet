import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import NavItem from '../components/base-ui/NavItem'
import SidebarItem from '../components/base-ui/SidebarItem'
import NavBar from '../components/complex/NavBar'
import Sidebar from '../components/complex/Sidebar'
import Landing from './TextEffects'
import Alert from '../components/base-ui/Alert'
import { AlertType } from '../types/alerts'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Frontend Cheat Sheet</title>
        <meta name="description" content="Demo app for Dean Draper" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* The navbar and sidebar don't have fully compatible css. Pick one or the other, or make adjustments. */}
      <NavBar />
      {/* <Sidebar /> */}

      {/* = === ====== Main ======================================= ========= === = */}
      <div className='h-screen w-full max-w-screen bg-white grow p-4 flex flex-col items-center'>
        <Landing />
        {/* Component Testing */}
        {/* <Alert type={AlertType.Success} strongText='Awesome!' message='Your profile has been updated.' /> */}
      </div>
    </div>
  )
}

export default Home
