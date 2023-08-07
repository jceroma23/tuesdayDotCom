import React, { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useDispatch } from "react-redux"
import { login } from '../features/user'
import axios from "axios";
import { loginRoute } from '../utils/APIroutes';
import { useNavigate } from 'react-router-dom';
import { closeLoading, openLoading } from '../features/loading';
import { toast } from 'react-toastify';
import { useSignIn } from 'react-auth-kit';


const LoginForm = ({ handleLogInModalClose, loginModal}) => {
  const disptach = useDispatch()
  const navigate = useNavigate()
  const signIn = useSignIn()
  const [ errorText, seterrorText ] = useState("");
  const [ values, setValues ] = useState({
    userName:"",
    userPassword:""
  })

  const handleTextChange = (event) => {
    setValues({...values, [event.target.name]: event.target.value })
  }

// Create Validation Form for FrontEnd
const validateForm = () => {
  const { username, password } = values;
  if (username === "") {
    toast.error("Username and Password is required.");
    return false;
  } else if (password === "") {
    toast.error("Username and Password is required.");
    return false;
  }
  return true;
};

// This will handle Submit from Form
  const handleSubmit = async (event) => {
    event.preventDefault();
   try {
    if (validateForm()) {
      disptach(openLoading())
      const { userName, userPassword } = values;
      const { data } = await axios.post(loginRoute, {
        userName,
        userPassword
      });
      // Check if data is undefined or notfound
        if (!data) {
          toast.error("Login not successful");
          navigate("/")
        } else {
          const userData = data.user;
          console.log(userData);
          // Set a loader for login
          toast.success("Login successful");
          // Apply redux here
          disptach(login({
            name: userData.fullName,
            email: userData.email,
            role: userData.role
          }))
           
          signIn({
                token: data.token,
                expiresIn: 3600,
                tokenType: "Bearer",
                authState: { userName: values.userName},
            })



          // Set time for closing the loading page
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

// Toast Option/Settings
// const toastOptions = {
//   position: "top-left",
//   autoClose: 3000,
//   pauseOnHover: true,
//   draggable: true,
//   theme: "dark",
// };
  return (
    <Transition appear show={loginModal} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={handleLogInModalClose}>
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
                
                    <Dialog.Panel className="w-96 max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900 mb-6"
                    >
                        Log in to your account
                    </Dialog.Title>
                    {/* <ToastContainer /> */}
                      <form onSubmit={(event)=>handleSubmit(event)} >
                     
                        <div className='mb-6'>
                            <label htmlFor="userName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                            <input type="text" id="userName" name='userName' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your Username here"
                            onChange={(event) => handleTextChange(event)}
                            required />
                        </div>

                        <div className='mb-6'>
                            <label htmlFor="userPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input type="password" id="userPassword" name='userPassword' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your Password here" 
                            onChange={(event) => handleTextChange(event)}
                            required />
                        </div>
                        <div className='text-center text-red-900 font-bold'>
                          {errorText}
                        </div>
                      {/* Login Functionality */}
                        <div className="mt-4">
                            <button
                            type="submit"
                            className="inline-flex justify-center rounded-md border border-transparent bg-amber-100 px-4 py-2 text-sm font-medium text-amber-900 hover:bg-amber-200 m-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
                            >
                            Log in
                            </button>


                            <button
                            type="button"
                            className="inline-flex justify-center rounded-md border border-transparent bg-rose-100 px-4 py-2 text-sm font-medium text-rose-900 hover:bg-rose-200 m-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2"
                            onClick={handleLogInModalClose}
                            >
                            Cancel
                            </button>
                        </div>
                      </form> 
                    </Dialog.Panel>
                    
              </Transition.Child>
            </div>
          </div>
        </Dialog>
    </Transition>
  )
}

export default LoginForm