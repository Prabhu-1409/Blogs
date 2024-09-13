import React from 'react'
import Post from './Post'
import './Body.css'
import Main from './Main'
import Followupimage from './Followupimage'
import Bottom from './Bottom'

function Body() {
  return (
    <div className='body'>
      <div>
        <Post></Post>
      </div>
      <span className='line'></span>
      <Main></Main>
      <span className='line'></span>
      <Bottom></Bottom>
    </div>
  )
}

export default Body
