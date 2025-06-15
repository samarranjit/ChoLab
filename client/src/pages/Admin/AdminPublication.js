import React, { useContext } from 'react';
import { allContexts } from '../../Context/AllContexts';
import axiosInstance from '../../axios/axiosInstance';

function AdminPublication() {
    const { Data, setData, setShowLoading } = useContext(allContexts)
    const [addPublicationBtn, setAddPublicationBtn] = React.useState(false);
    const [editingPublicationId, setEditingPublicationId] = React.useState(null);
    const [setPublished] = React.useState(false)
    const [image, setImage] = React.useState(null)
    const [publication, setPublication] = React.useState({

        title: "",
        details: "",
        link: "",
        // linkTag: "",
        status: "Review",
        date: ""
    });

    const handleUnhide = () => {
        setAddPublicationBtn(!addPublicationBtn);
    };

    const handleInputChange = (e) => {

        const { name, value } = e.target;

        if (name === "image") {
            setImage(e.target.files[0])
        }
        else {

            setPublication(prev => ({
                ...prev,
                [name]: value
            }));
            console.log(publication);
        }



    };

    const handleEdit = (pub) => {
        setPublication(pub);
        setEditingPublicationId(pub._id);
        setAddPublicationBtn(true)
        console.log(pub._id)
        console.log(publication);
        pub.date ? setPublished(true) : setPublished(false);
    }

    const uploadImage = async (imageFile) => {
        const formData = new FormData();
        formData.append('image', imageFile);
        const res = await axiosInstance.post(
            `${process.env.REACT_APP_API_BASE_URL}/api/adminPublication/sendImage`,
            formData,
            { headers: { 'Content-Type': 'multipart/form-data' } }
        );
        if (res.data.success) {
            return res.data.data.secure_url;
        }
        throw new Error('Image upload failed');
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        setShowLoading(true);
        try {
            if (!editingPublicationId && (publication.title === "" || publication.details.length === 0 || !image || publication.date === "" || publication.link === "")) {
                alert("One or more important fields are missing. Please note that all fields are important for adding new publication.");
                return;
            }

            if (editingPublicationId && (publication.title === "" || publication.details.length === 0 || publication.date === "" || publication.link === "")) {
                alert("One or more important fields are missing. Please note that all fields except setting a new image are important for editing.");
                return;
            }


            let imgUrl = image ? await uploadImage(image) : publication.imageUrl;

            const payload = {
                ...publication,
                imgUrl
            };

            let response;
            if (editingPublicationId) {
                response = await axiosInstance.post(
                    `${process.env.REACT_APP_API_BASE_URL}/api/publication/editPublication/${editingPublicationId}`,
                    payload
                );
            } else {
                response = await axiosInstance.post(
                    `${process.env.REACT_APP_API_BASE_URL}/api/publication/addPublication`,
                    payload
                );
            }

            if (response.data.success) {
                alert(response.data.message);

                if (!editingPublicationId) {
                    console.log("Set to add new Publication to the dashbaord")
                    console.log("Here are the existing publications", Data.publication)
                    console.log("we are inserting this publication: ", response.data.data);
                    setData((prevData) => ({
                        ...prevData,
                        publication: [...prevData.publication, response.data.data],

                    }));
                    console.log("we just entered a new publication")
                    console.log("THis is how the new publications array looks like", Data.publication)
                } else {
                    setData((prevData) => ({
                        ...prevData,
                        publication: prevData.publication.map((item) =>
                            item._id === editingPublicationId ? response.data.data : item
                        )
                    }));
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

    const handleDelete = async (publicationId) => {
        let imageUrls = Data ? Data.publication.find(pub => pub._id === publicationId).imgUrl : "";
        console.log(publicationId, "Deleted")
        try {
            setShowLoading(true);
            let deleteImagesResponse;
            if (imageUrls) {

                console.log("Deleting images from Cloudinary...");
                deleteImagesResponse = await axiosInstance.post(
                    `${process.env.REACT_APP_API_BASE_URL}/api/admin/delete-image`,
                    { imageUrls }
                );
            }
            else {
                alert("Image deletion failed ")
                return;
            }

            if (deleteImagesResponse) {
                console.log("Deleted Image from cloudinary, now deleting the details in database")
                const response = await axiosInstance.delete(`${process.env.REACT_APP_API_BASE_URL}/api/publication/delPublication/${publicationId}`);
                setShowLoading(false);
                if (response.data.success) {
                    alert(response.data.message);
                    setData((prevData) => ({
                        ...prevData,
                        publication: prevData.publication.filter(member => member._id !== publicationId)
                    }));
                }
            }


        } catch (error) {
            console.log(error)
        }
    }

    const resetForm = () => {
        setPublication({
            title: "",
            details: "",
            link: "",
            status: "Review",
            date: ""
        });
        setEditingPublicationId(null);
        setAddPublicationBtn(false);
        setPublished(true);
        setImage(null);
    };

    const handlePublishedDate = (e) => {
        if (e.target.value === "Review") {
            setPublished(false)
        }
        else if (e.target.value === "Published") {
            setPublished(true)
        }
    }

    return (
        <>
            <div className="addPublicationBtn w-full flex justify-center items-center align-middle">
                <button className='w-[15%] rounded-[15px] mx-auto align-middle  bg-secondary border-[2px] p-2 text-primary hover:bg-primary hover:text-secondary border-b-[5px] border-secondary duration-200' onClick={handleUnhide}>
                    {addPublicationBtn ? "Hide" : "Add a new Publication"}
                </button>
            </div>

            {addPublicationBtn &&
                <div className="newPublicationAdd flex justify-center items-center bg-secondary my-5 w-100% p-5 text-primary position-fixed top-0 left-0 right-0 bottom-0 z-50">
                    <form className='flex flex-col py-5 mx-auto justify-center items-center w-full gap-2'>
                        <div className="flex flex-col w-[40%]">
                            <label htmlFor="title" className='p-1 text-left'>Title: </label>
                            <input type="text" name="title" value={publication.title} className="bg-primary border-[2px] text-secondary border-secondary h-[30px] m-1 p-1" onChange={handleInputChange} />
                        </div>

                        <div className="flex flex-col w-[40%]">
                            <label htmlFor="details" className='p-1'>Details: </label>
                            <textarea name="details" value={publication.details} className="text-secondary border-[2px] border-secondary m-1 p-1" onChange={handleInputChange} />
                        </div>

                        <div className="w-[40%] flex flex-col">
                            <label htmlFor="link" className='p-1'>Link</label>
                            <input type="text" name="link" value={publication.link} className="bg-primary border-[2px] text-secondary border-secondary h-[30px] m-1 p-1" onChange={handleInputChange} />
                        </div>


                        <div className="w-[40%] flex flex-col">
                            <label htmlFor="status" className='p-1'>Status</label>
                            <select name="status" value={publication.status} className="bg-primary border-[2px] text-secondary border-secondary h-[30px] m-1 p-1"
                                onChange={(e) => {
                                    handleInputChange(e);
                                    handlePublishedDate(e);
                                }}
                            >
                                <option value="Review">Review</option>
                                <option value="Published">Published</option>
                            </select>
                        </div>
                        <div className={`w-[40%] flex flex-col `} >
                            <label htmlFor="publishedDate" className='p-1'>Published Date</label>
                            <input type="date" name="date" value={publication.date} className="bg-primary border-[2px] text-secondary border-secondary h-[30px] m-1 p-1"
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className={`w-[40%] flex flex-col `} >
                            <label htmlFor="image" className='p-1'>Image</label>
                            <input type="file" name="image" className="bg-primary border-[2px] text-secondary border-secondary h-[full ] m-1 p-1"
                                onChange={handleInputChange}
                            />
                        </div>

                        <button className='my-5 bg-tertiary p-3 rounded-[10px] hover:bg-primary  hover:border-tertiary hover:border-[2px] hover:border-b-[4px] hover:text-tertiary text-primary mx-auto w-[20%] transition duration-200' onClick={handleSubmit}>Submit</button>
                    </form>
                </div>
            }

            <div className="memberList flex flex-col">

                {
                    Data && Data.publication && Data?.publication?.map(item => (
                        <div key={item._id} className='flex border-[1px] border-gray-150 my-5 p-5 hover:translate-y-[-4px] hover:shadow-xl'>
                            <div className='font-semibold w-[70%]  flex justify-center items-center text-left'> {item.title}</div>
                            <div className="btn w-[30%] flex items-end justify-around text-center my-5">
                                <button onClick={() => handleEdit(item)} className='text-center bg-secondary w-[25%] rounded-[10px] text-primary border-[2px] border-secondary  hover:bg-primary hover:text-secondary border-b-[5px]  border-secondary duration-200'>Edit  </button>
                                <button onClick={() => handleDelete(item._id)} className='text-center bg-tertiary w-[25%]   rounded-[10px] text-primary border-[2px] border-tertiary  hover:bg-primary hover:text-tertiary border-b-[5px]  border-tertiary duration-200y'>Delete </button>
                            </div>

                        </div>


                    ))
                }

            </div>
        </>
    );
}

export default AdminPublication;
