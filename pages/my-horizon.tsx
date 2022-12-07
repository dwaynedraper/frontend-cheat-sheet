import React from 'react'
import {
  FindWhatsRight,
  MyFooter,
  MyHorizonCTA,
  MyHorizonNav,
  MyLearningCenter,
  MySuggestions,
  MyTestimonials,
  TheresAWay
} from '../components/my-horizon'

export default function MyHorizonPage() {
  return (
    <div data-theme="corporate" className='mx-auto'>
      <MyHorizonNav />
      <MyHorizonCTA />
      <MySuggestions />
      <MyTestimonials />
      <MyLearningCenter />
      <TheresAWay />
      <FindWhatsRight />
      <MyFooter />
    </div>
  )
}
