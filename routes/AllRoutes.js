const router = require("express").Router();
const { Intro, TeamMember, News, Publication, Research, OpportunitiesAnnouncement } = require("../models/memberModel.js");
const User = require("../models/userModels.js");
const JoinUs = require("../models/formDetailsModel.js");
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
        const opporutunitiesAnnouncement = await OpportunitiesAnnouncement.find();

        res.status(200).send({
            intro: intros[0],
            team: teamMembers,
            news: news,
            publication: publications,
            opporutunitiesAnnouncement: opporutunitiesAnnouncement
        })
        // console.log(publications)

    } catch (error) {
        res.status(500).send(error)
    }
})
router.get('/getResearchData', async (req, res) => {
    try {
        const researches = await Research.find();

        res.status(200).send(researches);
        // console.log(publications)

    } catch (error) {
        res.status(500).send(error)
    }
})


router.delete('/research/delResearch/:id', authenticate, async (req, res) => {


    try {
        await Research.findByIdAndDelete(req.params.id);
        // //console.log(req.params)
        res.status(200).send({
            success: true,
            message: "Research Deleted Successfully"
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            message: 'Failed to delete research',
            error: error.message
        });
    }
})


router.get("/joinRequest/newJoinRequest", async (req, res) => {
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
router.get('/getResearchArticle/:id', async (req, res) => {
    try {
        const research = await Research.findById(req.params.id);
        res.status(200).send({
            research: research
        })
    } catch (error) {
        res.status(500).send(error)
    }
})

router.get('/admin-newMemberRequests/:id', async (req, res) => {
    try {
        const article = await JoinUs.findById(req.params.id);
        res.status(200).send({
            joinReq: article
        })
    } catch (error) {
        res.status(500).send(error)
    }
})


//updating intro data;

router.post('/update-intro', authenticate, async (req, res) => {
    // console.log(req.body)
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

router.post('/publication/addPublication', authenticate, async (req, res) => {
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
router.post("/adminResearch/sendImage", authenticate, upload.single("image"), async (req, res) => {

    cloudinary.uploader.upload(req.file.path, (err, results) => {
        if (err) {
            console.error("Cloudinary upload error:", err); // Log the error
            console.log(err)
            return res.status(500).json({
                success: false,
                message: "error"

            })
        }
        else {

            console.log("Cloudinary uploaded image"); // Log the result
        }


        return res.status(200).json({
            success: true,
            message: "Uploaded",
            data: results

        })
    })
}
);

router.post("/adminPublication/sendImage", authenticate, upload.single("image"), (req, res) => {

    cloudinary.uploader.upload(req.file.path, (err, results) => {
        if (err) {
            console.error("Cloudinary upload error:", err); // Log the error
            console.log(err)
            return res.status(500).json({
                success: false,
                message: "error"

            })
        }
        else {

            // console.log("Cloudinary upload result", results); // Log the result
        }


        return res.status(200).json({
            success: true,
            message: "Uploaded",
            data: results

        })
    })
})

router.post("/adminResearch/addResearch", authenticate, async (req, res) => {
    try {
        const { title, body, date, mainImage, otherImg } = req.body;

         
        const newResearch = new Research(req.body);

        const savedResearch = await newResearch.save();

        res.status(200).json({
            success: true,
            message: "Research added successfully",
            data: savedResearch,
        });
    } catch (error) {
        console.error("Error adding research:", error);
        res.status(500).json({
            success: false,
            message: "Failed to add research",
        });
    }
});

router.post("/adminResearch/updateResearch/:id", authenticate, async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;

        const updatedResearch = await Research.findByIdAndUpdate(
            id,
            updatedData,
            { new: true }
        );

        res.status(200).json({
            success: true,
            message: "Research updated successfully",
            data: updatedResearch,
        });
    } catch (error) {
        console.error("Error updating research:", error);
        res.status(500).json({
            success: false,
            message: "Failed to update research",
        });
    }
});




router.post("/adminAbout/sendImage", authenticate, upload.single("image"), (req, res) => {
    console.log("re bodyr",req.body)
    console.log("ReqFile: ",req.file)

    cloudinary.uploader.upload(req.file.path, (err, results) => {
        if (err) {
            console.error("Cloudinary upload error:", err); // Log the error
            console.log(err)
            return res.status(500).json({
                success: false,
                message: "error"

            })
        }
        else {

            console.log("Cloudinary upload result", results); // Log the result
        }


        return res.status(200).json({
            success: true,
            message: "Uploaded",
            data: results

        })
    })
})
router.post("/resume/send", authenticate, upload.single("resume"), (req, res) => {

    cloudinary.uploader.upload(req.file.path, (err, results) => {
        if (err) {
            console.error("Cloudinary upload error:", err); // Log the error
            console.log(err)
            return res.status(500).json({
                success: false,
                message: "error"

            })
        }
        else {

            // console.log("Cloudinary upload result", results); // Log the result
        }


        return res.status(200).json({
            success: true,
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
            message: "Member Added Successfully"

        })
    } catch (error) {
        res.status(500).send(error)
    }
})
router.post('/news/addNews', authenticate, async (req, res) => {
    console.log(req.body)
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
router.post('/admin/adminOpportunities/updateAnnouncement', authenticate, async (req, res) => {
    try {
        const updatedAnnouncement = await OpportunitiesAnnouncement.findOneAndUpdate(
            { _id: req.body._id },
            req.body
        );

        res.status(200).send({
            data: updatedAnnouncement,
            success: true,
            message: "Announcement Updated Successfully"
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

router.post("/adminNews/sendImage", authenticate, upload.single("image"), (req, res) => {
    try {


        cloudinary.uploader.upload(req.file.path, (err, results) => {
            if (err) {
                console.error("Cloudinary upload error:", err); // Log the error
                console.log(err)
                return res.status(500).json({
                    success: false,
                    message: "error"

                })
            }
            else {

                console.log("Cloudinary upload result", results); // Log the result
            }


            return res.status(200).json({
                success: true,
                message: "Uploaded",
                data: results

            })
        })
    }
    catch (err) {
        res.send(err.message)
    }
})

router.delete('/news/delNews/:id', authenticate, async (req, res) => {


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
        const user = await User.findOne({ username: req.body.username, password: req.body.password })
        if (user) {
            res.status(200).send({
                data: user,
                success: true,
                message: "Login Successful"
            })
        }
        else {
            res.status(200).send({
                data: user,
                success: false,
                message: "Invalid Username or Password"
            })

        }
    } catch (error) {

    }
})



//deleting images:

router.post('/admin/delete-image', async (req, res) => {
    const { imageUrls } = req.body;

    console.log("Image URL received in the backend:", imageUrls);

    
    try {
        // Extract the public ID from the Cloudinary URL
        const match = imageUrls.match(/\/upload\/(?:v\d+\/)?([^/.]+)/);
        const publicId = match ? match[1] : null;

        if (!publicId) {
            return res.status(400).json({ error: `Unable to extract public ID from URL: ${imageUrls}` });
        }

        console.log("Extracted PublicId:", publicId);

        // Delete the image using Cloudinary SDK
        const result = await cloudinary.uploader.destroy(publicId);

        res.status(200).json({ 
            success: true, 
            message: 'Image deleted successfully.', 
            result 
        });
    } catch (error) {
        console.error('Error deleting image:', error.message);
        res.status(500).json({ 
            error: 'Failed to delete image.', 
            details: error.message 
        });
    }
});


module.exports = router;

