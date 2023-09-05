import React, { useState } from 'react'
import axios from 'axios';

const ProjectTask = ({  }) => {
    
    const [ values, setValues ] = useState({
      boardName: "",
    })

    const handleTextChange = (e) => {
      // setValues({...values, [event.target.name]: event.target.value });
      console.log('working');
    }

    const handleProjectEdit = async() => {
      if (!selectedProjectData) {
        console.log(`Select Project First`)
      } else {
        // const { data } = await axios.put(`${editProject}/${selectedProjectData._id}`,)
        
      }
    }
    


  return (
    <>
        <div className='p-1 sm:ml-10 w-full'>
            <div className='p-4 border-2 border-skyblues-200 border-dashed rounded-lg dark:border-skyblues-700'>
               

                <div className="flex justify-start rounded bg-skyblues-50 dark:bg-skyblues-800">
                <input
                type="text"
                className='border-none focus:border pl-10 pr-4 py-2 rounded-lg border-skyblues-700 focus:border-skyblues-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50'
                defaultValue={selectedProjectData ? selectedProjectData.boardName : "No Selected Task"}
                />
   
                </div>
            </div>
        </div>
    </>
  );
};

export default ProjectTask