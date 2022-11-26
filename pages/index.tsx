import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import NavItem from '../components/base-ui/NavItem'
import SidebarItem from '../components/base-ui/SidebarItem'
import NavBar from '../components/complex/NavBar'
import Sidebar from '../components/complex/Sidebar'
import TextEffects from './text-effects'
import Alert from '../components/base-ui/Alert'
import { AlertType } from '../types/alerts'
import Hero from '../components/complex/Hero'
import NavDropdown from '../components/complex/NavDropdown'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Frontend Cheat Sheet</title>
        <meta name="description" content="Demo app for Dean Draper" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      {/* <Sidebar /> */}

      {/* = === ====== Main ======================================= ========= === = */}
      <div className='h-screen w-full max-w-screen bg-slate-100 grow p-4 flex flex-col items-center py-20'>
        <div className='text-6xl'>Frontend Cheat Sheet</div>
        <hr className='w-full border border-gray-200 rounded pt-8' />
        <Hero />

        {/* <TextEffects /> */}
        {/* Component Testing */}
        {/* <Alert type={AlertType.Success} strongText='Awesome!' message='Your profile has been updated.' /> */}
      </div>
    </div>
  )
}

export default Home
