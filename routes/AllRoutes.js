const router = require("express").Router();

const { Intro, TeamMember, News, Publication,  } = require("../models/memberModel.js");
const User = require("../models/userModels.js");
const JoinUs = require ("../models/formDetailsModel.js")
const cloudinary = require("../cloudinary/cloudinary.js");
const upload = require("../MiddleWare/multer.js");
const authenticate = require("../MiddleWare/authMiddleware.js");


//getting all data
router.get('/getData', async (req, res) => {
    try {
        const intros = await Intro.find();
        const teamMembers = await TeamMember.find();
        const news = await News.find();
        const publications = await Publication.find();
        
        res.status(200).send({
            intro: intros[0],
            team: teamMembers,
            news: news,
            publication : publications
        })
        // console.log(publications)

    } catch (error) {
        res.status(500).send(error)
    }
})

router.get("/joinRequest/newJoinRequest", async(req,res)=>{
    try {
        const joinUsReq = await JoinUs.find();

        res.status(200).send({
            joinUsReq
        })
    } catch (error) {
        res.status(500).send(error)
        
    }
})

router.get('/getNewsArticle/:id', async (req, res) => {
    try {
        const article = await News.findById(req.params.id);
        res.status(200).send({
            article: article
        })
    } catch (error) {
        res.status(500).send(error)
    }
})

router.get('/admin-newMemberRequests/:id', async (req,res)=>{
    try{
        const article = await JoinUs.findById(req.params.id);
        res.status(200).send({
            joinReq : article
        })
    }catch (error){
        res.status(500).send(error)
    }
})


//updating intro data;

router.post('/update-intro', authenticate, async (req, res) => {
    console.log(req.body)
    try {
        const intro = await Intro.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        );
        res.status(200).send({
            data: intro,
            success: true,
            message: "Data Changed Successfully"
        })
    } catch (error) {
        res.status(500).send(error)
    }
})

router.post('/publication/addPublication', authenticate, async(req,res)=>{
    try {
        const publication = new Publication(req.body);
        await publication.save();
        res.status(200).send({
            data: publication,
            success: true,
            message: "Publication Added Successfully"

        })
    } catch (error) {
        res.status(500).send(error)
        
    }
})


router.post("/adminPublication/sendImage", authenticate, upload.single("image"), (req,res)=>{

    cloudinary.uploader.upload(req.file.path, (err,results)=>{
        if(err){
            console.error("Cloudinary upload error:", err); // Log the error
            console.log(err)
            return res.status(500).json({
                success :false,
                message: "error"

            })
        }
        else{

            console.log("Cloudinary upload result", results); // Log the result
        }
        

        return res.status(200).json({
            success :true,
            message: "Uploaded",
            data: results

        })
    })
})
router.post("/adminAbout/sendImage", authenticate, upload.single("img"), (req,res)=>{

    cloudinary.uploader.upload(req.file.path, (err,results)=>{
        if(err){
            console.error("Cloudinary upload error:", err); // Log the error
            console.log(err)
            return res.status(500).json({
                success :false,
                message: "error"

            })
        }
        else{

            console.log("Cloudinary upload result", results); // Log the result
        }
        

        return res.status(200).json({
            success :true,
            message: "Uploaded",
            data: results

        })
    })
})
router.post("/resume/send", authenticate, upload.single("resume"), (req,res)=>{

    cloudinary.uploader.upload(req.file.path, (err,results)=>{
        if(err){
            console.error("Cloudinary upload error:", err); // Log the error
            console.log(err)
            return res.status(500).json({
                success :false,
                message: "error"

            })
        }
        else{

            console.log("Cloudinary upload result", results); // Log the result
        }
        

        return res.status(200).json({
            success :true,
            message: "Uploaded",
            data: results

        })
    })
})



router.post('/team/addMember', authenticate, async (req, res) => {
    try {
        const member = new TeamMember(req.body);
        await member.save();
        res.status(200).send({
            data: member,
            success: true,
            message: "Slogan Changed Successfully"

        })
    } catch (error) {
        res.status(500).send(error)
    }
})
router.post('/news/addNews', authenticate, async (req, res) => {
    try {
        const news = new News(req.body);
        await news.save();
        res.status(200).send({
            data: news,
            success: true,
            message: "News Inserted Successfully"

        })
    } catch (error) {
        res.status(500).send(error)
    }
})

router.delete('/team/DelMember/:id', authenticate, async (req, res) => {


    try {
        await TeamMember.findByIdAndDelete(req.params.id);
        // //console.log(req.params)
        res.status(200).send({
            success: true,
            message: "Team Member Deleted Successfully"
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            message: 'Failed to delete team member',
            error: error.message
        });
    }
})

router.post('/team/editMember/:id', authenticate, async (req, res) => {



    try {

        const updatedMember = await TeamMember.findByIdAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        );

        res.status(200).send({
            data: updatedMember,
            success: true,
            message: "Team Member Updated Successfully"
        });

    } catch (error) {
        console.error(error);
       
    }
});
router.post('/joinRequest/newJoinRequest', authenticate, async (req, res) => {
    try {
        const { fName, lName, email, contact, linkedin, message, expertise, resumeUrl } = req.body;
        
         // Save the form data, including the Cloudinary resume URL, to MongoDB
         const joinRequest = new JoinUs({
            fName,
            lName,
            email,
            contact,
            linkedin,
            message,
            expertise,
            resumePath: resumeUrl, // Storing the Cloudinary URL of the resume
        });

        await joinRequest.save();
        res.status(200).send({
            data: joinRequest,
            success: true,
            message: "Join Request sent Successfully"

        })
    } catch (error) {
        res.status(500).send(error)
    }
});
router.post('/publication/editPublication/:id', authenticate, async (req, res) => {
    try {
        const updatedPublication = await Publication.findByIdAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        );

        res.status(200).send({
            data: updatedPublication,
            success: true,
            message: "Team Member Updated Successfully"
        });

    } catch (error) {
        console.error(error);
       
    }
});
router.post('/news/editNews/:id', authenticate, async (req, res) => {
    try {
        const updatedNews = await News.findByIdAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true }
        );  

        res.status(200).send({
            data: updatedNews,
            success: true,
            message: `News ${req.body._id} Updated Successfully`
        });

    } catch (error) {
        console.error(error);
       
    }
});



router.delete('/publication/delPublication/:id', authenticate, async (req, res) => {


    try {
        await Publication.findByIdAndDelete(req.params.id);
        // //console.log(req.params)
        res.status(200).send({
            success: true,
            message: "Publication Deleted Successfully"
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            message: 'Failed to delete publication',
            error: error.message
        });
    }
})

router.delete('/news/delNews/:id',authenticate, async (req, res) => {


    try {
        await News.findByIdAndDelete(req.params.id);
        // //console.log(req.params)
        res.status(200).send({
            success: true,
            message: "News Deleted Successfully"
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            message: 'Failed to delete News',
            error: error.message
        });
    }
})

router.post('/admin-login', async (req, res) => {
    try {
        const user = await User.findOne({username : req.body.username , password : req.body.password})
        if(user){
            res.status(200).send({
                data:user,
                success: true,
                message : "Login Successful"
            })
        }
        else{
            res.status(200).send({
                data:user,
                success: false,
                message : "Invalid Username or Password"
            })

        }
    } catch (error) {
        
    }
})
 

module.exports = router;