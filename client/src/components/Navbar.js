import React from 'react'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";


function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="bg-[#007C92] flex items-center justify-between py-4 h-[70px] shadow-md sm:hidden px-7">
        {/* Logo Section */}
        <div className="flex items-center h-full space-x-5">
          <img src={`${process.env.PUBLIC_URL}/txst-primary.png`} className="h-[200%] cursor-pointer" alt="TXST Logo" />
          <Link to="/" className="ml-4">
            <h2 className="text-primary text-2xl font-bold cursor-pointer">Cho Lab</h2>
          </Link>
        </div>

        {/* Nav Links */}
        <div className="nav-link text-xl text-primary flex font-open space-x-8">
          {/* <Link to="/" className="hover:text-tertiary transition duration-200">Home</Link> */}
          <Link to="/about" className="hover:text-tertiary transition duration-200">People</Link>
          <Link to="/research" className="hover:text-tertiary transition duration-200">Research</Link>
          <Link to="/news" className="hover:text-tertiary transition duration-200">News</Link>
          <Link to="/publication" className="hover:text-tertiary transition duration-200">Publication</Link>
          <Link to="/opportunities" className="hover:text-tertiary transition duration-200">Opportunities</Link>
        </div>
      </div>


      <div className='hidden sm:inline z-[100] fixed w-[100vw] transition duration-300'>
        <div className="navbar-phone p-5 bg-[#007C92] flex flex-column justify-between h-[70px] align-middle lg:hidden sm:flex ">

          <Link to="/">
            <h2 className='text-primary text-xl font-semibold ml-4 align-middle cursor-pointer'>Cho Lab</h2>
          </Link>
          {
            isOpen ?
              <RxCross1 onClick={toggleMenu} className='text-primary border-[0.5px] p-1 rounded-[50%] font-semibold text-2xl border-primary' />
              :
              <GiHamburgerMenu onClick={toggleMenu} className='text-primary border-[0.5px] p-1 rounded-[50%] font-semibold text-2xl border-primary' />
          }
        </div>

        {
          isOpen &&
          <div className="bg-[#007C92] flex w-[100vw] border-y-[3px] border-tertiary flex-col gap-5 fixed text-center justify-center items-center p-5 nav-link text-xl text-primary flex font-open  transition duration-300">
            <Link to="/" className='px-4 hover:text-tertiary duration-300'>
              <section>Home</section>
            </Link>
            <Link to="/about" className='px-4  hover:text-tertiary duration-300 '>
              <section>About</section>
            </Link>
            <Link to="/news" className='px-4  hover:text-tertiary duration-300'>
              <section>News</section>
            </Link>
            <Link to="/publication" className='px-4  hover:text-tertiary duration-300'>
              <section>Publication</section>
            </Link>

            <Link to="/Research" className='px-4  hover:text-tertiary duration-300'>
              <section>Research</section>
            </Link>
          </div>
        }
      </div>

    </>
  )
}

export default Navbar