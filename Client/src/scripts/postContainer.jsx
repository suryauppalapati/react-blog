import React from 'react'
import '../styles/postContainer.css'
import Posts from './Posts'

function PostContainer({posts}) {
    return (
        <div className="posts">
        {posts.map((p) => (
          <Posts post={p} />
        ))}
      </div>
    )
}

export default PostContainer
