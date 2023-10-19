import styled from "styled-components";

export const CommentsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3vw;
    textarea{
        resize: none;
        width: 90vw;
        height: 15vh;
        background-color: #EDEDED;
        padding: 1rem;
        border: none;
        border-radius: 12px;
        margin-bottom: 1.5vh;
        margin-top: 2vh;
    }
`

export const Loading = styled.div`
    text-align: center;
    font-weight: bold;
    font-size: 3vh;
    color: #FF6489;
    margin-top: 40vh;
`