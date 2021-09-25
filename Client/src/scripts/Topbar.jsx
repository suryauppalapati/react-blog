import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Topbar.css'

function Topbar() {
    const isLoggedIn = false;
    return (
        <div className = "topBar">

            <div className="title">BLOGSTER</div>

            <div className="home">
                {isLoggedIn ? <Link className="link" to="/">Home</Link> : <Link className="link" to="/Signup">Signup</Link>}
            </div>

            <div className="blogs">
                {isLoggedIn ? <Link className="link" to="/CreatePost">Create Blog</Link> : <Link className="link" to="/Login">Login</Link>}
            </div>

            <div className="about">About</div>
            <div className="contactus">Contact US</div>

            <div className="logout">
            {isLoggedIn && <Link className="link" to="/Signup">logout</Link>}
            </div>
        </div>
    )
}

export default Topbar
