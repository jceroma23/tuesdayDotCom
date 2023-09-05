import { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// Utils
import { getUserProject } from "../utils/APIroutes";
import AddCircleIcon from '@mui/icons-material/AddCircle';

// Photos
import projectPhoto from '../assets/projectspng.png';
import acceptedProjectPhoto from '../assets/acceptedProject.jpg';

// Features
import { closeLoading, openLoading } from '../features/loading';

// components
import Loader from './loader';
import { toast } from 'react-toastify';


const ProjectCard = () => {
    const disptach = useDispatch()
    const user = useSelector((state) => state.user.value)
    const isLoaderPage = useSelector((state) => state.loader.isLoading)

    const [projects, setProjects] = useState([]);

    useEffect(() => {
     const getProject = async() => {
        if (!user.isLogin) {
        console.log('User is not login')
        } else {
        try {
            const { data } = await axios.get(`${getUserProject}/${user.userId}`,{
            headers: { Authorization: `Bearer ${user.token}` }
            });
            if (data.userProjects && data.userProjects) {
            setProjects(data.userProjects);
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
    {isLoaderPage ? (
      <Loader/>
    ) : (
        <div className='flex flex-wrap p-10 justify-center space-x-10'>
        { projects.length > 0 ? (
        projects.map((project, index) => (
            <Link to={`/taskPage/${project._id}`} className="w-72 h-72 rounded overflow-hidden shadow-lg block hover:shadow-xl transition duration-300" key={index}>
            <img src={projectPhoto} alt="Project Photo" className="w-full" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{project.boardName}</div>
                <p className="text-gray-700 text-base">
                {project.description}
                </p>
            </div>
            </Link>           
        ))
      ) : (
        <div>No Projects Found</div>
      )}
        </div>
    )}
    </>
  )
}

export default ProjectCard