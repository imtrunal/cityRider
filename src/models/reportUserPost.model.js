const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId

const reportUserPostSchema = mongoose.Schema({

    post_id:{
        type:ObjectId,
        required:true
    },

    user_id:{
        type:ObjectId,
        required:true
    }

},{
    timestamps:true
},{
    collection:'reportUserPost'
})

module.exports = mongoose.model('reportUserPost', reportUserPostSchema)
