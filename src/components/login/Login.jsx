import React from 'react'
import logo from '../../assets/logo-1.png'
import './StylesLogin.jsx'
import { Button, ContainerLogin, CreateAccountButton, InputsLogin, Logo } from './StylesLogin.jsx'

export const Login = () => {
    return (
        <ContainerLogin>
            <Logo>
                <img src={logo} />
                <p>O projeto de rede social da Labenu</p>
            </Logo>
            <InputsLogin>
                <input placeholder='E-mail'></input>
                <br/>
                <input placeholder='Senha'></input>
            </InputsLogin>
            <div>
                <Button>Continuar</Button>
                <CreateAccountButton>Criar uma conta!</CreateAccountButton>
            </div>
        </ContainerLogin>

    )
}

export default Login