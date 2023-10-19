import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ListComments, ListPosts } from '../../constants/constants';
import CardComment from '../../components/comment/CardComment';
import CardPost from '../../components/post/CardPost';
import { CommentsContainer, Loading } from './StylesComments';
import { ButtonPost } from '../posts/StylesPosts';
import Header from '../../components/header/Header';

const Comments = () => {
  const { id } = useParams();
  const [posts, setPosts] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    ListComments(id)
      .then(data => {
        setComments(data);
      })
      .catch(error => {
        console.log(error);
      });

    ListPosts(id)
      .then(dataPost => {
        setPosts(dataPost);
      })
      .catch(error => {
        console.log(error);
      });
  }, [id]);

  
  if (!posts) {
    return <Loading>Loading...</Loading>;
  }

  return (
    <CommentsContainer>
      <Header/>
      {posts.map((post, index) => {
        if(post.id === id){
        return <CardPost
        key={index}
        creatorPost={post.creator?.nickname}
        content={post.content}
        likes={post.likes}
        dislikes={post.dislikes}
        comments={post.comments}
        id={post.id}
      />}
      })}
      
      <textarea placeholder='Adicionar comentário...'></textarea>
      <ButtonPost>Responder</ButtonPost>
      {comments.map((comment, index) => (
        <CardComment
          key={index}
          creatorComment={comment.creator.creatorNickname}
          message={comment.message}
          likes={comment.likes}
          dislikes={comment.dislikes}
          comments={comment.comments}
          idComment={comment.id}
          idPost={comment.idPost}
        />
      ))}
    </CommentsContainer>
  );
}

export default Comments;

