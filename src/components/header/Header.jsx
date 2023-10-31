import React from 'react'
import Logo2 from '../../assets/logo-2.png'
import { HeaderContainer } from './StylesHeader'
import { useNavigate } from 'react-router-dom'
import { goToLoginPage } from '../../router/coordinator'

const Header = ({isLoggedIn, setIsLoggedIn}) => {
  const navigate = useNavigate()

  const buttonAction = () => {
    if(isLoggedIn){
      localStorage.removeItem("login-labeddit.token")
      setIsLoggedIn(false)
      
    }
    goToLoginPage(navigate)
  }

  const buttonText = isLoggedIn ? "Logout" : "Entrar"

  return (
    <HeaderContainer>
        <img src={Logo2} alt="Logo da Labenu" />
        <a onClick={buttonAction} type='button'>{buttonText}</a>
    </HeaderContainer>
  )
}

export default Header