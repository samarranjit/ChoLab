const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/ChoLab");

const connection = mongoose.connection;

connection.on('error', ()=>{
    console.log("error connecting to db");

})

connection.on('connected', ()=>{
    console.log("connected to mongo db");
})

module.exports = connection;

