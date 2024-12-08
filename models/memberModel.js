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
        required: false
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
    
    imgUrl: {
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
        required : false
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

const researchSchema= new mongoose.Schema({
    title : {
        type: String,
        required : true
    },
    body :{
        type : [String],
        required: true
    },
    mainImage : {
        type: String,
        required : false
    },
    otherImg :{

        type : [String],
        required : false
    },
    date:{
        type: String,
        required: true
    }

    
})

const OpportunitiesAnnouncementSchema= new mongoose.Schema({
    announcementStatus: Boolean,
    title: String,
    body:String,
    link:String
})

module.exports = {
    Intro : mongoose.model("intros", introSchema),
    TeamMember : mongoose.model("teamMembers",memberSchema ),
    News : mongoose.model("news", newsSchema),
    Publication : mongoose.model("publications", publicationsSchema),
    Research : mongoose.model("researches", researchSchema),
    OpportunitiesAnnouncement : mongoose.model("OpportunitiesAnnouncement", OpportunitiesAnnouncementSchema)
}