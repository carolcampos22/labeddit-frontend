import React from 'react'
import { LikesDislikes, LikesDislikesCommentsContainer } from '../post/StylesCardPost'
import { ContainerCardComment } from './StylesCardComment'
import ArrowUp from '../../assets/arrow-up.svg'
import ArrowDown from '../../assets/arrow-down.svg'


const CardComment = ({creatorComment, message, idComment, idPost}) => {
  return (
    
      <ContainerCardComment>
      <p>Enviado por: {creatorComment}</p>
      <h3>{message}</h3>
      <LikesDislikesCommentsContainer>
        <LikesDislikes>
          <button><img src={ArrowUp} /></button>
          <span>1.2K</span>
          <button><img src={ArrowDown} /></button>
        </LikesDislikes>
      </LikesDislikesCommentsContainer>


    </ContainerCardComment>
    
  )
}

export default CardComment