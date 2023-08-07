import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom" 
import './App.css'
import HomePage from "./pages/homePage"
import LandingPage from "./pages/landingPage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NewAccounts from "./components/newAccounts";
import { RequireAuth } from "react-auth-kit";

// Import Pages


function App() {

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
        <Route path="/home" element={ <RequireAuth loginPath="/login">
          <HomePage/>
        </RequireAuth> }/>
        <Route path="/newAccounts" element={ <RequireAuth loginPath="/login">
          <NewAccounts/>
        </RequireAuth> }/>
        
        <Route path="/login" element={<LandingPage/>}/>


        {/* <Route path="/home" element={<HomePage/>}/> */}
        {/* <Route path="/newAccounts" element={<NewAccounts/>}/> */}
        
       
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
