const mongoose = require('mongoose')


const joinUsSchema = new mongoose.Schema({
    fName :{
        type : String,
        required : true
    },
    lName :{
        type: String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    contact : {
        type : String,
        required: true
    },
    linkedin : {
        type : String,
        required: true
    },
    message : {
        type : String,
        required: true
    },
    expertise : {
        type : String,
        required: true
    }
})

module.exports = mongoose.model("JoinUs", joinUsSchema);