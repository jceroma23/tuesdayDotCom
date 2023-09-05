import React, { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { toast } from 'react-toastify'
import { useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom'
import { closeLoading, openLoading } from '../features/loading';
import axios from 'axios'
import { regiterRoute } from '../utils/APIroutes'
import { useSignIn } from 'react-auth-kit';
import { RadioGroup } from '@headlessui/react'


// This the Work list
const plans = [
        {
            name: 'Business Owner',
            role: 'Full administrator-level access to your own project, empowering you to oversee and manage all facets of the task management system.',
            administrator: true,
            canAssignTasks: true,
            canTrackProgress: true,
            canSetPriorities: true,
            canConfigureSystem: true,
            canAllocateBudget: true,
        },
        {
            name: 'Employee',
            role: 'Employees can create, update, and manage tasks, collaborate with team members, and track time for accurate project management. They also receive notifications for new tasks and approaching deadlines.',
            administrator: false,
            canAssignTasks: false, // Employees typically cannot assign tasks to others
            canTrackProgress: true,
            canSetPriorities: false, // Priorities are usually set by Business Owners
            canConfigureSystem: false, // Configuration is typically restricted to Business Owners
            canAllocateBudget: false, // Budget allocation is usually done by Business Owners
        },
        {
            name: 'Freelancer',
            role: 'Freelancer can create, update, and manage tasks, collaborate with team members, and track time for accurate project management. They also receive notifications for new tasks and approaching deadlines.',
            administrator: false,
            canAssignTasks: false, // Employees typically cannot assign tasks to others
            canTrackProgress: true,
            canSetPriorities: false, // Priorities are usually set by Business Owners
            canConfigureSystem: false, // Configuration is typically restricted to Business Owners
            canAllocateBudget: false, // Budget allocation is usually done by Business Owners
        },
    ]

const Registration = ({ handleRegistrationModalClose, registrationModal }) => {
  const disptach = useDispatch()
  const navigate = useNavigate()
  const [selected, setSelected] = useState(plans[0]);
  const signIn = useSignIn();
 

  const [ values, setValues ] = useState({
    fullName:"",
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
  const { userName, userEmail, userPassword, fullName } = values;
  switch (true) {
    case userName === "":
      toast.error("Username is required.");
      return false;
    case userPassword === "":
      toast.error("Password is required.");
      return false;
    case userEmail === "":
      toast.error("Email is required.");
      return false;
    case fullName === "":
      toast.error("Fullname is required.");
      return false;
    default:
      return true;
  }
};

    // Handle Registration
const handleRegistration = async (event) => {
      event.preventDefault();
      try {
        if (validateForm()) {
          const { userName, userEmail, userPassword, fullName } = values;
          const title = selected.name;
          const { data } = await axios.post(regiterRoute, {
          fullName,
          userName,
          userEmail,
          userPassword,
          title
        });  
          if (!data) {
            toast.error("Registration not successful");
            navigate("/")
          } else {
            // Set a loader for login
            disptach(openLoading())
            signIn({
              token: data.token,
              expiresIn: 3600,
              tokenType: "Bearer",
              authState: { userName: values.userName},
          })
            toast.success("Register successful");
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
            <div className="flex min-h-full min-w-full items-center justify-center p-4 text-center ">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
              <Dialog.Panel className="w-3/4 flex flex-wrap justify-center transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
            {/* Form Login */}
                <form onSubmit={(event) => handleRegistration(event)} className='w-full transform overflow-hidden rounded-2xl bg-white p-6  flex flex-wrap justify-center'>
                
                  <div className='w-full flex justify-center space-x-5 p-5'>
                        <div className='w-96'>
                        <Dialog.Title
                          as="h3"
                          className="text-lg font-medium leading-6 text-gray-900 mb-6"
                        >
                          Register your account
                        </Dialog.Title>
  {/* FullName */}
                        <div className='mb-6'>
                            <label htmlFor="fullName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fullname</label>
                            <input onChange={handleTextChange} type="text" id="fullName" name="fullName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your Fullname here" required />
                        </div>
  {/* userEmail */}
                        <div className='mb-6'>
                            <label htmlFor="userEmail" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <input onChange={handleTextChange} type="email" id="userEmail" name='userEmail' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your Email here" required />
                        </div>
  {/* UserName */}
                        <div className='mb-6'>
                            <label htmlFor="userName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                            <input onChange={handleTextChange} type="text" id="userName" name='userName' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your Username here" required />
                        </div>
  {/* userPassword */}
                        <div className='mb-6'>
                            <label htmlFor="userPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input onChange={handleTextChange} type="password" id="userPassword" name='userPassword' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your Password here" required />
                        </div>
                      </div>

                      <div className='w-96'>
                        <h1 className='my-3 text-lg'>Choose your Role here: </h1>
                        <RadioGroup value={selected} onChange={setSelected}>
                        <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
                        <div className="space-y-2">
                            {plans.map((plan) => (
                            <RadioGroup.Option
                                key={plan.name}
                                value={plan}
                                className={({ active, checked }) =>
                                `${
                                    active
                                    ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300'
                                    : ''
                                }
                                ${
                                    checked ? 'bg-sky-900 bg-opacity-75 text-white' : 'bg-white'
                                }
                                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                                }
                            >
                                {({ active, checked }) => (
                                <>
                                    <div className="flex w-full items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="text-sm">
                                        <RadioGroup.Label
                                            as="p"
                                            className={`font-medium  ${
                                            checked ? 'text-white' : 'text-gray-900'
                                            }`}
                                        >
                                            {plan.name}
                                        </RadioGroup.Label>
                                        <RadioGroup.Description
                                            as="span"
                                            className={`inline ${
                                            checked ? 'text-sky-100' : 'text-gray-500'
                                            }`}
                                        >
                                            <span>
                                            {plan.role}
                                            </span>{' '}
                                            <span aria-hidden="true">&middot;</span>{' '}
                                            {/* <span>{plan.disk}</span> */}
                                        </RadioGroup.Description>
                                        </div>
                                    </div>
                                    {checked && (
                                        <div className="shrink-0 text-white">
                                        <CheckIcon className="h-6 w-6" />
                                        </div>
                                    )}
                                    </div>
                                </>
                                )}
                            </RadioGroup.Option>
                            ))}
                        </div>
                        </RadioGroup>
                      </div>
                      
                  </div>

{/* Register Functionality */} 
                  <div className="mt-4 mx-5">
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
                
        
                </form>
              </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
    </Transition>
  )
}

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}


export default Registration