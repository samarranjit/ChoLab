import axios from 'axios';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { allContexts } from '../../Context/AllContexts';
import Loader from '../../components/Loader';
import Footer from '../Home/Footer';
import { Helmet } from 'react-helmet-async';


const ResearchInfoPage = () => {
    const { id } = useParams();
    const [research, setResearch] = React.useState({})
    const { setShowLoading } = React.useContext(allContexts);
    useEffect(() => {
        const fetchArticle = async () => {

            try {
                setShowLoading(true);
                const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/getResearchArticle/${id}`)
                setResearch(response.data.research);
                setShowLoading(false)
            } catch (error) {

            }
        }
        fetchArticle();
    }, [id])
    return (
        <>
            <Helmet>
                <title>{research?.title
                    ? `${research.title} | Research`
                    : 'Research | The Cho Lab '}</title>
                <meta name="description" content={research?.body?.[0]
                    ? research.body[0].slice(0, 150) + '...'
                    : "Detailed information about a research project at the Cho Lab, Texas State University."} />
                <link rel="canonical" href={`https://cholab.science/research/${id}`} />
                <meta property="og:title" content={research?.title
                    ? `${research.title} | Research`
                    : 'Research | The Cho Lab '} />
                <meta property="og:description" content={research?.body?.[0]
                    ? research.body[0].slice(0, 150) + '...'
                    : "Detailed information about a research project at the Cho Lab, Texas State University."} />
                <meta property="og:type" content="article" />
                <meta property="og:url" content={`https://cholab.science/research/${id}`} />
                <meta property="og:image" content={research?.mainImage || "https://cholab.science/ChoLabLogo.png"} />
                <meta name="twitter:card" content="summary_large_image" />


                <meta name="twitter:title" content={research?.title
                    ? `${research.title} | Research`
                    : 'Research | The Cho Lab '} />
                <meta name="twitter:description" content={research?.body?.[0]
                    ? research.body[0].slice(0, 150) + '...'
                    : "Detailed information about a research project at the Cho Lab, Texas State University."} />
                <meta name="twitter:image" content={research?.mainImage || "https://cholab.science/ChoLabLogo.png"} />
            </Helmet>
            <Navbar></Navbar>
            <div className="body px-7 pt-0 pb-0 mb-0">
                {
                    (!research && research.body) ? <Loader /> :
                        <>
                            <h1 className='font-bold text-xl text-center pt-[50px] md:pt-[80px] md:text-lg sm:text-md'>
                                {research.title}
                            </h1>
                            <div className="flex align-center">
                                <img src={research.mainImage} className='p-5 w-[35%] m-auto my-5 sm:w-[100%] md:w-[60%]' alt="" />
                            </div>
                            <div className="text-md w-[100%] text-opacity-2  grid grid-cols-5 md:grid-cols-3 sm:grid-cols-1  gap-x-2 items-center justify-center align-center text-left px-[10%] md:px-2 bg-secondary text-primary p-5 ">
                                {
                                    research && (research.period !== "") &&
                                    <div className="period my-2 flex flex-col  break-all flex-wrap md:col-span-1 sm:col-span-1  ">
                                        <p className='font-semibold mr-2 mb-2 text-left'>

                                            Period:
                                        </p>
                                        <span> {` ${research.period}`} </span>
                                    </div>
                                }


                                {
                                    research && (research.sponsors !== "") &&
                                    <div className="sponsor my-2 flex flex-col  break-all flex-wrap col-span-2 md:col-span-2 sm:col-span-1 ">
                                        <p className='font-semibold mr-2  mb-2 text-left'>

                                            Sponsors:
                                        </p>
                                        <span> {` ${research.sponsors}`} </span>
                                    </div>

                                }

                                {
                                    research && (research.collaborators !== "") &&

                                    <div className="collaborators my-2 text-left flex flex-col  break-all flex-wrap col-span-2 md:col-span-3 sm:col-span-1">
                                        <p className='font-semibold mr-2  mb-2 text-left'>

                                            Collaborators:
                                        </p>
                                        <span> {` ${research.collaborators}`} </span>
                                    </div>
                                }
                            </div>
                            <div className="py-5">
                                {

                                    research && research.body && research.body.filter((item) => item.trim() !== "").map((item, index) => (

                                        <p key={index} className='py-2 sm:text-justify'>
                                            &nbsp; &nbsp; &nbsp;
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