import React from 'react'
import PriceCard from '../composite/PriceCard'

export default function Pricing() {
  return (
    <div className="bg-white dark:bg-gray-900 w-screen py-20">
      <div className="container px-6 py-8 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-8 lg:-mx-4 lg:flex-row lg:items-stretch lg:space-y-0">
          <PriceCard tier="Free" price="$0" benefits={['Free forever', 'Basic UI Components', 'Cheat Sheets']} buttonText="Join now" />
          <PriceCard tier="Basic" price="$3" benefits={['Full Layout Templates', 'Custom Themes', 'Composite Components']} buttonText="Join now" />
          <PriceCard tier="Premium" price="$10" benefits={['Full-stack starter repo ', 'Complete Design Systems', '48hr email support']} buttonText="Join now" />
        </div>
      </div>
    </div>
  )
}
