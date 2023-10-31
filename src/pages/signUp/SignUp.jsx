import React, { useState } from 'react'
import { Button, InputsSignUpContainer, SignUpContainer, Texts } from './StylesSignUp'
import { useForm } from '../../hooks/useForm'
import Header from '../../components/header/Header'
import { goToLoginPage, goToPostsPage } from '../../router/coordinator'
import { SignUpUser, validateEmail, validateName, validatePassword } from '../../constants/constants'
import { useNavigate } from 'react-router-dom'


const SignUp = () => {
  const navigate = useNavigate()
  const [form, onChangeInputs, clearInputs] = useForm({
    nickname: "",
    email: "",
    password: ""
  })

  const [isNameValid, setIsNamedValid] = useState(true)
  const [isEmailValid, setIsEmailValid] = useState(true)
  const [isPasswordValid, setIsPasswordValid] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  

  const onSubmit = async (event) => {
    event.preventDefault()
    clearInputs()
    setIsNamedValid(validateName(form.nickname))
    setIsEmailValid(validateEmail(form.email))
    setIsPasswordValid(validatePassword(form.password))
    

    try {
      setIsLoading(true);
  
      const { token } = isNameValid && isEmailValid && isPasswordValid && await SignUpUser({
        nickname: form.nickname,
        email: form.email,
        password: form.password
      })
      localStorage.setItem("login-labeddit.token", token)
      setIsLoading(false)
      goToPostsPage(navigate)

    } catch (error) {
      console.log(error);
      alert(error.response.data[0].message)
    }
  }


  return (
    <SignUpContainer>
      <Header goToLoginPage={goToLoginPage} />
      <h1>Olá, boas vindas ao LabEddit ;)</h1>
      <InputsSignUpContainer>
        <input
          type="text"
          name='nickname'
          value={form.nickname}
          onChange={onChangeInputs}
          placeholder='Apelido'
          required
        />
        <input
          type="email"
          name='email'
          value={form.email}
          onChange={onChangeInputs}
          placeholder='E-mail'
          required
        />
        <input
          type="password"
          name='password'
          placeholder='Senha'
          value={form.password}
          onChange={onChangeInputs}
          required />
      </InputsSignUpContainer>
      <Texts>
        <p>Ao continuar, você concorda com o nosso <a href='#'>Contrato de Usuário</a> e nossa <a href='#'>Política de Privacidade</a></p><br />
        <input type='checkbox'></input> <span>Eu concordo em receber e-mails sobre coisas legais no LabEddit</span>
      </Texts>
      <Button onClick={onSubmit}>{isLoading ? "Carregando..." : "Cadastrar"}</Button>
    </SignUpContainer>
  )
}

export default SignUp


