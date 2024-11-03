// import React from 'react'
import Navbar from '../../components/Navbar'
import Intro from './Intro'
import Research from './Research'
import Publications from './Publications'
import News from './News'
import Footer from './Footer'
function Home() {
  return (
    <>
        <Navbar/>
        <Intro />
        <Research />
        <Publications />
        <News />
        <Footer />
    </>
  )
}

export default Home
