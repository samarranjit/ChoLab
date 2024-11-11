import React from 'react'
import { allContexts } from '../../Context/AllContexts'
import axios from 'axios';
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
            let response;
            if (editingMemberId) {

                const res = await axiosInstance.post(`${process.env.REACT_APP_API_BASE_URL}/api/adminAbout/sendImage`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                if (res.data.success) {
                    console.log(res.data)
                    const img = res.data.data.secure_url;  // Get the Cloudinary URL of the uploaded resume
    
                    // Step 2: Send the form data including the resume URL to the backend
                    // const response = await axiosInstance.post(`${process.env.REACT_APP_API_BASE_URL}/api/publication/editPublication/${editingPublicationId}`, {
                    const response = await axiosInstance.post(`${process.env.REACT_APP_API_BASE_URL}/api/team/editMember/${editingMemberId}`,{
                        ...member,
                        img  
                    });
    
                    if (response.data.success) {
                        setEditingMemberId(false);

                        resetForm();
                    } else {
                        resetForm();
                    }
                }





            } else {
                const res = await axiosInstance.post(`${process.env.REACT_APP_API_BASE_URL}/api/adminAbout/sendImage`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                console.log(res)
                if (res.data.success) {
                    console.log(res.data)
                    const img = res.data.data.secure_url;  // Get the Cloudinary URL of the uploaded resume
    
                    // Step 2: Send the form data including the resume URL to the backend
                        response = await axiosInstance.post(`${process.env.REACT_APP_API_BASE_URL}/api/team/addMember`, {
                        ...member,
                        img  // Include the resume URL in the form data
                    });
    
                    if (response.data.success) {
                       
                        resetForm();
                    } else {
                        resetForm();
                    }
                }

            setShowLoading(false);


            }
            setShowLoading(false);
            if (response.data.success) {
                alert(response.data.message);
                // Update the local Data to reflect the change
        
                resetForm();
            }
        } catch (error) {
            console.error(error);
            setShowLoading(false);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if(name==="img"){
            setImg(e.target.files[0])
        }
        else{

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

    const handleDelete = async (memberId) => {
        console.log(memberId)
        try {
            setShowLoading(true);
            const response = await axiosInstance.delete(`${process.env.REACT_APP_API_BASE_URL}/api/team/DelMember/${memberId}`);
            setShowLoading(false);
            if (response.data.success) {
                alert(response.data.message);
                setData((prevData) => ({
                    ...prevData,
                    team: prevData.team.filter(member => member._id !== memberId)
                  }));
                // Update the local Data to remove the deleted member
                
            }
        } catch (error) {
            console.error(error);
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
                                value={member.img}
                                className="bg-primary border-[2px] text-secondary border-secondary  m-1 p-1"
                                onChange={handleInputChange}
                            />
                        </div>
                        {/* <div className="w-[40%] flex flex-col">
                            <label htmlFor="img" className="p-1">Photo Link:</label>
                            <input
                                type="text"
                                name="img"
                                value={member.img}
                                className="bg-primary border-[2px] text-secondary border-secondary h-[30px] m-1 p-1"
                                onChange={handleInputChange}
                            />
                        </div> */}

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
                                    onClick={() => handleDelete(item._id)}
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
