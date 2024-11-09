const mongoose = require("mongoose");

const memberSchema =new mongoose.Schema({
    name :{
        type: String,
        required : true
    },
    position:{
        type:String,
        required: true
    },
    desc :{
        type: String,
        required: true
    },
    email :{
        type: String,
        required: true
    },
    linkedin:{
        type: String,
        required: true
    },
    img:{
        type: String,
        required: true
    }

})

const introSchema= new mongoose.Schema({
    slogan : {
        type: String,
        required : true
    },
    research_oneLine : {
        type : String,
        required : true
    },
    research_Desc : {
        type : String,
        required : true
    },
    publication_oneLine : {
        type : String,
        required : true
    },
    publication_desc : {
        type : String,
        required : true
    }
})

const publicationsSchema = new mongoose.Schema({
    
    title: {
        type: String,
        required: true
    },
    details: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    linkTag: {
        type: String,
        required: false
    },
    status:{
        type : String,
        required: true
    },
    date:{
        type:String,
        required : false
    }

});

const newsSchema= new mongoose.Schema({
    heading : {
        type: String,
        required : true
    },
    body :{
        type : [String],
        required: true
    },
    mainImage : {
        type: String,
        required : true
    },
    otherImage :{

        type : [String],
        required : false
    },
    date:{
        type: String,
        required: true
    }
    
})

module.exports = {
    Intro : mongoose.model("intros", introSchema),
    TeamMember : mongoose.model("teamMembers",memberSchema ),
    News : mongoose.model("news", newsSchema),
    Publication : mongoose.model("publications", publicationsSchema)
}