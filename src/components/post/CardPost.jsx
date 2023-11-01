import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Comments, ContainerCardPost, LikesDislikes, LikesDislikesCommentsContainer } from './StylesCardPost';
import ArrowDown from '../../assets/arrow-down.svg';
import ArrowUp from '../../assets/arrow-up.svg';
import ChatText from '../../assets/chat-text.svg';
import { LikeOrDislike } from '../../constants/constants';


const CardPost = ({ creatorPost, content, likes, dislikes, comments, id, onClickComments }) => {
  const location = useLocation();
  const isOnPostsPage = location.pathname === '/posts';
  const [likeStatus, setLikeStatus] = useState(null); // null para nenhum like/dislike, 1 para like, 0 para dislike

  const handleLikeDislike = async (like) => {
    try {
      const body = {
        like: like,
      };
      const result = await LikeOrDislike(body, id);
      setLikeStatus(result.like ? 1 : 0);
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <ContainerCardPost>
      <p>Enviado por: {creatorPost}</p>
      <h3>{content}</h3>
      <LikesDislikesCommentsContainer>
        <LikesDislikes>
          <button onClick={() => handleLikeDislike(true)} disabled={likeStatus === 1}>
            <img src={ArrowUp} alt="Up" />
          </button>
          <span>{likes - dislikes}</span>
          <button onClick={() => handleLikeDislike(false)} disabled={likeStatus === 0}>
            <img src={ArrowDown} alt="Down" />
          </button>
        </LikesDislikes>
        {isOnPostsPage && (
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

