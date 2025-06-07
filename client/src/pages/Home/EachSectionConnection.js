import React from 'react'
import { Link } from 'react-router-dom'

const EachSectionConnection = () => {
    return (
        <div className='h-full p-7 py-[5rem] bg-secondary grid grid-cols-3 gap-[1rem] relative sm:grid-cols-1 '>
            <div className="custom-shape-divider-top-1730584481 sm:translate-y-10 sm:rotate-180">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
                    <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
                    <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
                </svg>
            </div>
            <div className='flex flex-col items-center justify-center '>
                <h2 className="text-3xl font-semibold text-center text-tertiary my-3 ">
                    Our Team
                </h2>
                <div className="h-[1.5px] bg-tertiary my-5"></div>
                <div className="text-primary text-lg leading-9 text-center ">
                    Members of the Cho Lab share a passion for advancing our understanding of hydrology and water resources in a changing climate, aiming to promote a sustainable environment by addressing critical questions.
                </div>
                <Link to="/about">
                    <div className="btn border-tertiary border-2 rounded-full border-b-4 text-lg text-primary my-7 text-center w-fit px-7 py-5 hover:bg-tertiary hover:text-primary duration-500">Our Team</div>
                </Link>
            </div>
            <div className='flex flex-col items-center justify-center '>
                <h2 className="text-3xl font-semibold text-center text-tertiary my-3 ">
                    Our Publications
                </h2>
                <div className="h-[1.5px] bg-tertiary my-5"></div>
                <div className="text-primary text-lg leading-9 text-center">
                    One of the best ways to grasp the scope of our work is to explore our research and previous findings. Here, you can browse our peer-reviewed publications and learn about the studies we have in progress.
                </div>
                <Link to={'/publication'}>
                    <div className="btn border-tertiary border-2 rounded-full border-b-4 text-lg text-primary my-7 text-center w-fit px-7 py-5 hover:bg-tertiary hover:text-primary duration-500">
                        Our Publication
                    </div>
                </Link>
            </div>
            <div className='flex flex-col items-center justify-center '>
                <h2 className="text-3xl font-semibold text-center text-tertiary my-3 ">
                    Join the Team
                </h2>
                <div className="h-[1.5px] bg-tertiary my-5"></div>
                <div className="text-primary text-lg leading-9 text-center">
                    We are building a dynamic team with diverse expertise and a shared passion for utilizing innovative tools and data sets to address critical challenges in water, climate, and environmental systems. Discover available positions in our lab here.
                </div>
                <Link to={'/opportunities'} >
                    <div className="btn border-tertiary border-2 rounded-full border-b-4 text-lg text-primary my-7 text-center w-fit px-7 py-5 hover:bg-tertiary hover:text-primary duration-500">
                        Opportunities
                    </div>
                </Link>
            </div>

        </div>
    )
}

export default EachSectionConnection