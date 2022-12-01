import Link from 'next/link'
import React from 'react'

type PriceCardProps = {
  tier: string
  price: string
  benefits: string[]
  buttonText: string
}

export default function PriceCard(props: PriceCardProps): JSX.Element {
  return (
    <div className="flex flex-col w-full max-w-sm p-8 space-y-8 text-center bg-white border-2 border-gray-200 rounded-lg lg:mx-4 dark:bg-gray-900 dark:border-gray-700">
      <div className="flex-shrink-0">
        <h2 className="inline-flex items-center justify-center px-2 font-semibold tracking-tight text-blue-400 uppercase rounded-lg bg-gray-50 dark:bg-gray-700">
          {props.tier}
        </h2>
      </div>

      <div className="flex-shrink-0">
        <span className="pt-2 text-4xl font-bold text-gray-800 uppercase dark:text-gray-100">
          {props.price}
        </span>
      </div>

      <ul className="flex-1 space-y-4">
        {props.benefits.map((benefit) => (
          <li className="text-gray-500 dark:text-gray-400">{benefit}</li>
        ))}
      </ul>

      <Link href="/auth" passHref>
        <button className="inline-flex items-center justify-center px-4 py-2 font-medium text-white uppercase transition-colors bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none">
          {props.buttonText}
        </button>
      </Link>
    </div>
  )
}
