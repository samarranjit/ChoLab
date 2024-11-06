const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://samarranjit321:samarisaman@cholab.avmlm.mongodb.net/ChoLab?retryWrites=true&w=majority&appName=ChoLab/ChoLab", { useNewUrlParser: true, useUnifiedTopology: true, ssl: true });


const connection = mongoose.connection;

connection.on('error', ()=>{
    console.log("error connecting to db");

})

connection.on('connected', ()=>{
    console.log("connected to mongo db");
})

module.exports = connection;

