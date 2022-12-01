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
        <meta name="description" content="Demo app for Dean Draper" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* = === ====== Main ======================================= ========= === = */}
      <div className='h-screen w-full max-w-screen bg-slate-400 grow p-4 flex flex-col items-center'>
        <hr className='invisible' />
        <CTA />
        <GridListWithImage />
        <Pricing />
        <MongoTest />
      </div>
    </div>
  )
}

export default Home
