import React from 'react'
import Navbar from './Navbar'

const NotFound = () => {
    return (
        <>
            <Navbar />
            <div className='flex align-center justify-center items-center min-h-screen flex-col gap-5 mt-[-90px]'>
                <div className="text-3xl text-center flex justify-self-center items-center text-secondary">
                Not Found
                </div>
                <div className="text-xl font-semibold">
                    The page that you are trying to access is invalid. Please use the navigation bar to get to a valid page.
                </div>
            </div>
        </>
    )
}

export default NotFound