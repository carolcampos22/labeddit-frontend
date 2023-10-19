import React, { useEffect, useState } from 'react'
import { ButtonPost, PostsContainer } from './StylesPosts'
import CardPost from '../../components/post/CardPost'
import { ListPosts } from '../../constants/constants'
import Header from '../../components/header/Header'
import { useNavigate } from 'react-router-dom'
import { goToCommentsPage } from '../../router/coordinator'



const Posts = () => {
  const navigate = useNavigate()
  const onClickComments = (idPost) => {
    
    goToCommentsPage(navigate, idPost)
  }
  const [posts, setPosts] = useState([])
  useEffect(() => {
    ListPosts()
      .then(data => {
        setPosts(data)
      })
      .catch(
        (error) => {
          console.log(error)
        }
      )
  }, [])

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