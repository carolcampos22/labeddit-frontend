import React from 'react'
import Logo2 from '../../assets/logo-2.png'
import { HeaderContainer } from './StylesHeader'
import { useNavigate } from 'react-router-dom'

const Header = ({goToLoginPage}) => {
  const navigate = useNavigate()
  return (
    <HeaderContainer>
        <img src={Logo2} alt="Logo da Labenu" />
        <a onClick={() => goToLoginPage(navigate)} type='button'> Entrar</a>
    </HeaderContainer>
  )
}

export default Header