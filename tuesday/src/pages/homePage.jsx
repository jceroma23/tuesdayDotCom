import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { getUserProject } from "../utils/APIroutes";
import { toast } from 'react-toastify';
import axios from 'axios';


import Navigation from "../layout/navigation";
import Sidebar from '../layout/sideBar';
import projectPhoto from '../assets/projectspng.png';
import acceptedProjectPhoto from '../assets/acceptedProject.jpg';

const HomePage = () => {
//  Need to display project of users
const user = useSelector((state) => state.user.value)
const [projects, setProjects] = useState([]);

// Get Current project of User
useEffect(() => {
  const getProject = async() => {
    if (!user.isLogin) {
      console.log('User is not login')
    } else {
      try {
        const { data } = await axios.get(`${getUserProject}/${user.userId}`,{
          headers: { Authorization: `Bearer ${user.token}` }
        });
        if (data.getUserProjectDetail && data.getUserProjectDetail.projects) {
          setProjects(data.getUserProjectDetail.projects);
        } else {
        console.log('Invalid projects data format');
        }
      } catch (error) {
        const { message } = error.response.data;
        toast.error(message);
      }
    }
  }
  getProject()
}, [user.isLogin], [projects])


  return (
  <div className='min-h-screen'>
    <Navigation/> 
    
    <div className='flex'>
  {/* This is the Side Bar */}
      <Sidebar/> 
  {/* This is the Main */}
      <div className="p-1 sm:ml-10 w-full">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
        <h1 className='text-center text-3xl mb-5'>Projects</h1>

          <div className='flex'>
              {projects.length > 0 ? (
                projects.map((project, index) => (
                  <div className='w-72 h-auto p-6 mx-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700' key={index}>
                    {project.ownedProjectsBoard && (
                      <div className='flex items-center justify-center rounded bg-gray-50 dark:bg-gray-800'>
                        <div>
                          <h1 className='text-center font-bold mb-1'> Owned</h1>
                          <img src={projectPhoto} alt="Project Photo" />
                          <h2 className='my-3 font-bold'>{project.ownedProjectsBoard.boardName}</h2>
                            <p className='text-gray-400 dark:text-gray-500'>
                              {project.ownedProjectsBoard.description}
                            </p>
                        </div>
                      </div>
                    )}
                      
                      {project.acceptedProjectsBoard && (
                        <div className='flex items-center justify-center rounded bg-gray-50 dark:bg-gray-800'>
                          <div>
                            <h1 className='text-center font-bold mb-1'>Accepted Project</h1>
                              <img src={acceptedProjectPhoto} alt="Project Photo" />
                            <h2 className='my-3 font-bold'>{project.acceptedProjectsBoard.boardName}</h2>
                              <p className='text-gray-400 dark:text-gray-500'>
                                {project.acceptedProjectsBoard.description}
                              </p>
                          </div>
                      </div>
                      )} 
                  </div>
                ))
              ) : (
                <p>No projects available.</p>
              )}
          </div>
  



            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                  <p className="text-2xl text-gray-400 dark:text-gray-500">
                    <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                    </svg>
                  </p>
              </div>
              <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                  <p className="text-2xl text-gray-400 dark:text-gray-500">
                    <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                    </svg>
                  </p>
              </div>
              <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                  <p className="text-2xl text-gray-400 dark:text-gray-500">
                    <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                    </svg>
                  </p>
              </div>
            </div>
            <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                  <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                  </svg>
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                  <p className="text-2xl text-gray-400 dark:text-gray-500">
                    <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                    </svg>
                  </p>
              </div>
              <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                  <p className="text-2xl text-gray-400 dark:text-gray-500">
                    <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                    </svg>
                  </p>
              </div>
              <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                  <p className="text-2xl text-gray-400 dark:text-gray-500">
                    <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                    </svg>
                  </p>
              </div>
              <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                  <p className="text-2xl text-gray-400 dark:text-gray-500">
                    <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                    </svg>
                  </p>
              </div>
            </div>
            <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                  <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                  </svg>
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                  <p className="text-2xl text-gray-400 dark:text-gray-500">
                    <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                    </svg>
                  </p>
              </div>
              <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                  <p className="text-2xl text-gray-400 dark:text-gray-500">
                    <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                    </svg>
                  </p>
              </div>
              <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                  <p className="text-2xl text-gray-400 dark:text-gray-500">
                    <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                    </svg>
                  </p>
              </div>
              <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                  <p className="text-2xl text-gray-400 dark:text-gray-500">
                    <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                    </svg>
                  </p>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default HomePage