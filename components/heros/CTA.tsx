import Link from 'next/link'
import React from 'react'

export default function CTA() {
  return (
    <section className="bg-white dark:bg-slate-400 w-screen">
      <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
        <h2 className="max-w-4xl mx-auto text-3xl font-semibold tracking-tight text-gray-800 xl:text-4xl dark:text-white">
          Make frontend work so easy it's <span className="text-slate-700 text-4xl">practically cheating.</span>
        </h2>
        <p className="max-w-4xl mt-6 text-center text-gray-500 dark:text-gray-100">Up your front-end game today. Sign up for access to reference sheets, performance and accessibility guides, custom pre-built components, and more. Build your website in hours instead of days!</p>



        <div className="inline-flex w-full mt-6 sm:w-auto">
          <Link href="/login" className="inline-flex items-center justify-center w-full px-6 py-2 text-white duration-300 bg-blue-600 rounded-lg hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
            Sign Up
          </Link>
        </div>
      </div>
    </section>
  )
}
