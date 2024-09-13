import React from 'react'
import sample from './sample.jpg'
import './Post.css'
import data from '../Datas'

function Post() {
  return (
    <a href={`/first_post`}>
    <div className='post'>
        <div className='featured'>
            <p>Featured Post</p>
        </div>
        <div>
            <img src={data.first_post.thumbnail_image} className='image'></img>
        </div>
        <div className='post-content'>
            <p>Date & time</p>
            <div className='post-about-container'>
            <p className='post-title'>{data.first_post.title}</p>
            <p>About</p>
            </div>
        </div>      
    </div>
    </a>
  )
}

export default Post
