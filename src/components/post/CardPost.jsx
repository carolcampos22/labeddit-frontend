import { useNavigate } from 'react-router-dom'
import ArrowDown from '../../assets/arrow-down.svg'
import ArrowUp from '../../assets/arrow-up.svg'
import ChatText from '../../assets/chat-text.svg'
import { Comments, ContainerCardPost, LikesDislikes, LikesDislikesCommentsContainer } from './StylesCardPost'
import { goToCommentsPage } from '../../router/coordinator'



const CardPost = ({creatorPost, content, likes, dislikes, comments, id, onClickComments}) => {
  
  
  return (
    <ContainerCardPost>
      <p>Enviado por: {creatorPost}</p>
      <h3>{content}</h3>
      <LikesDislikesCommentsContainer>
        <LikesDislikes>
          <button><img src={ArrowUp} /></button>
          <span>1.2K</span>
          <button><img src={ArrowDown} /></button>
        </LikesDislikes>
        <Comments>
          <button onClick={() => onClickComments(id)}><img src={ChatText} /></button><span>132</span>
        </Comments>
      </LikesDislikesCommentsContainer>


    </ContainerCardPost>
  )
}

export default CardPost