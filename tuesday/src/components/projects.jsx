import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { getUserProject } from "../utils/APIroutes";
import { toast } from 'react-toastify';
import axios from 'axios';
import { Link } from 'react-router-dom';

import projectPhoto from '../assets/projectspng.png';
import acceptedProjectPhoto from '../assets/acceptedProject.jpg';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddNewProject from '../components/addNewProject';

const Projects = () => {

    const [ selectedProject, setSelectedProject ] = useState(null);
    const user = useSelector((state) => state.user.value)
    const [projects, setProjects] = useState([]);
    const [ newProject, setNewProject ] = useState(false);

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


// Add New Project Modal
const handleOpenProjectModal = () => {
  setNewProject(true)
}
const handleCloseProjectModal = () => {
  setNewProject(false)
}

  return (
<>
    {/* This is the Main */}
    <div className="p-1 sm:ml-10 w-full">
        <div className="p-4 border-2 border-skyblues-200 border-dashed rounded-lg dark:border-skyblues-700">
      
  {/* This is the Mini Nav for Homepage */}
          <nav className="mb-1">
            <div className="max-w-screen-xl px-4 py-3 mx-auto">
               <div className="flex items-center">
                <ul className="flex flex-row font-medium mt-0 mr-6 space-x-4 text-sm">
                  <li>
                    <h1 className='text-skyblues-900 font-medium text-2xl my-1'>Project</h1>
                    </li>
  {/* Add Project */}
                    <li>
                      <button onClick={handleOpenProjectModal} className='text-skyblues-900 bg-white border border-skyblues-300 focus:outline-none hover:bg-skyblues-100 focus:ring-4 focus:ring-skyblues-200 font-medium rounded-lg text-sm px-1 py-1 mt-1 dark:bg-skyblues-800 dark:text-white dark:border-skyblues-600 dark:hover:bg-skyblues-700 dark:hover:border-skyblues-600 dark:focus:ring-skyblues-700'  data-tooltip-target="tooltip-bottom" data-tooltip-placement="bottom" type="button" >
                        <AddCircleIcon/> New Project
                        <div id="tooltip-bottom" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                          Add Project
                        <div className="tooltip-arrow" data-popper-arrow></div>
                        </div>
                      </button>
                    </li>
    {/* Search Box */}
                  <li>
                    <form className="flex items-center">
                                    <label htmlFor="simple-search" className="sr-only">
                                      Search
                                    </label>
                                      <div className="relative w-full">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                          <svg
                                            className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 18 20"
                                          >
                                            <path
                                              stroke="currentColor"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              strokeWidth="2"
                                              d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
                                            />
                                          </svg>
                                        </div>
                                        <input
                                          type="text"
                                          id="simple-search"
                                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-skyblues-500 focus:border-skyblues-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-skyblues-500 dark:focus:border-skyblues-500"
                                          placeholder="Search Project name..."
                                          required
                                        />
                                      </div>
                    </form>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
    {/* Lineeee */}
      <hr  className='mb-3'/>
    {/* View All */}
          <div className='flex flex-wrap'>
              {projects.length > 0 ? (
                projects.map((project, index) => (
                  <Link onClick={() => setSelectedProject(project)} className='hover:box-border hover:shadow-lg hover:shadow-sky-700 transition duration-300 w-72 h-auto p-2 mb-5 mx-5 bg-white border border-skyblues-200 rounded-lg shadow dark:bg-skyblues-800 dark:border-skyblues-700' key={index}>
                    {project.ownedProjectsBoard && (
                      <div className='flex items-center justify-center rounded bg-skyblues-50 dark:bg-skyblues-800 p-3'>
                        <div>
                          <h1 className='text-center font-bold mb-1'> Owned</h1>
                          <img src={projectPhoto} alt="Project Photo" />
                          <h2 className='my-3 font-bold'>{project.ownedProjectsBoard.boardName}</h2>
                            <p className='text-skyblues-400 dark:text-skyblues-500'>
                              {project.ownedProjectsBoard.description}
                            </p>
                        </div>
                      </div>
                    )}
                      
                      {project.acceptedProjectsBoard && (
                        <div className='flex items-center justify-center rounded bg-skyblues-50 dark:bg-skyblues-800 p-3'>
                          <div>
                            <h1 className='text-center font-bold mb-1'>Accepted Project</h1>
                              <img src={acceptedProjectPhoto} alt="Project Photo" />
                            <h2 className='my-3 font-bold'>{project.acceptedProjectsBoard.boardName}</h2>
                              <p className='text-skyblues-400 dark:text-skyblues-500'>
                                {project.acceptedProjectsBoard.description}
                              </p>
                          </div>
                      </div>
                      )} 
                  </Link>
                ))
              ) : (
                <p>No projects available.</p>
              )}
          </div>

            {newProject && <AddNewProject openProjectModal={newProject} closeProjectModal={handleCloseProjectModal} />}


        </div>
    </div>
</>     
  )
}

export default Projects