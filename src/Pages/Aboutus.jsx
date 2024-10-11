import React from 'react'
import AboutusComp from './PagesComponent/Aboutus/AboutusComp'

const Aboutus = () => {
  return (
    <div className=''>
        <div className={`w-[100dvw] h-[40dvh] lg:h-[50dvh] bg-custom-image1 bg-center bg-cover overflow-hidden overflow-y-hidden relative flex flex-col items-center justify-center`}>
            <h1 className='text-head text-white'>ABOUT US</h1>
      <div className="w-full h-full absolute z-10 bg-gradient-to-t from-primaryColor  via-transparent to-transparent bottom-0 opacity-30"></div>
    </div>
    <AboutusComp/>
    </div>
  )
}

export default Aboutus