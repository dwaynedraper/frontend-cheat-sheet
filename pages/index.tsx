import type { NextPage } from 'next'
import Head from 'next/head'
import MongoTest from '../components/composite/MongoTest'
import Pricing from '../components/features/Pricing'
import BulletPoints from '../components/heros/BulletPoints'
import CTA from '../components/heros/CTA'
import GridListWithImage from '../components/heros/GridListWithImage'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Frontend Cheat Sheet</title>
        <meta name="description" content="Frontend Tools and Code" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* = === ====== Main ======================================= ========= === = */}
      <div className='flex flex-col items-center w-full h-screen p-4 max-w-screen bg-slate-400 grow'>
        <hr className='invisible' />
        <CTA />
        <GridListWithImage />
        <Pricing />
        {/* <MongoTest /> */}
      </div>
    </div>
  )
}

export default Home
