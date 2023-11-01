import styled from "styled-components";

export const HeaderContainer = styled.div`
    
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 25vw;

    img{
        width: 15vw;
        margin-left: 32vw;
        margin-top: 5vh;

        @media (min-width: 950px){
            width: 10vw;
        }

        @media (min-width: 1200px){
            width: 7vw;
            margin-bottom: -7vh;
        }
        
        
    }
   

    a{
        text-decoration: none;
        text-align: center;
        font-weight: bold;
        margin-top: 5vh;
        color: blue;        
    }

    a:hover{
        cursor: pointer;
    }
`