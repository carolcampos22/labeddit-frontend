import React from 'react';
import { useLocation } from 'react-router-dom'; 
import { Comments, ContainerCardPost, LikesDislikes, LikesDislikesCommentsContainer } from './StylesCardPost';
import ArrowDown from '../../assets/arrow-down.svg'
import ArrowUp from '../../assets/arrow-up.svg'
import ChatText from '../../assets/chat-text.svg'

const CardPost = ({ creatorPost, content, likes, dislikes, comments, id, onClickComments }) => {
  const location = useLocation(); 
  const isOnPostsPage = location.pathname === '/posts'; 

  return (
    <ContainerCardPost>
      <p>Enviado por: {creatorPost}</p>
      <h3>{content}</h3>
      <LikesDislikesCommentsContainer>
        
        <LikesDislikes>
          <button><img src={ArrowUp} alt="Up" /></button>
          <span>{likes - dislikes}</span>
          <button><img src={ArrowDown} alt="Down" /></button>
        </LikesDislikes>
        {isOnPostsPage && ( // Condicional para renderizar o botão apenas na página de Posts
          <Comments>
            <button onClick={() => onClickComments(id)}>
              <img src={ChatText} alt="Comment" />
            </button>
            <span>{comments}</span>
          </Comments>
        )}
      </LikesDislikesCommentsContainer>
    </ContainerCardPost>
  );
};

export default CardPost;


/*import { useNavigate } from 'react-router-dom'
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

export default CardPost*/