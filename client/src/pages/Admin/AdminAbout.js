import React from 'react'
import { allContexts } from '../../Context/AllContexts'
import { Link } from 'react-router-dom'
import axiosInstance from '../../axios/axiosInstance';

function AdminAbout() {
    const { Data, setData, setShowLoading } = React.useContext(allContexts);
    const [addMemberBtn, setAddMemberBtn] = React.useState(false);
    const [editingMemberId, setEditingMemberId] = React.useState(null);
    const [img, setImg] = React.useState(null)
    const [member, setMember] = React.useState({
        name: "",
        position: "",
        desc: "",
        email: "",
        linkedin: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('img', img);



        setShowLoading(true);
        try {

            if (member.name === "" || member.position === "" || member.desc === "" ) {
                alert("Please enter all the values. Do not leave field(s) blanks");
            }
            else {



                let response;
                let imgURL = member.img; // Use the existing image URL as the default

                if (editingMemberId && img) {
                    // If editing and a new image is provided, upload it
                    const formData = new FormData();
                    formData.append('img', img);

                    const res = await axiosInstance.post(`${process.env.REACT_APP_API_BASE_URL}/api/adminAbout/sendImage`, formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    });

                    if (res.data.success) {
                        imgURL = res.data.data.secure_url; // Update imgURL with the new Cloudinary URL
                    } else {
                        throw new Error('Image upload failed');
                    }
                }

                if (editingMemberId) {
                    // Update member details
                    let response = await axiosInstance.post(`${process.env.REACT_APP_API_BASE_URL}/api/team/editMember/${editingMemberId}`, {
                        ...member,
                        img: imgURL // Use the new or existing image URL
                    });
                    if (response.data.success) {
                        alert(response.data.message);
                        // const updatedMember = response.data.member;
                        resetForm();
                    } else {
                        throw new Error('Failed to update member');
                    }
                } else {
                    // Add a new member
                    if (img) {
                        const formData = new FormData();
                        formData.append('img', img);

                        const res = await axiosInstance.post(`${process.env.REACT_APP_API_BASE_URL}/api/adminAbout/sendImage`, formData, {
                            headers: {
                                'Content-Type': 'multipart/form-data'
                            }
                        });

                        if (res.data.success) {
                            imgURL = res.data.data.secure_url;
                        } else {
                            throw new Error('Image upload failed');
                        }
                    }

                    response = await axiosInstance.post(`${process.env.REACT_APP_API_BASE_URL}/api/team/addMember`, {
                        ...member,
                        img: imgURL
                    });
                    if (response.data.success) {
                        setData((prevData) => ({
                            ...prevData,
                            team: [...prevData.team, member], // Append the new member to the team array
                        }));
                        alert(response.data.message);
                        resetForm();
                    } else {
                        throw new Error(response.data.message || 'Failed to save the member details');
                    }
                }
            }

        } catch (error) {
            console.error(error);
            alert('An error occurred. Please try again.');
        } finally {
            setShowLoading(false);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (name === "img") {
            setImg(e.target.files[0])
        }
        else {

            setMember((prevState) => ({
                ...prevState,
                [name]: value
            }));
        }


    };

    const handleUnhide = () => {
        resetForm();
        setAddMemberBtn(!addMemberBtn);
    };

    const handleDelete = async (memberId, imageUrls) => {
        console.log(memberId, imageUrls);
        try {
            setShowLoading(true);
    
            // Step 1: Delete the images from Cloudinary
            console.log("Deleting images from Cloudinary...");
            const deleteImagesResponse = await axiosInstance.post(
                `${process.env.REACT_APP_API_BASE_URL}/api/admin/delete-image`,
                { imageUrls }
            );
    
            if (deleteImagesResponse.data.success) {
                console.log("Images deleted successfully from Cloudinary. Now deleting member...");
    
                // Step 2: If image deletion is successful, delete the member from the database
                const response = await axiosInstance.delete(
                    `${process.env.REACT_APP_API_BASE_URL}/api/team/DelMember/${memberId}`
                );
    
                if (response.data.success) {
                    alert('Member and associated images deleted successfully.');
    
                    // Step 3: Update the local state to reflect the changes
                    setData((prevData) => ({
                        ...prevData,
                        team: prevData.team.filter((member) => member._id !== memberId),
                    }));
                } else {
                    alert('Failed to delete member from the database.');
                }
            } else {
                alert('Failed to delete images from Cloudinary.');
            }
    
            setShowLoading(false);
        } catch (error) {
            console.error('Error during deletion:', error);
            alert('An error occurred during deletion.');
            setShowLoading(false);
        }
    };
    
    

    const handleEdit = (member) => {
        setMember(member);
        setEditingMemberId(member._id);
        setAddMemberBtn(true);
    };

    const resetForm = () => {
        setMember({
            name: "",
            position: "",
            desc: "",
            email: "",
            linkedin: "",
            img: ""
        });
        setEditingMemberId(null);
        setAddMemberBtn(false);
    };

    return (
        <>
            <div className="addMemberBtn w-full flex justify-center items-center align-middle">
                <button
                    className="w-[15%] flex items-center justify-center rounded-[15px] mx-auto align-middle  bg-secondary border-[2px] p-2 text-primary hover:bg-primary hover:text-secondary border-b-[5px] border-secondary duration-200"
                    onClick={handleUnhide}
                >
                    {addMemberBtn ? "Hide" : "Add a member"}
                </button>
                <Link to="/admin-newMemberRequests" className='w-[100%] flex'>
                    <button
                        className="w-[15%] rounded-[15px] mx-auto align-middle bg-secondary border-[2px] p-2 text-primary hover:bg-primary hover:text-secondary border-b-[5px] border-secondary duration-200"
                    >
                        See Form Requests
                    </button>
                </Link>
            </div>
            {addMemberBtn && (
                <div className="newMemberAdd flex justify-center items-center bg-secondary my-5 w-100% text-primary">
                    <form
                        className="flex flex-col py-5 mx-auto justify-center items-center w-full gap-2"
                        onSubmit={handleSubmit}
                    >
                        <div className="flex flex-col w-[40%]">
                            <label htmlFor="Name" className="p-1 text-left">Name:</label>
                            <input
                                type="text"
                                name="name"
                                value={member.name}
                                className="bg-primary border-[2px] text-secondary border-secondary h-[30px] m-1 p-1"
                                onChange={handleInputChange}
                            />

                            <label htmlFor="Position" className="p-1">Position:</label>
                            <input
                                type="text"
                                name="position"
                                value={member.position}
                                className="bg-primary border-[2px] text-secondary border-secondary h-[30px] m-1 p-1"
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="flex flex-col w-[40%]">
                            <label htmlFor="desc" className="p-1">Bio:</label>
                            <textarea
                                rows={5}
                                name="desc"
                                value={member.desc}
                                className="text-secondary border-[2px] border-secondary m-1 p-1"
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="w-[40%]">
                            <label htmlFor="email" className="p-1">Email:</label>
                            <input
                                type="email"
                                name="email"
                                value={member.email}
                                className="bg-primary border-[2px] text-secondary border-secondary m-1 w-[30%] p-1"
                                onChange={handleInputChange}
                            />

                            <label htmlFor="linkedin" className="p-1">Linkedin:</label>
                            <input
                                type="text"
                                name="linkedin"
                                value={member.linkedin}
                                className="bg-primary border-[2px] text-secondary border-secondary m-1 w-[30%] p-1"
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="w-[40%] flex flex-col">
                            <label htmlFor="img" className="p-1">Photo:</label>
                            <input
                                type="file"
                                name="img"
                                // value={member.img}
                                className="bg-primary border-[2px] text-secondary border-secondary  m-1 p-1"
                                onChange={handleInputChange}
                            />
                        </div>

                        <button
                            type="submit"
                            className="my-5 bg-tertiary p-3 rounded-[10px] hover:bg-primary hover:border-tertiary hover:border-[2px] hover:border-b-[4px] hover:text-tertiary text-primary mx-auto w-[20%] transition duration-200"
                        >
                            {editingMemberId ? "Update Member" : "Add Member"}
                        </button>
                    </form>
                </div>
            )}

            <h1 className="text-2xl my-9">Members</h1>
            <div className="h-screen">
                <div className="memberList grid grid-cols-2">
                    {Data?.team?.map((item) => (
                        <div key={item._id} className="flex border-[1px] border-gray-150">
                            <div className="font-semibold w-[50%] flex justify-center items-center text-center">{item.name}</div>
                            <div className="btn w-[50%] flex justify-around text-center my-5">
                                <button
                                    onClick={() => handleEdit(item)}
                                    className="text-center bg-secondary w-[25%] rounded-[10px] text-primary border-[2px] border-secondary hover:bg-primary hover:text-secondary border-b-[5px] border-secondary duration-200"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(item._id, item.img)}
                                    className="text-center bg-tertiary w-[25%] rounded-[10px] text-primary border-[2px] border-tertiary hover:bg-primary hover:text-tertiary border-b-[5px] border-tertiary duration-200"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default AdminAbout;
