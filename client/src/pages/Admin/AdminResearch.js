import React, { useContext } from 'react'
import axiosInstance from '../../axios/axiosInstance';
import { useResearchContext } from '../../Context/ResearchContext';
import { allContexts } from '../../Context/AllContexts';


const AdminResearch = () => {
    const {setShowLoading} = useContext(allContexts)
    const [addResearchBtn, setAddResearchBtn] = React.useState(false)
    const [paragraphs, setParagraphs] = React.useState([""]);
    const { researchData, setResearchData } = useResearchContext();
    console.log("Data type of research",typeof(researchData))
    const [research, setResearch] = React.useState({
        title: "",
        body: [""],
        date: "",
        mainImage: "",
        otherImg: [],
        period: "",
        sponsors: "",
        collaborators:""
    })
    const [mainImage, setMainImage] = React.useState(null)
    const [otherImg, setOtherImg] = React.useState([])
    const [editingResearchId, setEditingResearchId] = React.useState(null)

    const handleUnhide = () => {
        setAddResearchBtn(!addResearchBtn)

    }

    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        if (name.startsWith("body-")) {
            const updatedParagraphs = [...paragraphs];
            updatedParagraphs[index] = value;
            setParagraphs(updatedParagraphs);
            setResearch(prev => ({ ...prev, body: updatedParagraphs }));
        } else if (name.startsWith("otherImg-")) {
            const updatedPhotos = [...otherImg];
            updatedPhotos[index] = e.target.files[0];
            setOtherImg(updatedPhotos);

        } else if (name === "mainImage") {
            setMainImage(e.target.files[0])
            // console.log(mainImage)
        }
        else {
            setResearch(prev => ({ ...prev, [name]: value }));
        }
        console.log(research)
    }

   

    const uploadImage = async (imageFile) => {
        console.log("Now uploading image")
        const formData = new FormData();
        formData.append('image', imageFile);
        const res = await axiosInstance.post(
            `${process.env.REACT_APP_API_BASE_URL}/api/adminResearch/sendImage`,
            formData,
            { headers: { 'Content-Type': 'multipart/form-data' } }
        );
        if (res.data.success) {
            console.log(res.data.data.secure_url)
            console.log(res.data.message)
            return res.data.data.secure_url;
        }
        else{
            console.log(res.data.message)
        }
        throw new Error('Image upload failed');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setShowLoading(true);
        try {
            let mainImgUrl;
             if(mainImage) { 
                console.log("Main image found, now uploading it");
                mainImgUrl = await uploadImage(mainImage);
                console.log("Main image uploaded")
            }
            else
            {
                console.log("Main image not found, now using the same main image as already we have : ", research.mainImage)
                mainImgUrl = research.mainImage;
            }

            // Handle multiple image uploads for otherImages
            const otherImgUrls = [];
            console.log(otherImg.length)
            if(otherImg){

                for (let i = 0; i < otherImg.length; i++) {
                    console.log("Uploading the side images")
                    const imgUrl = await uploadImage(otherImg[i]);
                    otherImgUrls.push(imgUrl);
                    console.log("otherImg uploaded")
                }
            }
            else{
                console.log("No other images found, so no need to upload any otherImages")
            }

            const payload = {
                ...research,
                mainImage: mainImgUrl,
                otherImg: otherImgUrls, 
            };

            let response;
            if (editingResearchId) {
                response = await axiosInstance.post(
                    `${process.env.REACT_APP_API_BASE_URL}/api/adminResearch/updateResearch/${editingResearchId}`,
                    payload
                );
            } else {
                console.log("Image Uploaded, now entering the data into database")
                console.log('Data to send', payload)
                response = await axiosInstance.post(
                    `${process.env.REACT_APP_API_BASE_URL}/api/adminResearch/addResearch`,
                    payload
                );
            }

            if (response.data.success) {
                alert(response.data.message);
                let newData= response.data.data

                if (!editingResearchId) {
                    // console.log("Set to add new research")
                    // console.log("Here are the existing researches", researchData )
                    // console.log("we are inserting this research: ", newData);
                    console.log("Type of research data",typeof(researchData) ," before setting research data after inserting new research: \n", researchData)
                    setResearchData((prevData) => ([
                        ...prevData,
                        newData
                        
                    ]));
                    // console.log("we just entered a new member")
                    console.log("Type of research data",typeof(researchData) ," after setting  inserting new  research and inserting data: \n", researchData)
                    // console.log("THis is how the new team array looks like", researchData)
                } else {
                    let newResearchData= researchData && researchData?.map((item) =>
                        item._id === editingResearchId ? response.data.data : item
                    )
                    setResearchData(newResearchData);
                }




                resetForm();
            } else {
                throw new Error(response.data.message || 'Submission failed');
            }
        } catch (error) {
            console.error(error);
            alert('An error occurred while submitting the form.');
        } finally {
            setShowLoading(false);
        }
    };
    

    const handleAddParagraph = (e) => {
        e.preventDefault();
        setParagraphs([...paragraphs, ""]);
    }

    const handleAddPhoto = (e) => {
        e.preventDefault();
        setOtherImg([...otherImg, ""])
    }

    const resetForm = () => {
        setResearch({
            title: '',
            body: [''],
            date: '',
            mainImage: '',
            otherImg: [],
        });
        setMainImage(null);
        setOtherImg([]);
        setParagraphs([]);
        setEditingResearchId(null);
        setAddResearchBtn(false);
    };

    console.log(researchData)

    const handleEdit = (editingResearch) => {
        setResearch(editingResearch);
        setEditingResearchId(editingResearch._id);
        setParagraphs(editingResearch.body);
        setOtherImg(editingResearch.otherImg); // Retain current additional images
        setMainImage(null); // Set null to indicate no new main image
        setAddResearchBtn(true);
    };
    
    const deleteImages = async (imageUrls) => {
        try {
            console.log("Image URL inside delete function:", imageUrls);
            const deleteImgResponse = await axiosInstance.post(
                `${process.env.REACT_APP_API_BASE_URL}/api/admin/delete-image`,
                { imageUrls }
            );
            return deleteImgResponse.data; // Return the data from the response
        } catch (error) {
            console.error("Error deleting image:", error);
            throw error; // Propagate the error to be handled in the caller
        }
    };
    
    const handleDelete = async (researchId) => {
        setShowLoading(true);
        const researchToDelete = researchData && researchData?.find((research) => research._id === researchId);
        console.log("Research to delete:", researchToDelete);
    
        if (!researchToDelete) {
            console.error("Research not found");
            setShowLoading(false);
            return;
        }
    
        console.log(researchId, "Delete Initiated");
        try {
            // Delete main image
            let deleteImgResponse = await deleteImages(researchToDelete.mainImage);
    
            if (deleteImgResponse.success) {
                console.log("Main Image Deleted, Checking if there are other images");
    
                if (researchToDelete.otherImg.length > 0) {
                    console.log("Deleting other images...");
                    // Use Promise.all to wait for all image deletions
                    await Promise.all(
                        researchToDelete.otherImg?.map(async (url) => {
                            await deleteImages(url);
                        })
                    );
                    console.log("Other images deleted successfully.");
                }
            }
    
            // Now, delete the data in the database
            console.log("Deleted the photos now deleting the data in the database");
    
            const response = await axiosInstance.delete(`${process.env.REACT_APP_API_BASE_URL}/api/research/delResearch/${researchId}`);
            setShowLoading(false);
    
            if (response.data.success) {
                alert(response.data.message);
                setResearchData((prevData) => prevData.filter(research => research._id !== researchId));
            }
        } catch (error) {
            console.error("Error deleting research:", error);
            setShowLoading(false);
        }
    };
    
    return (
        <>
            <div className="addPublicationBtn w-full flex justify-center items-center align-middle">
                <button className='w-[15%] rounded-[15px] mx-auto align-middle  bg-secondary border-[2px] p-2 text-primary hover:bg-primary hover:text-secondary border-b-[5px] border-secondary duration-200' onClick={handleUnhide}>
                    {addResearchBtn ? "Hide" : "Add a new Research"}
                </button>
            </div>

            {addResearchBtn && (
                <div className="newMemberAdd flex justify-center items-center bg-secondary my-5 w-full p-5 text-primary">
                    <form className="flex flex-col py-5 mx-auto justify-center items-center w-full gap-2">
                        <div className="flex flex-col w-[40%]">
                            <label htmlFor="heading" className="p-1 text-left">Heading:</label>
                            <input
                                type="text"
                                name="title"
                                value={research.title}
                                className="bg-primary border-[2px] text-secondary border-secondary h-[30px] m-1 p-1"
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="flex flex-col w-[40%]">
                            <label htmlFor="body" className="p-1">Body:</label>
                            {paragraphs.map((paragraph, index) => (
                                <textarea
                                    key={index}
                                    rows={5}
                                    name={`body-${index}`}
                                    className="text-secondary border-[2px] border-secondary m-1 p-1"
                                    value={paragraph}
                                    onChange={(e) => handleInputChange(e, index)}
                                />
                            ))}
                            <button className="p-2" onClick={handleAddParagraph}>Add Paragraph +</button>
                        </div>

                        <div className="flex flex-col w-[40%] h-full">
                            <label htmlFor="mainImage" className="p-1">Main Photo:</label>
                            <input
                                type="file"
                                name="mainImage"
                                // value={research.mainImage}
                                className="bg-primary border-[2px] text-secondary border-secondary m-1 p-1"
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="w-[40%]">
                            <label htmlFor="date" className="p-1">Date:</label>
                            <input
                                type="date"
                                name="date"
                                className="bg-primary border-[2px] text-secondary border-secondary m-1 w-[100%] p-1"
                                value={research.date}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="flex flex-col w-[40%]">
                            <label htmlFor="heading" className="p-1 text-left">Period:</label>
                            <input
                                type="text"
                                name="period"
                                value={research.period}
                                className="bg-primary border-[2px] text-secondary border-secondary h-[30px] m-1 p-1"
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="flex flex-col w-[40%]">
                            <label htmlFor="heading" className="p-1 text-left">Sponsors:</label>
                            <input
                                type="text"
                                name="sponsors"
                                value={research.sponsors}
                                className="bg-primary border-[2px] text-secondary border-secondary h-[30px] m-1 p-1"
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="flex flex-col w-[40%]">
                            <label htmlFor="heading" className="p-1 text-left">Collaborators:</label>
                            <input
                                type="text"
                                name="collaborators"
                                value={research.collaborators}
                                className="bg-primary border-[2px] text-secondary border-secondary h-[30px] m-1 p-1"
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="w-[40%] flex flex-col">
                            <label htmlFor="Position" className="p-1">Other Photo Link: (Optional)</label>
                            {otherImg.map((photo, index) => (
                                <input
                                    key={index}
                                    type="file"
                                    name={`otherImg-${index}`}
                                    className="bg-primary border-[2px] text-secondary border-secondary  m-1 p-1"
                                    // value={photo}
                                    onChange={(e) => handleInputChange(e, index)}
                                />
                            ))}
                            <button className="p-2" onClick={handleAddPhoto}>Add Photo +</button>
                        </div>

                        <button
                            className="my-5 bg-tertiary p-3 rounded-[10px] hover:bg-primary hover:border-tertiary hover:border-[2px] hover:border-b-[4px] hover:text-tertiary text-primary mx-auto w-[20%] transition duration-200"
                            onClick={handleSubmit}
                        >
                            Submit
                        </button>
                    </form>
                </div>
            )}
            <div className="flex flex-col">
                <h2 className='text-xl font-semibold'>Researches:</h2>
                <div className="inline-block">
                    {console.log("Now we are gonna show the existing researches ")}
                    {
                    console.log("Now, we inserting",typeof(researchData) ," data to the dashbaord: \n", researchData)
                    }

                    {researchData && researchData?.map(research =>(

                        <div className="p-5" key={research._id}>
                            
                        <div className="">{research.title}</div>
                        <div className="flex gap-4 py-5 justify-self-end">
                            <div className="button edit bg-secondary flex p-2 text-primary px-5 cursor-pointer" onClick={() => handleEdit(research)}>Edit</div>
                            <div className="button edit bg-tertiary flex p-2 text-primary px-5 cursor-pointer" onClick={() => handleDelete(research._id)}>Delete</div>
                        </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default AdminResearch