import React from 'react'
import { Link } from 'react-router-dom'
import { allContexts } from '../../Context/AllContexts'
import DOMPurify from 'dompurify';

const VacancyAnnouncement = (props) => {
    const { Data } = props;
    console.log(Data)

    const sanitizedBody = Data? DOMPurify.sanitize(Data.body) : "";


    return (
        <div className='py-7 px-[4rem] sm:px-5'>
            <div className="min-h-screen flex flex-col justify-center items-center">
                <h2 className="text-tertiary text-2xl sm:text-xl md:text-3xl text-center pb-7">
                    Join our Team :
                </h2>

                <div className="announcement text-left w-full">
                    {/* <h2 className="text-tertiary font-semibold text-xl text-center">Announcement:</h2> */}
                    <p className=" heading font-semibold py-5 text-lg">{Data.title}</p>
                    <p className=" " dangerouslySetInnerHTML={{__html: sanitizedBody }}></p>
                    <div className="flex text-primary my-5">
                        <Link to={Data.link} >
                            <button className='bg-tertiary px-5 py-2'>More info</button>
                        </Link>
                    </div>
                </div>

                <iframe
                    title='googleForm'
                    src="https://docs.google.com/forms/d/e/1FAIpQLSfQrUXr6XuXEI8NLJYg4gU6UBsqndHmBcFtmYGsi_VxD5_mzw/viewform?embedded=true"
                    frameborder="0"
                    marginheight="0"
                    marginwidth="0"
                    height={"100vh"}
                    className="w-full h-fit overflow-scroll"
                    style={{ minHeight: "50vh", flex: "1", scrollbarWidth: "0" }}
                >
                    Loading…
                </iframe>
            </div>


        </div>
    )
}

export default VacancyAnnouncement