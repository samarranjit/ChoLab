import { React, useContext, useEffect, useState } from 'react'
import Navbar from '../../../components/Navbar'
import { allContexts } from '../../../Context/AllContexts'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function NewJoinRequests() {
    const { setShowLoading } = useContext(allContexts)
    const [newJoinRequest, setNewJoinRequest] = useState(null);
    const apiURL = process.env.REACT_APP_API_BASE_URL
    let count=1;
    const navigate= useNavigate();

    const getData = async () => {
        setShowLoading(true)
        try {
            const response = await axios.get(`${apiURL}/api/joinRequest/newJoinRequest`);
            setNewJoinRequest(response.data)
            console.log(response.data.joinUsReq)
            setShowLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    const handleView = (item)=>{
       const id=item._id;
        navigate(`/admin-newMemberRequests/${id}`);
        window.scrollTo({ top: 0 });
        
    }

    useEffect(() => {
        if (!newJoinRequest) {
            getData();
        }
    })
    return (
        <div >
            <Navbar></Navbar>
            <div className="p-7 ">

            <h2 className='text-center text-2xl text-black p-5'>New Member Requests</h2>

            <div className="grid grid-cols-2  p-5 gap-2">

            {
                newJoinRequest && newJoinRequest?.joinUsReq?.map((item) => (
                    <div key={item._id} className='border-gray-100 border-[2px] flex justify-around p-7 items-center'>
                        <div className="count">{count++}</div>
                        <div className="name text-center font-bold">
                            {item.fName} 
                        </div>
                        <div className="buttons flex gap-5">
                            <button className='bg-secondary text-primary p-5' onClick={()=>handleView(item)}>View</button>
                            <button className='bg-tertiary text-primary p-5'>Archive</button>
                        </div>
                    </div>
                    
                ))
            }
            </div>
            </div>
        </div>
    )
}

export default NewJoinRequests