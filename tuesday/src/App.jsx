import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RequireAuth } from "react-auth-kit";
import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import { useDispatch, useSelector } from 'react-redux';

// Features
import { login } from "./features/user";

// Pages
import LoginPage from "./pages/loginPage";
import Loader from "./components/loader";
import TaskPage from "./pages/taskPage";
import HomePage from "./pages/homePage";

function App() {
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getToken = () => {
      const cookieName = '_auth';
      const token = Cookies.get(cookieName);
      if (token) {
        try {
          const decodedToken = jwtDecode(token);
          dispatch(login({
            userId: decodedToken.userId,
            userName: decodedToken.userName,
            fullName: decodedToken.fullName,
            isLogin: true,
          }));
        } catch (error) {
          console.error('Failed to decode token:', error.message);
        }
      } else {
        console.log('Token not found in cookies.');
      }
      // Set isLoading to false when data fetching is complete
      setIsLoading(false);
    };
    getToken();
  }, []);

  if (isLoading) {
    // Display a loading indicator or component while fetching data
    return <Loader />;
  } else {
    return (
      <BrowserRouter>
          <Routes>
            <Route path="/home" element={<RequireAuth loginPath="/">
              <HomePage />
            </RequireAuth>} />
            <Route path="/taskPage/:projectId" element={<RequireAuth loginPath="/">
              <TaskPage />
            </RequireAuth>} />
            <Route path="/" element={<LoginPage />} />
          </Routes>
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
      </BrowserRouter>
    );
  }

 
}

export default App;
