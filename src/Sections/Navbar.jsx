import { Link } from 'react-router-dom';
import logo from '../Assets/logo.png'
import { FaSearch } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { ImCross } from "react-icons/im";

import { useState } from 'react';
import Menu from '../Components/Navbar/Menu';

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
      'id': 'Contactus',
      'link': '/contactus'
    },
  ]

  return (
    <>

      <div className='hidden lg:flex absolute top-0 z-20 w-[100vw]'>
        <div className="flex items-center justify-between  lg:w-[70vw] lg:text-[1vw] font-medium m-auto  p-6 mt-4 text-white">
          <img className='w-[12vw]' src={logo} alt="logo"></img>

          <div className="flex items-center justify-between gap-10">
            <ul className="flex items-center justify-between gap-8">
              {
                nav.map((navItem, index) => {
                  return <Link to={navItem.link}><li key={index}>{navItem.id}</li></Link>
                })
              }
            </ul>
            <FaSearch className='text-white w-5 h-5' />
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


      <div className='absolute lg:hidden top-0 z-20 w-[100vw] flex items-center justify-between p-4'>
        <img className='w-[40vw]' src={logo} alt="logo"></img>
        {
          menu ?
            <div className='w-[100vw] h-[100vh] fixed top-0 right-0 flex flex-col gap-4 bg-black text-white'>
              <div className='flex items-center justify-between p-8 w-full'>
              <img className='w-[35vw]' src={logo} alt="logo"></img>

                <ImCross onClick={changemenu} />
              </div>

              <div className='h-full flex flex-col items-end p-8 gap-8'>
                <ul className="w-full  flex flex-col items-end justify-between p-4 gap-8 text-head">
                  {
                    nav.map((navItem, index) => {
                      return <Link to={navItem.link}><li key={index}>{navItem.id}</li></Link>
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

              </div>

            </div>
            :
            <TiThMenu className='text-white text-[8vw] ' onClick={changemenu} />

        }

      </div>

    </>
  )
}

export default Navbar;