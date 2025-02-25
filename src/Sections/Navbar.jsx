import { Link } from 'react-router-dom';
import logo from '../Assets/logo.png'
import { FaSearch } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { ImCross } from "react-icons/im";

import { useState } from 'react';
import Menu from '../Components/Navbar/Menu';
import aboutData from "../Utils/AboutData";

const Navbar = () => {

  const [menu, setmenu] = useState(false);

  const changemenu = () => {
    setmenu(!menu)
  }

  const nav = [
    {
      'id': 'Home',
      'link': '/'
    },
    {
      'id': 'About Us',
      'link': '/aboutus'
    }, {
      'id': 'Products',
      'link': '/products'
    }, {
      'id': 'Services',
      'link': '/services'
    }, {
      'id': 'Contact Us',
      'link': '/contactus'
    },
  ]

  return (
    <>

      <div className='hidden lg:flex absolute top-0 z-50 w-[100vw]'>
        <div className="flex items-center justify-between  lg:w-[70vw] lg:text-[1vw] font-medium m-auto  p-6 mt-4 text-black">
          <Link to={'/'}>
          <img className='w-[10rem]' src={logo} alt="logo"></img>
          </Link>
          <div className="flex items-center justify-between gap-10">
            <ul className="flex items-center justify-between gap-8 text-[1rem] font-bold">
              {
                nav.map((navItem, index) => {
                  return <Link to={navItem.link}><li key={index}>{navItem.id}</li></Link>
                })
              }
            </ul>
            <FaSearch className='text-black w-5 h-5' />
            <div className="relative z-0">
              <span class="absolute z-10 -top-1 -right-2 flex h-4 w-4">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span class="relative inline-flex rounded-full h-4 w-4 bg-white"></span>
              </span>
              <button className='custom-button text-[0.9rem] font-semibold'>Get a Quota</button>
            </div>
          </div>

        </div>
      </div>


      <div className='absolute lg:hidden top-0 z-50 w-[100vw] flex items-center justify-between p-4'>
        <img className='max-w-[7rem]' src={logo} alt="logo"></img>
        {
          menu ?
            <div className='w-[100vw] h-[100vh] fixed top-0 right-0 flex flex-col gap-4 bg-white text-black'>
              <div className='flex items-center justify-between p-8 w-full'>
              <img className='w-[7rem]' src={logo} alt="logo"></img>
                <ImCross className='text-black text-[1.5rem] ' onClick={changemenu} />
              </div>

              <div className='h-full flex flex-col items-end p-8 gap-8'>
                <ul className="w-full  flex flex-col items-end justify-between p-4 gap-8 text-sec-head">
                  {
                    nav.map((navItem, index) => {
                      return <Link to={navItem.link}><li key={index} onClick={changemenu} >{navItem.id}</li></Link>
                    })
                  }
                </ul>
                {/* <FaSearch className='text-white w-5 h-5' /> */}
                <div className="relative z-0">
                  <span class="absolute z-10 -top-1 -right-2 flex h-4 w-4">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-4 w-4 bg-white"></span>
                  </span>
                  <button className='custom-button text-[0.9rem] font-semibold'>Get a Quota</button>
                </div>
                <div className="absolute opacity-[0.15] z-[20] left-[0] blur-[10px] w-[15rem] h-[15rem] rounded-t-[50%] rounded-br-[50%] bg-gradient-to-tr from-primaryColor"></div>
              </div>

            </div>
            :
            <TiThMenu className='text-black text-[2rem] ' onClick={changemenu} />

        }

      </div>

    </>
  )
}

export default Navbar;