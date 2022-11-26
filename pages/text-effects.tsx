import React from 'react'

export default function TextEffects() {

  //* The landing page will first contain a hero section with the site name in 'shadow letters'.
  //* In each div, there will be a photo on one side, and text on the other.
  //* They will alternate left and right.
  //* The last section will be a CTA to sign up for the premium subscription.
  return (
    <>
      <div className='h-60 flex items-center justify-center'>
        <h1 className='ghost-text ghost-text-mixin'>
          <span className="font-extrabold">G</span>
          <span className="font-extrabold">H</span>
          <span className="font-extrabold">O</span>
          <span className="font-extrabold">S</span>
          <span className="font-extrabold">T</span>
          <span className="font-extrabold"> </span>
          <span className="font-extrabold">T</span>
          <span className="font-extrabold">E</span>
          <span className="font-extrabold">X</span>
          <span className="font-extrabold">T</span>
        </h1>
      </div>
      <div className='h-60 flex items-center justify-center bg-purple-300 w-full'>
        <h1 className='gradient-text'>Cotton Candy</h1>
      </div>

      <div className='h-60 flex items-center justify-center bg-gray-400 w-full'>
        <h1 className='gradient-text-vertical'>Glacier Ice</h1>
      </div>
    </>
  )
}
