import styled from "styled-components";

export const ContainerCardPost = styled.div`
    padding: 1rem;
    border-radius: 20px;
    border: 1px solid lightgray;
    margin-top: 2vh;
    h3{
        margin-top: 2vh;
    }
`

export const LikesDislikesCommentsContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10vw;
    margin-top: 2vh;
`

export const LikesDislikes = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 40vw;
    border: 2px solid lightgray;
    border-radius: 40px;
    margin-top: 1vh;
    padding: .4rem;
`

export const Comments = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 22vw;
    border: 2px solid lightgray;
    border-radius: 40px;
    margin-top: 1vh;
    padding: .4rem;
`