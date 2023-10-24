import React, { useEffect, useState } from 'react'
import { ButtonPost, PostsContainer } from './StylesPosts'
import CardPost from '../../components/post/CardPost'
import { AddPost, LikeOrDislike, ListPosts } from '../../constants/constants';
import Header from '../../components/header/Header'
import { useNavigate } from 'react-router-dom'
import { goToCommentsPage } from '../../router/coordinator'
import { Loading } from '../comments/StylesComments'
import { useForm } from '../../hooks/useForm'
import { useProtectedPage } from '../../hooks/useProtectedPage';



const Posts = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true);
  const [form, onChangeInputs, clearInputs] = useForm({
    content: "",
    
})
  const navigate = useNavigate()
  useProtectedPage(navigate)
  const onClickComments = (idPost) => {
    
    goToCommentsPage(navigate, idPost)
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    clearInputs()
    
    
    try {
        const {token} = await AddPost({
          content: form.content,
            
        })
        localStorage.getItem("login-labeddit.token", token)
        alert("Post enviado!")
        
    } catch (error) {
        alert(error.response.data);
        console.log(error)
    }
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
      </PostsContainer>
    </>
  )
}

export default Posts


//proteção de páginas
//like/dislike
//responsividade
//validações de nickname, email e password
//botão de voltar na página de comentários


//sugestão do CHATGPT:
/**import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ButtonPost, PostsContainer } from './StylesPosts';
import CardPost from '../../components/post/CardPost';
import Header from '../../components/header/Header';
import { useNavigate } from 'react-router-dom';
import { goToCommentsPage } from '../../router/coordinator';
import { Loading } from '../comments/StylesComments';
import { useForm } from '../../hooks/useForm';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, onChangeInputs, clearInputs] = useForm({
    content: '',
  });
  const navigate = useNavigate();

  const handleLikeOrDislike = async (postId, like) => {
    try {
      const token = localStorage.getItem('login-labeddit.token');
      const response = await axios.post(
        'URL_DA_SUA_API/likeOrDislikePost',
        {
          token,
          postId,
          like,
        }
      );

      if (response.status === 200) {
        ListPosts().then((data) => {
          setPosts(data);
        });
      } else {
        console.log('Erro ao curtir/descurtir o post:', response.data);
      }
    } catch (error) {
      console.log('Erro ao curtir/descurtir o post:', error);
    }
  };

  const onClickComments = (idPost) => {
    goToCommentsPage(navigate, idPost);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    clearInputs();

    try {
      const { token } = await AddPost({
        content: form.content,
      });
      localStorage.getItem('login-labeddit.token', token);
      alert('Post enviado!');
    } catch (error) {
      alert(error.response.data);
      console.log(error);
    }
  };

  useEffect(() => {
    ListPosts()
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [posts]);

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
        <ButtonPost type='submit' onClick={onSubmit}>
          Postar
        </ButtonPost>
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
              >
                <button onClick={() => handleLikeOrDislike(post.id, true)}>
                  Curtir
                </button>
                <button onClick={() => handleLikeOrDislike(post.id, false)}>
                  Descurtir
                </button>
              </CardPost>
            );
          })}
        </div>
      </PostsContainer>
    </>
  );
};

export default Posts;
 */