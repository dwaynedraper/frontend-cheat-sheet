import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import NavItem from '../components/ui/NavItem'
import SidebarItem from '../components/ui/SidebarItem'
import NavBar from '../components/complex/NavBar'
import Sidebar from '../components/complex/Sidebar'
import Alert from '../components/ui/Alert'
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
      <div className='h-screen w-full max-w-screen bg-slate-300 grow p-4'>

        {/* Component Testing */}
        {/* <div className='px-10 py-5 rounded-lg bg-red-100 border border-red-400 text-red-800 relative w-fit mx-auto' role="alert">
          <strong className='font-bold'>Alert!</strong>
          <span className='block sm:inline'>Something not ideal might be happening.</span>
        </div> */}
        {/* <Alert type={AlertType.Success} strongText='Awesome!' message='Your profile has been updated.' /> */}
      </div>
    </div>
  )
}

export default Home
