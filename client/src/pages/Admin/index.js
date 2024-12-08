import React from 'react'
// import Navbar from '../../components/Navbar'
import AdminIntro from './AdminIntro'
import AdminAbout from './AdminAbout'
import AdminNews from './AdminNews'
import AdminPublication from './AdminPublication'
import axiosInstance from '../../axios/axiosInstance'
import { useNavigate } from 'react-router-dom'
import AdminResearch from './AdminResearch'
import AdminOpportunities from './AdminOpportunities'

function Admin() {
    const [toggleState, setToggleState] = React.useState('Intro')
    const navigate = useNavigate();

    // useEffect(() => {
    //   if(!localStorage.getItem('token')){
    //     window.location.href = '/admin-login'
    //   }
    // }, [])

    const logoutUser = async () => {
        try {
            await axiosInstance.get(`${process.env.REACT_APP_API_BASE_URL}/api/user/logout`);
            alert("Logged Out Successful!");
            navigate("/admin-login");
        } catch (error) {
            alert(error.message)
        }
    }


    return (
        <>
            <div>
                <div className="container">
                    <h1 className='text-2xl p-4 flex gap-5 justify-center items-center  text-center '>
                        <section>
                            Cho Lab -
                        </section>
                        <section className='text-tertiary'>
                            Admin Panel
                        </section>
                    </h1>

                    <div className="tab grid grid-cols-8 gap-[3px] p-1 bg-[#f9f9f9] text-center  transition duration-200">
                        <div className={`intro  cursor-pointer p-2 border-[#3395f1] ${(toggleState === "Intro") ? "border-b-[2.5px]" : ""} transition duration-500`} onClick={() => setToggleState('Intro')}>Intro</div>
                        <div className={`intro  cursor-pointer p-2 border-[#3395f1] ${(toggleState === "About") ? "border-b-[2.5px] border-b-w-[50%]" : ""} transition duration-500`} onClick={() => setToggleState('About')}>About</div>
                        <div className={`intro  cursor-pointer p-2 border-[#3395f1] ${(toggleState === "News") ? "border-b-[2.5px]" : ""} transition duration-500`} onClick={() => setToggleState('News')}>News</div>
                        <div className={`intro  cursor-pointer p-2 border-[#3395f1] ${(toggleState === "Publication") ? "border-b-[2.5px] border-b-w-[50%]" : ""} transition duration-500`} onClick={() => setToggleState('Publication')}>Publication</div>
                        <div className={`intro  cursor-pointer p-2 border-[#3395f1] ${(toggleState === "Research") ? "border-b-[2.5px] border-b-w-[50%]" : ""} transition duration-500`} onClick={() => setToggleState('Research')}>Research</div>
                        <div className={`intro  cursor-pointer p-2 border-[#3395f1] ${(toggleState === "Opportunities") ? "border-b-[2.5px] border-b-w-[50%]" : ""} transition duration-500`} onClick={() => setToggleState('Opportunities')}>Opportunities</div>
                        <div className={`intro  cursor-pointer p-2 border-[#3395f1] transition duration-500`}
                            onClick={logoutUser}>Logout</div>
                    </div>
                    <div className="edit-box p-10 w-full h-screen">
                        {
                            (toggleState === "Intro") ? <AdminIntro /> : ""

                        }
                        {
                            (toggleState === "About") ? <AdminAbout /> : ""
                        }
                        {
                            (toggleState === "News") ? <AdminNews /> : ""
                        }

                        {
                            (toggleState === "Publication") ? <AdminPublication /> : ""
                        }
                        {
                            (toggleState === "Research") ? <AdminResearch /> : ""
                        }
                        {
                            (toggleState === "Opportunities") ? <AdminOpportunities /> : ""
                        }

                    </div>

                </div>
            </div>
        </>
    )
}

export default Admin