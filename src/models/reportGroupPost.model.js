const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId

const reportGroupReportSchema = mongoose.Schema({

    user_id:{
        type:ObjectId,
        required:true
    },

    group_id:{
        type:ObjectId,
        required:true
    },

    post_id:{
        type:ObjectId,
        required:true
    }

},{
    timestamps:true
},{
    collection:'reportGroupReport'
})

module.exports = mongoose.model('reportGroupReport',reportGroupReportSchema)