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