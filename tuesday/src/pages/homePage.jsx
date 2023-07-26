import React from 'react'
import Navigation from '../components/navigation'
import LandingPage from '../layout/landingPage'



const HomePage = () => {
  return (
    <div className='bg-slate-200 min-h-screen'>
    <Navigation/>
    <LandingPage />
    </div>
  )
}

export default HomePage