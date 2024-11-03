import React from 'react'
function Loader() {
  return (
    <div className='h-screen bg-[#a9a9a9] flex flex-col items-center justify-center fixed inset-0 z-[10000] loaderBody'>
        <lottie-player src="https://lottie.host/b6ff79b5-259f-4aab-802e-9a659ae175c2/80otmIpqfk.json" background="transparent"  speed="1"  style={{width:"200px", height: "200px"}} loop  autoplay></lottie-player>
        <div className="text flex">

        <h1 className='flex text-4xl loader-text-1'>Cho </h1>
        <h1 className='flex text-4xl loader-text-2'> Lab </h1>
        </div>

    </div>
  )
}

export default Loader