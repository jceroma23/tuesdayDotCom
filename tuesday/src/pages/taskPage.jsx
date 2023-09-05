import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getSingleUserProject } from '../utils/APIroutes';
import axios from 'axios';
import Sidebar from '../components/sideBar';
import Navigation from '../components/navigation';
import Loader from '../components/loader';

// Loading
import { closeLoading, openLoading } from '../features/loading';

// Redux
import { useSelector, useDispatch } from 'react-redux';


const TaskPage = () => {
  const { projectId } = useParams();
  const [ project, setProject ] = useState({});
  const isloaderPage = useSelector((state) => state.loader.isLoading)
  const dispatch = useDispatch();
// Need to get User Access
  useEffect(() => {
    const getProject = async () => {
      try {
        dispatch(openLoading())
        const { data } = await axios.get(`${getSingleUserProject}/${projectId}`)
        if (!data) {
          console.log('Project Data Cannot be found');
        } else {
          console.log('Data is valid:', data);
        }
        setProject(data)

        console.log(data)
        dispatch(closeLoading())
      } catch (error) {
        const { message } = error.response.data;
        toast.error(message);
      } 
    }
    getProject()

    }, [])
  



    // This is to make it shorter using Array and Map
    const inputFields = [
      {
        label: 'Project Name',
        name: 'boardName',
        dataAdd: 'boardName',
        className: 'font-semibold',
      },
      {
        label: 'Details',
        name: 'description',
        dataAdd: 'description',
        className: 'font-light',
      },
      {
        label: 'CreatedBy',
        name: 'CreatedBy',
        dataAdd: 'createdBy.userName',
        className: 'font-light',
      },
    ];

  return (
    <div>
      <Navigation />
      <div className="flex w-screen bg">
        <Sidebar />
        <div className='p-4 border-2 border-skyblues-200 border-dashed rounded-lg dark:border-skyblues-700 w-full'>        
        {isloaderPage ? (  
          <Loader/>
          ) : (
            <div className="flex justify-start rounded border border-dashed flex-wrap space-x-3 p-3">
              {inputFields.map((field, index) => (
                <div key={index}>
                  <label className="block" htmlFor={field.name}>
                    {field.label}:
                  </label>
                  <input
                    type="text"
                    className={`border border-dashed focus:border w-72 py-2 rounded-lg border-skyblues-700 focus:border-skyblues-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 ${field.className}`}
                    defaultValue={
                      field.dataAdd.includes('.')
                        ? field.dataAdd.split('.').reduce((obj, prop) => (obj && obj[prop]) || '', project.projectBoard) || ''
                        : (project.projectBoard && project.projectBoard[field.dataAdd]) || ''
                    }
                  />
                </div>
            ))}
          </div>

        )} 
        </div>
      </div>
    </div>
  )
}

export default TaskPage