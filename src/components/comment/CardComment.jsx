import React from 'react'
import { LikesDislikes, LikesDislikesCommentsContainer } from '../post/StylesCardPost'
import { ContainerCardComment } from './StylesCardComment'
import ArrowUp from '../../assets/arrow-up.svg'
import ArrowDown from '../../assets/arrow-down.svg'


const CardComment = () => {
  return (
    
      <ContainerCardComment>
      <p>Enviado por: labaluno12</p>
      <h3>Não posso falar por todos, mas usar Linux ajudou meu pc a ter uma performance melhor (e evitou que eu precisasse comprar um novo)</h3>
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