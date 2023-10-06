import React from 'react'
import HeaderComments from '../../assets/header-comments.png'
import CardPost from '../../components/post/CardPost'
import { CommentsContainer } from './StylesComments'
import { ButtonPost } from '../posts/StylesPosts'
import CardComment from '../../components/comment/CardComment'

const Comments = () => {
  return (
    <CommentsContainer>
        <header>
            <img src={HeaderComments} alt="" />
        </header>
        <CardPost/>
        <textarea placeholder='Adicionar comentário...'></textarea>
        <ButtonPost>Responder</ButtonPost>
        <CardComment/>
        <CardComment/>
    </CommentsContainer>
  )
}

export default Comments