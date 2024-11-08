import React, {useEffect} from 'react'
import Navbar from '../../components/Navbar'
import AdminIntro from './AdminIntro'
import AdminAbout from './AdminAbout'
import AdminNews from './AdminNews'
import AdminPublication from './AdminPublication'

function Admin() {
    const [toggleState, setToggleState] = React.useState('Intro')


    useEffect(() => {
      if(!localStorage.getItem('token')){
        window.location.href = '/admin-login'
      }
    }, [])
    

    return (
        <>
        <div>
            <Navbar />
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
                    <div className={`intro  cursor-pointer p-2 border-[#3395f1] ${ (toggleState === "Intro") ? "border-b-[2.5px]" : ""} transition duration-500`} onClick={() => setToggleState('Intro')}>Intro</div>
                    <div className={`intro  cursor-pointer p-2 border-[#3395f1] ${ (toggleState === "About") ? "border-b-[2.5px] border-b-w-[50%]" : ""} transition duration-500`} onClick={() => setToggleState('About')}>About</div>
                    <div className={`intro  cursor-pointer p-2 border-[#3395f1] ${ (toggleState === "News") ? "border-b-[2.5px]" : ""} transition duration-500`} onClick={() => setToggleState('News')}>News</div>
                    <div className={`intro  cursor-pointer p-2 border-[#3395f1] ${ (toggleState === "Publication") ? "border-b-[2.5px] border-b-w-[50%]" : ""} transition duration-500`} onClick={() => setToggleState('Publication')}>Publication</div>
                    <div className={`intro  cursor-pointer p-2 border-[#3395f1] transition duration-500`} 
                            onClick={() => {
                                localStorage.removeItem("token");
                                window.location.href = "/admin-login"
                                }}>Logout</div>
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

                </div>

            </div>
        </div>
            </>
    )
}

export default Admin