import React from 'react'
import { ImCross } from "react-icons/im";
import { Link } from 'react-router-dom';
import logo from '../../Assets/logo.png'

const Menu = ({setmenu}) => {

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
    <div className='min-w-xl flex flex-col items-start justify-evenly bg-red-400'>
        <div className='flex items-center justify-end p-4 w-full'>
            <ImCross onClick={setmenu}/>
        </div>

        <div className='flex flex-col items-center justify-start p-4 gap-4'>
        <ul className="flex flex-col items-center justify-between gap-8">
              {
                nav.map((navItem, index) => {
                  return <Link to={navItem.link}><li key={index}>{navItem.id}</li></Link>
                })
              }
            </ul>
        </div>
        
    </div>
  )
}

export default Menu