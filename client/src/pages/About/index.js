import React from 'react'
import Navbar from '../../components/Navbar'
import DrCho from './DrCho'
import OtherMember from './OtherMember'
import Footer from '../Home/Footer'
import JoinUs from './JoinUs'
function index() {
  return (
    <>
    
    <Navbar />
    <DrCho />
    <OtherMember />
    <JoinUs></JoinUs>
    <Footer />
    </>
  )
}

export default index