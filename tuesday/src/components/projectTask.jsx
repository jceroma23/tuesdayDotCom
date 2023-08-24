import React from 'react'


const ProjectTask = ({ seletedProjectData }) => {
    
    
  return (
    <>
        <div className='p-1 sm:ml-10 w-full'>
            <div className='p-4 border-2 border-skyblues-200 border-dashed rounded-lg dark:border-skyblues-700'>
                <div className="flex justify-start rounded bg-skyblues-50 dark:bg-skyblues-800">
                <input
                type="text"
                className='text-lg font-semibold mx-2 my-2 rounded-lg p-1 focus:ring focus:ring-skyblues-300'
                defaultValue={seletedProjectData.boardName}
                />

                </div>
            </div>
        </div>
    </>
  );
};

export default ProjectTask