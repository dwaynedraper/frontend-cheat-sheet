import React from 'react'
import Layout from '../../components/layout/Layout'

export default function StaticParallax() {
  return (
    <main className='relative mx-auto font-bold'>
      {/* Fixed position CTA button */}
      <div className='fixed transition-opacity duration-150 bottom-24 right-24 opacity-40 hover:opacity-100'>
        <div className='bg-gradient-to-br from-cyan-300 via-gray-600 to-gray-500 rounded-2xl group'>
          <button className='relative inline-block p-4 overflow-hidden text-4xl font-medium text-cyan-200 rounded-2xl'>
            <span className='relative z-10' style={{ textShadow: '0 0 4px #ffffff' }}>Contact Julian Today!</span>
            <div className='absolute top-0 bottom-0 left-0 right-0 p-2 -m-1 transition duration-300 opacity-100 rounded-2xl group-hover:opacity-100'>
              <div className='w-full h-full bg-gray-600 rounded-2xl'></div>
            </div>
          </button>
        </div>
      </div>

      {/* TRAVEL THE UNIVERSE */}
      <section className="bg-fixed bg-cover h-one-fifty bg-[url('/jcspaceship.jpg')]" >
        <div className='flex flex-col h-one-fifty'>
            <div className='p-12 text-cyan-300 text-8xl'>TRAVEL THE</div>
            <div className='pl-12 text-cyan-300 text-8xl'>UNIVERSE...</div>
        </div>
      </section>

      {/*  EXPLORE NEW WORLDS */}
      <section className="bg-fixed bg-cover bg-center h-one-fifty bg-[url('/jc-world.jpg')]">
        <div className='flex flex-col h-one-fifty'>
          <div className='p-12 text-amber-200 text-8xl text-julian' style={{ textShadow: '0 0 4px #000000' }}>EXPLORE</div>
          <div className='pl-12 text-amber-200 text-8xl text-julian' style={{ textShadow: '0 0 4px #000000' }}>NEW WORLDS...</div>
        </div>
      </section>

      {/*  AND MEET NEW CIVILIZATIONS */}
      <section className="bg-fixed bg-cover h-one-fifty bg-[url('/jc-civilization.jpg')]">
        <div className='flex flex-col h-one-fifty'>
          <div className='p-12 text-red-500 text-8xl' style={{ textShadow: '0 0 4px #000000' }}>AND MEET</div>
          <div className='p-12 pt-0 text-red-500 text-8xl' style={{ textShadow: '0 0 4px #000000' }}>NEW</div>
          <div className='pl-12 text-red-500 text-8xl' style={{ textShadow: '0 0 4px #000000' }}>CIVILIZATIONS...</div>
        </div>
      </section>

      {/*  ON THIS JOURNEY */}
      <section className="bg-fixed bg-cover h-one-fifty bg-[url('/jc-into-mind.jpg')]">
        <div className='flex flex-col h-one-fifty'>
          <div className='p-12 text-cyan-300 text-8xl'>ON A JOURNEY</div>
          <div className='p-12 pt-0 text-cyan-300 text-8xl'>INTO THE MIND</div>
          <div className='pl-12 text-cyan-300 text-8xl'>OF JULIAN CALLE!</div>
        </div>
      </section>
    </main>
  )
}
