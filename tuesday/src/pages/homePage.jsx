import React, { useState, useEffect } from 'react'

import Navigation from '../components/navigation';
import Sidebar from "../components/sideBar";
import ProjectCard from '../components/projectCard';

// components


const HomePage = () => {
  const [selectedPage, setSelectedPage] = useState(
    localStorage.getItem('selectedPage') || 'projectView'
  );
  const [seletedProjectData, setSelectedProjectData] = useState(null);
  
  useEffect(() => {
    localStorage.setItem('selectedPage', selectedPage);
  }, [selectedPage]);

  return (
  <>
    <Navigation />
      <div className="flex w-screen bg">
        <Sidebar />
        <ProjectCard />
      </div>
  </>
  )
}

export default HomePage