import React,{Component} from 'react';
import './BlogPost.css';
const Post = (props) => {
    return(
        <>
          <div className="container">
                <img src="https://source.unsplash.com/random" alt=""/>
                <div className="description">
                    <h2>{props.title}</h2>
                    <p>{props.body}</p>
                </div>
          </div>  
        </>
    )
}

export default Post