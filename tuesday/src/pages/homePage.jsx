import React, { useState, useEffect } from 'react'

import Navigation from "../layout/navigation";
import Sidebar from '../layout/sideBar';
import Projects from '../components/projects';
import ProjectTask from '../components/projectTask';


const HomePage = () => {
  const [selectedPage, setSelectedPage] = useState(
    localStorage.getItem('selectedPage') || 'projectView'
  );
  const [seletedProjectData, setSelectedProjectData] = useState(null);
  
  useEffect(() => {
    localStorage.setItem('selectedPage', selectedPage);
  }, [selectedPage]);

  return (
  <div className='min-h-screen'>
    <Navigation/> 
    
    <div className='flex'>
  {/* This is the Side Bar */}
      <Sidebar setSelectedPage={setSelectedPage} /> 
      { selectedPage === 'projectView' && <Projects setSelectedProjectData={setSelectedProjectData} setSelectedPage={setSelectedPage} />}
      { selectedPage === 'taskView' && <ProjectTask seletedProjectData={seletedProjectData} /> }
      
    </div>
  </div>
  )
}

export default HomePage