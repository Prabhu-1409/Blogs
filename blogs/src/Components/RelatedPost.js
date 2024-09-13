import React from 'react'
import './RelatedPost.css'
import rpost from './rpost.jpg'
import { useParams } from 'react-router-dom'


function RelatedPost() {
  return (
    <div className='related-post'>
      <div>
        <img src={rpost} className='post-image'></img>
      </div>
      <div className='rpost-content-container'>
      <div className='rpost-content-container-1'>
        <div>
            <h6 className=''>Date & Time</h6>
        </div>
        <div className='rpost-content'>
            <h6 className='title'>Post Title</h6>
            <h6>Post Description</h6>
        </div>
        </div>
        <div className='rpost-content-container-2'>
            <span className='r-line'></span>
            <div className='actions'>
                <div className='action-views-comments'>
                    <h6>Views</h6>
                    <h6>Comments</h6>
                </div>
                <div>
                    <h6>Likes</h6>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default RelatedPost
