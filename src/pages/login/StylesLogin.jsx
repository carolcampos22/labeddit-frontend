import styled from "styled-components";

export const ContainerLogin = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 10vh;
   
    @media (max-width: 3000px) {
        width: 30vw;
        margin-left: 33vw;

    }
    
`

export const Logo = styled.div`
    margin-bottom: 8vh;
`

export const InputsLogin = styled.div`
    margin-bottom: 5vh;
    display: flex;
    flex-direction: column;
    
    input{
        width: 80vw;
        height: 6vh;
        border: 1px solid lightgray;
        padding-left: 3vw;

        @media (max-width: 3000px) {
        width: 30vw;
    }
    }

    @media (max-width: 3000px) {
        width: 30vw;
    }
`


export const Button = styled.button`
   width:  80vw;
   height: 5vh;
   border: none;
   border-radius: 27px;
   margin-bottom: 3vh;
   color: #fff;
   background-image: linear-gradient(to right, #FF6489 , #F9B24E);
   font-size: 2vh;
   font-weight: bold;

   &:hover{
    cursor: pointer;
   }

   @media (max-width: 3000px) {
        width: 30vw;
    }

`

export const CreateAccountButton = styled.button`
   
    width:  80vw;
    height: 5vh;
    border: 1px solid;
    border-radius: 27px;
    margin-bottom: 3vh;
    color: #FE7E02;
    font-size: 2vh;
    font-weight: bold;

    &:hover{
        cursor: pointer;
        background-color: orange;
       }

       @media (max-width: 3000px) {
        width: 30vw;
    }
`
