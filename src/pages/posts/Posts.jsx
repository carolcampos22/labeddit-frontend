import React, { useEffect, useState } from 'react'
import { ButtonPost, PostsContainer } from './StylesPosts'
import CardPost from '../../components/post/CardPost'
import { ListPosts } from '../../constants/constants'

const Posts = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    ListPosts()
      .then(data => {
        setPosts(data)
        console.log(data[0].creator.nickname)
      })
      .catch(
        (error) => {
          console.log(error)
        }
      )
  }, [])
  return (
    <PostsContainer>
        <textarea placeholder='Escreva seu post...'></textarea>
        <ButtonPost>Postar</ButtonPost>
        <div>
          {posts.map((post) => {
            return (
              <CardPost 
              creatorPost={post.creator.nickname} 
              content={post.content}
              likes={post.likes}
              dislikes={post.dislikes}
              comments={post.comments}
              />
            )
          })}
          
        </div>
    </PostsContainer>
  )
}

export default Posts