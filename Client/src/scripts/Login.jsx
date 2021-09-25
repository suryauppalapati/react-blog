import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Login.css'
import axios from "axios";
import { useContext, useRef } from "react";
import {Context} from './Context'

function Login() {
    const userRef = useRef();
  const passwordRef = useRef();
  // eslint-disable-next-line
  const { dispatch, isFetching } = useContext(Context);

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log('000');
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("http://localhost:6007/api/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };
    return (
        <form className="loginForm">
        <div className="main">
             <div class="login"> 
            <label className="user">Username</label> <br/>
            <input type="text" id="email" required/> <br/><br/>
            
            <label>Password</label> <br/>
            <input type="password" id="password" required/> <br/><br/>
    
            <button className="loginButton" type="submit" disabled={isFetching} onSubmit={submitHandler} >Login</button><br></br>
        
            <button class="btn btn-dark">
            <Link className="link" to="/Signup">Sign Up</Link>
            </button> <br/>

        </div>  
        </div>
        </form>
    )
}

export default Login
