import React from 'react'
import axiosInstance from '../../axios/axiosInstance';


const AdminResearch = () => {
    const [addResearchBtn, setAddResearchBtn] = React.useState(false)
    const [paragraphs, setParagraphs] = React.useState([""]);
    const [research, setResearch] = React.useState({
        title: "",
        body: [""],
       date:"",
       mainImage:"",
       otherImg: ""
    })
    const [mainImage, setMainImage] = React.useState(null)
    const [otherImg, setOtherImg] = React.useState([''])

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
            
        } else if(name === "mainImage")
        {
            setMainImage( e.target.files[0])
            // console.log(mainImage)
        }
        else {
            setResearch(prev => ({ ...prev, [name]: value }));
        }
        console.log(research)
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
    
        try {
            // Upload the main image to Cloudinary
            if (mainImage) {
                formData.append('image', mainImage);
                const mainImgRes = await axiosInstance.post(
                    `${process.env.REACT_APP_API_BASE_URL}/api/adminResearch/uploadImage`,
                    formData,
                    {
                        headers: { 'Content-Type': 'multipart/form-data' },
                    }
                );
    
                if (mainImgRes.data.success) {
                    const mainImgUrl = mainImgRes.data.data.secure_url;
                    research.mainImage = mainImgUrl; // Save main image URL in research data
                }
            }
    
            // Upload additional images to Cloudinary
            const uploadedOtherImg = [];
            for (let i = 0; i < otherImg.length; i++) {
                if (otherImg[i]) {
                    formData.set('image', otherImg[i]); // Replace the file for each iteration
                    const extraImgRes = await axiosInstance.post(
                        `${process.env.REACT_APP_API_BASE_URL}/api/adminResearch/uploadImage`,
                        formData,
                        {
                            headers: { 'Content-Type': 'multipart/form-data' },
                        }
                    );
    
                    if (extraImgRes.data.success) {
                        uploadedOtherImg.push(extraImgRes.data.data.secure_url);
                    }
                }
            }
    
            research.otherImg = uploadedOtherImg; // Save extra image URLs in research data
    
            // Submit the form data to the backend, including the Cloudinary URLs
            const response = await axiosInstance.post(
                `${process.env.REACT_APP_API_BASE_URL}/api/adminResearch/addResearch`,
                {
                    ...research,
                }
            );
    
            if (response.data.success) {
                alert('Research added successfully!');
                resetForm();
            } else {
                alert('Failed to add research.');
            }
        } catch (error) {
            console.error('Error uploading image or saving data:', error);
            alert('An error occurred. Please try again.');
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
        });
        setMainImage(null);
        setOtherImg(['']);
        setParagraphs(['']);
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
                                className="bg-primary border-[2px] text-secondary border-secondary m-1 w-[30%] p-1"
                                value={research.date}
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
        </>
    )
}

export default AdminResearch