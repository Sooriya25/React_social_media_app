import React from 'react'
import { Link } from 'react-router-dom'

function Post({post}) {
  return (
    <article className='post'>
      <Link to={`post/${post.id}`}>
        <h2 className='postTitle' >{post.title}</h2>
        <p className='postDate'>  {post.dateTime}</p>
        <p className='postBody'>{
        (post.body).length <= 25
        ? post.body
        : `${post.body.slice(0,80)}...`
        }</p>
      </Link>
    </article>
  )
}

export default Post