import React from 'react'
import { ButtonPost, PostsContainer } from './StylesPosts'
import CardPost from '../../components/post/CardPost'

const Posts = () => {
  return (
    <PostsContainer>
        <textarea placeholder='Escreva seu post...'></textarea>
        <ButtonPost>Postar</ButtonPost>
        <div>
          <CardPost/>
          <CardPost/>
          <CardPost/>
          <CardPost/>
        </div>
    </PostsContainer>
  )
}

export default Posts