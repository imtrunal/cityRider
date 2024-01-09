const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId

const blockUnblockUsersSchema = mongoose.Schema({

    user_id:{
        type: ObjectId,
        required:true
    },

    block_user_id:{
        type : ObjectId,
        required:true
    },

    blockStatus:{
        type: Number,
        required: true,
        enum: [1 , 2]
    }

},{
    timestamps: true
},{
    collection: 'blockUnblockUsers'
})

module.exports = mongoose.model('blockUnblockUsers', blockUnblockUsersSchema)