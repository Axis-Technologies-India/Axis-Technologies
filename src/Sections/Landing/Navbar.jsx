import logo from '../../Assets/logo.png'
import { FaSearch } from "react-icons/fa";

const Navbar = () => {

  const nav = ['Home', 'About Us', 'Products', 'Services', 'Contact Us']
  return (
    <div className='absolute top-0 w-[100vw]'>
      <div className="custom-flex-between lg:w-[70vw] lg:text-[1vw] font-medium m-auto  p-6 mt-4 text-white">
        <img className='w-[12vw]' src={logo} alt="logo"></img>

        <div className="custom-flex-between gap-10">
          <ul className="custom-flex-between gap-8">
            {
              nav.map((navItem, index) => {
                return <li key={index}>{navItem}</li>
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
  )
}

export default Navbar;