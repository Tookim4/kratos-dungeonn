const mongoose = require('mongoose')

const objectSchema = new mongoose.Schema({
    _id : {
        type: String,
    },
    title :{
        type: String,
        required : true
    },
    content :{
        type: String,
        required:true
    },
},
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Note', objectSchema)