import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserProject } from "../utils/APIroutes";
import { toast } from 'react-toastify';
import axios from 'axios';
import { Link } from 'react-router-dom';

// Images
import projectPhoto from '../assets/projectspng.png';
import acceptedProjectPhoto from '../assets/acceptedProject.jpg'

// Icons
import AddCircleIcon from '@mui/icons-material/AddCircle';

//Components
import AddNewProject from '../components/addNewProject';
import Loader from '../components/loader';

// Features
import { closeLoading, openLoading } from '../features/loading';

const ProjectPage = () => {
  const disptach = useDispatch()
  const user = useSelector((state) => state.user.value)
  const isLoaderPage = useSelector((state) => state.loader.isLoading)

  const [projects, setProjects] = useState([]);
  const [ newProject, setNewProject ] = useState(false);

  // Get User Project
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
    <>
        
    </>
  )
}

export default ProjectPage