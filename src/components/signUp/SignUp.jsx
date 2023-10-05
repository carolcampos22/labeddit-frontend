import React from 'react'
import { Button, InputsSignUpContainer, SignUpContainer, Texts } from './StylesSignUp'

const SignUp = () => {
  return (
    <SignUpContainer>
        <h1>Olá, boas vindas ao LabEddit ;)</h1>
        <InputsSignUpContainer>
            <input type="text" placeholder='Apelido'/>
            <input type="email" placeholder='E-mail'/>
            <input type="password" placeholder='Senha'/>
        </InputsSignUpContainer>
        <Texts>
            <p>Ao continuar, você concorda com o nosso <a href='#'>Contrato de Usuário</a> e nossa <a href='#'>Política de Privacidade</a></p><br/>
            <input type='checkbox'></input> <span>Eu concordo em receber e-mails sobre coisas legais no LabEddit</span>
        </Texts>
        <Button>Cadastrar</Button>
    </SignUpContainer>
  )
}

export default SignUp