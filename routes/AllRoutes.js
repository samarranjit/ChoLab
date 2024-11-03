const router = require("express").Router();

const { Intro, TeamMember, News, Publication } = require("../models/memberModel.js");
const User = require("../models/userModels.js");
const JoinUs = require ("../models/formDetailsModel.js")



//getting all data
router.get('/getData', async (req, res) => {
    try {
        const intros = await Intro.find();
        const teamMembers = await TeamMember.find();
        const news = await News.find();
        const publications = await Publication.find();
        // //console.log(Intro);
        //console.log(TeamMember)
        res.status(200).send({
            intro: intros[0],
            team: teamMembers,
            news: news,
            publication : publications
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


//updating intro data;

router.post('/update-intro', async (req, res) => {
    //console.log("Intro data: ", req.body);
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

router.post('/publication/addPublication', async(req,res)=>{
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



router.post('/team/addMember', async (req, res) => {
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
router.post('/news/addNews', async (req, res) => {
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

router.delete('/team/DelMember/:id', async (req, res) => {


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

router.post('/team/editMember/:id', async (req, res) => {



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
router.post('/joinRequest/newJoinRequest', async (req, res) => {
    try {
        const joinRequest = new JoinUs(req.body);
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
router.post('/publication/editPublication/:id', async (req, res) => {
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
router.post('/news/editNews/:id', async (req, res) => {
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



router.delete('/publication/delPublication/:id', async (req, res) => {


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

router.delete('/news/delNews/:id', async (req, res) => {


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