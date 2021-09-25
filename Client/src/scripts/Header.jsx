import React from 'react'
import '../styles/header.css'
import headerCover from '../assets/headercover.jpg'

function Header() {
    return (
        <div>
            <p className="headerTitle">Welcome Blogster!</p>
            <img className="headerImg" src={headerCover} alt="qw" />
        </div>
        
    )
}

export default Header
