import axios from 'axios';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { allContexts } from '../../Context/AllContexts';
import Loader from '../../components/Loader';
import Footer from '../Home/Footer';

const ResearchInfoPage = () => {
    const { id } = useParams();
    const [research, setResearch] = React.useState({})
    const { setShowLoading } = React.useContext(allContexts);
    useEffect(() => {
        const fetchArticle = async () => {

            try {
                setShowLoading(true)
                const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/getResearchArticle/${id}`)
                setShowLoading(false)
                setResearch(response.data.research)
            } catch (error) {

            }
        }
        fetchArticle();
    }, [id])
    return (
        <>
            <Navbar></Navbar>
            <div className="body p-7">
                {
                    (!research && research.body )? <Loader /> :
                        <>
                            <h1 className='font-bold text-2xl text-center'>
                                {research.title}
                            </h1>
                            <div className="flex align-center">
                                <img src={research.mainImage} className='p-5 w-[50%] m-auto my-5' alt="" />
                            </div>
                            <div className="">
                                {

                                    research && research.body && research.body.map((item, index)=>(
                                        <p key={index} className=' p-5'>
                                            {item}
                                        </p>
                                    ))
                                }
                            </div>
                        </>
                }
            </div>
            <Footer></Footer>
        </>
    )
}

export default ResearchInfoPage