import React, { useState, useEffect } from 'react'

import Navigation from "../layout/navigation";
import Sidebar from '../layout/sideBar';
import Projects from '../components/projects';


const HomePage = () => {
  const [ selectedPage, setSelectedPage ] = useState('projectView')
  console.log(selectedPage)
  return (
  <div className='min-h-screen'>
    <Navigation/> 
    
    <div className='flex'>
  {/* This is the Side Bar */}
      <Sidebar setSelectedPage={setSelectedPage} /> 
      { selectedPage === 'projectView' && <Projects />}
        

    </div>
  </div>
  )
}

export default HomePage