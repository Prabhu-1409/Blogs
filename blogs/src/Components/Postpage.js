import React, { useEffect, useState } from 'react'
import Header from './Header'
import './Postpage.css'
import Comments from './Comments'
import sample from './sample.jpg'
import { useParams } from 'react-router-dom'
import data from '../Datas'

function Postpage() {
    const[post_data, setpost_data] = useState(null)
    const {id} = useParams()
    //console.log(id)
    useEffect(()=>{
        setpost_data(id)
    },[])
    console.log(post_data)
  return (
    <div className='postpage'>
    <Header></Header>
    <div className='post-container'>
    <div className='post-box'>
        <div className='post-inner-box'>
        <div className='date-time'>
            <p>Date & Time</p>
        </div>
        <div className='post-headline'>
            <p>{data.first_post.title}</p>
        </div>
        <div className='post-description'>
            <p>In this case useEffect will behavior similar to componentDidMount, it will fire once the component has rendered, but also in every render, as Jared Beach commented bellow: "window.addEventListener is smart enough to discard subsequent calls with the same parameters". . Make sure to return the cleanup function, similar to what you'd do in componentWillUnmount</p>
        </div>
        <div className='post-image'>
            <img src={data.first_post.thumbnail_image}></img>
        </div>
        <div className='post-body'>
            <p>As far as scheduling, this works the same way as componentDidMount and componentDidUpdate. Your code runs immediately after the DOM has been updated, but before the browser has had a chance to "paint" those changes (the user doesn't actually see the updates until after the browser has repainted).</p>
        </div>
        </div>
    </div>
    <Comments></Comments>
    </div>
    </div>
  )
}

export default Postpage
