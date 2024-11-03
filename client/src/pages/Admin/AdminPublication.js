import axios from 'axios';
import React, { useContext } from 'react';
import { allContexts } from '../../Context/AllContexts';

function AdminPublication() {
    const {Data, showLoading,setShowLoading }=  useContext(allContexts)
    const [addPublicationBtn, setAddPublicationBtn] = React.useState(false);
    const [editingPublicationId, setEditingPublicationId] = React.useState(null)
    const [publication, setPublication] = React.useState({
        
        title: "",
        details: "",
        link: "",
        linkTag: "",
        status: "Review"
    });

    const handleUnhide = () => {
        setAddPublicationBtn(!addPublicationBtn);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPublication(prev => ({
            ...prev,
            [name]: value
        }));
        console.log(publication);
    };

    const handleEdit = (pub)=>{
        setPublication(pub);
        setEditingPublicationId(pub._id);
        setAddPublicationBtn(true)
        console.log(pub._id)
        console.log(publication);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        

        setShowLoading(true);
        try {
            let response;
            if (editingPublicationId) {
                response = await axios.post(`http://localhost:8080/api/publication/editPublication/${editingPublicationId}`, publication);
            } else {
                response = await axios.post("http://localhost:8080/api/publication/addPublication", publication);
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

    const handleDelete = async (publicationId) => {
        
        console.log(publicationId, "Deleted")
        try {
            setShowLoading(true)
            const response = await axios.delete(`http://localhost:8080/api/publication/delPublication/${publicationId}`);
            setShowLoading(false);
            if (response.data.success) {
                alert(response.data.message);
                // Optionally: refresh data

            }
        } catch (error) {

        }
    }

    const resetForm = () => {
        setPublication({
            name: "",
            position: "",
            desc: "",
            email: "",
            linkedin: "",
            img: ""
        });
        setEditingPublicationId(null);
        setAddPublicationBtn(false);
    };

    return (
        <>
            <div className="addPublicationBtn w-full flex justify-center items-center align-middle">
                <button className='w-[15%] rounded-[15px] mx-auto align-middle  bg-secondary border-[2px] p-2 text-primary hover:bg-primary hover:text-secondary border-b-[5px] border-secondary duration-200' onClick={handleUnhide}>
                    {addPublicationBtn ? "Hide" : "Add a new Publication"}
                </button>
            </div>

            {addPublicationBtn &&
                <div className="newPublicationAdd flex justify-center items-center bg-secondary my-5 w-100% p-5 text-primary">
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
                            <label htmlFor="linkTag" className='p-1'>Link Tag</label>
                            <input type="text" name="linkTag" value={publication.linkTag} className="bg-primary border-[2px] text-secondary border-secondary h-[30px] m-1 p-1" onChange={handleInputChange} />
                        </div>

                        <div className="w-[40%] flex flex-col">
                            <label htmlFor="status" className='p-1'>Status</label>
                            <select name="status" value={publication.status} className="bg-primary border-[2px] text-secondary border-secondary h-[30px] m-1 p-1" onChange={handleInputChange}>
                                <option value="Review">Review</option>
                                <option value="Published">Published</option>
                            </select>
                        </div>

                        <button className='my-5 bg-tertiary p-3 rounded-[10px] hover:bg-primary  hover:border-tertiary hover:border-[2px] hover:border-b-[4px] hover:text-tertiary text-primary mx-auto w-[20%] transition duration-200' onClick={handleSubmit}>Submit</button>
                    </form>
                </div>
            }

            <div className="memberList flex flex-col">

                {
                    Data && Data.publication && Data.publication.map(item => (
                        <div key={item._id} className='flex border-[1px] border-gray-150 my-5 p-5 hover:translate-y-[-4px] hover:shadow-xl'>
                            <div  className='font-semibold w-[70%]  flex justify-center items-center text-left'> {item.title}</div>
                            <div className="btn w-[30%] flex items-end justify-around text-center my-5">
                                <button onClick={()=>handleEdit(item)} className='text-center bg-secondary w-[25%] rounded-[10px] text-primary border-[2px] border-secondary  hover:bg-primary hover:text-secondary border-b-[5px]  border-secondary duration-200'>Edit  </button>
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
