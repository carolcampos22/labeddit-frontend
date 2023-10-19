import React, { useEffect, useState } from 'react'
import { ButtonPost, PostsContainer } from './StylesPosts'
import CardPost from '../../components/post/CardPost'
import { ListPosts } from '../../constants/constants'
import Header from '../../components/header/Header'
import { useNavigate } from 'react-router-dom'
import { goToCommentsPage } from '../../router/coordinator'
import { Loading } from '../comments/StylesComments'



const Posts = () => {
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
  }, [])

 
  if (loading) {
    return <Loading>Loading...</Loading>;
  }

  return (
    <>
      <Header />
      <PostsContainer>

        <textarea placeholder='Escreva seu post...'></textarea>
        <ButtonPost>Postar</ButtonPost>
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