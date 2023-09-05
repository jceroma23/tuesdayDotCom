import React, {  useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'flowbite-react';
import LoginForm from "../components/loginForm";
import Registration from "../components/registration";
import { useSelector } from 'react-redux';
import Loader from '../layout/loader';



const LandingPage = () => {
  const [ loginModal, setLoginModal ] = useState(false)
  const [ registrationModal, setRegistrationModal ] = useState(false)
  const isloaderPage = useSelector((state) => state.loader.isLoading)

  const handleLogInModal = () => {
    setLoginModal(true);
  }
  const handleLogInModalClose = () => {
    setLoginModal(false);
  }

  const handleRegistrationModal = () => {
    setRegistrationModal(true);
  }
  const handleRegistrationModalClose = () => {
    setRegistrationModal(false);
  }

  return (
    <div className='text-center h-screen flex justify-center'>
       {isloaderPage ? (  
        <Loader/>
       ) : ( 
        <div className='pt-16 w-2/4'>
             <h1 className='text-5xl mb-10  '>Unleash the potential of your workforce with intuitive tools, customizable workflows, and real-time communication</h1>
            <h3 className='text-xl text-emerald-900'> Embrace Tuesday.com and take control of your projects, your teams, and your success.</h3>
          <div className='mt-10'>
          <Link onClick={handleLogInModal} className="inline-block  px-10 py-3 leading-none rounded-md hover:border-transparent text-lg hover:bg-emerald-100  font-normal  lg:mt-0 ">LogIn</Link>
          <Link onClick={handleRegistrationModal} className="inline-block  px-10 py-3 leading-none border rounded-md text-emerald-900 border-white hover:border-transparent text-lg hover:text-emerald-950 bg-emerald-200 font-bold  lg:mt-0 ">Sign up</Link>
          {loginModal &&  <LoginForm handleLogInModalClose={handleLogInModalClose}  loginModal={loginModal} />}
          {registrationModal &&  <Registration handleRegistrationModalClose={handleRegistrationModalClose} registrationModal={registrationModal} />}
          </div>
        </div> 
     
       ) }

    </div>  
    
  )
}

export default LandingPage







                           <li aria-labelledby="dropdownNavbarLink">
                                <button id="doubleDropdownButton" data-dropdown-toggle="doubleDropdown" data-dropdown-placement="right-start" type="button" className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                
                                <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                                </svg>
                                </button>
                                <div id="doubleDropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="doubleDropdownButton">
                                    <li>
                                        <Link className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Overview</Link>
                                    </li>
                                    <li>
                                        <Link className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">My downloads</Link>
                                    </li>
                                    <li>
                                        <Link className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Billing</Link>
                                    </li>
                                    <li>
                                        <Link className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Rewards</Link>
                                    </li>
                                    </ul>
                                </div>
                            </li>





   <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="flex items-center justify-center h-24 rounded bg-skyblues-50 dark:bg-skyblues-800">
                  <p className="text-2xl text-skyblues-400 dark:text-skyblues-500">
                    <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                    </svg>
                  </p>
              </div>
              <div className="flex items-center justify-center h-24 rounded bg-skyblues-50 dark:bg-skyblues-800">
                  <p className="text-2xl text-skyblues-400 dark:text-skyblues-500">
                    <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                    </svg>
                  </p>
              </div>
              <div className="flex items-center justify-center h-24 rounded bg-skyblues-50 dark:bg-skyblues-800">
                  <p className="text-2xl text-skyblues-400 dark:text-skyblues-500">
                    <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                    </svg>
                  </p>
              </div>
            </div>
            <div className="flex items-center justify-center h-48 mb-4 rounded bg-skyblues-50 dark:bg-skyblues-800">
              <p className="text-2xl text-skyblues-400 dark:text-skyblues-500">
                  <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                  </svg>
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex items-center justify-center rounded bg-skyblues-50 h-28 dark:bg-skyblues-800">
                  <p className="text-2xl text-skyblues-400 dark:text-skyblues-500">
                    <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                    </svg>
                  </p>
              </div>
              <div className="flex items-center justify-center rounded bg-skyblues-50 h-28 dark:bg-skyblues-800">
                  <p className="text-2xl text-skyblues-400 dark:text-skyblues-500">
                    <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                    </svg>
                  </p>
              </div>
              <div className="flex items-center justify-center rounded bg-skyblues-50 h-28 dark:bg-skyblues-800">
                  <p className="text-2xl text-skyblues-400 dark:text-skyblues-500">
                    <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                    </svg>
                  </p>
              </div>
              <div className="flex items-center justify-center rounded bg-skyblues-50 h-28 dark:bg-skyblues-800">
                  <p className="text-2xl text-skyblues-400 dark:text-skyblues-500">
                    <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                    </svg>
                  </p>
              </div>
            </div>
            <div className="flex items-center justify-center h-48 mb-4 rounded bg-skyblues-50 dark:bg-skyblues-800">
              <p className="text-2xl text-skyblues-400 dark:text-skyblues-500">
                  <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                  </svg>
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center justify-center rounded bg-skyblues-50 h-28 dark:bg-skyblues-800">
                  <p className="text-2xl text-skyblues-400 dark:text-skyblues-500">
                    <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                    </svg>
                  </p>
              </div>
              <div className="flex items-center justify-center rounded bg-skyblues-50 h-28 dark:bg-skyblues-800">
                  <p className="text-2xl text-skyblues-400 dark:text-skyblues-500">
                    <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                    </svg>
                  </p>
              </div>
              <div className="flex items-center justify-center rounded bg-skyblues-50 h-28 dark:bg-skyblues-800">
                  <p className="text-2xl text-skyblues-400 dark:text-skyblues-500">
                    <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                    </svg>
                  </p>
              </div>
              <div className="flex items-center justify-center rounded bg-skyblues-50 h-28 dark:bg-skyblues-800">
                  <p className="text-2xl text-skyblues-400 dark:text-skyblues-500">
                    <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                    </svg>
                  </p>
              </div>
            </div>.



            const getInitials = (fullName) => {
    if (!fullName) {
        return ''; // Return an empty string for no name
    }

    const nameParts = fullName.trim().split(' ');

    return nameParts
        .filter(part => typeof part === 'string' && part.length > 0) // Filter out non-string or empty parts
        .map(part => part[0].toUpperCase()) // Safely access the first letter
        .join('');
};


onClick={() => handleTaskView(project.ownedProjectsBoard ? project.ownedProjectsBoard : project.acceptedProjectsBoard)}



import React from 'react'
import { useSelector } from "react-redux"


const Board = () => {
    const user = useSelector((state) => state.user.value)

  return (
    <div className='flex justify-center'>
        <div>
        Sample Board using reducer
            <h1>Name: {user.name}</h1>
            <p>Email: {user.email} </p>
            <p>Role: {user.role} </p>
        </div>
    </div>
  )
}

export default Board




import { useEffect, useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import axios from 'axios';
import { userEditRoute } from '../utils/APIroutes';
import { useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom'

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

const NewAccounts = () => {
    const [selected, setSelected] = useState(plans[0]);
    const disptach = useDispatch()
    const user = useSelector((state) => state.user.value)
    const navigate = useNavigate()
  
    const handleSubmit = async (event) => {
        event.preventDefault();
        setCreateBtn(!!plans[0]);
        if (fullName === '' || selected === plans[0]) {
            console.log('Please fill up form', selected)
        }
        const { data } = await axios.put(`${userEditRoute}/${user.userId}`, { title: selected.name });
        if (data) {
            toast.success("Welcome");
        setTimeout(() => {
            navigate("/home")
        }, 3000)
        } else {
            console.log("No data or no message property in the response.");
        }
    };
  return (
    <div className="w-screen px-4 py-16">
      <div className="mx-auto w-full flex justify-center">

        <div className='w-full max-w-md'>
            <form>           
            <div className='max-w-md mx-10'>
                <h1 className='my-3 text-2xl'>Set up your New Account</h1>
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
                     <div className="mt-4">
                         <button
                         type="submit"
                         className="inline-flex justify-center rounded-md border border-transparent bg-amber-100 px-4 py-2 text-sm font-medium text-amber-900 hover:bg-amber-200 m-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
                        onClick={handleSubmit}
                         > 
                         Next
                         </button>
                         <button
                         type="submit"
                         className="inline-flex justify-center rounded-md border border-transparent bg-skyblues-100 px-4 py-2 text-sm font-medium text-skyblues-900 hover:bg-skyblues-200 m-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-skyblues-500 focus-visible:ring-offset-2"
                        onClick={handleSubmit}
                         > 
                         Skip
                         </button>
                    </div>
            </form> 
        </div>
        </div>
    </div>
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

export default NewAccounts


 {/* <Route path="/projects" element={ <RequireAuth loginPath="/">
                  
                </RequireAuth> }/>
                <Route path="/welcome" element={ <RequireAuth loginPath="/">
                  
                </RequireAuth> }/> */}






                  useEffect(() => {
    const getToken = () => {
      const cookieName = '_auth';
      const token = Cookies.get(cookieName);
      if (token) {
        try {
          const decodedToken = jwtDecode(token);
          dispatch(
            login({
              userId: decodedToken.userId,
              userName: decodedToken.userName,
              fullName: decodedToken.fullName,
              isLogin: true,
            })
          );
        } catch (error) {
          console.error('Failed to decode token:', error.message);
        }
      } else {
        console.log('Token not found in cookies.');
      }
    };

    getToken();
  }, [dispatch]); // Include dispatch as a dependency


{user.isLogin && <Navigation />}
        <div className="flex w-screen bg">
          {user.isLogin && <Sidebar />}



          const getUserProjectDetail = await userSchemaModel
        .findById(userId)
        .populate('projects.ownedProjectsBoard')
        .populate('projects.acceptedProjectsBoard')
        .populate({
            path: 'projects.ownedProjectsBoard',
            populate: {
                path: 'createdBy', // Assuming createdBy is a reference to userSchemaModel
                select: 'userName', // Select the userName field
            }
            })
        .populate({
            path: 'projects.acceptedProjectsBoard',
            populate: {
                path: 'createdBy', // Assuming createdBy is a reference to userSchemaModel
                select: 'userName', // Select the userName field
            }
            })
        .select('projects.ownedProjectsBoard projects.acceptedProjectsBoard');
        res.status(200).json({ message: "Successful", getUserProjectDetail: getUserProjectDetail  });


        // Second update User Owned Project
        const addProjecttoUser = await userSchemaModel
        .findByIdAndUpdate(userId, {
            $push: { projects: [{ownedProjectsBoard: newProjectBoard._id}] }
        }, {new: true})
        .populate('projects.ownedProjectsBoard', 'boardName description')
        .populate('projects.acceptedProjectsBoard', 'boardName description')