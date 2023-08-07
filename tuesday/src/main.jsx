import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthProvider } from 'react-auth-kit'
//REDUX
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import userReducer from "./features/user.js";
import modalReducer from "./features/modal.js";
import loaderReducer from './features/loading.js';


const store = configureStore({
  reducer:{
    user: userReducer,
    loginModal: modalReducer,
    loader: loaderReducer
  },
})


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider authType = {'cookie'}
                  authName={'_auth'}
                  cookieDomain={window.location.hostname}
                  cookieSecure={false}>
  <Provider store={store}>
  <App />
  </Provider>
  </AuthProvider>
  </React.StrictMode>,
)
