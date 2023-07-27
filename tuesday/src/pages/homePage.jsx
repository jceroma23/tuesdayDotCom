import React, { useState } from 'react'
import Navigation from '../components/navigation'
import LandingPage from '../layout/landingPage1'
import LoginForm from '../components/loginForm'
import Registration from '../components/registration'
import Board from './board'



const HomePage = () => {
  const [ loginModal, setLoginModal ] = useState(false)
  const [ registrationModal, setRegistrationModal ] = useState(false)

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
    <div className='min-h-screen'>
    <Board/>

    <Navigation handleLogInModal={handleLogInModal} handleRegistrationModal={handleRegistrationModal}/>
    <LandingPage/>

    {loginModal &&  <LoginForm handleLogInModalClose={handleLogInModalClose}  loginModal={loginModal} />}
    {registrationModal &&  <Registration handleRegistrationModalClose={handleRegistrationModalClose} registrationModal={registrationModal} />}
    </div>
  )
}

export default HomePage