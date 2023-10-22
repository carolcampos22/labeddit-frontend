import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AddComment, ListComments, ListPosts } from '../../constants/constants';
import CardComment from '../../components/comment/CardComment';
import CardPost from '../../components/post/CardPost';
import { CommentsContainer, Loading } from './StylesComments';
import { ButtonPost } from '../posts/StylesPosts';
import Header from '../../components/header/Header';
import { useForm } from '../../hooks/useForm';

const Comments = () => {
  const { id } = useParams();
  const [posts, setPosts] = useState(null);
  const [comments, setComments] = useState([]);
  const [form, onChangeInputs, clearInputs] = useForm({
    message: "",
    
})

const onSubmit = async (event) => {
  event.preventDefault()
  clearInputs()
   
  
  try {
      const {token} = await AddComment({
        message: form.message,
                 
      }, id)
      localStorage.getItem("login-labeddit.token", token)
      alert("Comentário enviado!")
      
  } catch (error) {
      alert(error.response.data);
      console.log(error)
  }
}


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
  }, [id, comments]);

  
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
      
      <textarea value={form.message} name='message' onChange={onChangeInputs} placeholder='Adicionar comentário...'></textarea>
      <ButtonPost onClick={onSubmit}>Responder</ButtonPost>
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

//create comment

//like/dislike
//comments 
//responsividade
//validações de nickname, email e password

/**const Posts = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true);
  
  const navigate = useNavigate()
  const onClickComments = (idPost) => {
    
    goToCommentsPage(navigate, idPost)
  }

  
  
  useEffect(() => {
    ListPosts()
      .then(data => {
        setPosts(data)
        setLoading(false)
      })
      .catch(
        (error) => {
          console.log(error)
          setLoading(false)
        }
      )
  }, [posts])

 
  if (loading) {
    return <Loading>Loading...</Loading>;
  }

  return (
    <>
      <Header />
      <PostsContainer>

        <textarea 
          name='content'
          value={form.content}
          onChange={onChangeInputs}
          placeholder='Escreva seu post...'
          
          ></textarea>
        <ButtonPost type='submit' onClick={onSubmit}>Postar</ButtonPost>
        <div>
          {posts.map((post, index) => {
            return (
              <CardPost
                key={index}
                creatorPost={post.creator.nickname}
                content={post.content}
                likes={post.likes}
                dislikes={post.dislikes}
                comments={post.comments}
                id={post.id}
                onClickComments={onClickComments}
              />
            )
          })}

        </div>
      </PostsContainer> */