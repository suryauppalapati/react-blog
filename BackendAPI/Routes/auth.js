var router = require('express').Router();
var mongoose = require('mongoose')
const bcrypt = require('bcrypt')
var User = require('../models/User');
const { findOne } = require('../models/User');
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

//POST-METHOD-REGISTER  

router.post('/register', async (req,res) => {
    try{
        const salt = await bcrypt.genSalt(12);
        const hashedPass = await bcrypt.hash(req.body.password, salt)
      const newUser = new User({
            username : req.body.username,
            email : req.body.email,
            password : hashedPass
        })

   const user = await newUser.save()
   res.status(200).json(newUser)
    }

   catch(err)
   {
    res.status(500).json(err)
   }
})

//Login-POST

router.post("/login", async(req, res)=>{
    try{
        const user = await User.findOne({username : req.body.username})
        !user && res.status(400).json('Bad Credentials, Try again!')

        const validated = await bcrypt.compare(req.body.password, user.password)
        !validated && res.status(400).json('Bad Credentials, Try again!')

        const{password, ...others} = user._doc
        res.status(200).json(others)
        } catch (err) {
    res.status(500).json(err);
  }
})

router.get("/:id", async(req,res)=>{
    try{
        const user = await User.findById(req.params.id)

        const{password, ...others} = user._doc
        res.status(200).json(others)
    }
    catch(err){
        res.status(400).json(err)
    }
})

module.exports = router