import React from 'react'
import logo from '../../assets/logo-1.png'
import './StylesLogin.jsx'
import { Button, ContainerLogin, CreateAccountButton, InputsLogin, Logo } from './StylesLogin.jsx'
import { useNavigate } from 'react-router-dom'
import { goToSignUpPage } from '../../router/coordinator'
import { useForm } from "../../hooks/useForm"

export const Login = () => {
    const navigate = useNavigate()
    const [form, onChangeInputs, clearInputs] = useForm({
        email: "",
        password: ""
    })

    const onSubmit = (event) => {
        event.preventDefault()
        clearInputs()

    }
    return (
        <ContainerLogin>
            <Logo>
                <img src={logo} />
                <p>O projeto de rede social da Labenu</p>
            </Logo>
            <InputsLogin>
                <form onSubmit={onSubmit}>
                <input 
                    type='email'
                    value={form.email}
                    name='email'
                    onChange={onChangeInputs} 
                    title='Insira um e-mail válido' 
                    placeholder='E-mail'
                    required
                ></input>
                <br />
                <input 
                    placeholder='Senha'
                    type='password'
                    name='password'
                    value={form.password}
                    onChange={onChangeInputs}
                    minLength={6}
                    required
                                    
                ></input>
                </form>
            </InputsLogin>
            <div>
                <Button type='submit' onClick={onSubmit}>Continuar</Button>
                <CreateAccountButton onClick={() => goToSignUpPage(navigate)}>Criar uma conta!</CreateAccountButton>
            </div>
        </ContainerLogin>

    )
}

export default Login

