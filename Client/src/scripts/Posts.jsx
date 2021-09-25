import React from 'react'
import '../styles/Posts.css'

function Posts({post}) {
    return (
    <div className="mainBlock">
        
            {/*POST - BODY*/}
            <div className="postBlock">
                <div className = "container">
                    <img className="postImg" src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
                    alt=""></img>
                    <div>
                    <p className="postTitle">{post.postTitle}</p>
                    <p className="postDesc">{post.postDesc} </p><hr></hr>
                    <p className="author">{post.username}</p>
                    <p className="timeStamp">{post.createdAt}</p>
                     </div>           
                 </div>
{/* 
                 <div className = "container">
                    <img className="postImg" src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
                    alt=""></img>
                    <p className="postTitle">Blogster Post-2</p>
                    <p className="postDesc">Lorem ipsum dolor sit amet </p><hr></hr>
                    <p className="author">Revanth</p>
                    <p className="timeStamp">2hr ago</p>
                </div>

                <div className = "container">
                    <img className="postImg" src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
                    alt=""></img>
                    <p className="postTitle">Blogster Post-3</p>
                    <p className="postDesc">Lorem ipsum dolor sit amet </p><hr></hr>
                    <p className="author">Sushanth</p>
                    <p className="timeStamp">3hr ago</p>
                </div>

                <div className = "container">
                    <img className="postImg" src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
                    alt=""></img>
                    <p className="postTitle">Blogster Post-4</p>
                    <p className="postDesc">Lorem ipsum dolor sit amet</p><hr></hr>
                    <p className="author">Vikram</p>
                    <p className="timeStamp">4hr ago</p>
                </div>

                <div className = "container">
                    <img className="postImg" src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
                    alt=""></img>
                    <p className="postTitle">Blogster Post-5</p>
                    <p className="postDesc">Lorem ipsum dolor sit amet</p><hr></hr>
                    <p className="author">Tej</p>
                    <p className="timeStamp">1hr ago</p>
                </div>

                <div className = "container">
                    <img className="postImg" src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
                    alt=""></img>
                    <p className="postTitle">Blogster Post-6</p>
                    <p className="postDesc">Lorem ipsum dolor sit amet</p><hr></hr>
                    <p className="author">Surya</p>
                    <p className="timeStamp">2hr ago</p>
                </div> */}



            </div>
    </div>
)}

export default Posts




