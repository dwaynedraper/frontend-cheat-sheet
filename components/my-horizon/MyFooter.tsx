import React from 'react'
import { GiBoomerangSun } from 'react-icons/gi'
import { MdPhoneIphone } from 'react-icons/md'

export function MyFooter() {
  return (
    <footer className='footer-blue'>
      <div className="footer pt-16 px-32 bg-base-200 text-base-content footer-blue container mx-auto">
        <div>
          <GiBoomerangSun className="text-6xl text-white mb-2" />
          <p className='text-white text-lg'>My Horizon.<br />The world's best clone.</p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <div className='border-l border-red-600 flex flex-col pl-4'>

            <a className="link link-hover text-white">Branding</a>
            <a className="link link-hover text-white">Design</a>
            <a className="link link-hover text-white">Marketing</a>
            <a className="link link-hover text-white">Advertisement</a>
          </div>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <div className='border-l border-red-600 flex flex-col pl-4'>
            <a className="link link-hover text-white">About us</a>
            <a className="link link-hover text-white">Contact</a>
            <a className="link link-hover text-white">Jobs</a>
            <a className="link link-hover text-white">Press kit</a>
          </div>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <div className='border-l border-red-600 flex flex-col pl-4'>

            <a className="link link-hover text-white">Terms of use</a>
            <a className="link link-hover text-white">Privacy policy</a>
            <a className="link link-hover text-white">Cookie policy</a>
          </div>
        </div>
      </div>
      <div className='footer py-16 px-32 bg-base-200 text-base-content footer-blue container mx-auto'>
        <div className='flex flex-row border rounded-md border-4 py-1 pr-6 pl-2'>
          <MdPhoneIphone className='text-5xl text-white mr-4' />
          <div className='flex flex-col'>
            <p className='text-white text-xs'>Download Our</p>
            <p className='text-white text-xl'>Mobile Apps</p>
          </div>
        </div>
      </div>
      <div className='container mx-auto'>
        <div className='flex flex-row justify-between py-4 px-32'>
          <p className='text-white text-xs py-3'>RANDOM TEXT HERE</p>
          <p className='text-white text-xs py-3'>RANDOM TEXT HERE</p>
          <p className='text-white text-xs py-3'>RANDOM TEXT HERE</p>
          <p className='text-white text-xs py-3'>RANDOM TEXT HERE</p>
          <p className='text-white text-xs py-3'>RANDOM TEXT HERE</p>
        </div>
      </div>
      <div className='footer-darkblue w-screen'>
        <div className=' flex container mx-auto'>
          <div className='p-24'>
            <p className='text-white py-2 border-l-8 border-blue-600 pl-4'>Spicy jalapeno bacon ipsum dolor amet tri-tip jerky chicken kevin cow turkey pastrami pancetta meatball boudin burgdoggen ribeye filet mignon hamburger</p>
            <p className='text-white text-sm py-2'>Boudin meatloaf bresaola, pancetta chicken sausage corned beef venison capicola rump jerky andouille meatball shank leberkas. Pork sirloin ham hock pancetta, capicola filet mignon corned beef short ribs.</p>
            <p className='text-white text-sm py-2'>Pancetta ham hock ball tip meatball fatback pastrami salami doner turkey corned beef shankle burgdoggen rump.Doner filet mignon turkey, ham alcatra strip steak jowl venison prosciutto kevin buffalo turducken pancetta leberkas sausage.</p>
            <p className='text-white text-sm py-2'>Ball tip tongue pork belly rump ground round, bresaola pig.</p>
          </div>
          <div className='p-24'>
            <p className='text-white text-sm py-2'>Ball tip tongue pork belly rump ground round, bresaola pig.</p>
            <p className='text-white text-sm py-2'>Boudin meatloaf bresaola, pancetta chicken sausage corned beef venison capicola rump jerky andouille meatball shank leberkas</p>
            <p className='text-white text-sm py-2'>Pancetta ham hock ball tip meatball fatback pastrami salami doner turkey corned beef shankle burgdoggen rump.</p>
            <p className='text-white text-sm py-2'>Spicy jalapeno bacon ipsum dolor amet tri-tip jerky chicken kevin cow turkey pastrami pancetta meatball boudin burgdoggen ribeye filet mignon hamburger</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
