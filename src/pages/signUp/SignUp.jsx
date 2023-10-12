import React from 'react'
import { Button, InputsSignUpContainer, SignUpContainer, Texts } from './StylesSignUp'
import { useForm } from '../../hooks/useForm'

const SignUp = () => {
  const [form, onChangeInputs, clearInputs] = useForm({
    name: "",
    email: "",
    password: ""
})

const onSubmit = (event) => {
    event.preventDefault()
    clearInputs()
    console.log(form)

}
  return (
    <SignUpContainer>
        <h1>Olá, boas vindas ao LabEddit ;)</h1>
        <InputsSignUpContainer>
            <input 
              type="text" 
              name='name'
              value={form.name}
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
              required/>
        </InputsSignUpContainer>
        <Texts>
            <p>Ao continuar, você concorda com o nosso <a href='#'>Contrato de Usuário</a> e nossa <a href='#'>Política de Privacidade</a></p><br/>
            <input type='checkbox'></input> <span>Eu concordo em receber e-mails sobre coisas legais no LabEddit</span>
        </Texts>
        <Button onClick={onSubmit}>Cadastrar</Button>
    </SignUpContainer>
  )
}

export default SignUp