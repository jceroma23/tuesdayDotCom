import React from 'react'
import tuesdaylog from '../assets/Tuesdaycomlogo.png'
import { Link } from 'react-router-dom'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
const Navigation = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap p-6 bg-white shadow-sm">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
            <img className='w-32' src={tuesdaylog} alt="" />
        </div>
        <div className="block lg:hidden">
            <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
               <Link className='text-black p-2.5 px-10 rounded-md text-lg hover:bg-amber-100' to="/">HOME
               <HomeRoundedIcon className='text-yellow-600 mb-1.5 ml-1'/>
               </Link>

               <Link className='text-black p-2.5 px-10 rounded-md text-lg hover:bg-amber-100 mx-2' to="/">TASK
               <KeyboardArrowDownRoundedIcon className='text-yellow-600 mb-1.5 ml-1'/>
               </Link>
            </div>
            <div>
                <Link href="#" className="inline-block  px-10 py-3 leading-none rounded-md hover:border-transparent text-lg hover:bg-amber-100  font-normal  lg:mt-0 ">LogIn</Link>

                <Link href="#" className="inline-block  px-10 py-3 leading-none border rounded-md text-amber-900 border-white hover:border-transparent text-lg hover:text-amber-950 bg-amber-200 font-bold  lg:mt-0 ">Getting Started</Link>
            </div>
        </div>
    </nav>
  
  )}

export default Navigation