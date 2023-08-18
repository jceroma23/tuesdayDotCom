import React, { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { addNewProject } from '../utils/APIroutes'
import { useSelector } from 'react-redux';
import axios from 'axios'
import { toast } from 'react-toastify';



const AddNewProject = ({openProjectModal, closeProjectModal }) => {
    const user = useSelector((state) => state.user.value)
    const [ values, setValues ] = useState({
        boardName: "",
        projectDetails: ""
      })
      //Handle Text Change
      const handleTextChange = (event) => {
        setValues({...values, [event.target.name]: event.target.value })
      }
// Need Validatation
 
    const handleAddProject = async(event) => {
      // event.preventDefault();
        try {
          // console.log(values.boardName, values.projectDetails)
            const { data } = await axios.post(`${addNewProject}/${user.userId}`, {
              boardName: values.boardName,
              description: values.projectDetails
            });
            if (!data) {
              console.log(`Error`)
            } 
            toast.success('New Prject Available')
        } catch (error) {
        const { message } = error.response.data;
        toast.error(message);
        }
    }

  return (
    <Transition appear show={openProjectModal} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeProjectModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />

          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
            {/* Form Login */}
                <form onSubmit={(event) => handleAddProject(event)}>
                    <Dialog.Panel className="w-96 max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900 mb-6"
                    >
                        New Project
                    </Dialog.Title>

                    <div className='mb-6'>
                        <label htmlFor="boardName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Project Name:</label>
                        <input onChange={handleTextChange} type="text" id="boardName" name='boardName' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Project Name" required />
                    </div>

                    <div className='mb-6'>
                        <label htmlFor="projectDetails" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Project Details:</label>
                        <input onChange={handleTextChange} type="textarea" id="projectDetails" name='projectDetails' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Project Details" required />
                    </div>

                    {/* Register Functionality */}
                    <div className="mt-4">
                        <button
                        type="submit"
                        className="inline-flex justify-center rounded-md border border-transparent bg-skyblues-100 px-4 py-2 text-sm font-medium text-skyblues-900 hover:bg-skyblues-200 m-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-skyblues-500 focus-visible:ring-offset-2"
                        >
                        Add Project
                        </button>

                        <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-rose-100 px-4 py-2 text-sm font-medium text-rose-900 hover:bg-rose-200 m-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2"
                        onClick={closeProjectModal}
                        >
                        Cancel
                        </button>
                    </div>

                    </Dialog.Panel>
                </form>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
    </Transition>
  )
}

export default AddNewProject