import React from 'react'
import '../styles/CreatePost.css'

function CreatePost() {
    return (
        <div className="newPost">
            <div className="pageTitle">Share with Blogster :)</div>
                <div className="CreateNewPost">
                    <input type="text" id="postTitle" placeholder="Post Title" autoFocus={true}/><br/>
                    <textarea type="text" id="writePost" placeholder="Write your story here.." /><br/>
                    <div className="addImage">
                    <label htmlFor="postFiles">Add Image
                    <i class="fas fa-image"></i></label>
                    <input type="file" id="postFiles" style={{display:"none"}} />
                    </div>
                    <div>
                    <button type="submit" className="submitButton">Publish</button>
                </div>
                </div>
               
                   
        </div>
    )
}

export default CreatePost
