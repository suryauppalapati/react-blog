import React, { useState } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom'
import '../styles/Login.css'


function Signup() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    // eslint-disable-next-line
    const [error, setError] = useState("false")

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        try {
          const res = await axios.post("http://localhost:6007/api/register", {
            username,
            email,
            password,
          });

          res.data && window.location.replace("http://localhost:3000/Login");
        } catch (err) {
          setError(true);
        }
      };

    return (
        <form className="registerForm" onSubmit={handleSubmit}>
        <div className="main">
             <div className="login"> 

             <label className="username">Username</label> <br/>
            <input type="text" className="username" onChange={e=>setUsername(e.target.value)} required/> <br/><br/>

            <label className="email">Email Address</label> <br/>
            <input type="email" id="email" className="email" onChange={e=>setEmail(e.target.value)} required/> <br/><br/>
            
            <label>Password</label> <br/>
            <input type="password" id="password" className="password" onChange={e=>setPassword(e.target.value)} required/> <br/><br/>
    
            <button type="submit" >Register</button> <br/>

            <button className="btn btn-secondary">
            <Link className="link" to="/Login">Login</Link>
            </button> <br/>
        </div>  
        </div>
        </form>
    )
}

export default Signup
