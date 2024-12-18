import React from 'react'
import { Link } from 'react-router-dom'
import { allContexts } from '../../Context/AllContexts'

const VacancyAnnouncement = (props) => {
    const { Data } = props;
    console.log(Data)

    return (
        <div className='py-7 px-[4rem]'>
            <div className="min-h-screen flex flex-col justify-center items-center">
                <h2 className="text-tertiary text-2xl sm:text-xl md:text-3xl text-center pb-7">
                    Join our Team :
                </h2>

                <div className="announcement text-left w-full">
                    {/* <h2 className="text-tertiary font-semibold text-xl text-center">Announcement:</h2> */}
                    <p className=" heading font-semibold py-2 text-lg">{Data.title}</p>

                    <p
                        className=""
                        dangerouslySetInnerHTML={{
                            __html: Data.body.replace(/\n/g, "<br>"),
                        }}
                    ></p>


                    {/* <p className=" ">{Data.body}</p> */}
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
                    className="w-full h-fit overflow-scroll"
                    style={{ minHeight: "0", flex: "1", scrollbarWidth: "0" }}
                >
                    Loading…
                </iframe>
            </div>


        </div>
    )
}

export default VacancyAnnouncement