import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom" 
import './App.css'
import HomePage from "./pages/homePage"


// Import Pages


function App() {
  
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
