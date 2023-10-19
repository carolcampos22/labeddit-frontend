import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HeaderComments from '../../assets/header-comments.png';
import { ListComments, ListPosts } from '../../constants/constants';
import CardComment from '../../components/comment/CardComment';
import CardPost from '../../components/post/CardPost';
import { CommentsContainer } from './StylesComments';
import { ButtonPost } from '../posts/StylesPosts';
import Header from '../../components/header/Header';

const Comments = () => {
  const { id } = useParams(); // Obtém o ID do post da URL
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

  // Verifique se o objeto "posts" não é "undefined" antes de acessar suas propriedades
  if (!posts) {
    return <div>Loading...</div>;
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
        // onClickComments={onClickComments}
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


/*import React, { useEffect, useState } from 'react'
import HeaderComments from '../../assets/header-comments.png'
import CardPost from '../../components/post/CardPost'
import { CommentsContainer } from './StylesComments'
import { ButtonPost } from '../posts/StylesPosts'
import CardComment from '../../components/comment/CardComment'
import { ListComments, ListPosts } from '../../constants/constants'
import { useParams } from 'react-router-dom'


const Comments = () => {
  const [comments, setComments] = useState([])
  const [posts, setPosts] = useState([])
  const { id } = useParams()

  useEffect(() => {
    ListComments(id)
      .then(data => {
        setComments(data)
        console.log(data)
      })
      .catch(
        (error) => {
          console.log(error)
        }
      )
  }, [])

  useEffect(() => {
    ListPosts()
      .then(dataPost => {
        setPosts(dataPost)
        console.log(dataPost)
        
      })
      .catch(
        (error) => {
          console.log(error)
        }
      )
  }, [id])

  if (!posts) {
    return <div>Loading...</div>;
  }


  return (
    <CommentsContainer>
      <header>
        <img src={HeaderComments} alt="" />
      </header>
      <CardPost
        creatorPost={posts.creator.nickname}
        content={posts.content}
        likes={posts.likes}
        dislikes={posts.dislikes}
        comments={posts.comments}
        id={posts.id}
        onClickComments={onClickComments}
    />
      <textarea placeholder='Adicionar comentário...'></textarea>
      <ButtonPost>Responder</ButtonPost>
      {comments.map((comment, index) => {
        return (
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
        )
      })}
      
    </CommentsContainer>
  )
}

export default Comments*/