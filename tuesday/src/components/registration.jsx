import React, { Fragment, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { toast } from 'react-toastify'
import { useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom'
import { closeLoading, openLoading } from '../features/loading';
import axios from 'axios'
import { regiterRoute } from '../utils/APIroutes'

const Registration = ({ handleRegistrationModalClose, registrationModal }) => {
  const disptach = useDispatch()
  const navigate = useNavigate()

  const [ values, setValues ] = useState({
    userName:"",
    userEmail:"",
    userPassword:""
  })
  //Handle Text Change
  const handleTextChange = (event) => {
    setValues({...values, [event.target.name]: event.target.value })
  }

  //Handle Validation
  const validateForm = () => {
  const { userName, userEmail, userPassword } = values;
  if (userName === "" ) {
    toast.error("Username is required.");
    return false;
  } else if (userPassword === "") {
    toast.error("Password is required.");
    return false;
  } else if (userEmail === "") {
    toast.error("Email is required.");
    return false;
  }
  return true;
};

  // Handle Registration
  const handleRegistration = async (event) => {
    event.preventDefault();
    
    try {
      if (validateForm()) {

       
        const { userName, userEmail, userPassword } = values;
        const { data } = await axios.post(regiterRoute, {
        userName,
        userEmail,
        userPassword
      }); 
        
        if (!data) {
          toast.error("Registration not successful");
          navigate("/")
        } else {
          // Set a loader for login
          disptach(openLoading())
          toast.success("Register successful");
          // Apply redux here will be made after setting up Account
          // disptach(login({
          //   name: userData.fullName,
          //   email: userData.email,
          //   role: userData.role
          // }))
            setTimeout(() => {
            disptach(closeLoading())
            navigate("/home")
          }, 5000)
        }
      }


    } catch (error) {
      const { message } = error.response.data;
      toast.error(message);
    }
  }
  return (
    <Transition appear show={registrationModal} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={handleRegistrationModalClose}>
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
                <form onSubmit={(event) => handleRegistration(event)}>
                    <Dialog.Panel className="w-96 max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900 mb-6"
                    >
                        Register your account
                    </Dialog.Title>

                    <div className='mb-6'>
                        <label htmlFor="userEmail" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input onChange={handleTextChange} type="email" id="userEmail" name='userEmail' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your Email here" required />
                    </div>

                    <div className='mb-6'>
                        <label htmlFor="userName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                        <input onChange={handleTextChange} type="text" id="userName" name='userName' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your Username here" required />
                    </div>

                    <div className='mb-6'>
                        <label htmlFor="userPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input onChange={handleTextChange} type="password" id="userPassword" name='userPassword' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your Password here" required />
                    </div>

                    {/* Register Functionality */}
                    <div className="mt-4">
                        <button
                        type="submit"
                        className="inline-flex justify-center rounded-md border border-transparent bg-amber-100 px-4 py-2 text-sm font-medium text-amber-900 hover:bg-amber-200 m-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
                        >
                        Register
                        </button>


                        <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-rose-100 px-4 py-2 text-sm font-medium text-rose-900 hover:bg-rose-200 m-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2"
                        onClick={handleRegistrationModalClose}
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

export default Registration