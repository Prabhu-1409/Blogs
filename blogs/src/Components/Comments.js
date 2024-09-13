import React from 'react'
import './Comments.css'

function Comments() {
  return (
    <div className='comments-box'>
      <div className='comment-inner-box'>
      <div className='comment-title-box'>
        <p className='comment-title'>Comments</p>
        <span className='comment-line'></span>
      </div>
        <div className='form-box'>
            <input type='text' className='name' placeholder='Enter your name'></input>
            <div className='textarea'>
            <textarea type='text' className='comment' aria-expanded={'true'} placeholder='Write your Comments'></textarea>
            </div>
            <div className='button-container'>
                <p className='cancel'>Cancel</p>
                <p className='publish'>Publish</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Comments
