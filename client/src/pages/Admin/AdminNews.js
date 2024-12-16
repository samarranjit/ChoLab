import React, { useContext } from 'react';
import { allContexts } from '../../Context/AllContexts';
import axiosInstance from '../../axios/axiosInstance';

function AdminNews() {
    const { Data, setShowLoading } = useContext(allContexts);
    const [editingNewsId, setEditingNewsId] = React.useState(null);
    const [addNewsBtn, setAddNewsBtn] = React.useState(false);
    const [paragraphs, setParagraphs] = React.useState([""]);
    const [mainImage, setMainImage] = React.useState(null);
    const [otherImg, setOtherImg] = React.useState([]);
    const [news, setNews] = React.useState({
        heading: "",
        body: [""],
        mainImage: "",
        otherImage: [],
        date: ""
    });

    const handleUnhide = () => {
        setAddNewsBtn(!addNewsBtn);
    };

    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        if (name.startsWith("body-")) {
            const updatedParagraphs = [...paragraphs];
            updatedParagraphs[index] = value;
            setParagraphs(updatedParagraphs);
            setNews(prev => ({ ...prev, body: updatedParagraphs }));
        }
        else if (name.startsWith("otherImg-")) {
            const updatedPhotos = [...otherImg];
            updatedPhotos[index] = e.target.files[0];
            setOtherImg(updatedPhotos);

        } else if (name === "mainImage") {
            setMainImage(e.target.files[0])
            // console.log(mainImage)
        } else {
            setNews(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleEdit = (item) => {
        setAddNewsBtn(true);
        setEditingNewsId(item._id);
        setNews(item);
        setParagraphs(item.body);
        setOtherImg(item.otherImage || [""]);
    };

    const uploadImage = async (imageFile) => {
        console.log("we are inside the function to upload image")
        const formData = new FormData();
        formData.append('image', imageFile);

        const res = await axiosInstance.post(
            `${process.env.REACT_APP_API_BASE_URL}/api/adminNews/sendImage`,
            formData,
            { headers: { 'Content-Type': 'multipart/form-data' } }
        );
        if (res.data.success) {
            console.log(res.data.data.secure_url)
            return res.data.data.secure_url
        }
        throw new Error('Image Uploading Failed')

    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(news);
        
        setShowLoading(true);

        if (!editingNewsId && (news.heading === "" || news.body.length === 0 || !mainImage || news.date === "")) {
            alert("One or more important fields are missing. Please note that all fields except Optional Images are important for adding new news.");
            return;
        }

        if (editingNewsId && (news.heading === "" || news.body.length === 0 || news.date === "")) {
            alert("One or more important fields are missing. Please note that all fields except Main Image and Optional Images are important for editing.");
            return;
        }


        // ---------------------New Code for Submission ---------------------------------------------
        try {
           
                console.log("Checking if main Images is present");

                let mainImageUrl;
                if (mainImage) {
                    console.log("We have a main Image, we are uploading it now")

                    mainImageUrl = await uploadImage(mainImage);
                    console.log("Main Image Uploaded")

                }
                else {
                    console.log("Main image is not found so now we are gonna take the same main image as we had")
                    mainImageUrl = news.mainImage
                }


                const otherImageUrls = [];
                if (otherImg) {

                    for (let i = 0; i < otherImg.length; i++) {
                        console.log("We have found one otherimage, we are uploading other image ", i)
                        const imgUrl = await uploadImage(otherImg[i]);
                        otherImageUrls.push(imgUrl);
                    }
                    console.log("We have uploded all the other images ")
                }

                const DataToSend = {
                    ...news,
                    mainImage: mainImageUrl,
                    otherImage: otherImageUrls
                }
                let response;
                if (editingNewsId) {
                    console.log("We are now inserting the edited info")
                    response = await axiosInstance.post(`${process.env.REACT_APP_API_BASE_URL}/api/news/editNews/${editingNewsId}`, DataToSend);
                    console.log("donw with editing the doc in the database")

                }
                else {
                    console.log("we are now adding the new doc in the database")
                    response = await axiosInstance.post(`${process.env.REACT_APP_API_BASE_URL}/api/news/addNews`, DataToSend);
                    console.log("We are done inserting the new doc in the database")
                }

                if (response.data.success) {
                    alert(response.data.message);
                    resetForm();
                }
                else {
                    throw new Error(response.data.message || "Submission Failed!");
                }
            
        } catch (error) {
            console.error(error);
            alert('An error occurred while submitting the form.');
        } finally {
            setShowLoading(false);
        }


        // -----------------------------------------------------------------------------------------
    };

    const handleAddParagraph = (e) => {
        e.preventDefault();
        setParagraphs([...paragraphs, ""]);
    };

    const handleAddPhoto = (e) => {
        e.preventDefault();
        setOtherImg([...otherImg, ""]);
    };

    const handleDelete = async (newsId) => {
        try {
            setShowLoading(true);
            const response = await axiosInstance.delete(`${process.env.REACT_APP_API_BASE_URL}/api/news/delNews/${newsId}`);
            setShowLoading(false);
            if (response.data.success) {
                alert(response.data.message);
                console.log(newsId, "Deleted");
                // Optionally: refresh data
            }
        } catch (error) {
            console.error("Error:", error);
            setShowLoading(false);
        }
    };

    const resetForm = () => {
        setNews({
            heading: "",
            body: [""],
            mainImage: "",
            otherImage: [""],
            date: "10/27/2024"
        });
        setParagraphs([""]);
        setOtherImg([""]);
        setEditingNewsId(null);
        setAddNewsBtn(false);
    };

    return (
        <>
            <div className="addMemberBtn w-full flex justify-center items-center align-middle">
                <button
                    className="w-[15%] rounded-[15px] mx-auto align-middle bg-secondary border-[2px] p-2 text-primary hover:bg-primary hover:text-secondary border-b-[5px] border-secondary duration-200"
                    onClick={handleUnhide}
                >
                    {addNewsBtn ? "Hide" : "Add a new news"}
                </button>
            </div>

            {addNewsBtn && (
                <div className="newMemberAdd flex justify-center items-center bg-secondary my-5 w-full p-5 text-primary">
                    <form className="flex flex-col py-5 mx-auto justify-center items-center w-full gap-2">
                        <div className="flex flex-col w-[40%]">
                            <label htmlFor="heading" className="p-1 text-left">Heading:</label>
                            <input
                                type="text"
                                name="heading"
                                value={news.heading}
                                className="bg-primary border-[2px] text-secondary border-secondary h-[30px] m-1 p-1"
                                onChange={handleInputChange}
                            />

                            <label htmlFor="mainImage" className="p-1">Main Photo:</label>
                            <input
                                type="file"
                                name="mainImage"
                                className="bg-primary border-[2px] text-secondary border-secondary m-1 p-1"
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

                        <div className="w-[40%]">
                            <label htmlFor="date" className="p-1">Date:</label>
                            <input
                                type="date"
                                name="date"
                                className="bg-primary border-[2px] text-secondary border-secondary m-1 w-[30%] p-1"
                                value={news.date}
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
                                    className="bg-primary border-[2px] text-secondary border-secondary m-1 p-1"
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

            {Data && Data.news && Data.news.map(item => (
                <div key={item._id} className="flex border-[1px] border-gray-150 my-5 p-5 hover:translate-y-[-4px] hover:shadow-xl">
                    <div className="font-semibold w-[70%] flex justify-center items-center text-left">{item.heading} ({item.date})</div>
                    <div className="btn w-[30%] flex items-end justify-around text-center my-5">
                        <button
                            onClick={() => handleEdit(item)}
                            className="text-center bg-secondary w-[25%] rounded-[10px] text-primary border-[2px] hover:bg-primary hover:text-secondary border-b-[5px] border-secondary duration-200"
                        >
                            Edit
                        </button>
                        <button
                            onClick={() => handleDelete(item._id)}
                            className="text-center bg-tertiary w-[25%] rounded-[10px] text-primary border-[2px] hover:bg-primary hover:text-tertiary border-b-[5px] border-tertiary duration-200"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </>
    );
}

export default AdminNews;
