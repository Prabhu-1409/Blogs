import React from 'react'
import './Main.css'
import RelatedPost from './RelatedPost'
import About from './About'
import Followme from './Followme'
import Followupimage from './Followupimage'

function Main() {
  return (
    <div className='main-page'>
      <div className='one-of-two'>
      <p>Train of Exploration</p>
        <div className='rpost-container'>
            <RelatedPost></RelatedPost>
            <RelatedPost></RelatedPost>
        </div>
      </div>
      <span className='main-page-line'></span>
      <div className='two-of-two'>
        <About></About>
        <span className='about-line'></span>
        <Followme></Followme>
      </div>
    </div>
  )
}

export default Main
