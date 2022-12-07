import React from 'react'

type HeroCardProps = {
  header: string
  body: string
}

export default function HeroCard(props: HeroCardProps): JSX.Element {
  return (
    <>
      <div className="space-y-3">
        <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl ">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </span>

        <h1 className="text-2xl font-semibold text-gray-700 capitalize ">{props.header}</h1>

        <p className="text-gray-700 ">
          {props.body}
        </p>
      </div>
    </>
  )
}
