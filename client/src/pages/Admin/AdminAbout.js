import React from 'react';
import { allContexts } from '../../Context/AllContexts';
import axiosInstance from '../../axios/axiosInstance';

function AdminAbout() {
    const { Data, setData, setShowLoading } = React.useContext(allContexts);
    const [addMemberBtn, setAddMemberBtn] = React.useState(false);
    const [editingMemberId, setEditingMemberId] = React.useState(null);
    const [img, setImg] = React.useState(null);
    const [member, setMember] = React.useState({
        name: "",
        position: "",
        desc: "",
        email: "",
        linkedin: "",
    });

    const uploadImage = async (imageFile) => {

        console.log("trying to upload image")
        const formData = new FormData();
        formData.append('image', imageFile);
        const res = await axiosInstance.post(
            `${process.env.REACT_APP_API_BASE_URL}/api/adminAbout/sendImage`,
            formData,
            { headers: { 'Content-Type': 'multipart/form-data' } }
        );
        console.log("Image Uploaded");
        console.log(res)

        if (res.data.success) {
            return res.data.data.secure_url;
        }
        throw new Error('Image upload failed');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (member.name==="" || member.position === "" || member.desc === "") {
            alert("Please fill in all required fields.");
            return;
        }

        setShowLoading(true);
        try {
            const imgURL = img ? await uploadImage(img) : member.img;

            const dataToSend = {
                ...member,
                img: imgURL,
            };

            const response = editingMemberId
                ? await axiosInstance.post(`${process.env.REACT_APP_API_BASE_URL}/api/team/editMember/${editingMemberId}`, dataToSend)
                : await axiosInstance.post(`${process.env.REACT_APP_API_BASE_URL}/api/team/addMember`, dataToSend);

            if (response.data.success) {
                alert(response.data.message);

                if (!editingMemberId) {
                    console.log("Set to add new member")
                    console.log("Here are the existing memebrs", Data.team)
                    console.log("we are inserting this member: ", response.data.data);
                    setData((prevData) => ({
                        ...prevData,
                        team: [...prevData.team, response.data.data],

                    }));
                    console.log("we just entered a new member")
                    console.log("THis is how the new team array looks like", Data.team)
                } else {
                    setData((prevData) => ({
                        ...prevData,
                        team: prevData.team.map((item) =>
                            item._id === editingMemberId ? response.data.data : item
                        ),
                    }));
                }

                resetForm();
            } else {
                throw new Error(response.data.message || 'Submission failed');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while submitting the form.');
        } finally {
            setShowLoading(false);
        }
    };

    const handleInputChange = (e) => {
        const { name, value, files } = e.target;

        if (name === "img" && files?.length) {
            setImg(files[0]);
        } else {
            setMember((prevState) => ({
                ...prevState,
                [name]: value,
            }));
        }
    };

    const handleUnhide = () => {
        // resetForm();
        
        console.log(addMemberBtn)
        setAddMemberBtn((prevState) => !prevState);  // This will flip the current state value

        console.log(addMemberBtn)
    };

    const handleDelete = async (memberId, imageUrls) => {
        console.log('delete Details',  imageUrls)
        try {
            setShowLoading(true);

            const deleteImagesResponse = await axiosInstance.post(
                `${process.env.REACT_APP_API_BASE_URL}/api/admin/delete-image`,
                { imageUrls }
            );

            if (deleteImagesResponse.data.success) {
                const response = await axiosInstance.delete(
                    `${process.env.REACT_APP_API_BASE_URL}/api/team/DelMember/${memberId}`
                );

                if (response.data.success) {
                    alert('Member and associated images deleted successfully.');
                    setData((prevData) => ({
                        ...prevData,
                        team: prevData.team.filter((member) => member._id !== memberId),
                    }));
                } else {
                    throw new Error('Failed to delete member from the database.');
                }
            } else {
                throw new Error('Failed to delete images from Cloudinary.');
            }
        } catch (error) {
            console.error('Error during deletion:', error);
            alert('An error occurred during deletion.');
        } finally {
            setShowLoading(false);
        }
    };

    const handleEdit = (editingMember) => {
        setMember(editingMember);
        setEditingMemberId(editingMember._id);
        setAddMemberBtn(true);
    };

    const resetForm = () => {
        setMember({
            name: "",
            position: "",
            desc: "",
            email: "",
            linkedin: "",
            img: "",
        });
        setImg(null);
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
            </div>
            {addMemberBtn ?
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
            :""}

            <h1 className="text-2xl my-9">Members</h1>
            <div className="h-screen">
                <div className="memberList grid grid-cols-2">
                    {Data?.team?.map((item) => (
                        <div key={item._id} className="flex border-[1px] border-gray-150">
                            <div className="font-semibold w-[50%] flex justify-center items-center text-center">{item.name}</div>
                            <div className="btn w-[50%] flex justify-around text-center my-5">
                                <button
                                    onClick={() => { handleEdit(item)}}
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
