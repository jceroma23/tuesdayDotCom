import React from 'react'
import { Link } from 'react-router-dom'
const LandingPage = () => {
  return (
    <div className='text-center h-screen flex justify-center'>
        <div className='pt-16 w-2/4'>
             <h1 className='text-5xl mb-10  '>Unleash the potential of your workforce with intuitive tools, customizable workflows, and real-time communication</h1>
            <h3 className='text-xl text-yellow-900'> Embrace Tuesday.com and take control of your projects, your teams, and your success.</h3>
          <div className='mt-10'>
           <Link href="#" className="inline-block  px-10 py-3 leading-none border rounded-md text-amber-900 border-white hover:border-transparent text-lg hover:text-amber-950 bg-amber-200 font-bold  lg:mt-0 ">Getting Started</Link>
          </div>
         
        </div> 
     </div>
  )
}

export default LandingPage