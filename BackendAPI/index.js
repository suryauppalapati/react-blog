const express = require('express');
var mongoose = require('mongoose');
var authRouter = require('./Routes/auth');
var postsRouter = require('../BackendAPI/Routes/createposts');
const multer = require('multer');


mongoose.connect('mongodb://localhost:27017/ReactDB', {
    useNewUrlParser : true,
    useUnifiedTopology: true,
}).then(console.log('Connected to Database.'))

const app = express(); 
const port = process.env.PORT || 6007;

app.listen(port, ()=>{
    console.log('Listening at 6007!');
})

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "assets");
    },
    filename: (req, file, cb) => {
      cb(null, req.body.name);
    },
  });
  
  const upload = multer({ storage: storage });
  app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded");
  });

app.use(express.json()) 
app.use('/api', authRouter)
app.use('/api', postsRouter) 




