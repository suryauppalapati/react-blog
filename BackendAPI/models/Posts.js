var mongoose = require('mongoose')

var postSchema = new mongoose.Schema(
    {
        postTitle : {
            type : String,
            required : true
        },

        postDesc : {
            type : String,
            required: true
        },

        images : {
            type : String,
            required : false
        },

        username : {
            type : String,
            required : true
        }
    }, {timestamps : true}
)

module.exports = mongoose.model('Posts', postSchema)