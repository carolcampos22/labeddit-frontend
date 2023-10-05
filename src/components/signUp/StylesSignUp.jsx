import styled from "styled-components";

export const SignUpContainer = styled.div`
    h1{
        margin-top: 2vh;
        margin-left: 8vw;
        color: #373737;
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`

export const InputsSignUpContainer = styled.div`
    margin-top: 20vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items-center;
    gap: 5px;

    input{
        width: 80vw;
        height: 6vh;
        border: 1px solid lightgray;
        padding-left: 3vw;
    }
`

export const InputsSignUp = styled.div`
    
`

export const Texts = styled.div`
    margin-top: 10vh;
    margin-left: 1rem;

    a{
        text-decoration: none;
    }
`

export const Button = styled.button`
   width:  80vw;
   height: 5vh;
   border: none;
   border-radius: 27px;
   margin-top: 3vh;
   margin-bottom: 3vh;
   color: #fff;
   background-image: linear-gradient(to right, #FF6489 , #F9B24E);
   font-size: 2vh;
   font-weight: bold;

   &:hover{
    cursor: pointer;
   }

`