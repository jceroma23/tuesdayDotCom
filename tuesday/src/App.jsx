import React, { useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom" 
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RequireAuth } from "react-auth-kit";
import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import { useDispatch, useSelector } from 'react-redux';

// Import Pages
import HomePage from "./pages/homePage"
import NewAccounts from "./components/newAccounts";
import { login } from "./features/user";
import LoginPage from "./pages/loginPage";

function App() {
   // This will Get the token and decode to use it on Store

  const disptach = useDispatch()
  
  useEffect(() => {
    const getToken = () => {
      const cookieName = '_auth';
      const token = Cookies.get(cookieName);
      if (token) {
        try {
          const decodedToken = jwtDecode(token);
          disptach(login({
            userId: decodedToken.userId,
            userName: decodedToken.userName,
            isLogin:true
          }))
        } catch (error) {
          console.error('Failed to decode token:', error.message);
        }
      } else {
        console.log('Token not found in cookies.');
      }
    };
    getToken();
  }, [])

  return (
    <>
    <ToastContainer
      position="top-left"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
    />
    
    
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={ <RequireAuth loginPath="/">
          <HomePage/>
        </RequireAuth> }/>
        <Route path="/newAccounts" element={ <RequireAuth loginPath="/">
          <NewAccounts/>
        </RequireAuth> }/>
        
        <Route path="/" element={<LoginPage/>}/>
       
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
