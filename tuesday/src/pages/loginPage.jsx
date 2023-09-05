import React, {  useState } from 'react'
import Registration from "../components/registration";
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../components/loader';
import axios from "axios";
import { loginRoute } from '../utils/APIroutes';
import { useNavigate } from 'react-router-dom';
import { closeLoading, openLoading } from '../features/loading';
import { toast } from 'react-toastify';
import { useSignIn } from 'react-auth-kit';
import { login } from '../features/user';


const LoginPage = () => {
  const navigate = useNavigate()
  const signIn = useSignIn()
  const [ errorText, seterrorText ] = useState("");
  const [ values, setValues ] = useState({
    userName:"",
    userPassword:""
  })

  const [ registrationModal, setRegistrationModal ] = useState(false)
  const isloaderPage = useSelector((state) => state.loader.isLoading)
  const dispatch = useDispatch();
  const handleRegistrationModal = () => {
    setRegistrationModal(true);
  }
  const handleRegistrationModalClose = () => {
    setRegistrationModal(false);
  }

// LogIn 
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
          dispatch(openLoading())
          // Set a loader for login
          toast.success("Login successful");
          signIn({
                token: data.token,
                expiresIn: 3600,
                tokenType: "Bearer",
                authState: { userName: values.userName},
            })
          
          // Set time for closing the loading page
          setTimeout(() => {
            dispatch(closeLoading())
            dispatch(login({
            isLogin: true,
          }));
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
    <div className='h-screen'>
 {isloaderPage ? (  
        <Loader/>
       ) : ( 
        <div>
          <div className='pt-16 w-screen h-auto flex flex-wrap  justify-center'>
            <div className='text-center w-1/3 h-auto mb-12 flex items-center space-x-2'>
              <div>
                  <h1 className='text-5xl mb-5'>Tuesday</h1>
                  <h3 className='text-2xl mb-10 text-wrap'>Unleash the potential of your workforce with intuitive tools, customizable workflows, and  real-time communication</h3>
              </div>  
            </div>
             
            <div className='w-1/3 h-auto mt-10'>
              <div className='w-full h-full p-5 flex justify-center items-center'>
                <form onSubmit={(event)=>handleSubmit(event)} className='w-full border-solid border-2 border-skyblues-300 rounded-lg p-5'>
                      <div className='mb-6'>
                          <label htmlFor="userName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                          <input type="text" id="userName" name='userName' className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-skyblues-500 focus:border-skyblues-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-skyblues-500 dark:focus:border-skyblues-500" placeholder="Enter your Username here"
                          onChange={(event) => handleTextChange(event)}
                          required />
                      </div>

                      <div className='mb-6'>
                          <label htmlFor="userPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                          <input type="password" id="userPassword" name='userPassword' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-skyblues-500 focus:border-skyblues-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-skyblues-500 dark:focus:border-skyblues-500" placeholder="Enter your Password here" 
                          onChange={(event) => handleTextChange(event)}
                          required />
                      </div>

                      <div className='text-center text-red-900 font-bold'>
                        {errorText}
                      </div>

                    {/* Login Functionality */}
                      <div className="mt-4 space-x-1">
                  {/* LogIN */}
                            <button
                            type="submit"
                            className="inline-flex justify-center rounded-md border border-transparent bg-skyblues-100 px-4 py-2 text-sm font-medium text-skyblues-900 hover:bg-skyblues-200 m-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-skyblues-500 focus-visible:ring-offset-2"
                            >
                            Log in
                            </button>

                  {/* Registration */}
                            <button
                            type="button"
                            className="inline-flex justify-center rounded-md border border-transparent bg-rose-100 px-4 py-2 text-sm font-medium text-rose-900 hover:bg-rose-200 m-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2"
                            onClick={handleRegistrationModal}
                            >
                            Sign Up
                            </button>
                      </div>
                </form> 
                {registrationModal &&  <Registration handleRegistrationModalClose={handleRegistrationModalClose} registrationModal={registrationModal} />}
              </div>
            </div>
          </div>
        </div>
       ) }
    </div>
  )
}

export default LoginPage