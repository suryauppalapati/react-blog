var router = require('express').Router()
var mongoose = require('mongoose')
const bcrypt = require('bcrypt')
var Post = require('../models/Posts')
const { route } = require('./auth');
const cors = require("cors");

router.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

router.use(
  cors({
    origin: ["http://localhost:6007"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

//CREATE-POST
router.post("/posts", async (req, res) => {
    const newPost = new Post(req.body);
    try {
      const savedPost = await newPost.save();
      res.status(200).json(savedPost);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  //GET-POST
  router.get("/getpost/:id", async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      res.status(200).json(post);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//GET-ALL-POSTS
router.get("/", async (req, res) => {
    const username = req.query.user;
    try {
      let posts;
      if (username) {
        posts = await Post.find({ username });
      } 
     else {
        posts = await Post.find();
      }
      res.status(200).json(posts);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  
module.exports = router