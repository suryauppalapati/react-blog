import React from 'react'
import '../styles/homepage.css'
import PostContainer from './postContainer'
import Header from './Header'
import axios from "axios";
import { useLocation } from "react-router";
import { useEffect, useState } from "react";


function Homepage() {

    const [posts, setPosts] = useState([]);
    const { search } = useLocation();
  
    useEffect(() => {
      const fetchPosts = async () => {
        const res = await axios.get("http://localhost:6007/api/" + search);
        setPosts(res.data);
      };
      fetchPosts();
    }, [search]);
  

    return (
        <div>
             <Header></Header>
             <PostContainer posts = {posts} /> 
              
        </div>
    )}

export default Homepage
