import React from 'react'
import { HiOutlineLockClosed } from 'react-icons/hi'

export function MyHorizonCTA() {
  return (
    <section className="bg-gray-100 bg-cover bg-horizon relative pt-48 px-2 pb-10 bg-[url('https://images.unsplash.com/photo-1573496527892-904f897eb744?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80')]">
      <div className='container mx-auto flex flex-col lg:flex-row justify-around bg-grad-hor'>
        <div className='max-w-md md:bg-transparent h-fit lg:mb-24'>
          <h1 className='text-4xl md:text-5xl text-slate-900 py-1'>Bacon ipsum dolor amet...</h1>
          <p className='text-slate-900 '>Spicy jalapeno bacon ipsum dolor amet tri-tip jerky chicken kevin cow turkey pastrami pancetta meatball boudin burgdoggen ribeye filet mignon hamburger.</p>
          <button className='my-3 mx-3  btn w-full sm:w-fit  text-white bg-blue-700'>BANK WITH US</button>
          <button className='my-3 mx-3  btn w-full sm:w-fit border border-blue-700 '>LEARN MORE</button>
        </div>
        <div className="hidden md:block max-w-2xl px-8 py-4 bg-white lg:mt-40">
          <form>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label className="text-gray-700" htmlFor="username">Username</label>
                <input id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" />
              </div>

              <div>
                <label className="text-gray-700" htmlFor="emailAddress">Email Address</label>
                <input id="emailAddress" type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" />
              </div>

              <div>
                <label className="text-gray-700" htmlFor="password">Password</label>
                <input id="password" type="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" />
              </div>

              <div>
                <label className="text-gray-700" htmlFor="passwordConfirmation">Password Confirmation</label>
                <input id="passwordConfirmation" type="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" />
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <button className="hidden md:flex items-center w-full px-6 py-1 h-12 w-full tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-800 hover:bg-blue-900 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                <HiOutlineLockClosed className="w-5 h-5 mr-1" />
                <span className="mx-1">LOG IN</span>
              </button>
              {/* <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-blue-700 hover:bg-blue-900 focus:outline-none focus:bg-gray-600">Save</button> */}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
