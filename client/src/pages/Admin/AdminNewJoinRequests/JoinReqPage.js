import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../../../components/Navbar';
import axiosInstance from '../../../axios/axiosInstance';

function JoinReqPage() {
    const {id}=useParams();
    const [request, setRequest] = useState({})
    useEffect( () => {
        const fetchReq = async()=>{

            try {
                // setShowLoading(true)
                const response = await axiosInstance.get(`${process.env.REACT_APP_API_BASE_URL}/api/admin-newMemberRequests/${id}`)
                // setShowLoading(false)
                console.log(response.data.joinReq.resumePath)
                setRequest(response.data.joinReq)
            } catch (error) {
                
            }
        }
        fetchReq();
    }, [id] )
  return (
    <div>
        <Navbar></Navbar>
        <div className="p-8">

        <h2 className='text-center text-2xl p-5'>Request</h2>
        <div className="details grid grid-cols-1 gap-5 ">
            <div className="name">
                Name : <section className='font-semibold inline'>
                    
                     {request.fName} {request.lName}
                    </section>
            </div>
            <div className="email">
                Email : <section className='font-semibold inline'>
                    <a href={`mailto:${request.email}`}>

                     {request.email}
                    </a>
                    
                    </section>
            </div>
            <div className="contact">
                Contact : <section className='font-semibold inline'>
                    
                     {request.contact}
                    </section>
            </div>
            <div className="linkedin">
                Linkedin : <section className='font-semibold inline'>
                    
                     {request.linkedin}
                    </section>
            </div>
            <div className="expertise">
                Expertise : <section className='font-semibold inline'>
                    
                     {request.expertise}
                    </section>
            </div>
            <div className="resume  flex flex-col">
                Resume : <section className='font-semibold my-5'>
                    <a href={request.resumePath} target='_blank'>
                    <img src={request.resumePath} alt="" className='border-[2px]  inline border-gray-200 h-[500px]'/>

                    </a>
                    </section>
            </div>

        </div>
        </div>
    </div>
  )
}

export default JoinReqPage