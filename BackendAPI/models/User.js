const mongoose = require('mongoose')

var userSchema = new mongoose.Schema(
    {
        username : {
            type : String,
            required : true,
            unique : true 
        },

        email : {
            type : String,
            required : true,
            unique : true
        },

        password : {
            type : String,
            required : true,
            minlength : 8
        }
    }, {timestamps: true}  
)

module.exports = mongoose.model('User', userSchema)