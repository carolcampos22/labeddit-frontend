import React, { useState } from 'react'
import { LikesDislikes, LikesDislikesCommentsContainer } from '../post/StylesCardPost'
import { ContainerCardComment } from './StylesCardComment'
import ArrowUp from '../../assets/arrow-up.svg'
import ArrowDown from '../../assets/arrow-down.svg'
import { LikeOrDislike } from '../../constants/constants'


const CardComment = ({creatorComment, message}) => {
  
  return (
    
      <ContainerCardComment>
      <p>Enviado por: {creatorComment}</p>
      <h3>{message}</h3>
      
    </ContainerCardComment>
    
  )
}

export default CardComment