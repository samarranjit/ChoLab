import React from 'react';
import { useEffect } from 'react';
import { allContexts } from '../../Context/AllContexts';
import axiosInstance from '../../axios/axiosInstance';

const AdminOpportunities = () => {
    // const [displayAnnouncement, setDisplayAnnouncement] = React.useState();
    const {Data, setShowLoading} = React.useContext(allContexts)
    // console.log("Display Announcement: ", displayAnnouncement);
    const [announcement, setAnnouncement] = React.useState({
        announcementStatus : null,
        title:"",
        body :"",
        link : ""
    });


    const toggleDisplayAnnouncement = async()=>{
        // console.log(typeof(announcementStatus));

        setAnnouncement(prev=>({
            ...prev,
            announcementStatus: !(announcement.announcementStatus)
        }))
        

    }

    const loadAnnouncement = async () => {
        if (Data && Data.opporutunitiesAnnouncement && Data.opporutunitiesAnnouncement.length > 0) {
            const announcementData = Data.opporutunitiesAnnouncement[0]; // Extract announcement data
            setAnnouncement(announcementData); // Set the announcement state
            console.log("Announcement loaded", announcementData); // Log the loaded announcement
        }
    };

    const handleInputChange = (e)=>{
        const {name, value} = e.target;

        setAnnouncement(prev=>({
            ...prev,
            [name]: value
        }))
        console.log(announcement)



    }

    const handleSubmit = async() =>{
        try {
            setShowLoading(true);
            const response =await axiosInstance.post(`${process.env.REACT_APP_API_BASE_URL}/api/admin/adminOpportunities/updateAnnouncement`, announcement)
            console.log("Response" , response.data);
            if (response.data.success) {
                alert(response.data.message);
                console.log("Changed");
                // Optionally: refresh data
            }
            else{
                console.log("Unable to change")
            }
        } catch (error) {
            console.error("Error:", error);
            setShowLoading(false);
        }
    }

    useEffect(() => { 
        
        // Data && Data.opporutunitiesAnnouncement  && setDisplayAnnouncement(Number(Data.opporutunitiesAnnouncement[0].announcementStatus)); // Store as 0 or 1
        loadAnnouncement()
    }, [Data])
    

    return (
        <div>
            <h2 className="text-xl">Edit the Announcements:</h2>
            <form action="" className='gap-5'>
                <div className="flex gap-5 my-5">

                    <h2>Display Announcements?</h2>
                    <input type="checkbox" name="" id=""  checked={( announcement.announcementStatus)} className='font-2xl' onClick={() => toggleDisplayAnnouncement()} />
                </div>

                {
                    announcement && announcement.announcementStatus &&
                    <div className="flex flex-col announcement bg-secondary text-primary p-5 gap-5">
                        <div className="flex flex-col header gap-5">
                            <h2>Header :</h2>
                            <input type="text" name='title' value={announcement.title} onChange={handleInputChange} className='bg-primary w-full h-[2rem] text-secondary p-2' />
                        </div>
                        <div className="flex flex-col header gap-5">
                            <h2>Text :</h2>
                            <textarea rows={5} name='body' value={announcement.body} onChange={handleInputChange} className='bg-primary w-full  text-secondary p-2' />
                        </div>
                        <div className="flex flex-col header gap-5">
                            <h2>Link :</h2>
                            <input type="text" name='link' value={announcement.link} onChange={handleInputChange} className='bg-primary w-full h-[2rem] text-secondary p-2' />
                        </div>
                    </div>
                }
                        <div className="flex flex-col header gap-5 my-5">
                            <button className='bg-tertiary mx-5  text-primary p-2 hover:text-primary hover:bg-secondary hover:border-2 hover:border-primary hover:border-b-[5px]' onClick={()=>handleSubmit()}> Submit</button>
                        </div>
            </form>
        </div>
    )
}

export default AdminOpportunities