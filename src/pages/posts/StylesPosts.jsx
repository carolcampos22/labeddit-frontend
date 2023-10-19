import styled from "styled-components";

export const PostsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10vw;
    textarea{
        resize: none;
        width: 80vw;
        height: 15vh;
        background-color: #EDEDED;
        padding: 1rem;
        border: none;
        border-radius: 12px;
        margin-bottom: 1.5vh;
        margin-top: 2vh;
    }
`

export const ButtonPost = styled.button`
   width:  80vw;
   height: 5vh;
   border: none;
   border-radius: 12px;
   margin-bottom: 3vh;
   color: #fff;
   background-image: linear-gradient(to right, #FF6489 , #F9B24E);
   font-size: 2vh;
   font-weight: bold;

   &:hover{
    cursor: pointer;
   }

`