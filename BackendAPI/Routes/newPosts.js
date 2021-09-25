var router = require('express').Router()
var mongoose = require('mongoose')
const bcrypt = require('bcrypt')
var Posts = require('../Routes/newPosts');
//POST-METHOD

router.post("/posts", async (req, res) => {
    const newPost = new Post(req.body);
    try {
      const savedPost = await newPost.save();
      res.status(200).json(savedPost);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router